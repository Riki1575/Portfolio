import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Coal Production Forecasting',
    subtitle: 'Machine Learning for Industrial Analytics',
    description: 'Built a machine learning model for coal production forecasting with real-time dashboard visualization using Random Forest and XGBoost algorithms.',
    tools: ['Python', 'Scikit-learn', 'XGBoost', 'Streamlit', 'Pandas', 'NumPy'],
    github: 'https://github.com/Riki1575/coal-forecasting-app',
    highlights: [
      'Designed ML model (Random Forest, XGBoost) for coal production forecasting',
      'Applied data preprocessing and feature engineering techniques',
      'Developed interactive dashboard for real-time trend visualization',
      'Optimized model performance using RMSE, MAE, and R² metrics',
    ],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'SpectrumAURA',
    subtitle: 'Autism Understanding & Recognition Assistant',
    description: 'Developed an accessible React-based autism screening and awareness tool with dynamic data visualization and progress tracking.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    github: 'https://github.com/Riki1575/SpectrumAURA',
    highlights: [
      'Built responsive and accessible React-based frontend',
      'Implemented dynamic data visualization for screening results',
      'Integrated API endpoints for real-time assessment processing',
      'Created personalized recommendation system',
    ],
    gradient: 'from-blue-500 to-indigo-500',
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>

              <div className="relative bg-slate-800 rounded-2xl p-8 h-full border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className={`text-sm bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-semibold`}>
                      {project.subtitle}
                    </p>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-700 rounded-lg hover:bg-cyan-500 transition-colors duration-300 group/icon"
                  >
                    <Github className="text-gray-300 group-hover/icon:text-white" size={20} />
                  </a>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-cyan-400 font-semibold mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105`}
                >
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
