"use client";  // This ensures the whole page is rendered as a client component

import Upload from "@/components/ui/upload";
import Accordion from '@/components/ui/accordion';


export default function Main() {
  return (
    <div className="flex flex-col items-center m-5 p-5">
      <div className="text-3xl font-bold">Resume Biulder</div>
      <Upload />
      <Accordion>
      </Accordion>
    </div>
  );
}