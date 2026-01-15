import { PlusIcon, UploadCloudIcon, FilePenLineIcon, TrashIcon, PencilIcon, XIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { dummyResumeData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

    const colors = ["#A78BFA", "#F472B6", "#34D399", "#60A5FA", "#FBBF24", "#F87171"]

    const [allResumes, setAllResumes] = useState([])
    const [showCreateResumes, setShowCreateResumes] = useState(false)
    const [showUploadResumes, setShowUploadResumes] = useState(false)
    const [title, setTitle] = useState('')
    const [resume, setResume] = useState(null)
    const [editResumeId, setEditResumeId] = useState('')


    const navigate = useNavigate();



    const loadAllResumes = async () => {
        setAllResumes(dummyResumeData)
    }

    const createResume = async (event) => {
        event.preventDefault();
        // Logic to create a new resume
        console.log("Creating resume with title:", title);
        // After creation, close the modal
        setShowCreateResumes(false);
        navigate(`/app/builder/res123`);
        setTitle('');
    }

    const uploadResume = async (event) => {
        event.preventDefault();
        setShowUploadResumes(false)
        navigate(`/app/builder/res123`);

    }

    const editTitle = async (event) => {
        event.preventDefault();

    }

    const deleteResume = async (resumeId) => {
        const confirm = window.confirm("Are you sure you want to delete this resume?");
        if (confirm) {
            setAllResumes(prev => prev.filter(resume => resume._id !== resumeId));
        }
    }

    useEffect(() => {
        loadAllResumes()
    }, [])

    return (
        <div>
            <div className='mx-w-7xl mx-auto px-4 py-8'>
                <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700
                bg-clip-text text-transparent sm:hidden'>Welcome, Joe Doe</p>
                <div className='flex gap-4'>
                    {/* Create Resume Button */}
                    <button onClick={() => setShowCreateResumes(true)} className='w-full bg-white sm:max-w-44 h-48 flex flex-col items-center 
                        justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 
                        group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
                        <PlusIcon className='size-11 transition-all duration-300
                         p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 
                          text-white rounded-full' />
                        <p className='text-sm group-hover:text-indigo-600 transition-all
                    duration-300 font-medium'>Create Resume</p>
                    </button>

                    {/* Upload Existing Button */}
                    <button onClick={() => setShowUploadResumes(true)} className='w-full bg-white sm:max-w-44 h-48 flex flex-col items-center 
                        justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 
                        group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
                        <UploadCloudIcon className='size-11 transition-all duration-300
                         p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 
                          text-white rounded-full' />
                        <p className='text-sm group-hover:text-indigo-600 transition-all
                    duration-300 font-medium'>Upload Existing Resume</p>
                    </button>
                </div>

                <hr className='border-slate-300 my-6 sm:w-full' />

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {allResumes.map((resume, index) => {
                        const baseColor = colors[index % colors.length];
                        return (
                            <button key={index} onClick={() => navigate(`/app/builder/${resume._id}`)}
                                className='relative w-full h-48 bg-slate-50 flex flex-col items-center justify-between p-4 rounded-lg border 
                                group hover:shadow-lg transition-all duration-300 cursor-pointer'
                                style={{
                                    borderColor: baseColor // Sadece kenarlık rengini dinamik veriyoruz
                                }}>

                                {/* Üst Kısım: İkon ve Başlık */}
                                <div className='flex flex-col items-center justify-center flex-1 gap-2 mt-2'>
                                    <FilePenLineIcon className="size-8 transition-all group-hover:scale-105"
                                        style={{ color: baseColor }} />
                                    <p className='text-sm font-medium transition-all duration-300'
                                        style={{ color: baseColor }}>
                                        {resume.title}
                                    </p>
                                </div>

                                {/* Alt Kısım: Tarih Bilgisi */}
                                <div className='w-full text-center'>
                                    <p className='text-xs text-slate-500 font-medium'>Updated on</p>
                                    <p className='text-sm font-bold text-slate-800'>
                                        {new Date(resume.updatedAt).toLocaleDateString()}
                                    </p>
                                </div>

                                {/* Edit/Delete Butonları (Hover) */}
                                <div onClick={e => e.stopPropagation()} className='absolute top-2 right-2 group-hover:flex items-center hidden'>
                                    <TrashIcon onClick={() => deleteResume(resume._id)} className='size-7 p-1.5 bg-red-100
                                         text-red-600 rounded-full hover:bg-red-200 transition cursor-pointer' />

                                    <PencilIcon onClick={() => { setEditResumeId(resume._id); setTitle(resume.title) }} className='size-7 p-1.5 bg-blue-100
                                         text-blue-600 rounded-full hover:bg-blue-200 transition cursor-pointer ml-2' />
                                </div>
                            </button>
                        )
                    })}
                </div>

                {
                    showCreateResumes && (
                        <form onSubmit={createResume} onClick={() => setShowCreateResumes} className='fixed inset-0 bg-black/70 backdrop-blur
                        bg-opacity-50 z-10 flex items-center justify-center'>
                            <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
                                <h2 className='text-xl font-bold mb-4'>Create a Resume</h2>
                                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full
                                px-4 py-2 mb-4 focus:border-green-600 ring-green-600' required />


                                <button className='w-full py-2 bg-green-600 text-white rounded-2xl
                                hover:bg-green-700 transition-colors'>Create Resume</button>
                                <XIcon className='absolute top-4 right-4 text-slate-400
                                hover:text-slate-600 cursor-pointer transition-colors' onClick={() => {
                                        setShowCreateResumes(false); setTitle('')
                                    }} />
                            </div>


                        </form>
                    )
                }

                {
                    showUploadResumes && (
                        <form onSubmit={uploadResume} onClick={() => setShowUploadResumes} className='fixed inset-0 bg-black/70 backdrop-blur
                        bg-opacity-50 z-10 flex items-center justify-center'>
                            <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
                                <h2 className='text-xl font-bold mb-4'>Upload a Resume</h2>
                                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full
                                px-4 py-2 mb-4 focus:border-green-600 ring-green-600' required />
                                <div>
                                    <label htmlFor="resume-input" className='block text-sm text-slate-700'>
                                        Select resume file
                                        <div className='flex flex-col items-center justify-center gap-2
                                       border group text-slate-400 border-slate-400 border-dashed
                                       rounded-md p-4 py-10 my-4 hover:border-green-500
                                       hover:text-green-700 cursor-pointer transition-colors'>
                                            {resume ? (
                                                <p className='text-green-700'>{resume.name}</p>
                                            ) : (
                                                <>
                                                    <UploadCloudIcon className='size-14 stroke-1' />
                                                    <p>Upload Resume</p>
                                                </>
                                            )}
                                        </div>
                                    </label>
                                    <input id="resume-input" type="file" accept=".pdf" hidden
                                        onChange={(e) => setResume(e.target.files[0])} required />
                                </div>
                                <button className='w-full py-2 bg-green-600 text-white rounded-2xl
                                hover:bg-green-700 transition-colors'>Upload Resume</button>
                                <XIcon className='absolute top-4 right-4 text-slate-400
                                hover:text-slate-600 cursor-pointer transition-colors' onClick={() => {
                                        setShowUploadResumes(false); setTitle('')
                                    }} />
                            </div>


                        </form>
                    )
                }


                {
                    editResumeId && (
                        <form onSubmit={editTitle} onClick={() => setEditResumeId('')} className='fixed inset-0 bg-black/70 backdrop-blur
                        bg-opacity-50 z-10 flex items-center justify-center'>
                            <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
                                <h2 className='text-xl font-bold mb-4'>Edit Resume Title</h2>
                                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full
                                px-4 py-2 mb-4 focus:border-green-600 ring-green-600' required />


                                <button className='w-full py-2 bg-green-600 text-white rounded-2xl
                                hover:bg-green-700 transition-colors'>Update</button>
                                <XIcon className='absolute top-4 right-4 text-slate-400
                                hover:text-slate-600 cursor-pointer transition-colors' onClick={() => {
                                        setEditResumeId(''); setTitle('')
                                    }} />
                            </div>


                        </form>
                    )
                }
            </div>
        </div>
    )
}

export default Dashboard