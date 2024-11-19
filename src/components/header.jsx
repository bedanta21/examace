import { useNavigate } from "react-router-dom";
import images from "../constants/images";

const RoutesObject = [
  {
    icon: images.Home,
    name: "Home",
    route: "/"
  },
  {
    icon: images.Course,
    name: "Course",
    route: "/course"
  },
  {
    icon: images.Rank,
    name: "Leaderboard",
    route: "/leaderboard"
  },
  {
    icon: images.News,
    name: "Blog/News",
    route: "/blog"
  },
  {
    icon: images.About,
    name: "about",
    route: "/about"
  }
]

const Header = () => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className="w-full h-16 flex justify-between">
        <div className="flex flex-row gap-3 items-center">
          <div className="flex flex-row justify-center items-center">
            <img src={images.Logo} alt="logo" className="w-12 h-12" />
          </div>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <div className="flex flex-row items-center gap-3 border-2 border-rose-50 rounded-md p-1.5">
            <input type="text" placeholder="Search topics" className="text-sm text-slate-500 focus:outline-none" />
            <img src={images.Search} alt="search" className='w-5 h-5 cursor-pointer' />
          </div>
          <div className="flex flex-row justify-center items-center gap-1 cursor-pointer">
            <div onClick={() => handleClick('/login')} className="text-sm font-extrabold text-slate-500 transition-colors duration-300 hover:text-rose-500">
              Login
            </div>
            <div className="text-xl font-extrabold text-rose-500">/</div>
            <div onClick={() => handleClick('/register')} className="text-sm font-extrabold text-slate-500 transition-colors duration-300 hover:text-rose-500">
              Register
            </div>
          </div>
        </div>
      </div>
      <div className="sticky z-10 top-0 w-full h-16 flex flex-row justify-between items-center bg-white/95 border-t-2  border-b-2">
        {
          RoutesObject.map((item) => (
            <div
              className="flex-1 h-full flex justify-center items-center cursor-pointer transition-colors duration-300 hover:bg-rose-100"
              onClick={() => handleClick(item.route)}
              key={item.name}
            >
              <div className="flex flex-row justify-center items-center gap-3">
                <img src={item.icon} alt="home" className="w-5 h-5" />
                <div className="text-sm font-extrabold text-slate-500">{item.name}</div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Header;
