export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-green-100 p-10 text-center transition hover:shadow-xl hover:scale-[1.01] duration-300 ease-out">
        <h1 className="text-4xl font-semibold text-green-700 mb-6">
          About <span className="font-bold text-green-800">Carbon Tracker</span>
        </h1>

        <p className="text-lg mb-4 leading-relaxed text-gray-700">
          <span className="font-medium text-green-700">Carbon Tracker</span> empowers
          individuals and businesses to measure, monitor, and reduce their carbon
          footprint effortlessly. Our mission is to make sustainability simple by
          providing real-time insights into your energy consumption and emissions.
        </p>

        <p className="text-lg mb-4 leading-relaxed text-gray-700">
          By tracking your activities — from travel to electricity use — we help
          you understand your environmental impact and take meaningful steps toward
          a greener future. Whether you’re a company looking to offset emissions or
          an individual wanting to live more sustainably, Carbon Tracker gives you
          the tools to act responsibly.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          Together, we can make data-driven decisions that protect our planet for
          generations to come. <span className="text-green-600">🌍</span>
        </p>
      </div>

      <footer className="mt-10 text-gray-500 text-sm">
        Building a sustainable future
      </footer>
    </div>
  );
}
