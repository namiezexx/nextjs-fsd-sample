import Image from "next/image";
import { fetchMainBanner } from "../api/fetcher";
import { MainBannerResponse } from "../model/model";
import { ApiResponse } from "@/shared/model/types";

export default async function MainBanner() {
  const { data } = await fetchMainBanner();

  return (
    <div className="m-5 flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
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
