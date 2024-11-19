import images from "../constants/images";

const Footer = () => {
  return (
    <div className="max-w-[1280px] mx-auto my-10 flex flex-col justify-center items-center gap-1.5">
      <div className="flex flex-row justify-center items-center gap-3">
        <div className="flex flex-row justify-center items-center gap-1">
          <img src={images.call} alt="location" className="w-3 h-3" />
          <div className="text-xs text-slate-500 font-bold">+91-9394879962</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-1">
          <img src={images.location} alt="location" className="w-3 h-3" />
          <div className="text-xs text-slate-500 font-bold">
            Dibrugarh, Assam
          </div>
        </div>
      </div>
      <div className="text-sm text-slate-700 font-bold">
        Copyright belongs to @lobi
      </div>
    </div>
  );
};

export default Footer;
