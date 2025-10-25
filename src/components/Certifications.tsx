import { Award, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'Python Fundamentals',
    issuer: 'NASSCOM',
    date: 'March 2023',
    description: 'Core Python programming concepts and best practices',
    color: 'cyan',
  },
  {
    title: 'Data Analysis with Python',
    issuer: 'IBM',
    date: 'July 2025',
    description: 'Advanced data analysis techniques using Python libraries',
    color: 'blue',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r from-${cert.color}-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>

              <div className="relative bg-slate-800 border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-br from-${cert.color}-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="text-white" size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-cyan-400 font-semibold text-lg">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{cert.description}</p>

                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={18} className="text-cyan-400" />
                  <span>{cert.date}</span>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 bg-${cert.color}-500 rounded-full animate-pulse`}></div>
                    <span className="text-sm text-gray-400">Verified Credential</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
