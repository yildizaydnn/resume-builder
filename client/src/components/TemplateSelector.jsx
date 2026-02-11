import React from 'react'
import { useState } from 'react'
import { Layout, Check } from 'lucide-react'

const TemplateSelector = ({ selectedTemplate, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)

    const templates = [
        {
            id: "classic",
            name: "Classic",
            preview: "A clean and traditional layout with a focus on readability and simplicity. Ideal for professionals in conservative industries."
        },
        {
            id: "modern",
            name: "Modern",
            preview: "A sleek and contemporary design with bold typography and creative use of color. Perfect for those in creative fields or looking to make a statement."
        },
        {
            id: "minimal",
            name: "Minimal",
            preview: "A minimalist design that emphasizes white space and simplicity. Great for professionals who want a clean and elegant look."
        },
        {
            id: "minimal-image",
            name: "Minimal with Image",
            preview: "A minimalist layout that incorporates a profile image for a personal touch. Suitable for those who want to showcase their personality while maintaining a clean design."
        }
    ]

    return (
        <div className='relative'>
            <button onClick={() => setIsOpen(!isOpen)} className='flex items-center gap-1 text-sm text-blue-600 
            bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring 
             transition-all px-3 py-2 rounded-lg'>
                <Layout size={16} className='mr-2' /> <span className='max-sm:hidden'>Template</span>
            </button>
            {isOpen && (
                <div className='absolute top-full w-xs p-3 mt-2 space-y-3 z-10 
                bg-white rounded-md border border-gray-200 shadow-sm'>
                    {templates.map((template) => (
                        <div key={template.id} onClick={() => {
                            onChange(template.id);
                            setIsOpen(false)
                        }} className={`relative p-3 border rounded-md cursor-pointer hover:bg-gray-100 transition-all ${selectedTemplate === template.id ?
                            'border-blue-500' : 'border-gray-200'}`} >

                            {selectedTemplate === template.id && (
                                <div className='absolute top-2 right-2'>
                                    <div className='size-5 bg-blue-400 rounded-full flex
                                    items-center justify-center'>
                                        <Check size={12} className='text-green-500' />
                                    </div>
                                </div>
                            )}

                            <div className='space-y-1'>
                                <h4 className='font-medium text-gray-800'>{template.name}</h4>
                                <div className='mt-2 p-2 bg-blue-50 rounded text-xs 
                                text-gray-500 italic'>{template.preview}</div>
                            </div>
                        </div>
                    ))}

                </div>
            )}

        </div>
    )
}

export default TemplateSelector