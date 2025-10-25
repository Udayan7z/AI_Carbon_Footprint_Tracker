"use client";
import "./globals.css";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ScrollParticles from "@/components/scrollParticles";
import AnimatedBox from "@/components/animatedBox";



export default function HomePage() {
  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-4 sm:px-6 md:px-12">
  {/* Hero Section */}
  <motion.div
    className="relative w-full bg-[url('/home.jpg')] bg-cover bg-center bg-no-repeat py-20 px-6 text-center md:text-left min-h-[70vh] sm:min-h-screen rounded-2xl overflow-hidden mb-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Text content */}
    <div className="relative z-10 max-w-3xl mx-auto md:mx-0 space-y-5">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg leading-snug ml-3">
        Track Your <span className="text-green-300">Carbon Footprint</span>
      </h1>
      <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
        Empowering businesses to <span className="font-semibold text-green-300">measure</span>, 
        <span className="font-semibold text-green-300"> manage</span>, and 
        <span className="font-semibold text-green-300"> reduce</span> their environmental impact effortlessly.
      </p>
    </div>
  </motion.div>
  <ScrollParticles/>

  {/* Card Section */}
  <div className="relative flex items-center justify-center w-full mt-12 sm:mt-16 px-4 sm:px-0">
        {/* Left animated image */}
        <div className="absolute left-2 sm:left-3 md:left-6 hidden sm:block">
          <AnimatedBox imageUrl="/left.jpg" size={230} />
        </div>

        {/* Card in the center */}
        <div className="bg-white/90 backdrop-blur-xl shadow-lg rounded-3xl p-6 sm:p-8 w-full max-w-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out z-10">
          <Card>
            <div className="space-y-6">
              <p className="text-gray-700 text-base sm:text-lg">
                Begin your sustainability journey and track your company’s
                emissions with data-driven insights.
              </p>

              <div className="flex justify-center">
                <div className="inline-block transform transition-transform hover:scale-105 active:scale-95">
                  <Button
                    label="Start Tracking"
                    onClick={() => router.push("/tracker")}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right animated image */}
        <div className="absolute right-10 sm:right-3 md:right-6 hidden sm:block">
          <AnimatedBox imageUrl="/right.jpg" size={230} />
        </div>
      </div>

  {/* Footer */}
  <footer className="text-gray-400 text-sm mt-8 sm:mt-10 text-center">
    Designed for a greener future
  </footer>
</div>

  );
}
