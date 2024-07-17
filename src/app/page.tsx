import { redirect, RedirectType } from "next/navigation";

export default function Home() {
  return (
    redirect("/main", RedirectType.replace)
  );
}
