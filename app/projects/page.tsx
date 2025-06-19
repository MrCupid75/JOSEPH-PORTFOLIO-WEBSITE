import type { Metadata } from "next";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Terminal,
  Code,
  Database,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Projects - Joseph Mawulorm Mensah",
  description:
    "Explore the portfolio of projects by Joseph Mawulorm Mensah, featuring AI development, data analysis, and renewable energy solutions.",
};

export default function Projects() {
  const projects = [
    {
      title: "AI Net Zero Emission Tracker",
      description:
        "AI-powered application that tracks and analyzes carbon emissions to help organizations achieve net-zero goals. Built with Python and JavaScript, featuring machine learning algorithms for predictive analysis and data visualization dashboards.",
      image: "/Net Zero logo.png?height=300&width=500",
      technologies: [
        "Python",
        "JavaScript",
        "Machine Learning",
        "Data Visualization",
        "AI",
      ],
      liveUrl: "https://ai-net-0-tracker.vercel.app",
      githubUrl: "#",
      date: "2024",
      category: "AI Development",
    },
    {
      title: "Natural Gas Process Simulation",
      description:
        "Advanced simulation of natural gas transportation, refining, and desalination using Aspen HYSYS. Modeled pipeline networks to analyze pressure drops, compression needs, and flow rates. Optimized gas sweetening and cryogenic separation for NGL recovery.",
      image: "/AspenHYSYS Logo.jpg?height=300&width=500",
      technologies: [
        "Aspen HYSYS",
        "Process Engineering",
        "Simulation",
        "Optimization",
      ],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      category: "Process Engineering",
    },
    {
      title: "Renewable Energy Market API",
      description:
        "AI-optimized API built with Node.js that provides solar installation packages to customers based on their consumption capacity. Features intelligent recommendation algorithms and real-time energy consumption analysis.",
      image: "/Energy market.JPG?height=300&width=500",
      technologies: [
        "Node.js",
        "JavaScript",
        "AI Optimization",
        "REST API",
        "Solar Energy",
      ],
      liveUrl: "https://github.com/XCUXION-ECOGRID/ECOGRID.git",
      githubUrl: "#",
      date: "2024",
      category: "Backend Development",
    },
    {
      title: "Solar Energy Performance Dashboard",
      description:
        "Comprehensive dashboard for analyzing solar energy usage and performance data. Built for EEK Consults to optimize operational efficiency and track sales trends of electrical items and solar products.",
      image: "/image.png?height=300&width=500",
      technologies: ["Power BI", "Data Analysis", "SQL", "Dashboard Design"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      category: "Data Analysis",
    },
    {
      title: "Network Security ML Models",
      description:
        "Implementation of machine learning algorithms for network security research at KNUST Computer Science Department. Focus on anomaly detection and threat prediction using advanced ML techniques.",
      image: "/Net ML.JPG?height=300&width=500",
      technologies: [
        "Python",
        "Machine Learning",
        "Network Security",
        "Deep Learning",
      ],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      category: "Research",
    },
    {
      title: "Carbon Emissions Tracking System",
      description:
        "Research project focused on collecting and analyzing data related to solar energy efficiency and carbon emissions tracking. Developed AI models for predicting energy consumption and carbon footprint.",
      image: "/Carbon Tracker.png?height=300&width=500",
      technologies: [
        "Python",
        "AI Models",
        "Data Collection",
        "Environmental Analysis",
      ],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023-2024",
      category: "Research",
    },
  ];

  const categories = [
    "All",
    "AI Development",
    "Data Analysis",
    "Backend Development",
    "Process Engineering",
    "Research",
  ];

  const categoryIcons: any = {
    "AI Development": <Cpu className="w-4 h-4" />,
    "Data Analysis": <Database className="w-4 h-4" />,
    "Backend Development": <Code className="w-4 h-4" />,
    "Process Engineering": <Terminal className="w-4 h-4" />,
    Research: <Tag className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm">
              projects.list() --all
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            &lt;My Projects/&gt;
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing expertise in AI development,
            data analysis, and renewable energy solutions. Each project
            represents a unique challenge and innovative solution.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 hover:text-cyan-400 transition-all duration-200 font-mono text-sm"
            >
              {category === "All"
                ? "ALL_PROJECTS"
                : category.toUpperCase().replace(" ", "_")}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gray-900 text-cyan-400 text-sm font-medium font-mono border border-cyan-400 flex items-center space-x-1">
                    {categoryIcons[project.category]}
                    <span>
                      {project.category.toUpperCase().replace(" ", "_")}
                    </span>
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 border border-gray-600 hover:border-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 border border-gray-600 hover:border-cyan-400 transition-colors"
                    >
                      <Github className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2 font-mono">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 font-mono">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-900 text-gray-300 text-sm border border-gray-600 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-900 text-gray-300 text-sm border border-gray-600 font-mono">
                      +{project.technologies.length - 3}_MORE
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  {project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center font-mono"
                    >
                      VIEW_LIVE()
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-gray-500 font-mono">
                      PRIVATE_PROJECT
                    </span>
                  )}

                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white inline-flex items-center"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Publication */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-mono">
            &lt;Research & Publications/&gt;
          </h2>
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-mono">
                  Hybrid Framework of Differential Privacy and Secure
                  Multi-Party Computation for Privacy-Preserving Entity
                  Resolution
                </h3>
                <div className="space-y-2 text-gray-400 mb-6 font-mono">
                  <p>
                    <strong className="text-cyan-400">STATUS:</strong>{" "}
                    UNDER_REVIEW
                  </p>
                  <p>
                    <strong className="text-cyan-400">MANUSCRIPT_NO:</strong>{" "}
                    COSE-D-25-01096
                  </p>
                  <p>
                    <strong className="text-cyan-400">ROLE:</strong> CO_AUTHOR
                  </p>
                  <p>
                    <strong className="text-cyan-400">SUBMITTED:</strong> March
                    8, 2025
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  This research focuses on developing a novel hybrid framework
                  that combines differential privacy and secure multi-party
                  computation techniques to enable privacy-preserving entity
                  resolution in distributed environments.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gray-900 p-4 border border-gray-600">
                  <Image
                    src="/paper-preview.JPG?height=300&width=400"
                    alt="Research publication visualization"
                    width={400}
                    height={300}
                    className="w-full h-auto filter grayscale"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gray-800 p-4 border border-orange-400">
                    <div className="flex items-center space-x-2">
                      <Tag className="w-5 h-5 text-orange-400" />
                      <span className="text-sm font-medium text-orange-400 font-mono">
                        UNDER_REVIEW
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
