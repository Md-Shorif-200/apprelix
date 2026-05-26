

const bg_img = "/AISourceSection/AISourceSection.jpg"

export default function AISourceSection() {
  return (
    <section 
      className="relative h-[450px] w-full bg-fixed bg-center bg-cover flex items-center justify-center overflow-hidden"
            style={{ 
                backgroundImage: `url(${bg_img})`, 
            }}
    >
      {/* Dark Overlay with a hint of Teal/Cyan to match your platform theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-950/85 pointer-events-none" />

      {/* Futuristic subtle grid lines for extra tech-driven feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15" />

      {/* Content Area */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        
    

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Smart Sourcing, Powered by{' '}
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Intelligent Algorithms
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-base md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
          Eliminate months of supplier hunting. Our advanced AI matches your custom 
          RFQs with the precise production capacity, machinery capability, and live 
          pricing data of ideal manufacturers <span className="text-teal-300 font-medium">within minutes</span>.
        </p>

        {/* Decorative Bottom Elements */}
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-16 h-1 rounded-full bg-teal-500/50" />
          <div className="w-4 h-1 rounded-full bg-cyan-500/50" />
          <div className="w-4 h-1 rounded-full bg-emerald-500/50" />
        </div>

      </div>
    </section>
  );
}