import Image from "next/image";

export default function MainBanner({ data }: { data: MainBannerResponse }) {
  return (
    <div className="m-5 flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
      {data.data.map((obj, index) => (
        <Image
          key={index}
          src={`/images/banner-${obj.bannerId}.png`}
          width={400}
          height={100}
          alt={`banner-${obj.bannerId}`}
          className="px-4"
        />
      ))}
    </div>
  );
}
