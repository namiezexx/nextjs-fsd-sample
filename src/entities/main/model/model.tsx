export interface MainContentsResponse {
  contentsId: string;
  title: string;
  description: string;
}

export interface MainBannerResponse {
  bannerId: string;
  title: string;
}

export interface MainPrivateResponse {
  privateId: string;
  title: string;
  description: string;
  viewCount: number;
  likeCount: number;
}
