import { Plus, Trash2 } from 'lucide-react';
import React from 'react';

const ProjectForm = ({ data = [], onChange }) => {

    // normalize incoming data
    const projects = Array.isArray(data) ? data : [];

    const addProject = () => {
        const newProject = {
            id: Date.now().toString(),
            name: "",
            type: "",
            description: "",
            link: "",
            technologies: [],
        };
        onChange([...projects, newProject]);
    };

    const removeProject = (index) => {
        const updatedData = projects.filter((_, i) => i !== index);
        onChange(updatedData);
    };

    const updateProject = (index, field, value) => {
        const updated = [...projects];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated);
    };

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'> Projects </h3>
                    <p className='text-sm text-gray-500'>Add your projects here (GitHub, Portfolio, etc.)</p>
                </div>
                <button type="button" onClick={addProject} className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-100
                text-purple-700 rounded hover:bg-purple-200 transition-colors'>
                    <Plus className='size-4' />
                    Add Project
                </button>
            </div>

            <div className='space-y-4 mt-6'>
                {projects.map((project, index) => (
                    <div key={project.id || index} className='p-4 border border-gray-200 rounded-lg space-y-3'>
                        <div className='flex justify-between items-start'>
                            <h4 className='font-medium text-gray-700'>Project #{index + 1}</h4>
                            <button type="button" onClick={() => removeProject(index)} className='text-red-500 hover:text-red-700' aria-label={`Delete project ${index + 1}`}>
                                <Trash2 className='size-4' />
                            </button>
                        </div>

                        <div className='grid md:grid-cols-2 gap-3'>
                            <div>
                                <label htmlFor={`project-name-${project.id || index}`} className='sr-only'>Project name</label>
                                <input
                                    id={`project-name-${project.id || index}`}
                                    value={project.name || ""}
                                    onChange={(e) => updateProject(index, "name", e.target.value)}
                                    type="text"
                                    placeholder='Project Name (e.g. E-commerce App)'
                                    className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none'
                                />
                            </div>

                            <div>
                                <label htmlFor={`project-type-${project.id || index}`} className='sr-only'>Project type</label>
                                <input
                                    id={`project-type-${project.id || index}`}
                                    value={project.type || ""}
                                    onChange={(e) => updateProject(index, "type", e.target.value)}
                                    type="text"
                                    placeholder='Project Type (e.g. Full Stack, Mobile)'
                                    className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none'
                                />
                            </div>

                            <div className='md:col-span-2'>
                                <label htmlFor={`project-link-${project.id || index}`} className='sr-only'>Project link</label>
                                <input
                                    id={`project-link-${project.id || index}`}
                                    value={project.link || ""}
                                    onChange={(e) => updateProject(index, "link", e.target.value)}
                                    type="text"
                                    placeholder='Project Link (GitHub/Live URL)'
                                    className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none'
                                />
                            </div>

                            <div className='md:col-span-2'>
                                <label htmlFor={`project-desc-${project.id || index}`} className='sr-only'>Project description</label>
                                <textarea
                                    id={`project-desc-${project.id || index}`}
                                    rows={3}
                                    value={project.description || ""}
                                    onChange={(e) => updateProject(index, "description", e.target.value)}
                                    placeholder='Describe what you built, which problems you solved...'
                                    className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 outline-none'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectForm;