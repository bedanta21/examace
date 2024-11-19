import { useNavigate } from 'react-router-dom'
import images from '../../constants/images'


const Register = () => {
    const navigate = useNavigate()

    const handleClick = (route) => {
        navigate(route)
    }

    return (
        <div className="h-[500px] bg-rose-100">
            <div className="flex flex-row justify-around items-center h-full bg-center bg-no-repeat" style={{ backgroundImage: `url(${images.study})` }}>
                <div className="h-2/4 p-5 transition-colors duration-300 bg-white/50 flex flex-col justify-between items-start">
                    <div className='text-xl text-rose-500 font-extrabold cursor-pointer hover:underline'>2000+ users</div>
                    <div className='flex flex-row justify-start items-center gap-1.5'>
                        <img src={images.time} alt='time' className='w-3 h-3' />
                        <div className='text-xs text-slate-500'>14-07-2024 : 12:05</div>
                    </div>
                </div>
                <div className="w-4/12 h-5/6 bg-white/95 flex flex-col justify-between">
                    <div className='flex flex-row justify-between items-center p-3 border-b-2'>
                        <div className='flex flex-row justify-center items-center gap-1.5'>
                            <img src={images.register} alt='register' className='w-6 h-6' />
                            <div className='text-xl font-extrabold'>register</div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-xs text-blue-500'>Already have a Account ? </div>
                            <div className='text-xs text-blue-500 underline cursor-pointer'> Login</div>
                        </div>
                    </div>
                    <div className='flex flex-col p-5 gap-3'>
                        <div className='flex flex-row border-2 rounded'>
                            <div className='border-r-2'>
                                <img src={images.email} alt='email' className='w-5 h-5 m-3' />
                            </div>
                            <input placeholder='your email address' className='flex-1 text-sm text-slate-500 p-1 focus:outline-none' />
                        </div>
                        <div className='flex flex-row border-2 rounded'>
                            <div className='border-r-2'>
                                <img src={images.unlock} alt='password' className='w-5 h-5 m-3' />
                            </div>
                            <input placeholder='your password' className='flex-1 text-sm text-slate-500 p-1 focus:outline-none' />
                        </div>
                        <div className='flex flex-row border-2 rounded'>
                            <div className='border-r-2'>
                                <img src={images.unlock} alt='email' className='w-5 h-5 m-3' />
                            </div>
                            <input placeholder='confirm password' className='flex-1 text-sm text-slate-500 p-1 focus:outline-none' />
                        </div>
                    </div>
                    <div className='p-5 flex flex-col justify-center items-center'>
                        <div className='flex flex-row justify-start items-center gap-3'>
                            <input type="checkbox" className='w-3 h-3' />
                            <div className='text-xs text-slate-500'>I have and agree to the Platform Agrement</div>
                        </div>
                        <div className='p-3 mt-1 w-1/2 bg-rose-500 rounded text-white font-extrabold text-center cursor-pointer' onClick={() => handleClick("/dashboard")}>register</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register