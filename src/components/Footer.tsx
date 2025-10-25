import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart className="text-red-500 animate-pulse" size={20} fill="currentColor" />
            <span>by Riki Bauri</span>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Riki Bauri. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
