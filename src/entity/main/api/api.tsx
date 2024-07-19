import { serverFetch } from "@/lib/serverFetch";
import { API_ENDPOINTS } from "../constants/ApiEndpoints";

export async function fetchMainContents(): Promise<MainContentsResponse> {
  return await serverFetch(API_ENDPOINTS.MAIN.CONTENTS);
}

export async function fetchMainBanner(): Promise<MainBannerResponse> {
  return await serverFetch(API_ENDPOINTS.MAIN.BANNER);
}
