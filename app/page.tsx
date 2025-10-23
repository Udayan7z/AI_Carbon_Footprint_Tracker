"use client";
import "./globals.css";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";


export default function HomePage() {
  const router = useRouter()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50">
      <div className="text-center max-w-lg w-full px-6 py-12">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-semibold text-green-700 tracking-normal drop-shadow-sm">
            Track Your Carbon Footprint
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Empowering businesses to measure and reduce their environmental impact effortlessly.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white/90 backdrop-blur-xl border border-green-100 shadow-lg rounded-3xl p-8 w-full max-w-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out">
            <Card>
              <div className="space-y-6">
                <p className="text-gray-700 text-base">
                  Begin your sustainability journey and track your company’s emissions with data-driven insights.
                </p>

                <div className="flex justify-center">
                  <div className="inline-block transform transition-transform hover:scale-105 active:scale-95">
                    <Button
                      label="Start Tracking"
                      onClick={() => (router.push("/tracker"))}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <footer className="text-gray-400 text-sm mt-10">
          Designed for a greener future
        </footer>
      </div>
    </div>
  );
}
