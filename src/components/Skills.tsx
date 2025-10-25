import { useState } from 'react';
import { Code2, Layout, Database, Wrench } from 'lucide-react';

const skillsData = {
  programming: ['C', 'C++', 'Python', 'Java'],
  frontend: ['HTML', 'CSS', 'TypeScript', 'React', 'Tailwind CSS'],
  dataScience: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Matplotlib', 'Seaborn'],
  tools: ['MySQL', 'Git', 'Streamlit', 'Vercel', 'Vite', 'Netlify'],
};

const categories = [
  { id: 'programming', label: 'Programming', icon: Code2, color: 'cyan' },
  { id: 'frontend', label: 'Frontend', icon: Layout, color: 'blue' },
  { id: 'dataScience', label: 'Data Science', icon: Database, color: 'indigo' },
  { id: 'tools', label: 'Tools', icon: Wrench, color: 'teal' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('programming');

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 scale-110'
                    : 'bg-slate-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 border border-slate-700'
                }`}
              >
                <Icon size={20} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
            <div
              key={skill}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {skill[0]}
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">{skill}</h3>

                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '0%', animation: 'progressBar 1.5s ease-out forwards' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
