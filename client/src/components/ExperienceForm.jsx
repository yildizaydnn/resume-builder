import { Briefcase, Plus, Sparkles, Trash2 } from 'lucide-react'
import React from 'react'

const ExperienceForm = ({ data, onChange }) => {

    const addExperience = () => {
        const newExperience = {
            company: "",
            position: "",
            start_date: "",
            end_date: "",
            description: "",
            is_current: false,
        };
        onChange([...data, newExperience]);
    };

    const removeExperience = (index) => {
        const updatedExperience = data.filter((_, i) => i !== index);
        onChange(updatedExperience);
    }

    const updateExperience = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated);
    }

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg
                    font-semibold text-gray-900'> Professional Experience</h3>
                    <p className='text-sm text-gray-500'>Add details about your professional experience here</p>
                </div>
                <button onClick={addExperience} className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-100
                text-purple-700 rounded hover:bg-purple-200 transition-colors'>
                    <Plus className='size-4' />
                    Add Experience

                </button>
            </div>

            {data.length === 0 ? (
                <div className='text-center py-8 text-gray-500'>
                    <Briefcase className='size-12 mx-auto mb-4' />
                    <p>No work experience added yet</p>
                    <p className='text-sm'>Click "Add Experience" to get started</p>

                </div>
            ) : (
                <div className='space-y-4'>
                    {data.map((experience, index) => (
                        <div key={index} className='p-4 border border-gray-200
                        rounded-lg space-y-3'>
                            <div className='flex justify-between items-start'>
                                <h4>Experience #{index + 1} </h4>
                                <button onClick={() => removeExperience(index)} className='text-red-500 hover:text-red-700'>
                                    <Trash2 className='size-4' />
                                </button>
                            </div>

                            <div className='grid md:grid-cols-2 gap-3'>

                                <input value={experience.company || ""} onChange={(e) =>
                                    updateExperience(index, "company", e.target.value)
                                } type="text" placeholder='Company Name'
                                    className='px-3 py-2 text-sm rounded-lg' />

                                <input value={experience.position || ""} onChange={(e) =>
                                    updateExperience(index, "position", e.target.value)
                                } type="text" placeholder='Job Title'
                                    className='px-3 py-2 text-sm rounded-lg' />

                                <input value={experience.start_date || ""} onChange={(e) =>
                                    updateExperience(index, "start_date", e.target.value)
                                } type="month" placeholder='Start Date'
                                    className='px-3 py-2 text-sm rounded-lg' />

                                <input value={experience.end_date || ""} onChange={(e) =>
                                    updateExperience(index, "end_date", e.target.value)
                                } type="month" placeholder='End Date'
                                    className='px-3 py-2 text-sm rounded-lg' />





                            </div>

                            <label className='flex items-center gap-2'>
                                <input type="checkbox" checked={experience.is_current || false} onChange={(e) =>
                                    updateExperience(index, "is_current", e.target.checked)
                                } className='rounded border-gray-300 text-blue-600 focus:ring-blue-500' />
                                <span className='text-sm text-gray-700'>Currently Working Here</span>
                            </label>

                            <div className='space-y-2'>
                                <div className='flex items-center justify-between'>
                                    <label htmlFor="">Job Description</label>

                                    <button className='flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-light bg-purple-50 text-purple-600 
                   rounded-md border border-purple-100 hover:bg-purple-100 transition-all 
                   disabled:opacity-50 active:scale-95'>
                                        <Sparkles className='w-2.5 h-2.5' />
                                        <span className='tracking-tight'>Enhance with AI</span>
                                    </button>
                                </div>
                                <textarea value={experience.description || ""} onChange={(e) =>
                                    updateExperience(index, "description", e.target.value)
                                } rows={4} className='w-full px-3 py-2 
                                text-sm rounded-lg border border-gray-300' placeholder='Describe your key responsibilities and achievements...' />

                            </div>
                        </div>

                    ))}

                </div>
            )}
        </div>

    )
}

export default ExperienceForm