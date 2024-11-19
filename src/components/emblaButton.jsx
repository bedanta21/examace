import React, { useCallback, useEffect, useState } from "react";
import images from "../constants/images";

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="bg-slate-300 transition-colors duration-300 hover:bg-slate-100 rounded w-10 h-10 flex justify-center items-center"
      type="button"
      {...restProps}
    >
      <img src={images.Backward} alt="back" className="w-5 h-5" />
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="bg-slate-300 transition-colors duration-300 hover:bg-slate-100 rounded w-10 h-10 flex justify-center items-center"
      type="button"
      {...restProps}
    >
      <img src={images.Forward} className="w-5 h-5" alt="forward" />
      {children}
    </button>
  );
};
