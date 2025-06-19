import type { Metadata } from "next";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Clock,
  Globe,
  Terminal,
  Code,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Joseph Mawulorm Mensah",
  description:
    "Get in touch with Joseph Mawulorm Mensah for data analysis, AI development, and renewable energy consulting opportunities.",
};

export default function Contact() {
  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm">
              contact.init() --connect
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            &lt;Get In Touch/&gt;
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Always interested in discussing new opportunities, collaborations,
            or innovative projects in data analysis, AI development, and
            renewable energy solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 border border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-mono flex items-center">
              <Code className="w-6 h-6 mr-2 text-cyan-400" />
              SEND_MESSAGE()
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-300 mb-2 font-mono"
                  >
                    FIRST_NAME:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors font-mono"
                    placeholder="your_first_name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-300 mb-2 font-mono"
                  >
                    LAST_NAME:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors font-mono"
                    placeholder="your_last_name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2 font-mono"
                >
                  EMAIL_ADDRESS:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors font-mono"
                  placeholder="your.email@domain.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2 font-mono"
                >
                  SUBJECT_TYPE:
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors font-mono"
                >
                  <option value="">--select_subject--</option>
                  <option value="collaboration">
                    COLLABORATION_OPPORTUNITY
                  </option>
                  <option value="job">JOB_OPPORTUNITY</option>
                  <option value="consulting">CONSULTING_INQUIRY</option>
                  <option value="research">RESEARCH_COLLABORATION</option>
                  <option value="other">OTHER</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2 font-mono"
                >
                  MESSAGE_BODY:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors resize-none font-mono"
                  placeholder="// Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 text-white font-medium py-3 px-6 hover:bg-cyan-700 transition-colors inline-flex items-center justify-center border border-cyan-400 font-mono"
              >
                EXECUTE_SEND()
                <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gray-800 border border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 font-mono flex items-center">
                <Terminal className="w-6 h-6 mr-2 text-green-400" />
                CONTACT_INFO
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-600 p-3 border border-cyan-400">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-mono">
                      EMAIL:
                    </h3>
                    <a
                      href="mailto:mjnuvor@gmail.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                    >
                      mjnuvor@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 border border-green-400">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-mono">
                      PHONE:
                    </h3>
                    <a
                      href="tel:+233242835458"
                      className="text-green-400 hover:text-green-300 transition-colors font-mono"
                    >
                      (+233) 242 835 458
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 border border-purple-400">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-mono">
                      LOCATION:
                    </h3>
                    <p className="text-gray-400 font-mono">
                      Deduako, Kumasi, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 border border-blue-400">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-mono">
                      LINKEDIN:
                    </h3>
                    <a
                      href="https://linkedin.com/in/joseph-mensah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors font-mono"
                    >
                      linkedin.com/in/joseph-mensah
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white font-mono">
                  AVAILABILITY_STATUS
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 animate-pulse border border-green-300"></div>
                  <span className="text-gray-300 font-mono">
                    AVAILABLE_FOR_OPPORTUNITIES
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300 font-mono">
                    REMOTE_WORK_ENABLED
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-4 font-mono">
                  // Response time: &lt; 24 hours
                  <br />
                  // For urgent matters: call directly
                </p>
              </div>
            </div>

            {/* Professional Image */}
            <div className="relative">
              <div className="bg-gray-800 p-4 border border-gray-700">
                <Image
                  src="/image5.jpeg?height=400&width=400"
                  alt="Joseph Mawulorm Mensah - Professional workspace"
                  width={400}
                  height={400}
                  className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-8 left-8 bg-gray-900 p-4 border border-cyan-400">
                  <p className="text-sm font-medium text-cyan-400 font-mono">
                    READY_TO_COLLABORATE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gray-800 border border-gray-700 p-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-mono">
            &lt;Let's Build Something Amazing/&gt;
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for data analysis expertise, AI development,
            or renewable energy solutions, I'm here to help bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mjnuvor@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-colors border border-cyan-400 font-mono"
            >
              <Mail className="mr-2 w-4 h-4" />
              EMAIL_ME()
            </a>
            <a
              href="https://linkedin.com/in/joseph-mensah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 font-medium hover:bg-gray-700 hover:border-gray-500 transition-colors font-mono"
            >
              <Linkedin className="mr-2 w-4 h-4" />
              CONNECT_LINKEDIN()
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
