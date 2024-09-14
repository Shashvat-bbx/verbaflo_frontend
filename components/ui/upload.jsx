

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [apiKey, setApiKey] = useState(""); // State for API key
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value); // Update API key
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file || !apiKey) return; // Ensure both file and API key are provided

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey); // Append API key to FormData

    setLoading(true); // Start spinner

    try {
      const res = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false); // Stop spinner
    }
  };

  return (
    <div className="my-5">
      <h1 className="text-xl  mb-4">Upload PDF</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />

        {/* Input field for API Key */}
        <input
          type="text"
          placeholder="Enter OpenAI API Key"
          value={apiKey}
          onChange={handleApiKeyChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-1"
        />

        <div>
          {!loading ? (
            <Button variant="outline" type="submit">
              Upload
            </Button>
          ) : (
            <div className="flex justify-center">
              <svg
                className="animate-spin h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </form>

      {downloadUrl && (
        <div className="mt-5">
          <a
            href={downloadUrl}
            download="resume.html"
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
          >
            Download your resume
          </a>
        </div>
      )}
    </div>
  );
}
