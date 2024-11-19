const LessionData = [
    {
        "name": "Some Basic Concepts of Chemistry",
        "subchapters": [
            "Laws of Chemical Combinations",
            "Dalton's Atomic Theory",
            "Atomic and Molecular Masses"
        ]
    },
    {
        "name": "Structure of Atom",
        "subchapters": [
            "Bohr’s Model and its Limitations",
            "Quantum Mechanical Model of Atom",
            "Electronic Configuration of Atoms"
        ]
    }
]

const Syllabus = () => {
    return (
        <div className="flex flex-col gap-5 cursor-pointer pl-6">
            {
                LessionData.map((chapter, chapterIndex) => (
                    <>
                        <div className="flex flex-row justify-between items-center">
                            <div className="text-sm text-white font-extrabold rounded bg-blue-300 w-5 h-5 flex justify-center items-center">{chapterIndex + 1}</div>
                            <div key={chapterIndex} className="text-sm text-slate-700 font-extrabold">{chapter.name}</div>
                        </div>
                        {
                            chapter.subchapters.map((subchapter, subchapterIndex) => (
                                <div className="pl-3 flex flex-row justify-between items-center">
                                    <div className="text-xs text-slate-500 font-extrabold">{chapterIndex + 1}.{subchapterIndex + 1}</div>
                                    <div key={subchapterIndex} className="text-xs text-slate-500 font-extrabold">{subchapter}</div>
                                </div>
                            ))
                        }
                    </>
                ))
            }
        </div>
    )
}

export default Syllabus