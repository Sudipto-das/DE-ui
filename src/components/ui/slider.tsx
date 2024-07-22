import { useState, useRef, useEffect, FC } from "react";

interface SliderProps {
  images: string[];

}

const Slider: FC<SliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (images.length + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (carouselRef.current) {
      if (currentSlide === images.length) {
        // Transition to the first image smoothly
        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = `translateX(0)`;
        setTimeout(() => {
          carouselRef.current!.style.transition = "transform 0.8s";
          setCurrentSlide(0);
        }, 50);
      } else {
        carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
    }
  }, [currentSlide, images.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 hover:cursor-pointer"
        ref={carouselRef}
      >
        {images.map((image, index) => (
          <div key={index} className="relative min-w-full">
            <img
              src={image}
              alt={`slide ${index + 1}`}
              loading="lazy"
              className="md:object-fit w-full h-52 md:h-[22rem] flex-shrink-0"
              style={{ minWidth: "100%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
          </div>
        ))}
      </div>
      <div className="flex my-3 gap-1 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 w-1.5 rounded-full ${
              currentSlide === index ? "bg-slate-400" : "bg-gray-800"
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;