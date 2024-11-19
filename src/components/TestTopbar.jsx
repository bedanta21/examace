const TestTopbar = ({ currentQuestionIndex, timeLeft }) => {
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        if (hours > 0) {
            return `${hours}hr ${minutes}min left`;
        } else if (minutes > 0) {
            return `${minutes}min left`;
        } else {
            return `${seconds}s left`;
        }
    };

    return (
        <div className='h-16 px-3 border-b-2 bg-white flex flex-row justify-between items-center'>
            <div className="text-lg text-slate-900 font-extrabold">Question Number : {currentQuestionIndex + 1}/75</div>
            <div className='w-2/5 flex flex-row justify-between items-center'>
                <div className='text-base text-slate-500 font-extrabold'>Time Remaining : </div>
                <div className="text-base text-red-500 font-extrabold">{formatTime(timeLeft)}</div>
            </div>
        </div>
    )
}

export default TestTopbar