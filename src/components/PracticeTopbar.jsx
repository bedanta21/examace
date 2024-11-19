const PracticeTopBar = ({ currentQuestionIndex, exam_type, question_type, date }) => {
    return (
        <div className='h-16 px-3 border-b-2 bg-white flex flex-row justify-between items-center'>
            <div className="text-lg text-slate-900 font-extrabold">Question Number : {currentQuestionIndex + 1}/75</div>
            <div className="flex flex-row justify-between items-center w-1/3">
                <div>{exam_type}</div>
                <div>{question_type}</div>
                <div>{date}</div>
            </div>
        </div>
    )
}

export default PracticeTopBar