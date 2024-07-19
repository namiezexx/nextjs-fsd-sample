type MainContents = {
  contentsId: string;
  title: string;
  description: string;
};

type MainBanner = {
  bannerId: string;
  title: string;
};

type MainContentsResponse = ApiResponse<MainContents[]>;
type MainBannerResponse = ApiResponse<MainBanner[]>;
