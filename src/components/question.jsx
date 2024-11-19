const Question = ({ question, selectedOption, handleOptionChange }) => {

    return (
        <div className="p-5 flex flex-col justify-start items-start gap-7">
            <div className="text-lg text-slate-700 font-extrabold">{question.question}</div>
            <div className="flex flex-col justify-start items-start gap-3">
                {Object.entries(question.options).map(([key, value]) => (
                    <div
                        className='flex flex-row justify-start items-center gap-3'
                        key={key}
                    >
                        <input
                            type="radio"
                            checked={selectedOption === key}
                            onChange={() => handleOptionChange(key)}
                            className='w-5 h-5'
                        />
                        <div className='text-lg text-slate-500 font-extrabold'>{value}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Question