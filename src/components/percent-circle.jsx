import React from 'react';

const PercentCircle = ({ easy, medium, hard, total }) => {
    // Calculate percentages
    const easyPercent = (easy / total) * 100;
    const mediumPercent = (medium / total) * 100;
    const hardPercent = (hard / total) * 100;
    const solvedPercent = easyPercent + mediumPercent + hardPercent;

    // Calculate circle circumference
    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    // Calculate stroke lengths for each segment
    const easyStrokeLength = (easyPercent / 100) * circumference;
    const mediumStrokeLength = (mediumPercent / 100) * circumference;
    const hardStrokeLength = (hardPercent / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center">
            <svg className="w-40 h-40">
                <circle
                    className="text-gray-300"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="80"
                    cy="80"
                />
                {/* Easy Segment */}
                <circle
                    className="text-green-400"
                    strokeWidth="10"
                    strokeDasharray={`${easyStrokeLength} ${circumference - easyStrokeLength}`}
                    strokeDashoffset={circumference * 0.25}  // Start at the top
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="80"
                    cy="80"
                />
                <circle
                    className="text-yellow-400"
                    strokeWidth="10"
                    strokeDasharray={`${mediumStrokeLength} ${circumference - mediumStrokeLength}`}
                    strokeDashoffset={circumference * 0.25 - easyStrokeLength}  // Start after easy segment
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="80"
                    cy="80"
                />
                <circle
                    className="text-red-400"
                    strokeWidth="10"
                    strokeDasharray={`${hardStrokeLength} ${circumference - hardStrokeLength}`}
                    strokeDashoffset={circumference * 0.25 - easyStrokeLength - mediumStrokeLength}  // Start after medium segment
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="80"
                    cy="80"
                />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{Math.round(solvedPercent)}%</span>
                <span className="text-sm text-gray-600">Solved</span>
            </div>
        </div>
    );
};

export default PercentCircle;
