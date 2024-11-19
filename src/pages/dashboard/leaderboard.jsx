import images from "../../constants/images";
import RankCard from "../../components/rank";

const LeaderBoardDashboard = () => {
    const PreviousLiveMock = [
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

    return (
        <div className="flex flex-col justify-center items-center py-5">
            <div className="w-full flex flex-col justify-center items-center gap-3">
                <div className="px-1.5 py-0.5 w-48 bg-rose-200 rounded">
                    <div className="text-sm text-white font-extrabold text-center  p-1.5 bg-rose-400 rounded">Cracker 20 Result</div>
                </div>
                <div className="w-full h-96 flex flex-row justify-center items-end">
                    <div className="w-1/4 h-5/6 rounded-l-lg bg-rose-100">
                        <RankCard />
                    </div>
                    <div className="w-1/4 h-full bg-rose-100 rounded-t-lg">
                        <RankCard />
                    </div>
                    <div className="w-1/4 h-4/6 bg-rose-100 rounded-r-lg">
                        <RankCard />
                    </div>
                </div>
                <div className="text-xs text-rose-100 font-extrabold rounded px-3 py-1.5 text-center bg-rose-400 flex flex-row justify-center items-center gap-1.5">
                    your rank was <span className="text-lg text-white">4</span> and ranked out of <span className="text-base text-white">1612</span> users
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl font-extrabold my-3">Upcoming...</div>
            </div>
            <div className="w-11/12 mx-auto flex flex-col">
                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl font-extrabold my">Previous Live Mock Test</div>
                <div className="mb-5 flex flex-row border-b-2 py-1.5 bg-rose-400 rounded">
                    <div className="w-1/5 text-lg font-extrabold text-white text-center">ID</div>
                    <div className="w-1/5 text-lg font-extrabold text-white text-center">exam type</div>
                    <div className="w-1/5 text-lg font-extrabold text-white text-center">total question</div>
                    <div className="w-1/5 px-2 text-lg font-extrabold text-white text-center">date</div>
                    <div className="w-1/5 px-2 text-lg font-extrabold text-white text-center">participants</div>
                </div>
                <div className="flex flex-col gap-3">
                    {
                        PreviousLiveMock.map((item) => (
                            <div key={item.id} className="w-full flex flex-row bg-slate-100 rounded py-3 cursor-pointer transition-colors duration-300 hover:bg-slate-300">
                                <div className="w-1/5 text-base text-slate-500 text-center">{item.id}</div>
                                <div className="w-1/5 text-base text-slate-500 text-center">{item.type}</div>
                                <div className="w-1/5 text-base text-slate-500 text-center">{item.questions}</div>
                                <div className="w-1/5 text-base text-slate-500 text-center">{item.date.day}-{item.date.month}-{item.date.year}</div>
                                <div className="w-1/5 text-base text-slate-500 rounded text-center">
                                    {item.participants}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default LeaderBoardDashboard