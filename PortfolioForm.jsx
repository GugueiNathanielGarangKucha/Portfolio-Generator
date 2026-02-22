import React, { useState } from 'react';
import { Plus, Trash2, Save, Download } from 'lucide-react';

const PortfolioForm = ({ data, onChange }) => {
  const handleChange = (section, field, value) => {
    onChange({
      ...data,
      [section]: {
        ...data[section],
        [field]: value
      }
    });
  };

  const handleArrayChange = (section, index, field, value) => {
    const newArray = [...data[section]];
    newArray[index] = {
      ...newArray[index],
      [field]: value
    };
    onChange({
      ...data,
      [section]: newArray
    });
  };

  const addArrayItem = (section, defaultItem) => {
    onChange({
      ...data,
      [section]: [...(data[section] || []), defaultItem]
    });
  };

  const removeArrayItem = (section, index) => {
    const newArray = data[section].filter((_, i) => i !== index);
    onChange({
      ...data,
      [section]: newArray
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Portfolio Information</h2>
      
      {/* Personal Information */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={data.personalInfo?.name || ''}
            onChange={(e) => handleChange('personalInfo', 'name', e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Professional Title"
            value={data.personalInfo?.title || ''}
            onChange={(e) => handleChange('personalInfo', 'title', e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={data.personalInfo?.email || ''}
            onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={data.personalInfo?.phone || ''}
            onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            value={data.personalInfo?.location || ''}
            onChange={(e) => handleChange('personalInfo', 'location', e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            placeholder="GitHub URL"
            value={data.personalInfo?.github || ''}
            onChange={(e) => handleChange('personalInfo', 'github', e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            placeholder="LinkedIn URL"
            value={data.personalInfo?.linkedin || ''}
            onChange={(e) => handleChange('personalInfo', 'linkedin', e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            placeholder="Website URL"
            value={data.personalInfo?.website || ''}
            onChange={(e) => handleChange('personalInfo', 'website', e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Professional Summary</h3>
        <textarea
          placeholder="Write a brief professional summary..."
          value={data.summary || ''}
          onChange={(e) => onChange({ ...data, summary: e.target.value })}
          rows="4"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Experience */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Experience</h3>
          <button
            onClick={() => addArrayItem('experience', { position: '', company: '', duration: '', description: '' })}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={16} />
            Add Experience
          </button>
        </div>
        {data.experience?.map((exp, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Position"
                value={exp.position || ''}
                onChange={(e) => handleArrayChange('experience', index, 'position', e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Company"
                value={exp.company || ''}
                onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Duration (e.g., 2020-2023)"
                value={exp.duration || ''}
                onChange={(e) => handleArrayChange('experience', index, 'duration', e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Job description"
              value={exp.description || ''}
              onChange={(e) => handleArrayChange('experience', index, 'description', e.target.value)}
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <button
              onClick={() => removeArrayItem('experience', index)}
              className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              <Trash2 size={14} />
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Education</h3>
          <button
            onClick={() => addArrayItem('education', { degree: '', institution: '', year: '' })}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={16} />
            Add Education
          </button>
        </div>
        {data.education?.map((edu, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree || ''}
                onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Institution"
                value={edu.institution || ''}
                onChange={(e) => handleArrayChange('education', index, 'institution', e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Year"
                value={edu.year || ''}
                onChange={(e) => handleArrayChange('education', index, 'year', e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => removeArrayItem('education', index)}
              className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              <Trash2 size={14} />
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Projects</h3>
          <button
            onClick={() => addArrayItem('projects', { name: '', description: '', technologies: [] })}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={16} />
            Add Project
          </button>
        </div>
        {data.projects?.map((project, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg">
            <input
              type="text"
              placeholder="Project Name"
              value={project.name || ''}
              onChange={(e) => handleArrayChange('projects', index, 'name', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <textarea
              placeholder="Project Description"
              value={project.description || ''}
              onChange={(e) => handleArrayChange('projects', index, 'description', e.target.value)}
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <input
              type="text"
              placeholder="Technologies (comma-separated)"
              value={project.technologies?.join(', ') || ''}
              onChange={(e) => handleArrayChange('projects', index, 'technologies', e.target.value.split(',').map(t => t.trim()))}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <button
              onClick={() => removeArrayItem('projects', index)}
              className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              <Trash2 size={14} />
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Skills</h3>
        <input
          type="text"
          placeholder="Skills (comma-separated)"
          value={data.skills?.join(', ') || ''}
          onChange={(e) => onChange({ ...data, skills: e.target.value.split(',').map(s => s.trim()) })}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default PortfolioForm;
