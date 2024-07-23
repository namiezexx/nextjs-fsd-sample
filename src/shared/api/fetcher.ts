import { ApiResponse } from "@/shared/model/types";
import { customFetch } from "@/shared/api/customFetch";

export const fetcher = async <T>({
  method,
  path,
  revalidate = 0,
}: {
  method: string;
  path: string;
  revalidate: number;
}): Promise<ApiResponse<T>> => {
  const res = await fetch("http://localhost:8080" + path, {
    method: method,
    next: {
      revalidate: revalidate,
    },
  });

  const resJson = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to fetch data`);
  }

  return resJson;
};
