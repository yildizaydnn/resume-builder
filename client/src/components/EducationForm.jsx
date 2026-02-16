import { GraduationCap, Plus, Trash2, } from 'lucide-react';
import React from 'react'

const EducationForm = ({ data, onChange }) => {

    const addEducation = () => {
        const newEducation = {
            institution: "",
            degree: "",
            field: "",
            graduation_date: "",
            gpa: "",
        };
        onChange([...data, newEducation])
    }

    const removeEducation = (index) => {
        const updatedEducation = data.filter((_, i) => i !== index);
        onChange(updatedEducation);
    }

    const updatedEducation = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated);
    }


    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg
                    font-semibold text-gray-900'> Education </h3>
                    <p className='text-sm text-gray-500'>Add details about your education here</p>
                </div>
                <button onClick={addEducation} className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-100
                text-purple-700 rounded hover:bg-purple-200 transition-colors'>
                    <Plus className='size-4' />
                    Add Education

                </button>
            </div>

            {data.length === 0 ? (
                <div className='text-center py-8 text-gray-500'>
                    <GraduationCap className='size-12 mx-auto mb-4' />
                    <p>No education added yet</p>
                    <p className='text-sm'>Click "Add Education" to get started</p>

                </div>
            ) : (
                <div className='space-y-4'>
                    {data.map((education, index) => (
                        <div key={index} className='p-4 border border-gray-200
                        rounded-lg space-y-3'>
                            <div className='flex justify-between items-start'>
                                <h4>Education #{index + 1} </h4>
                                <button onClick={() => removeEducation(index)} className='text-red-500 hover:text-red-700'>
                                    <Trash2 className='size-4' />
                                </button>
                            </div>

                            <div className='grid md:grid-cols-2 gap-3'>

                                <input value={education.institution || ""} onChange={(e) =>
                                    updatedEducation(index, "institution", e.target.value)
                                } type="text" placeholder='Institution Name'
                                    className='px-3 py-2 text-sm rounded-lg' />

                                <input value={education.degree || ""} onChange={(e) =>
                                    updatedEducation(index, "degree", e.target.value)
                                } type="text" placeholder='Degree'
                                    className='px-3 py-2 text-sm rounded-lg' />

                                <input value={education.field || ""} onChange={(e) =>
                                    updatedEducation(index, "field", e.target.value)
                                } type="text" placeholder='Field of Study'
                                    className='px-3 py-2 text-sm rounded-lg' />

                                <input value={education.graduation_date || ""} onChange={(e) =>
                                    updatedEducation(index, "graduation_date", e.target.value)
                                } type="month" placeholder='Graduation Date'
                                    className='px-3 py-2 text-sm rounded-lg' />

                            </div>

                            <input value={education.gpa || ""} onChange={(e) =>
                                updatedEducation(index, "gpa", e.target.value)
                            } type="text" placeholder='GPA (Optional)'
                                className='px-3 py-2 text-sm rounded-lg' />


                        </div>

                    ))}

                </div>
            )}
        </div>
    )
}

export default EducationForm