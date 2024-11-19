import images from '../constants/images'

const Card = () => {

    return (
        <div className="w-full p-3 flex flex-col gap-3 bg-slate-100">
            <img src={images.chemistry} alt="header" className='w-full rounded-t' />
            <div>
                <div className='text-xl font-extrabold border-b-2 my-3'>Chemistry</div>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row justify-center items-center gap-1.5'>
                            <img src={images.Course} alt='chapters' className='w-5 h-5' />
                            <div className='text-sm text-slate-700'>
                                22 Chapters
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-1.5'>
                            <img src={images.About} alt='question' className='w-5 h-5' />
                            <div className='text-sm text-slate-700'>
                                1500+ questions
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row justify-center items-center gap-1.5'>
                            <img src={images.News} alt='mock' className='w-5 h-5' />
                            <div className='text-sm text-slate-700'>
                                100+ Chapter Wise Mock Test
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center border-b-2 py-3 my-3'>
                    <div className='flex flex-row justify-center items-center gap-0'>
                        <div className='p-2 flex justify-center items-center bg-slate-300 rounded-full'>
                            <img src={images.register} alt='person' className='w-5 h-5l' />
                        </div>
                        <div className='p-2 flex justify-center items-center bg-green-300 rounded-full'>
                            <img src={images.register} alt='person' className='w-5 h-5l' />
                        </div>
                        <div className='p-2 flex justify-center items-center bg-rose-300 rounded-full'>
                            <img src={images.register} alt='person' className='w-5 h-5l' />
                        </div>
                    </div>
                    <div className='text-sm text-slate-500 font-extrabold'>
                        1200+ Enrolements
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='w-2/5 p-1.5 text-center rounded bg-green-500 text-base text-white font-extrabold cursor-pointer'>
                        Study Now
                    </div>
                    <div className="flex flex-row justify-between items-center gap-1">
                        <div className="text-sm text-rose-500 font-extrabold">free</div>
                        <img src={images.unlock} alt="free" className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;