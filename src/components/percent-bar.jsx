const PercentBar = ({ total, solved, background, indicator }) => {
    const percentage = (solved / total) * 100
    return (
        <div className={`w-full h-1.5 rounded flex flex-row justify-start items-center ${background}`}>
            <div
                className={`h-full ${indicator} rounded`}
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    )
}

export default PercentBar