import { useState } from "react";
import { motion } from "framer-motion";
import images from "../../constants/images"

const Question = ({ selectedQuestion, handleModalClose }) => {
    const [selectedOption, setSelectedOption] = useState(null)

    const handleOptionChange = (value) => {
        if (selectedOption === value) {
            setSelectedOption(null)
        }
        else {
            setSelectedOption(value)
        }
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
    }

    const getExamClass = (exam) => {
        switch (exam) {
            case 'mains':
                return 'bg-yellow-200 text-yellow-800'; // Light yellow background
            case 'advanced':
                return 'bg-red-200 text-red-800';  // Light red background
            default:
                return 'bg-gray-200 text-gray-800';  // Default gray background
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed z-50 top-0 left-0 w-screen h-screen bg-white/75 flex justify-center items-center"
        >
            <div className="w-[1000px] bg-white border-2 rounded flex flex-col">
                <div className="flex flex-row justify-between items-center p-3 border-b-2">
                    <div className="flex flex-row justify-center items-center gap-1.5">
                        <div className="text-xl text-rose-500 font-extrabold">
                            Question {selectedQuestion.id} / {selectedQuestion.year}
                        </div>
                        <span className={`${getLevelClass(selectedQuestion.level)} rounded p-0.5`}>
                            {selectedQuestion.level}
                        </span>
                        <span className={`${getExamClass(selectedQuestion.exam)} rounded p-0.5`}>
                            {selectedQuestion.exam}
                        </span>
                    </div>
                    <div
                        className="w-5 h-5 cursor-pointer"
                        onClick={() => handleModalClose()}
                    >
                        <img src={images.Close} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="flex flex-col gap-5 p-3">
                    <div className="text-lg text-slate-700">Q. {selectedQuestion.question}</div>
                    <div className="flex flex-col gap-3">
                        {
                            selectedQuestion.options.map((item, index) => (
                                <div key={index} className="flex flex-row gap-3">
                                    <input
                                        type="radio"
                                        checked={selectedOption === item.option}
                                        onChange={() => handleOptionChange(item.option)}
                                        className="w-5 h-5"
                                    />
                                    <div className="text-base text-slate-700">{item.option}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center p-3">
                    <div className="text-sm text-white font-extrabold text-center px-3 py-1.5 bg-green-500 rounded cursor-pointer">Check Answer</div>

                    <div className="w-5 h-5 cursor-pointer">
                        <img src={images.Bookmark} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Question