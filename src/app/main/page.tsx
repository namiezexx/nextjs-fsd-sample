import { Header } from "@/widgets/top/ui/Header";
import { BottomNavigation } from "@/widgets/bottom/navigation/ui/BottomNavigation";

import MainContents from "@/entities/main/ui/MainContents";
import MainBanner from "@/entities/main/ui/MainBanner";
import PrivateContents from "@/entities/main/ui/PrivateContents";
import { ComponentErrorBoundary } from "@/widgets/error/ComponentErrorBounday";

export default async function Main() {
  return (
    <div className="flex flex-col">
      <Header />
      <ComponentErrorBoundary>
        <MainContents />
      </ComponentErrorBoundary>
      <ComponentErrorBoundary>
        <MainBanner />
      </ComponentErrorBoundary>
      <PrivateContents />
      <BottomNavigation />
    </div>
  );
}
