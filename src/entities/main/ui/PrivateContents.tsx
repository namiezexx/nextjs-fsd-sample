"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { MainPrivateResponse } from "@/entities/main/model/model";
import { API_ENDPOINTS } from "@/entities/main/api/endpoints";

import { AuthContext } from "@/shared/context/AuthContext";
import { fetcher } from "@/shared/api/fetcher";
import Link from "next/link";

export default function PrivateContents() {
  const { loggedIn } = useContext(AuthContext);
  const [data, setData] = useState<MainPrivateResponse[] | null>(null);

  useEffect(() => {
    async function fetchPrivateContents() {
      const { data } = await fetcher<MainPrivateResponse[]>(
        API_ENDPOINTS.MAIN.PRIVATE
      );
      setData(data);
    }
    fetchPrivateContents();
  }, [loggedIn]);

  return (
    <>
      {loggedIn === false ? (
        <div className="flex flex-col m-5 rounded-[12px] border-2">
          <div>로그인하시고 다양한 정보를 찾아보세요!</div>
          <div>로그인 바로가기</div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 m-5">
          {data?.map((content) => (
            <Link href={`/product/${content.privateId}`}>
              <div className="flex rounded-[12px] border-2 p-4 lg:hover:scale-110 transition-transform ease-in-out duration-500">
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
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
