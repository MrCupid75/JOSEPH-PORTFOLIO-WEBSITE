import { Linkedin, Mail, Phone, Code, Database, Cpu } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-mono">&lt;Joseph Mawulorm Mensah/&gt;</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Data Analyst & AI Developer specializing in machine learning, renewable energy solutions, and backend
              systems architecture.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:mjnuvor@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors p-2 bg-gray-800 rounded border border-gray-700 hover:border-cyan-400"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/joseph-mensah"
                className="text-gray-400 hover:text-cyan-400 transition-colors p-2 bg-gray-800 rounded border border-gray-700 hover:border-cyan-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="tel:+233242835458"
                className="text-gray-400 hover:text-cyan-400 transition-colors p-2 bg-gray-800 rounded border border-gray-700 hover:border-cyan-400"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-gray-600 group-hover:bg-cyan-400 transition-colors mr-3"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-gray-600 group-hover:bg-cyan-400 transition-colors mr-3"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-gray-600 group-hover:bg-cyan-400 transition-colors mr-3"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-gray-600 group-hover:bg-cyan-400 transition-colors mr-3"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Database className="w-5 h-5 mr-2" />
              Contact Info
            </h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 mr-3"></span>
                Deduako, Kumasi, Ghana
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-green-500 mr-3"></span>
                (+233) 242 835 458
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 mr-3"></span>
                mjnuvor@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-mono text-sm">&copy; 2024 Joseph Mawulorm Mensah. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-500 text-sm font-mono">Built with Next.js & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
