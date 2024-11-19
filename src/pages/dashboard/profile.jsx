import { useState } from "react"
import images from "../../constants/images"
import PercentBar from "../../components/percent-bar"
import PercentCircle from "../../components/percent-circle"
import Recomendation from "../../components/recomendation"
import Question from "./question"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const SubjectStats = [
    {
        "name": "Chemistry",
        "totalQuestions": 500,
        "solvedQuestions": 35,
        "background": 'bg-green-300',
        "indicator": 'bg-green-500'
    },
    {
        "name": "Math",
        "totalQuestions": 600,
        "solvedQuestions": 45,
        "background": 'bg-rose-300',
        "indicator": 'bg-rose-500'
    },
    {
        "name": "Physics",
        "totalQuestions": 550,
        "solvedQuestions": 40,
        "background": 'bg-orange-300',
        "indicator": 'bg-orange-500'
    }
]

const BookmarkTestData = [
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

const BookmarkQuestionData = [
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

const WeeklyTestHistoryData = [
    {
        id: 20,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 12,
            month: 12,
            year: 12
        },
        participants: 2034
    },
    {
        id: 19,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 11,
            month: 12,
            year: 12
        },
        participants: 1934
    },
    {
        id: 18,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 10,
            month: 12,
            year: 12
        },
        participants: 1834
    },
    {
        id: 17,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 9,
            month: 12,
            year: 12
        },
        participants: 1734
    },
    {
        id: 16,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 8,
            month: 12,
            year: 12
        },
        participants: 1634
    },
    {
        id: 15,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 7,
            month: 12,
            year: 12
        },
        participants: 1534
    },
    {
        id: 14,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 6,
            month: 12,
            year: 12
        },
        participants: 1434
    },
    {
        id: 13,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 5,
            month: 12,
            year: 12
        },
        participants: 1334
    },
    {
        id: 12,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 4,
            month: 12,
            year: 12
        },
        participants: 1234
    },
    {
        id: 11,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 3,
            month: 12,
            year: 12
        },
        participants: 1134
    },
    {
        id: 10,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 2,
            month: 12,
            year: 12
        },
        participants: 1034
    },
    {
        id: 9,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 1,
            month: 12,
            year: 12
        },
        participants: 934
    },
    {
        id: 8,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 30,
            month: 11,
            year: 12
        },
        participants: 834
    },
    {
        id: 7,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 29,
            month: 11,
            year: 12
        },
        participants: 734
    },
    {
        id: 6,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 28,
            month: 11,
            year: 12
        },
        participants: 634
    },
    {
        id: 5,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 27,
            month: 11,
            year: 12
        },
        participants: 534
    },
    {
        id: 4,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 26,
            month: 11,
            year: 12
        },
        participants: 434
    },
    {
        id: 3,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 25,
            month: 11,
            year: 12
        },
        participants: 334
    },
    {
        id: 2,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 24,
            month: 11,
            year: 12
        },
        participants: 234
    },
    {
        id: 1,
        type: 'Mains',
        duration: {
            hours: 1,
            minutes: 30
        },
        questions: 65,
        date: {
            day: 23,
            month: 11,
            year: 12
        },
        participants: 134
    }
]

const SectionData = [
    {
        tag: 'question',
        name: 'Bookmark Question',
        icon: images.Bookmark
    },
    {
        tag: 'test',
        name: 'Bookmark Mock Test',
        icon: images.Course
    },
    {
        tag: 'history',
        name: 'Weekly Mock Test History',
        icon: images.Time
    }
]

const ProfileDasboard = () => {
    const navigate = useNavigate()
    const [selectedSection, setSelectedSection] = useState('history')
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const easyQuestions = 30;
    const mediumQuestions = 50;
    const hardQuestions = 20;
    const totalQuestions = 720;

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

    const handleQuestionClick = (item) => {
        setSelectedQuestion(item)
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setSelectedQuestion(null)
        setIsModalOpen(false)
    }

    const handleClick = (route) => {
        navigate(route)
    }

    const BookmarkQuestionSection = () => (
        <div className="w-full flex flex-col">
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
                        BookmarkQuestionData.map((item, index) => (
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


    const BookmarkTestSection = () => (
        <div className="w-full flex flex-row flex-wrap justify-between items-center gap-3 mt-5">
            {
                BookmarkTestData.map((item) => (
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
    )

    const TestHistorySection = () => (
        <div className="w-11/12 mx-auto flex flex-col">
            <div className="mb-5 flex flex-row border-b-2 py-1.5 bg-rose-400 rounded">
                <div className="w-1/6 text-lg font-extrabold text-white text-center">ID</div>
                <div className="w-1/6 text-lg font-extrabold text-white text-center">exam type</div>
                <div className="w-1/6 text-lg font-extrabold text-white text-center">total question</div>
                <div className="w-1/6 px-2 text-lg font-extrabold text-white text-center">date</div>
                <div className="w-1/6 px-2 text-lg font-extrabold text-white text-center">participants</div>
                <div className="w-1/6 px-2 text-lg font-extrabold text-white text-center">My Rank</div>
            </div>
            <div className="flex flex-col gap-3">
                {
                    WeeklyTestHistoryData.map((item) => (
                        <div key={item.id} className="w-full flex flex-row bg-slate-100 rounded py-3 cursor-pointer transition-colors duration-300 hover:bg-slate-300">
                            <div className="w-1/6 text-base text-slate-500 text-center">{item.id}</div>
                            <div className="w-1/6 text-base text-slate-500 text-center">{item.type}</div>
                            <div className="w-1/6 text-base text-slate-500 text-center">{item.questions}</div>
                            <div className="w-1/6 text-base text-slate-500 text-center">{item.date.day}-{item.date.month}-{item.date.year}</div>
                            <div className="w-1/6 text-base text-slate-500 rounded text-center">
                                {item.participants}
                            </div>
                            <div className="w-1/6 text-base text-slate-500 rounded text-center">
                                19
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )

    const renderContent = () => {
        switch (selectedSection) {
            case 'question':
                return <BookmarkQuestionSection />
            case 'test':
                return <BookmarkTestSection />
            case 'history':
                return <TestHistorySection />
            // case 'history':
            //     return <HistoryTestSection />
            default:
                return <BookmarkQuestionSection />
        }
    }

    return (
        <div className="flex flex-col">
            <div className="w-full flex flex-row justify-between items-center p-3">
                <div className="w-1/3">
                </div>
                <div className="w-2/3 flex flex-row justify-start">
                    <div>
                        <PercentCircle
                            easy={easyQuestions}
                            medium={mediumQuestions}
                            hard={hardQuestions}
                            total={totalQuestions}
                        />
                    </div>
                    <div className="w-2/3 flex flex-col gap-3">
                        {
                            SubjectStats.map((item, index) => (
                                <div key={index} className="w-full flex flex-col gap-1.5">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="text-base font-extrabold text-slate-500">{item.name}</div>
                                        <div className="text-base font-extrabold text-slate-500">{item.solvedQuestions}/{item.totalQuestions}</div>
                                    </div>
                                    <PercentBar solved={item.solvedQuestions} total={item.totalQuestions} indicator={item.indicator} background={item.background} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-start items-start mt-5'>
                <div className='w-full'>
                    <div className='w-full flex flex-row justify-between items-center cursor-pointer'>
                        {SectionData.map((item, index) => (
                            <div
                                onClick={() => setSelectedSection(item.tag)}
                                key={index}
                                className='flex-1 flex flex-col relative z-0'
                            >
                                <div className='flex flex-row justify-center items-center gap-1.5 p-3'>
                                    <img src={item.icon} alt='syllabus' className='w-5 h-5' />
                                    <div className='text-sm font-extrabold text-slate-700'>{item.name}</div>
                                </div>
                                {
                                    item.tag === selectedSection ? (
                                        <motion.div
                                            layoutId='underline'
                                            className='absolute z-0 -bottom-1 w-full h-0.5 rounded bg-red-500'
                                        />
                                    ) : null
                                }
                            </div>
                        ))}
                    </div>
                    <div className="mt-5">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDasboard