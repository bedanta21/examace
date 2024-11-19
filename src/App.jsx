import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import About from "./pages/home/about";
import Course from "./pages/home/course";
import Footer from "./components/footer";
import Register from "./pages/home/register";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/sidebar";
import CourseDashboard from "./pages/dashboard/course";
import LeaderBoardDashboard from "./pages/dashboard/leaderboard";
import BlogDashboard from "./pages/dashboard/blog";
import ProfileDasboard from "./pages/dashboard/profile";
import SubjectDashboard from './pages/dashboard/subject'
import Topbar from "./components/topbar"
import Test from "./pages/test/test"
import Login from "./pages/home/login";
import LeaderBoard from "./pages/home/leaderboard";
import Blog from "./pages/home/blog";
import PYQ from "./pages/dashboard/pyq";
import MobileView from "./pages/mobile/mobile-view";
import { useEffect } from "react";
import Practice from "./pages/dashboard/practice";
import ScrollToTop from "./components/scrollToTop";

const HomeLayout = () => {
  return (
    <div className="w-[1280px] mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const DashboardLayout = () => {
  return (
    <div className="w-[1280px] mx-auto flex flex-row">
      <div className="w-1/5 sticky top-0 left-0 h-screen border-l-2 border-r-2">
        <Sidebar />
      </div>
      <div className="w-4/5 border-r-2">
        <div className="w-full sticky z-10 top-0 left-0">
          <Topbar />
        </div>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        navigate('/mobile')
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [navigate])



  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="course" element={<CourseDashboard />} />
          <Route path="leaderboard" element={<LeaderBoardDashboard />} />
          <Route path="blog" element={<BlogDashboard />} />
          <Route path="profile" element={<ProfileDasboard />} />
          <Route path="course/pyq" element={<PYQ />} />
          <Route path="course/:id" element={<SubjectDashboard />} />
          <Route path="course/:id/:id" element={<Practice />} />
        </Route>
        <Route path="test/:id" element={<Test />} />
        <Route path="/mobile" element={<MobileView />} />
      </Routes>
    </>
  );
};

export default App;
