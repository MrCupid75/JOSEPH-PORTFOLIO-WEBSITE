import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Database,
  Brain,
  BarChart3,
  Terminal,
  Zap,
} from "lucide-react";

export default function Home() {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Backend Development",
      description:
        "Node.js, JavaScript, Python programming with focus on scalable solutions",
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: "Data Analysis",
      description: "SQL, Power BI, statistical analysis and data visualization",
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "AI Development",
      description: "Machine Learning, Deep Learning, Computer Vision, and NLP",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: "Research & Analytics",
      description:
        "Energy efficiency analysis, carbon emissions tracking, and optimization",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 font-mono text-sm">
                  joseph@portfolio:~$
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
                Hi, I'm <span className="text-cyan-400">&lt;Joseph/&gt;</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Data Analyst & AI Developer specializing in machine learning
                algorithms, renewable energy optimization, and scalable backend
                architectures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-all duration-200 border border-cyan-600 hover:border-cyan-400 group"
                >
                  <Terminal className="mr-2 w-4 h-4" />
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 font-medium hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                >
                  <Zap className="mr-2 w-4 h-4" />
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700">
                <Image
                  src="/image9.jpeg?height=500&width=500"
                  alt="Joseph Mawulorm Mensah"
                  width={500}
                  height={500}
                  className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-gray-800 p-4 border border-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-300 font-mono">
                      STATUS: AVAILABLE
                    </span>
                  </div>
                </div>
              </div>
              {/* Tech decorations */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              &lt;Skills & Expertise/&gt;
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transforming complex data into actionable insights and building
              AI-powered solutions for sustainable energy and business
              optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="flex justify-center mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 font-mono">
                  {skill.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              &lt;Featured Projects/&gt;
            </h2>
            <p className="text-xl text-gray-400">
              Recent work in AI development and data analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/AI Net Zero.JPG?height=300&width=600"
                  alt="AI Net Zero Emission Tracker"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-4 left-4 bg-gray-900 px-3 py-1 border border-cyan-400">
                  <span className="text-cyan-400 text-sm font-mono">
                    AI PROJECT
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 font-mono">
                  AI Net Zero Emission Tracker
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  AI-powered application for tracking and analyzing carbon
                  emissions to help organizations achieve net-zero goals.
                </p>
                <Link
                  href="/projects"
                  className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center font-mono"
                >
                  EXPLORE_PROJECT()
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/aspen-hysys.png?height=300&width=600"
                  alt="Natural Gas Simulation"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-4 left-4 bg-gray-900 px-3 py-1 border border-orange-400">
                  <span className="text-orange-400 text-sm font-mono">
                    SIMULATION
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 font-mono">
                  Natural Gas Process Simulation
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Advanced simulation of natural gas transportation and refining
                  processes using Aspen HYSYS for optimization.
                </p>
                <Link
                  href="/projects"
                  className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center font-mono"
                >
                  EXPLORE_PROJECT()
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium hover:from-cyan-700 hover:to-purple-700 transition-all duration-200 border border-cyan-600 hover:border-cyan-400 font-mono"
            >
              <Terminal className="mr-2 w-4 h-4" />
              VIEW_ALL_PROJECTS()
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
