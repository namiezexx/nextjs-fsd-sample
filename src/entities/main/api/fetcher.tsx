import { serverFetch } from "@/shared/api/serverFetch";
import { API_ENDPOINTS } from "./endpoints";
import { ApiResponse } from "@/shared/model/types";
import { MainContentsResponse, MainBannerResponse } from "../model/model";

export async function fetchMainContents(): Promise<
  ApiResponse<MainContentsResponse[]>
> {
  return await serverFetch(API_ENDPOINTS.MAIN.CONTENTS);
}

export async function fetchMainBanner(): Promise<
  ApiResponse<MainBannerResponse[]>
> {
  return await serverFetch(API_ENDPOINTS.MAIN.BANNER);
}
