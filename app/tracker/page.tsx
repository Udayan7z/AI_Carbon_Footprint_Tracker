"use client";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TrackerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [message, setMessage] = useState("");
  const [unauthorized, setUnauthorized] = useState(false);
  const [insights, setInsights] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("You need to sign up or log in to access the tracker...");
      setUnauthorized(true);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setMessage("");
      setInsights("");
    }
  };

  const handleAnalyze = async () => {
    if (!file) return setMessage("Please select a PDF or TXT file first.");
    setAnalyzing(true);
    setMessage("Analyzing document with AI... Please wait ⏳");
    setInsights("");

    const formData = new FormData();
    formData.append("document", file);

    try {
      const res = await fetch("http://localhost:3001/api/analyze", {
        method: "POST",
        body: formData,
        credentials: "include",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        const errMsg = errBody?.error || errBody?.message || res.statusText || `HTTP ${res.status}`;
        setMessage(`❌ AI analysis failed: ${errMsg}`);
        return;
      }

      const data = await res.json().catch(() => null);
      if (data && data.success) {
        setMessage("✅ AI analysis complete!");
        setInsights(data.insights || "[No insights returned]");
      } else {
        setMessage(`❌ AI analysis failed: ${data?.error || "Unknown error"}`);
      }
    } catch (err: any) {
      console.error("Fetch error:", err);
      setMessage(`⚠️ Error connecting to AI service: ${err.message || err}`);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-6">
      {unauthorized ? (
        <div className="relative max-w-lg w-full bg-white rounded-3xl shadow-lg p-10 text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-3">{message}</h2>
          <p className="text-green-600 mb-6">Please sign up or log in to continue</p>
          <Button label="Go to Signup" onClick={() => router.push("/login")} />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
          <label htmlFor="fileInput" className="px-6 py-3 bg-green-600 text-white rounded-xl cursor-pointer hover:bg-green-700 transition">
            Click here to upload PDF/TXT
          </label>
          <input id="fileInput" type="file" accept=".pdf,.txt" onChange={handleFileChange} className="hidden" />
          {file && <p className="text-green-800 font-medium">📄 {file.name}</p>}
          <button onClick={handleAnalyze} disabled={analyzing || !file} className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:bg-gray-400 transition">
            {analyzing ? "Analyzing..." : "Analyze with AI"}
          </button>
          {message && <p className="text-green-700 mt-2 font-medium text-center">{message}</p>}
          {insights && (
            <div className="mt-6 p-4 bg-gray-100 rounded-xl text-left shadow-inner max-w-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">AI Insights</h3>
              <p className="text-gray-800 whitespace-pre-wrap">{insights}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
