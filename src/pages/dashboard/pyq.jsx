import { motion } from "framer-motion"
import images from "../../constants/images";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select"


const Years = [
    { value: '2000', label: '2000' },
    { value: '2001', label: '2001' },
    { value: '2002', label: '2002' },
    { value: '2003', label: '2003' },
    { value: '2004', label: '2004' },
    { value: '2005', label: '2005' },
];


const Exam = [
    {
        value: 'mains',
        label: 'Mains'
    },
    {
        value: 'advanced',
        label: 'Advanced'
    }
];

const Data = [
    { date: '2024-01-24', shift: 'Shift 1', id: '2024-01-24-1', participants: 3567 },
    { date: '2024-01-24', shift: 'Shift 2', id: '2024-01-24-2', participants: 4123 },
    { date: '2024-01-25', shift: 'Shift 1', id: '2024-01-25-1', participants: 2789 },
    { date: '2024-01-25', shift: 'Shift 2', id: '2024-01-25-2', participants: 4892 },
    { date: '2024-01-26', shift: 'Shift 1', id: '2024-01-26-1', participants: 3045 },
    { date: '2024-01-26', shift: 'Shift 2', id: '2024-01-26-2', participants: 4721 },
    { date: '2024-01-27', shift: 'Shift 1', id: '2024-01-27-1', participants: 3998 },
    { date: '2024-01-27', shift: 'Shift 2', id: '2024-01-27-2', participants: 4210 },
    { date: '2024-01-28', shift: 'Shift 1', id: '2024-01-28-1', participants: 4502 },
]

const PYQ = () => {
    const navigate = useNavigate()

    const [selectedYear, setSelectedYear] = useState('2024')
    const [selectedExamType, setSelectedExamType] = useState(1)

    const FiteredData = Data.filter((item) => {
        const yearMatch = item.date.startsWith(selectedYear)
        // const attemptMatch = selectedAttempt === 1
        return yearMatch
    })

    const CustomStyle = {
        control: (provided) => ({
            ...provided,
            width: '144px',
            fontSize: '16px',
            borderWidth: '2px',
            borderColor: '#e5e7eb'
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? '#fff' : '#f43f5e',
            backgroundColor: state.isSelected ? '#f43f5e' : '#fff'
        })
    }


    const handleClick = (route) => {
        navigate(route)
    }

    return (
        <div className="p-3 flex flex-col">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-start items-center gap-3">
                    <div className="text-md text-slate-500">course</div>
                    <div className="text-xl text-slate-300"> {`>`} </div>
                    <div className="text-md text-slate-500">pyq</div>
                </div>
                <div className="flex flex-row justify-between items-center gap-3">
                    <div className="text-base text-slate-500 font-extrabold">Filter By : </div>
                    <div className="flex flex-row gap-3">
                        {/* <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="p-1 w-32 bg-rose-50 focus:outline-none rounded text-sm text-slate-500">
                            {
                                Years.map((item) => (
                                    <option key={item.id} value={item.id}>{item.year}</option>
                                ))
                            }
                        </select> */}
                        <Select
                            styles={CustomStyle}
                            options={Years}
                            placeholder="Year"
                            isMulti={false}
                            onChange={(option) => setSelectedYear(option.year)}
                        />
                        <Select
                            styles={CustomStyle}
                            options={Exam}
                            placeholder="Exam"
                            isMulti={false}
                            onChange={(option) => setSelectedExamType(option.type)}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-between items-center gap-3 mt-5">
                {
                    FiteredData.map((item) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 1.3 } }}
                            viewport={{ once: true }}
                            className="transition-transform duration-300 hover:scale-105 w-1/5 h-48 cursor-pointer flex flex-col gap-3 m-3"
                            key={item.id}
                            onClick={() => handleClick(`/test/${item.id}`)}
                        >
                            <img src={images.chemistry} alt="background" className="rounded w-full h-32" />
                            <div className="text-base font-bold text-slate-500">
                                {item.date}
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row justify-between items-center gap-1">
                                    <div className="text-xs text-green-500 font-extrabold">{item.shift}</div>
                                    <img src={images.unlock} alt="free" className="w-3 h-3" />
                                </div>
                                <div className="flex flex-row justify-between items-center gap-1">
                                    <img src={images.view} alt="views" className="w-3 h-3" />
                                    <div className="text-xs text-slate-500">{item.participants}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default PYQ