"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TrackerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [unauthorized, setUnauthorized] = useState(false);
  const router = useRouter();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("You need to sign up or login to access the tracker...");
      setUnauthorized(true);
    }
  }, []);

  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setMessage("");
    }
  };

  
  const handleUpload = async () => {
    if (!file) {
      setMessage("Select a file first...");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("File uploaded successfully!");
      } else {
        setMessage("Upload failed. Try again...");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error connecting to server.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-6">
      {message && unauthorized ? (
        <div className="relative max-w-lg w-full bg-white rounded-3xl shadow-lg p-10 text-center transform transition-all duration-300 hover:scale-[1.02] hover:shadow-green-400/40  ease-out height-150">
          <h2 className="text-3xl font-semibold text-green-700 mb-3">{message}</h2>
          <p className="text-green-600 mb-6">Please sign up or log in to continue</p>
          <Button
            label="Go to Signup"
            onClick={() => router.push("/login")}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
          <label
            htmlFor="fileInput"
            className="px-6 py-3 bg-green-600 text-white rounded-xl cursor-pointer hover:bg-green-700 transition"
          >
            Click here to upload PDF
          </label>

          <input
            id="fileInput"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />

          {file && <p className="text-green-800 font-medium">📄 {file.name}</p>}

          <button
            onClick={handleUpload}
            disabled={uploading}
            className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:bg-gray-400 transition"
          >
            {uploading ? "Uploading..." : "Upload to Server"}
          </button>

          {message && !unauthorized && (
            <p className="text-green-700 mt-2 font-medium">{message}</p>
          )}
        </div>
      )}
    </div>
  );
}
