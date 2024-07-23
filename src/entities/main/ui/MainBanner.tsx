import Image from "next/image";
import { MainBannerResponse } from "../model/model";
import { API_ENDPOINTS } from "../api/endpoints";
import { fetcher } from "@/shared/api/fetcher";

export default async function MainBanner() {
  const { data } = await fetcher<MainBannerResponse[]>(
    API_ENDPOINTS.MAIN.BANNER
  );

  return (
    <div className="flex overflow-x-auto pb-4 scrollbar-hide">
      {data.map((banner: MainBannerResponse, index: number) => (
        <Image
          key={index}
          src={`/images/banner-${banner.bannerId}.png`}
          width={400}
          height={100}
          alt={`banner-${banner.bannerId}`}
          className="px-4"
        />
      ))}
    </div>
  );
}
