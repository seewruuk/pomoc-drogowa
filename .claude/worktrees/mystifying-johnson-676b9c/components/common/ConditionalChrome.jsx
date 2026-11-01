"use client";

import { usePathname } from "next/navigation";
import MenuLayout from "@/components/common/Menu/_MenuLayout";
import FooterLayout from "@/components/common/Footer/FooterLayout";

export default function ConditionalChrome({ children }) {
  const pathname = usePathname();
  const isRedesign = pathname?.startsWith("/redesign");

  return (
    <>
      {!isRedesign && <MenuLayout />}
      {children}
      {!isRedesign && <FooterLayout />}
    </>
  );
}
