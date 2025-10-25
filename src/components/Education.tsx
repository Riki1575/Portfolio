import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science and Business Systems',
    institution: 'Asansol Engineering College',
    location: 'Asansol, West Bengal',
    period: '2022 - 2026',
    icon: GraduationCap,
  },
  {
    degree: 'XII - WBCHSE',
    institution: 'Ukhra Kunja Behari Institution',
    location: 'Ukhra, West Bengal',
    period: '2022',
    icon: Award,
  },
  {
    degree: 'X - WBBSE',
    institution: 'Ukhra Kunja Behari Institution',
    location: 'Ukhra, West Bengal',
    period: '2022',
    icon: Award,
  },
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500"></div>

          {education.map((edu, index) => {
            const Icon = edu.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative mb-12 ${
                  isLeft ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } w-full md:w-1/2`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="absolute left-8 md:left-1/2 w-16 h-16 -ml-8 bg-slate-800 border-4 border-cyan-500 rounded-full flex items-center justify-center z-10">
                  <Icon className="text-cyan-400" size={28} />
                </div>

                <div className={`ml-24 md:ml-0 ${isLeft ? 'md:mr-24' : 'md:ml-24'}`}>
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>

                    <div className="relative bg-slate-800 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                      <div className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-semibold mb-4">
                        {edu.period}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-cyan-400 font-semibold mb-2">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
