import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Top Left Blob */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #0d9488, transparent)",
          }}
        />
        {/* Bottom Right Blob */}
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #0d9488, transparent)",
          }}
        />
        {/* Center subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center gap-10">
        {/* Logo Mark */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #0d9488, #14b8a6)",
              boxShadow: "0 20px 60px rgba(13, 148, 136, 0.35)",
              animation: "logoPulse 2.5s ease-in-out infinite",
            }}
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          {/* Brand Name */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              Your<span style={{ color: "#0d9488" }}>Brand</span>
            </h1>
            <p className="text-sm text-gray-400 mt-1 tracking-widest uppercase font-medium">
              Premium Experience
            </p>
          </div>
        </div>

        {/* Animated Line Loader */}
        <div className="flex flex-col items-center gap-5">
          {/* Track */}
          <div className="w-48 h-[3px] bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #0d9488, #5eead4)",
                animation: "trackFill 2s ease-in-out infinite",
              }}
            />
          </div>

          {/* Loading Text with Dots */}
          <div className="flex items-center gap-2">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "#0d9488" }}
            >
              Loading
            </p>
            <div className="flex gap-[5px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block w-[5px] h-[5px] rounded-full"
                  style={{
                    backgroundColor: "#0d9488",
                    animation: "dotFade 1.5s ease-in-out infinite",
                    animationDelay: `${i * 0.25}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { size: 6, top: "10%", left: "20%", delay: "0s", duration: "3s" },
            { size: 4, top: "80%", left: "15%", delay: "0.5s", duration: "4s" },
            { size: 8, top: "20%", left: "85%", delay: "1s", duration: "3.5s" },
            {
              size: 5,
              top: "70%",
              left: "80%",
              delay: "0.3s",
              duration: "2.8s",
            },
            {
              size: 4,
              top: "50%",
              left: "5%",
              delay: "0.8s",
              duration: "4.2s",
            },
            {
              size: 6,
              top: "40%",
              left: "92%",
              delay: "1.2s",
              duration: "3.2s",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-30"
              style={{
                width: p.size,
                height: p.size,
                top: p.top,
                left: p.left,
                backgroundColor: "#0d9488",
                animation: `floatUp ${p.duration} ease-in-out infinite`,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Fixed Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[3px] bg-gray-100">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #0d9488, #5eead4, transparent)",
            animation: "slideBar 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 20px 60px rgba(13,148,136,0.35); }
          50% { transform: scale(1.06); box-shadow: 0 25px 70px rgba(13,148,136,0.5); }
        }
        @keyframes trackFill {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 60%; margin-left: 20%; }
          100% { width: 0%; margin-left: 100%; }
        }
        @keyframes dotFade {
          0%, 100% { opacity: 0.2; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-15px) scale(1.2); opacity: 0.6; }
        }
        @keyframes slideBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
