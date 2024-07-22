"use client";

import { useEffect, useState } from "react";
import { ApiResponse } from "@/shared/model/types";
import { MainContentsResponse, MainPrivateResponse } from "../model/model";
import { API_ENDPOINTS } from "../api/endpoints";

import Image from "next/image";

export default function PrivateContents() {
  const [data, setData] = useState<MainPrivateResponse[] | null>(null);

  useEffect(() => {
    fetch(API_ENDPOINTS.MAIN.PRIVATE.path, {
      method: API_ENDPOINTS.MAIN.PRIVATE.method,
      next: {
        revalidate: 10,
      },
    })
      .then((res) => res.json())
      .then((data: ApiResponse<MainPrivateResponse[]>) => setData(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col gap-8 m-5">
      {/* Render your data here */}
      {data?.map((content) => (
        <div className="flex rounded-[12px] border-2 p-4">
          <Image
            src={`/images/image-${content.privateId}.jpg`}
            alt="image"
            width={120}
            height={120}
          ></Image>
          <div className="flex flex-col mx-4">
            <div className="text-xl text-gray-500">{content.title}</div>
            <div className="text-sm mt-4">{content.description}</div>
            <div className="flex mt-auto justify-between">
              <div className="text-sm">조회수 {content.viewCount}</div>
              <div className="text-sm">좋아요 {content.likeCount}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
