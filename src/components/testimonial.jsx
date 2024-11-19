import Carousel from "./carousel";

const Testimonial = () => {
  return (
    <div className="my-5 flex flex-row justify-between">
      <div className="flex flex-col w-1/3 justify-center">
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-4xl font-bold">
          INDIA's #19
        </div>
        <div className="text-base font-bold text-slate-500">
          Platform For Free Mock Test | PYQ Test
        </div>
      </div>
      <div className='w-3/5 h-72 relative'>
          <Carousel />
      </div>
    </div>
  );
};

export default Testimonial;
