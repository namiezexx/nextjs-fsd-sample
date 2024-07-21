"use client";

import { useEffect, useState } from "react";
import { ApiResponse } from "@/shared/model/types";
import { MainContentsResponse } from "../model/model";

export default function PrivateContents() {
  const [data, setData] = useState<MainContentsResponse[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/nextjs/main/private")
      .then((res) => res.json())
      .then((data: ApiResponse<MainContentsResponse[]>) => setData(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* Render your data here */}
      {data?.map((content) => (
        <div key={content.contentsId}>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
      ))}
    </div>
  );
}
