import { Button } from "@/shared/ui/button";
import Link from "next/link";

export default async function Product() {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1>product page</h1>
      <Link href="/">
        <Button variant="outline">상세 보기</Button>
      </Link>
    </div>
  );
}
