import React from 'react'
import { Zap } from 'lucide-react';
import Title from './Title';

const Features = () => {

    const [isHover, setIsHover] = React.useState(false);


    return (
        <div id='features' className='flex flex-col items-center my-10 scroll-mt-12'>
            <div className="flex flex-col md:flex-row items-center justify-center relative -top-5">
                <Zap width={14} />
                <span>Basit, Hızlı ve Profesyonel</span>
            </div>
            <Title title="Özgeçmişinizi Bir Üst Seviyeye Taşıyın" description="Yapay zeka destekli 
            CV oluşturma aracımızla, profesyonel ve etkileyici bir özgeçmiş hazırlamak artık çok kolay. 
            Sadece birkaç adımda, işverenlerin dikkatini çekecek modern tasarımlar ve optimize edilmiş 
            içeriklerle dolu CV'nizi oluşturun." />

            <div className='flex flex-col md:flex-row items-center xl:-mt-10'>
                <img className="max-w-2xl w-full xl:-ml-32" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="" />





                <div className="px-4 md:px-0" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <div className={"flex items-center justify-center gap-6 max-w-md group cursor-pointer"}>
                        <div className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300  flex gap-4 rounded-xl transition-colors ${!isHover ? 'border-violet-300 bg-violet-100' : ''}`}>
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Net & sade </h3>
                                <p className="text-sm text-slate-600 max-w-xs">Özgeçmişinizde yaptığınız her değişikliği anında görün.
                                    CV’niz profesyonel tasarımla gerçek zamanlı güncellensin.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                        <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-green-600"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700"> ATS Uyumlu Çıktılar</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Karmaşık şablonlarla uğraşmadan,
                                    birkaç adımda modern ve güçlü CV’nizi oluşturun.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                        <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
                            <svg className="size-6 stroke-orange-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Hemen İndirin</h3>
                                <p className="text-sm text-slate-600 max-w-xs">CV’nizi işe alım sistemleriyle uyumlu,
                                    temiz ve profesyonel formatlarda PDF olarak indirin.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            </div>
        </div>

    )
}

export default Features