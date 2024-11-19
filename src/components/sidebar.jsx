import images from "../constants/images"
import { Link, useNavigate } from "react-router-dom"

const Sidebar = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route);
    };

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <Link to={`/`} className="h-16 flex flex-row justify-center items-center gap-1.5 p-3 border-b-2">
                <img src={images.Logo} alt='logo' className='w-10 h-10' />
            </Link>
            <div className="flex-1 p-3">
                <div className="flex flex-row justify-start items-center p-3 gap-3 cursor-pointer my-3 transition-transform duration-300 hover:scale-105" onClick={() => handleClick('/dashboard')}>
                    <img src={images.Home} alt="dashboard" className="w-5 h-5" />
                    <div className="text-sm text-slate-500 font-extrabold">Dashboard</div>
                </div>
                <div className="flex flex-row justify-start items-center p-3 gap-3 cursor-pointer my-3 transition-transform duration-300 hover:scale-105" onClick={() => handleClick('/dashboard/course')}>
                    <img src={images.Course} alt="dashboard" className="w-5 h-5" />
                    <div className="text-sm text-slate-500 font-extrabold">Course Content</div>
                </div>
                <div className="flex flex-row justify-start items-center p-3 gap-3 cursor-pointer my-3 transition-transform duration-300 hover:scale-105" onClick={() => handleClick('/dashboard/leaderboard')}>
                    <img src={images.Rank} alt="dashboard" className="w-5 h-5" />
                    <div className="text-sm text-slate-500 font-extrabold">Leader Board</div>
                </div>
                <div className="flex flex-row justify-start items-center p-3 gap-3 cursor-pointer my-3 transition-transform duration-300 hover:scale-105" onClick={() => handleClick('/dashboard/blog')}>
                    <img src={images.News} alt="dashboard" className="w-5 h-5" />
                    <div className="text-sm text-slate-500 font-extrabold">Blog / News</div>
                </div>
                <div className="flex flex-row justify-start items-center p-3 gap-3 cursor-pointer my-3 transition-transform duration-300 hover:scale-105" onClick={() => handleClick('/dashboard/profile')}>
                    <img src={images.Profile} alt="register" className="w-5 h-5" />
                    <div className="text-sm text-slate-500 font-extrabold">Profile</div>
                </div>
            </div>
            <div className="h-16 p-3 border-t-2 flex flex-row justify-center items-center gap-1.5 cursor-pointer">
                <img src={images.out} alt="signout" className="w-5 h-5" />
                <div className="text-sm text-red-500 font-extrabold">log out</div>
            </div>
        </div>
    )

}

export default Sidebar