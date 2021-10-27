import { useState } from 'react';
import StyledIcon from 'components/shared/StyledIcon';
import IconAngleLeft from 'icons/furniture-shop-icons/IconAngleLeft';
import IconAngleRight from 'icons/furniture-shop-icons/IconAngleRight';

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
      <div className="bg-black absolute bottom-0 right-0 h-12">
        <StyledIcon
          icon={<IconAngleLeft />}
          button
          onClick={() => handleImageIndex(-1)}
          styles="inline-flex p-4"
        />
        <StyledIcon
          icon={<IconAngleRight />}
          button
          onClick={() => handleImageIndex(1)}
          styles="inline-flex p-4"
        />
      </div>
    </div>
  );
};

export default Carousel;
