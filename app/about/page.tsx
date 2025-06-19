import type { Metadata } from "next";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  Briefcase,
  Globe,
  Terminal,
  Code,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About - Joseph Mawulorm Mensah",
  description:
    "Learn more about Joseph Mawulorm Mensah - his background, education, experience, and passion for data analysis and AI development.",
};

export default function About() {
  const experiences = [
    {
      title: "Research and Teaching Assistant",
      company: "KNUST, Computer Science Department",
      period: "Oct 2024 – Present",
      description:
        "Implementing machine learning algorithms and optimizing models for research in network security. Overseeing practical lab sessions where students experiment with AI techniques including Deep learning, Computer Vision and NLP.",
    },
    {
      title: "Associate Data Analyst and IT Support",
      company: "EEK Consults and Electrical Limited",
      period: "Sep 2023 – Present",
      description:
        "Analyze solar energy usage and performance data for efficient decision making and to optimize operational efficiency. Track sales trends of electrical items and solar products to support business decisions.",
    },
  ];

  const certifications = [
    {
      title: "Meta Data Analyst Professional Certificate",
      issuer: "Meta (formerly Facebook)",
      date: "Feb 2025",
      url: "coursera.org/account/accomplishments/specialization/TJE9CHY3ITEH",
    },
    {
      title: "IBM Back-end JavaScript Developer Professional Certificate",
      issuer: "IBM",
      date: "Feb 2025",
      url: "coursera.org/account/accomplishments/specialization/LP6LXPSZNGZ9",
    },
  ];

  const skills = [
    "Python Programming",
    "Data Analysis",
    "AI Development",
    "Data Management",
    "Statistics",
    "SQL",
    "Data Visualization",
    "Power BI",
    "Backend Development",
    "NodeJS",
    "Agile Methodology",
    "Machine Learning",
    "Deep Learning",
  ];

  const languages = ["English", "French", "Ashanti Twi", "Ewe"];

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm">
                about.joseph --verbose
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              &lt;About Me/&gt;
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Detail-oriented analytical professional with expertise in data
              analysis, AI development, and backend engineering. I leverage data
              and analytics to perform deep analysis and make data-driven
              strategic insights for decision making, innovation, and business
              growth.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Passionate about developing high-quality solutions that provide
              actionable recommendations to guide product development,
              marketing, and business operations, particularly in the renewable
              energy sector.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-300 bg-gray-800 px-4 py-2 border border-gray-700">
                <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                <span className="font-mono">Deduako, Kumasi, Ghana</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-800 p-8 border border-gray-700 relative">
              <Image
                src="/image3.jpeg?height=600&width=500"
                alt="Joseph Mawulorm Mensah - Professional Photo"
                width={500}
                height={600}
                className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-4 -left-4 bg-cyan-600 text-white p-4 border border-cyan-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              {/* Tech corners */}
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-400"></div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 font-mono flex items-center">
            <Code className="w-8 h-8 mr-3 text-cyan-400" />
            &lt;Education/&gt;
          </h2>
          <div className="bg-gray-800 border border-gray-700 p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-600 p-3 border border-cyan-400">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2 font-mono">
                  Bachelor of Science, Petroleum Engineering
                </h3>
                <p className="text-lg text-cyan-400 font-medium mb-2">
                  Kwame Nkrumah University of Science and Technology
                </p>
                <p className="text-gray-400 mb-4">
                  Completed August 2024 •{" "}
                  <span className="font-semibold text-green-400 font-mono">
                    FIRST_CLASS
                  </span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 p-4 border border-gray-600">
                    <Image
                      src="/image4.jpeg?height=200&width=300"
                      alt="KNUST Campus"
                      width={300}
                      height={200}
                      className="w-full h-auto filter grayscale"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 font-mono">
                      RELEVANT_COURSES:
                    </h4>
                    <ul className="text-sm text-gray-400 space-y-1 font-mono">
                      <li>• Thermodynamics</li>
                      <li>• Production Engineering</li>
                      <li>• Natural Gas Engineering</li>
                      <li>• Statistics & Numerical Methods</li>
                      <li>• Project Evaluation</li>
                      <li>• Safety and Reliability Engineering</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 font-mono flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-green-400" />
            &lt;Work Experience/&gt;
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 p-8 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 border border-green-400">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1 font-mono">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-cyan-400 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 mb-4 font-mono">{exp.period}</p>
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  <div className="bg-gray-900 p-2 border border-gray-600 hidden md:block">
                    <Image
                      src="/image6.jpeg?height=100&width=100"
                      alt={`${exp.company} workplace`}
                      width={100}
                      height={100}
                      className="filter grayscale"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 font-mono flex items-center">
            <Award className="w-8 h-8 mr-3 text-purple-400" />
            &lt;Certifications/&gt;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 p-6 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 border border-purple-400">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 font-mono">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 text-sm mb-3 font-mono">
                      ISSUED: {cert.date}
                    </p>
                    <a
                      href={`https://${cert.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium font-mono"
                    >
                      VIEW_CREDENTIAL() →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-mono flex items-center">
              <Database className="w-8 h-8 mr-3 text-orange-400" />
              &lt;Skills/&gt;
            </h2>
            <div className="bg-gray-800 border border-gray-700 p-8">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-900 text-cyan-400 border border-gray-600 text-sm font-medium font-mono hover:border-cyan-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4 font-mono">
                  SOFTWARE_TOOLS:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 p-4 border border-gray-600">
                    <Image
                      src="/image.jpg?height=150&width=200"
                      alt="Development tools"
                      width={200}
                      height={150}
                      className="w-full h-auto filter grayscale"
                    />
                  </div>
                  <div className="text-sm text-gray-400 space-y-1 font-mono">
                    <p>• Prosper Software</p>
                    <p>• Aspen HYSYS</p>
                    <p>• MathWorks</p>
                    <p>• Anaconda for Python</p>
                    <p>• Microsoft 365 Suite</p>
                    <p>• MySQL & MongoDB</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-mono flex items-center">
              <Globe className="w-8 h-8 mr-3 text-blue-400" />
              &lt;Languages/&gt;
            </h2>
            <div className="bg-gray-800 border border-gray-700 p-8">
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-lg font-medium text-white font-mono">
                      {language}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 border ${
                            i <
                            (language === "English"
                              ? 5
                              : language === "French"
                              ? 3
                              : 5)
                              ? "bg-cyan-400 border-cyan-400"
                              : "bg-gray-700 border-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <div className="bg-gray-900 p-4 border border-gray-600">
                  <Image
                    src="image0.jpeg?height=200&width=300"
                    alt="Cultural diversity"
                    width={300}
                    height={200}
                    className="w-full h-auto filter grayscale"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
