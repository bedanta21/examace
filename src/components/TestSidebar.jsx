import { useNavigate } from "react-router-dom";

const TestSidebar = ({ answerStatus, setCurrentQuestionIndex }) => {
    const navigate = useNavigate()

    const handleClick = (route) => {
        navigate(route)
    }


    return (
        <div className='flex flex-col justify-center items-center h-full gap-5'>
            <div className="w-full px-3 flex flex-col justify-start items-start gap-3">
                <div className="w-full flex flex-row justify-between items-center">
                    <div className='w-9 h-9 flex justify-center items-center bg-slate-300 text-white text-lg font-extrabold rounded'>{answerStatus.filter(status => !status.answered && !status.markedForReview).length}</div>
                    <div className="text-sm text-slate-500 font-extrabold">unanswered</div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    <div className='w-9 h-9 flex justify-center items-center bg-yellow-500 text-white text-lg font-extrabold rounded'>{answerStatus.filter(status => status.markedForReview).length}</div>
                    <div className="text-sm text-slate-500 font-extrabold">Reviewed</div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    <div className='w-9 h-9 flex justify-center items-center bg-green-500 text-white text-lg font-extrabold rounded'>{answerStatus.filter(status => status.answered).length}</div>
                    <div className="text-sm text-slate-500 font-extrabold">Answered</div>
                </div>
            </div>
            <div className="w-full border-t-2"></div>
            <div className="flex flex-row flex-wrap justify-start items-start gap-1.5 p-3">
                {
                    answerStatus.map((status, index) => {
                        let bgColor;
                        if (status.answered) {
                            bgColor = 'bg-green-500';
                        } else if (status.markedForReview) {
                            bgColor = 'bg-yellow-500';
                        } else {
                            bgColor = 'bg-slate-300';
                        }

                        return (
                            <div
                                key={index}
                                onClick={() => setCurrentQuestionIndex(index)}
                                className={`w-9 h-9 flex justify-center items-center text-white text-lg font-extrabold rounded cursor-pointer ${bgColor}`}
                            >
                                {index + 1}
                            </div>
                        );
                    })
                }
            </div>
            <div className="w-full border-t-2"></div>
            <div
                onClick={() => handleClick('/dashboard')}
                className="w-1/2 p-3 text-sm text-white font-extrabold bg-rose-400 rounded flex justify-center items-center cursor-pointer">Submit</div>
        </div>
    );
}

export default TestSidebar;
