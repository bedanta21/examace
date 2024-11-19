import { useState } from "react"
import Select from "react-select"
import images from "../../constants/images"
import { useParams } from "react-router-dom"
import Question from "./question"

const Practice = () => {
    const { id } = useParams()
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [examType, setExamType] = useState(null)
    const [questionType, setQuestionType] = useState(null)
    const [year, setYear] = useState(null)

    const handleQuestionClick = (item) => {
        setSelectedQuestion(item)
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setSelectedQuestion(null)
        setIsModalOpen(false)
    }

    const data = [
        {
            "id": 1,
            "type": "mcq",
            "exam": "mains",
            "question": "What is the atomic number of hydrogen?",
            "year": "August 2024",
            "level": "easy",
            "options": [
                { "option": "1", "isCorrect": true },
                { "option": "2", "isCorrect": false },
                { "option": "3", "isCorrect": false },
                { "option": "4", "isCorrect": false }
            ]
        },
        {
            "id": 2,
            "type": "mcq",
            "exam": "advanced",
            "question": "Hydrogen is primarily found in which form in the universe?",
            "year": "March 2023",
            "level": "medium",
            "options": [
                { "option": "As a diatomic molecule (H2)", "isCorrect": true },
                { "option": "As a solid", "isCorrect": false },
                { "option": "As a metal", "isCorrect": false },
                { "option": "As a noble gas", "isCorrect": false }
            ]
        },
        {
            "id": 3,
            "type": "numeric",
            "exam": "mains",
            "question": "Calculate the mass of 2 moles of hydrogen gas (H2).",
            "year": "July 2022",
            "level": "medium",
            "options": [
                { "option": "4 grams", "isCorrect": true },
                { "option": "2 grams", "isCorrect": false },
                { "option": "1 gram", "isCorrect": false },
                { "option": "8 grams", "isCorrect": false }
            ]
        },
        {
            "id": 4,
            "type": "mcq",
            "exam": "mains",
            "question": "Which of the following is a common use of hydrogen in industry?",
            "year": "November 2023",
            "level": "easy",
            "options": [
                { "option": "Ammonia synthesis", "isCorrect": true },
                { "option": "Iron smelting", "isCorrect": false },
                { "option": "Glass making", "isCorrect": false },
                { "option": "Textile dyeing", "isCorrect": false }
            ]
        },
        {
            "id": 5,
            "type": "mcq",
            "exam": "advanced",
            "question": "What is the bond energy of the H-H bond in a hydrogen molecule?",
            "year": "December 2022",
            "level": "hard",
            "options": [
                { "option": "436 kJ/mol", "isCorrect": true },
                { "option": "100 kJ/mol", "isCorrect": false },
                { "option": "250 kJ/mol", "isCorrect": false },
                { "option": "700 kJ/mol", "isCorrect": false }
            ]
        },
        {
            "id": 6,
            "type": "numeric",
            "exam": "mains",
            "question": "Calculate the volume of 1 mole of hydrogen gas at STP.",
            "year": "February 2023",
            "level": "medium",
            "options": [
                { "option": "22.4 liters", "isCorrect": true },
                { "option": "11.2 liters", "isCorrect": false },
                { "option": "44.8 liters", "isCorrect": false },
                { "option": "33.6 liters", "isCorrect": false }
            ]
        },
        {
            "id": 7,
            "type": "mcq",
            "exam": "mains",
            "question": "Which isotope of hydrogen is radioactive?",
            "year": "January 2024",
            "level": "hard",
            "options": [
                { "option": "Tritium", "isCorrect": true },
                { "option": "Deuterium", "isCorrect": false },
                { "option": "Protium", "isCorrect": false },
                { "option": "None of the above", "isCorrect": false }
            ]
        },
        {
            "id": 8,
            "type": "mcq",
            "exam": "advanced",
            "question": "Hydrogen can form which type of bond with other elements?",
            "year": "May 2023",
            "level": "medium",
            "options": [
                { "option": "Covalent", "isCorrect": true },
                { "option": "Ionic", "isCorrect": false },
                { "option": "Metallic", "isCorrect": false },
                { "option": "Hydrogen", "isCorrect": false }
            ]
        },
        {
            "id": 9,
            "type": "numeric",
            "exam": "mains",
            "question": "What is the heat of formation of liquid hydrogen?",
            "year": "September 2022",
            "level": "hard",
            "options": [
                { "option": "-286 kJ/mol", "isCorrect": true },
                { "option": "-100 kJ/mol", "isCorrect": false },
                { "option": "-200 kJ/mol", "isCorrect": false },
                { "option": "-400 kJ/mol", "isCorrect": false }
            ]
        },
        {
            "id": 10,
            "type": "mcq",
            "exam": "mains",
            "question": "What is the common name for diatomic hydrogen gas?",
            "year": "August 2023",
            "level": "easy",
            "options": [
                { "option": "Hydrogen gas", "isCorrect": true },
                { "option": "Oxygen gas", "isCorrect": false },
                { "option": "Nitrogen gas", "isCorrect": false },
                { "option": "Helium gas", "isCorrect": false }
            ]
        },
        {
            "id": 11,
            "type": "mcq",
            "exam": "advanced",
            "question": "Hydrogenation of which compound is used to produce margarine?",
            "year": "June 2023",
            "level": "medium",
            "options": [
                { "option": "Unsaturated fats", "isCorrect": true },
                { "option": "Saturated fats", "isCorrect": false },
                { "option": "Carbohydrates", "isCorrect": false },
                { "option": "Proteins", "isCorrect": false }
            ]
        },
        {
            "id": 12,
            "type": "numeric",
            "exam": "mains",
            "question": "What is the molar mass of hydrogen?",
            "year": "April 2023",
            "level": "medium",
            "options": [
                { "option": "1 gram/mol", "isCorrect": true },
                { "option": "2 grams/mol", "isCorrect": false },
                { "option": "0.5 grams/mol", "isCorrect": false },
                { "option": "4 grams/mol", "isCorrect": false }
            ]
        },
        {
            "id": 13,
            "type": "mcq",
            "exam": "mains",
            "question": "Which element is the most abundant in the universe?",
            "year": "February 2024",
            "level": "easy",
            "options": [
                { "option": "Hydrogen", "isCorrect": true },
                { "option": "Helium", "isCorrect": false },
                { "option": "Oxygen", "isCorrect": false },
                { "option": "Carbon", "isCorrect": false }
            ]
        },
        {
            "id": 14,
            "type": "mcq",
            "exam": "advanced",
            "question": "What is the chemical symbol for deuterium?",
            "year": "March 2024",
            "level": "medium",
            "options": [
                { "option": "D", "isCorrect": true },
                { "option": "T", "isCorrect": false },
                { "option": "H", "isCorrect": false },
                { "option": "He", "isCorrect": false }
            ]
        },
        {
            "id": 15,
            "type": "numeric",
            "exam": "mains",
            "question": "What is the density of hydrogen gas at STP?",
            "year": "May 2023",
            "level": "medium",
            "options": [
                { "option": "0.0899 g/L", "isCorrect": true },
                { "option": "1.25 g/L", "isCorrect": false },
                { "option": "0.5 g/L", "isCorrect": false },
                { "option": "2.16 g/L", "isCorrect": false }
            ]
        },
        {
            "id": 16,
            "type": "mcq",
            "exam": "mains",
            "question": "Hydrogen bonding is a type of which interaction?",
            "year": "July 2024",
            "level": "medium",
            "options": [
                { "option": "Dipole-dipole", "isCorrect": true },
                { "option": "London dispersion", "isCorrect": false },
                { "option": "Ionic", "isCorrect": false },
                { "option": "Metallic", "isCorrect": false }
            ]
        },
        {
            "id": 17,
            "type": "mcq",
            "exam": "advanced",
            "question": "What is the enthalpy of vaporization for hydrogen?",
            "year": "June 2023",
            "level": "hard",
            "options": [
                { "option": "0.904 kJ/mol", "isCorrect": true },
                { "option": "10.2 kJ/mol", "isCorrect": false },
                { "option": "40.7 kJ/mol", "isCorrect": false },
                { "option": "100 kJ/mol", "isCorrect": false }
            ]
        },
        {
            "id": 18,
            "type": "numeric",
            "exam": "mains",
            "question": "Calculate the number of molecules in 1 mole of hydrogen gas.",
            "year": "August 2023",
            "level": "medium",
            "options": [
                { "option": "6.022 x 10^23", "isCorrect": true },
                { "option": "1.204 x 10^23", "isCorrect": false },
                { "option": "3.011 x 10^23", "isCorrect": false },
                { "option": "1.22 x 10^24", "isCorrect": false }
            ]
        },
        {
            "id": 19,
            "type": "mcq",
            "exam": "advanced",
            "question": "Which of the following is a use of hydrogen in fuel cells?",
            "year": "September 2023",
            "level": "hard",
            "options": [
                { "option": "Generating electricity", "isCorrect": true },
                { "option": "Producing glass", "isCorrect": false },
                { "option": "Making paper", "isCorrect": false },
                { "option": "Textile manufacturing", "isCorrect": false }
            ]
        },
        {
            "id": 20,
            "type": "mcq",
            "exam": "mains",
            "question": "What is the state of hydrogen at room temperature and pressure?",
            "year": "October 2023",
            "level": "easy",
            "options": [
                { "option": "Gas", "isCorrect": true },
                { "option": "Liquid", "isCorrect": false },
                { "option": "Solid", "isCorrect": false },
                { "option": "Plasma", "isCorrect": false }
            ]
        }
    ]

    const ExamOptions = [
        {
            value: 'mains',
            label: 'Mains'
        },
        {
            value: 'advanced',
            label: 'Advanced'
        }
    ]

    const QuestionOption = [
        {
            value: 'mcq',
            label: 'MCQ'
        },
        {
            value: 'numeric',
            label: 'Numeric'
        }
    ]

    const YearData = [
        {
            value: '2021',
            label: '2021'
        },
        {
            value: '2022',
            label: '2022'
        },
        {
            value: '2023',
            label: '2023'
        },
        {
            value: '2024',
            label: '2024'
        }
    ]

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

    const getLevelClass = (level) => {
        switch (level) {
            case 'easy':
                return 'bg-green-200 text-green-800';  // Light green background
            case 'medium':
                return 'bg-yellow-200 text-yellow-800'; // Light yellow background
            case 'hard':
                return 'bg-red-200 text-red-800';  // Light red background
            default:
                return 'bg-gray-200 text-gray-800';  // Default gray background
        }
    };

    return (
        <div className="w-full flex flex-col gap-3">
            <div>
                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl font-extrabold m-3">{id}</div>
            </div>
            <div className="flex flex-row justify-between items-center p-3">
                <div className="flex flex-row justify-center items-center gap-3">
                    <Select
                        styles={CustomStyle}
                        options={ExamOptions}
                        placeholder="Exam"
                        isMulti={false}
                        onChange={(option) => setExamType(option.value)}
                    />
                    <Select
                        styles={CustomStyle}
                        options={QuestionOption}
                        placeholder="Question"
                        isMulti={false}
                        onChange={(option) => setQuestionType(option.value)}
                    />
                    <Select
                        styles={CustomStyle}
                        options={YearData}
                        placeholder="Year"
                        isMulti={false}
                        onChange={(option) => setYear(option.value)}
                    />
                </div>
                <div className="flex flex-row justify-center items-center gap-3 border-2 rounded-md p-1.5">
                    <input type="text" placeholder="Search Keyword" className="text-sm text-slate-500 focus:outline-none w-32" />
                    <div className="w-5 h-5">
                        <img src={images.Search} alt="search" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-row border-b-2 py-1.5">
                    <div className="w-1/12"></div>
                    <div className="w-1/12 text-lg font-extrabold text-rose-500">ID</div>
                    <div className="w-1/12 text-lg font-extrabold text-rose-500">type</div>
                    <div className="w-1/12 text-lg font-extrabold text-rose-500">exam</div>
                    <div className="w-5/12 px-2 text-lg font-extrabold text-rose-500">question</div>
                    <div className="w-2/12 flex flex-row justify-center items-center gap-1.5">
                        <div className="text-lg font-extrabold text-rose-500 text-center">
                            year
                        </div>
                        <div className="w-3 h-3">
                            <img src={images.Forward} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="w-1/12 flex flex-row justify-center items-center gap-1.5">
                        <div className="text-lg font-extrabold text-rose-500 text-center">
                            item
                        </div>
                        <div className="w-3 h-3">
                            <img src={images.Forward} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                <div>
                    {
                        data.map((item, index) => (
                            <div
                                key={index}
                                className="w-full flex flex-row border-b-2 py-3 cursor-pointer"
                                onClick={() => handleQuestionClick(item)}
                            >
                                <div className="w-1/12 flex justify-center items-center">
                                    <div className="w-5 h-5 border-2 rounded"></div>
                                </div>
                                <div className="w-1/12 text-base text-slate-500">{item.id}</div>
                                <div className="w-1/12 text-base text-slate-500">{item.type}</div>
                                <div className="w-1/12 text-base text-slate-500">{item.exam}</div>
                                <div className="w-5/12 px-2 text-base text-slate-500 truncate">{item.question}</div>
                                <div className="w-2/12 text-base text-slate-500 text-center">{item.year}</div>
                                <div className="w-1/12 text-base text-slate-500 rounded text-center">
                                    <span className={`${getLevelClass(item.level)} rounded p-0.5`}>
                                        {item.level}
                                    </span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            {
                isModalOpen && (
                    <Question selectedQuestion={selectedQuestion} handleModalClose={handleModalClose} />
                )
            }
        </div>
    )
}

export default Practice