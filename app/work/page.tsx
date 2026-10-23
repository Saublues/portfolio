"use client";

import { useRouter } from "next/navigation";
import { WorkDrawerOverlay } from "@/components/WorkDrawerOverlay";

export default function WorkPage() {
  const router = useRouter();

  return (
    <WorkDrawerOverlay
      isOpen={true}
      onClose={() => router.push("/")}
    />
  );
}
