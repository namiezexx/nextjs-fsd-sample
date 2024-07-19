import { fetchMainBanner, fetchMainContents } from "@/entity/main/api/api";
import MainBanner from "@/entity/main/ui/MainBanner";
import MainContents from "@/entity/main/ui/MainContents";

export default async function Main() {
  const [mainContentsResponse, mainBannerResponse] = await Promise.all([
    fetchMainContents(),
    fetchMainBanner(),
  ]);

  return (
    <>
      <MainContents data={mainContentsResponse} />
      <MainBanner data={mainBannerResponse} />
    </>
  );
}
