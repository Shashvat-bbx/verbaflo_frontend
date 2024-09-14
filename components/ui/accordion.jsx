
"use client";
import { useState } from "react";

export default function Accordion() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 font-mono">
      
      <div className="border-t border-b divide-y">
        {/* Accordion Item 1 */}
        <div>
          <button
            onClick={() => toggleItem(1)}
            className="flex justify-between w-full py-4 text-lg font-medium text-left px-2"
          >
            How does this work?
            <span>{openItem === 1 ? '-' : '+'}</span>
          </button>
          {openItem === 1 && (
            <div className="text-white text-center py-4">
              Upload your LinkedIn profile as a PDF along with your OpenAI API key, and then click on "Upload." 
              After a short wait, you will see a button to download your resume as an HTML file, 
              which you can open directly on your device.
            </div>
          )}
        </div>

        {/* Accordion Item 2 */}
        <div>
          <button
            onClick={() => toggleItem(2)}
            className="flex justify-between w-full py-4 text-lg font-medium text-left px-2"
          >
            NOTE
            <span>{openItem === 2 ? '-' : '+'}</span>
          </button>
          {openItem === 2 && (
            <div className="text-white text-center py-4">
              Please input the OpenAI API key correctly. The model being used under the hood is "gpt-4o-2024-08-06." 
              Ensure that your API key has access to this model and is enabled for use.
            </div>
          )}
        </div>

        {/* Accordion Item 3 */}
        <div>
          <button
            onClick={() => toggleItem(3)}
            className="flex justify-between w-full py-4 text-lg font-medium text-left px-2"
          >
            How its built
            <span>{openItem === 3 ? '-' : '+'}</span>
          </button>
          {openItem === 3 && (
            <div className="text-white text-center py-4">
              The frontend of this project is built in Next.js, using components from ShadCN and styled with Tailwind CSS. 
              The backend is developed using FastAPI.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
