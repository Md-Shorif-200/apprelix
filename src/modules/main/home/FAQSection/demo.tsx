import React from "react";

const demo = () => {
  return (
    <div>
      {/* Info Card */}
      <div className="relative bg-gradient-to-br from-cyan-500 to-sky-600 rounded-2xl p-7 text-white overflow-hidden shadow-lg shadow-cyan-200/40">
        {/* Decorative ring */}
        <div className="absolute -top-6 -right-6 w-28 h-28 border-4 border-white/10 rounded-full" />
        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-4 border-white/10 rounded-full" />

        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
          {/* <HelpCircle size={24} className="text-white" /> */}
        </div>

        <h3 className="text-xl font-extrabold mb-2 leading-tight">
          Got Questions?
          <br />
          We&apos;ve Got Answers.
        </h3>
        <p className="text-cyan-100 text-sm leading-relaxed">
          Our platform simplifies global apparel sourcing — connecting buyers
          with verified manufacturers, fast and transparently.
        </p>
      </div>
    </div>
  );
};

export default demo;
