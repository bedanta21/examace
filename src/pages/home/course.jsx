import { motion } from "framer-motion";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const SubjectsDetails = [
  {
    subject: "Chemistry",
    route: 'chemistry',
    chapters: 22,
    questions: 1500,
    mockTests: 100,
    enrollments: 1200,
    image: images.ChemistryBackground
  },
  {
    subject: "Physics",
    route: 'physics',
    chapters: 20,
    questions: 1400,
    mockTests: 80,
    enrollments: 1100,
    image: images.PhysicsBackground
  },
  {
    subject: "Math",
    route: 'math',
    chapters: 25,
    questions: 1600,
    mockTests: 120,
    enrollments: 1300,
    image: images.MathBackground
  }
];


const Course = () => {
  return (
    <div className='my-5 flex flex-col gap-5'>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl font-extrabold">Previous Years JEE - Mains / Advance Mock Tests</div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
        viewport={{ once: true }}
        className="h-72 flex flex-row justify-start items-center gap-5">
        <img src={images.PYQ} alt='previous' className="w-6/12 h-full rounded" />
        <div className="h-full flex flex-col justify-between items-start">
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="flex flex-row justify-start items-center gap-3">
              <img src={images.Course} alt="desc" className="w-5 h-5" />
              <div className="text-base font-extrabold text-slate-500">Practice All JEE (Mains | Advance) Test Since - 2000</div>
            </div>
            <div className="flex flex-row justify-start items-center gap-3">
              <img src={images.About} alt="test" className="w-5 h-5" />
              <div className="text-base font-extrabold text-slate-500">100+ Mock Test</div>
            </div>
          </div>
          <Link
            to={`/dashboard/course/pyq`}
            className="p-3 w-64 text-center rounded bg-rose-400 text-sm text-white font-extrabold cursor-pointer">
            Study Now
          </Link>
        </div>
      </motion.div>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl font-extrabold mt-5">Topic Wise Content</div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        viewport={{ once: true }}
        className="flex flex-row justify-between">
        {
          SubjectsDetails.map((item, index) => (
            <div key={index} className="w-[400px] p-3 flex flex-col gap-3 bg-slate-100">
              <div className="w-full h-48">
                <img src={item.image} alt="header" className='w-full h-full object-cover rounded-t' />
              </div>
              <div>
                <div className='text-xl font-extrabold border-b-2 my-3'>{item.subject}</div>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row justify-center items-center gap-1.5'>
                      <img src={images.Course} alt='chapters' className='w-5 h-5' />
                      <div className='text-sm font-extrabold text-slate-500'>
                        {item.chapters} Chapters
                      </div>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-1.5'>
                      <img src={images.About} alt='question' className='w-5 h-5' />
                      <div className='text-sm font-extrabold text-slate-500'>
                        {item.questions}+ questions
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row justify-center items-center gap-1.5'>
                      <img src={images.News} alt='mock' className='w-5 h-5' />
                      <div className='text-sm font-extrabold text-slate-500'>
                        {item.mockTests}+ Chapter Wise Mock Test
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-center items-center border-b-2 py-3 my-3 gap-1.5'>
                  <div className='flex flex-row justify-center items-center gap-0'>
                    <div className='p-2 flex justify-center items-center bg-rose-100 rounded-full'>
                      <img src={images.Profile} alt='person' className='w-5 h-5' />
                    </div>
                    <div className='p-2 flex justify-center items-center bg-rose-300 rounded-full'>
                      <img src={images.Profile} alt='person' className='w-5 h-5' />
                    </div>
                    <div className='p-2 flex justify-center items-center bg-rose-200 rounded-full'>
                      <img src={images.Profile} alt='person' className='w-5 h-5' />
                    </div>
                  </div>
                  <div className='text-xs text-slate-500 font-extrabold'>
                    {item.enrollments}+ Enrolements
                  </div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                  <Link
                    to={`/dashboard/course/${item.route}`}
                    className='py-3 px-10 text-center rounded bg-rose-400 text-sm text-white font-extrabold cursor-pointer'>
                    Study Now
                  </Link>
                  <div className="flex flex-row justify-between items-center gap-1">
                    <div className="text-sm text-lime-500 font-extrabold">free</div>
                    <img src={images.unlock} alt="free" className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </motion.div>
    </div>
  );
};

export default Course;
