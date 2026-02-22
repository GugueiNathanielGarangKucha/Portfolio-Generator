import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Calendar, Building } from 'lucide-react';

const PortfolioPreview = ({ data }) => {
  const {
    personalInfo,
    education,
    experience,
    projects,
    skills,
    summary
  } = data;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden" id="portfolio-preview">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
        <div className="flex items-center space-x-6">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
            <span className="text-4xl text-gray-400 font-bold">
              {personalInfo.name ? personalInfo.name.split(' ').map(n => n[0]).join('') : 'JD'}
            </span>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{personalInfo.name || 'John Doe'}</h1>
            <p className="text-xl mb-4">{personalInfo.title || 'Full Stack Developer'}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {personalInfo.email && (
                <div className="flex items-center gap-1">
                  <Mail size={16} />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-1">
                  <Phone size={16} />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{personalInfo.location}</span>
                </div>
              )}
            </div>
            <div className="flex gap-4 mt-4">
              {personalInfo.github && (
                <a href={personalInfo.github} className="hover:underline">
                  <Github size={20} />
                </a>
              )}
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} className="hover:underline">
                  <Linkedin size={20} />
                </a>
              )}
              {personalInfo.website && (
                <a href={personalInfo.website} className="hover:underline">
                  <Globe size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="p-8 border-b">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Professional Summary</h2>
          <p className="text-gray-600 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience Section */}
      {experience && experience.length > 0 && (
        <div className="p-8 border-b">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-300"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Building size={16} />
                    <span>{exp.company}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education Section */}
      {education && education.length > 0 && (
        <div className="p-8 border-b">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects Section */}
      {projects && projects.length > 0 && (
        <div className="p-8 border-b">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {skills && skills.length > 0 && (
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPreview;
