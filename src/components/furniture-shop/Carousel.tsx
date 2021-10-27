import { useState } from 'react';
import StyledIcon from 'components/shared/StyledIcon';
import IconAngleLeft from 'icons/furniture-shop-icons/IconAngleLeft';
import IconAngleRight from 'icons/furniture-shop-icons/IconAngleRight';
import IconHamburger from 'icons/furniture-shop-icons/IconHamburger';
import LogoRoom from 'icons/furniture-shop-icons/LogoRoom';
import CarouselButton from './CarouselButton';

interface CarouselProps {
  mobileImages: string[];
}

const Carousel = ({ mobileImages }: CarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageIndex = (iteration: number) => {
    const indexNumber = imageIndex + iteration;
    if (indexNumber > -1 && indexNumber < mobileImages.length)
      setImageIndex(imageIndex + iteration);
  };

  return (
    <div className="relative">
      <img className="w-full my-4 mt-0" src={mobileImages[imageIndex]} alt="" />
      <StyledIcon icon={<IconHamburger />} styles="absolute top-6 left-4" />
      <StyledIcon
        icon={<LogoRoom />}
        styles="absolute text-white font-semibold top-6 left-1/2 transform -translate-x-1/2"
      />
      <div className="bg-black absolute bottom-0 right-0 h-12">
        <CarouselButton onClick={() => handleImageIndex(-1)}>
          <IconAngleLeft />
        </CarouselButton>
        <CarouselButton onClick={() => handleImageIndex(1)}>
          <IconAngleRight />
        </CarouselButton>
      </div>
    </div>
  );
};

export default Carousel;
