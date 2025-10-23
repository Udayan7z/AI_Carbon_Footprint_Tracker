import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white shadow-md rounded-2xl p-6 border border-green-100 hover:border-green-300 transition">
    {children}
  </div>
);

export default Card;