import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import Syllabus from '../../components/syllabus'
import images from '../../constants/images'
import Recomendation from '../../components/recomendation'

const LessionData = [
    // Class 11 Chemistry
    { category: "Chemistry", chapter: "Some Basic Concepts of Chemistry", totalEnrollment: 4120 },
    { category: "Chemistry", chapter: "Structure of Atom", totalEnrollment: 3895 },
    { category: "Chemistry", chapter: "Classification of Elements and Periodicity in Properties", totalEnrollment: 3678 },
    { category: "Chemistry", chapter: "Chemical Bonding and Molecular Structure", totalEnrollment: 3187 },
    { category: "Chemistry", chapter: "States of Matter: Gases and Liquids", totalEnrollment: 2890 },
    { category: "Chemistry", chapter: "Thermodynamics", totalEnrollment: 3601 },
    { category: "Chemistry", chapter: "Equilibrium", totalEnrollment: 3345 },
    { category: "Chemistry", chapter: "Redox Reactions", totalEnrollment: 2987 },
    { category: "Chemistry", chapter: "Hydrogen", totalEnrollment: 2750 },
    { category: "Chemistry", chapter: "s-Block Elements", totalEnrollment: 2333 },
    { category: "Chemistry", chapter: "Some p-Block Elements", totalEnrollment: 2120 },
    { category: "Chemistry", chapter: "Organic Chemistry - Some Basic Principles and Techniques", totalEnrollment: 4021 },
    { category: "Chemistry", chapter: "Hydrocarbons", totalEnrollment: 3688 },
    { category: "Chemistry", chapter: "Environmental Chemistry", totalEnrollment: 2895 },

    // Class 12 Chemistry
    { category: "Chemistry", chapter: "Solid State", totalEnrollment: 3456 },
    { category: "Chemistry", chapter: "Solutions", totalEnrollment: 3124 },
    { category: "Chemistry", chapter: "Electrochemistry", totalEnrollment: 2750 },
    { category: "Chemistry", chapter: "Chemical Kinetics", totalEnrollment: 3456 },
    { category: "Chemistry", chapter: "Surface Chemistry", totalEnrollment: 2600 },
    { category: "Chemistry", chapter: "General Principles and Processes of Isolation of Elements", totalEnrollment: 2890 },
    { category: "Chemistry", chapter: "p-Block Elements", totalEnrollment: 3180 },
    { category: "Chemistry", chapter: "d- and f-Block Elements", totalEnrollment: 2889 },
    { category: "Chemistry", chapter: "Coordination Compounds", totalEnrollment: 2750 },
    { category: "Chemistry", chapter: "Haloalkanes and Haloarenes", totalEnrollment: 2600 },
    { category: "Chemistry", chapter: "Alcohols, Phenols and Ethers", totalEnrollment: 3120 },
    { category: "Chemistry", chapter: "Aldehydes, Ketones and Carboxylic Acids", totalEnrollment: 2995 },
    { category: "Chemistry", chapter: "Amines", totalEnrollment: 2567 },
    { category: "Chemistry", chapter: "Biomolecules", totalEnrollment: 2433 },
    { category: "Chemistry", chapter: "Polymers", totalEnrollment: 2220 },
    { category: "Chemistry", chapter: "Chemistry in Everyday Life", totalEnrollment: 2050 }
];



const SectionData = [
    {
        name: 'syllabus',
        icon: images.List
    },
    {
        name: 'lession',
        icon: images.view
    },
    {
        name: 'announcement',
        icon: images.Notice
    },
]


const SubjectDashboard = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [selectedSection, setSelectedSection] = useState('syllabus')

    const SyllabusSection = () => (
        <Syllabus />
    )



    const AnnouncementSection = () => (
        <div className='flex justify-center items-center'>
            <img src={images.Logo} className='w-24 h-24' />
        </div>
    )

    const LessionSection = () => (
        <div className="w-full flex flex-row flex-wrap justify-between items-center gap-3">
            {
                LessionData.map((item) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 1.3 } }}
                        viewport={{ once: true }}
                        className="transition-transform duration-300 hover:scale-105 w-5/12 h-64 cursor-pointer flex flex-col gap-3 m-3"
                        key={item.chapter}
                        onClick={() => handleClick(`/dashboard/course/${id}/${item.chapter}`)}
                    >
                        <img src={images.chemistry} alt="background" className="rounded w-full h-32" />
                        <div className="text-base font-bold text-slate-500">
                            {item.chapter}
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row justify-between items-center gap-1">
                                <div className="text-xs text-green-500 font-extrabold">free</div>
                                <img src={images.unlock} alt="free" className="w-3 h-3" />
                            </div>
                            <div className="flex flex-row justify-between items-center gap-1">
                                <img src={images.view} alt="views" className="w-3 h-3" />
                                <div className="text-xs text-slate-500">{item.totalEnrollment}</div>
                            </div>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )

    const renderContent = () => {
        switch (selectedSection) {
            case 'syllabus':
                return <SyllabusSection />
            case 'lession':
                return <LessionSection />
            case 'announcement':
                return <AnnouncementSection />
            default:
                return <SyllabusSection />
        }
    }

    const handleClick = (route) => {
        navigate(route)
    }

    return (
        <div className='m-5 flex flex-col gap-5'>
            <div className="flex flex-row justify-start items-center gap-3">
                <div className="text-md text-slate-500">course</div>
                <div className="text-xl text-slate-300"> {`>`} </div>
                <div className="text-md text-slate-500">{id}</div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1.3 } }}
                viewport={{ once: true }}
                className='flex flex-row justify-start items-start'>
                <div className='w-1/2 h-64'>
                    <img src={images.chemistry} alt="subject" className='h-full w-full rounded' />
                </div>
                <div className='w-1/2 h-64 pl-5 flex flex-col justify-between items-start'>
                    <div className='flex flex-col gap-1.5'>
                        <div className='text-xl text-slate-700 font-extrabold'>{id} Previous Year Questions</div>
                        <div className='text-sm text-slate-500'>chapter wise previous years chemistry questions since 2000. Every questions organize according to their related topics </div>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-row justify-between items-center gap-3'>
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
                    </div>
                    <div className='flex flex-col justify-start items-start gap-1.5'>
                        <div className='text-xs text-slate-500'>keep us supporting by donation</div>
                        <div className='p-3 w-full bg-rose-500 text-center rounded text-xs text-white font-extrabold'>
                            Donate Now 🎃
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className='flex flex-row justify-start items-start mt-5'>
                <div className='w-1/4 flex flex-col justify-start items-start pt-16'>
                    <div className='w-full flex flex-row justify-start items-center gap-1.5'>
                        <div className='w-1/12 border bg-slate-500'></div>
                        <div className='text-sm text-slate-500 font-extrabold'>recomendation</div>
                        <div className='flex-1 border bg-slate-500'></div>
                    </div>
                    <Recomendation />
                </div>
                <div className='w-3/4'>
                    <div className='w-full flex flex-row justify-between items-center cursor-pointer'>
                        {SectionData.map((item) => (
                            <div
                                onClick={() => setSelectedSection(item.name)}
                                key={item.name}
                                className='flex-1 flex flex-col relative z-0'
                            >
                                <div className='flex flex-row justify-center items-center gap-1.5 p-3'>
                                    <img src={item.icon} alt='syllabus' className='w-5 h-5' />
                                    <div className='text-sm font-extrabold text-slate-700'>{item.name}</div>
                                </div>
                                {
                                    item.name === selectedSection ? (
                                        <motion.div
                                            layoutId='underline'
                                            className='absolute z-0 -bottom-1 w-full h-0.5 rounded bg-red-500'
                                        />
                                    ) : null
                                }
                            </div>
                        ))}
                    </div>
                    <div className='p-3'>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectDashboard