import images from "../constants/images"

const TestBottombar = ({ handlePrevious, handleNext, handleSave, handleReview, handleClear }) => {
    return (
        <div className='h-16 border-t-2 bg-white flex flex-row justify-between items-center px-3'>
            <div className="flex flex-row gap-3">
                <div
                    onClick={() => handlePrevious()}
                    className="flex flex-row justify-center items-center gap-1.5 py-1.5 px-3 border-2 rounded cursor-pointer">
                    <img src={images.Backward} alt="prev" className="w-3 h-3" />
                    <div className='text-sm text-slate-500 font-extrabold'>Prev</div>
                </div>
                <div
                    onClick={() => handleNext()}
                    className="flex flex-row justify-center items-center gap-1.5 py-1.5 px-3 border-2 rounded cursor-pointer">
                    <div className='text-sm text-slate-500 font-extrabold'>Next</div>
                    <img src={images.Forward} alt="prev" className="w-3 h-3" />
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <div
                    onClick={() => handleReview()}
                    className="flex flex-row justify-center items-center gap-1.5 py-1.5 px-3 rounded cursor-pointer bg-yellow-500 w-24">
                    <div className='text-sm text-white font-extrabold'>Review</div>
                </div>
                <div
                    onClick={() => handleSave()}
                    className="flex flex-row justify-center items-center gap-1.5 py-1.5 px-3 rounded cursor-pointer bg-green-500 w-24">
                    <div className='text-sm text-white font-extrabold'>Save</div>
                </div>
                <div
                    onClick={() => handleClear()}
                    className="flex flex-row justify-center items-center gap-1.5 py-1.5 px-3 rounded cursor-pointer bg-red-500 w-24">
                    <div className='text-sm text-white font-extrabold'>Clear</div>
                </div>
            </div>
        </div>
    )
}

export default TestBottombar