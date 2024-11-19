import images from "../constants/images"

const RankCard = () => {
    return (
        <div className="p-3 h-full w-full flex flex-col justify-between items-center">
            <div className="flex flex-col justify-center items-center gap-1.5">
                <div className="h-16 w-16 rounded-xl bg-white flex justify-center items-center">
                    <img src={images.Logo} className="w-5/6 h-5/6 object-cover" />
                </div>
                <div className="text-xl text-slate-700 font-extrabold">Gawd 231</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl font-extrabold my-3">Rank 1</div>
            <div className="flex flex-row justify-center items-center gap-1.5">
                <div className="h-8 w-8 shadow-lg rounded-xl bg-yellow-100 flex justify-center items-center">
                    <img src={images.Money} className="w-2/3 h-2/3 object-cover" />
                </div>
                <div className="text-xs text-slate-500 font-extrabold">Earn 1000 Rupess</div>
            </div>
        </div>
    )
}

export default RankCard