import { MapPin, Languages } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, cyan 1px, transparent 1px), linear-gradient(to bottom, cyan 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-800 rounded-2xl p-2 overflow-hidden">
              <img
                src="/WhatsApp Image 2025-10-16 at 21.06.14_d6a1ec92.....jpg"
                alt="Riki Bauri"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <p className="text-cyan-400 font-semibold text-xl">CS & Business Systems</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Highly motivated and detail-oriented Computer Science student seeking to create impactful software solutions that blend AI, data, and design.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="text-cyan-400" size={24} />
                  <span>Asansol, West Bengal, India</span>
                </div>

                <div className="flex items-start gap-3 text-gray-300">
                  <Languages className="text-cyan-400 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-cyan-400 mb-1">Languages</p>
                    <p>English (Decent) • Hindi (Fluent) • Bengali (Fluent)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-cyan-400 mb-1">2022-2026</p>
              <p className="text-gray-400 text-sm">B.Tech Journey</p>
              <p className="text-gray-300 text-sm mt-2">Computer Science and Business Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
