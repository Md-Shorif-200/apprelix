const Loading = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorations (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #0d9488, transparent)",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #0d9488, transparent)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-8 z-10">
        {/* Simple & Professional Spinner Container */}
        <div className="relative flex items-center justify-center w-24 h-24">
          {/* Static Background Track Ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-gray-100" />

          {/* Active Spinning Ring */}
          <div
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-teal-600"
            style={{ animation: "simpleSpin 0.8s linear infinite" }}
          />

          {/* Core Logo Mark (No Pulse) */}
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-teal-600 shadow-md">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        {/* Brand & Loading Text */}
        <div className="text-center flex flex-col items-center gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
              Appre<span style={{ color: "#0d9488" }}>lix</span>
            </h1>
            <p className="text-xs text-gray-400 mt-0.5 tracking-widest uppercase font-medium">
              Premium Experience
            </p>
          </div>

          {/* Minimal Loading Text */}
          <div className="flex items-center gap-1 mt-2">
            <p className="text-xs font-medium tracking-widest uppercase text-gray-400">
              Loading
            </p>
            <span
              className="text-xs text-gray-400 font-bold"
              style={{ animation: "textDot 1.5s infinite" }}
            >
              ...
            </span>
          </div>
        </div>
      </div>

      {/* Advanced CSS Keyframes */}
      <style>{`
        @keyframes simpleSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes textDot {
          0%, 20% { opacity: 0; }
          40% { opacity: 0.4; }
          60% { opacity: 0.7; }
          80%, 100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loading;
