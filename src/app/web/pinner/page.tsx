"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PinnerPage = () => {
  const router = useRouter();

  useEffect(() => {}, []);

  return <section className="flex flex-col max-w-[560px] px-3">
    <h1>PinnerPage</h1>
  </section>;
};

export default PinnerPage;
