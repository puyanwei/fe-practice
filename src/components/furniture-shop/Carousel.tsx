import { useState } from 'react';
import StyledIcon from 'components/shared/StyledIcon';
import IconAngleLeft from 'icons/furniture-shop-icons/IconAngleLeft';
import IconAngleRight from 'icons/furniture-shop-icons/IconAngleRight';

export interface CarouselProps {
  mobileImages: string[];
  desktopImages: string[];
}

const Carousel = ({ mobileImages, desktopImages }: CarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageIndex = (iteration: number) => {
    const indexNumber = imageIndex + iteration;
    if (indexNumber > -1 && indexNumber < mobileImages.length)
      setImageIndex(imageIndex + iteration);
  };

  return (
    <div className="relative lg:w-3/5 lg:max-h-96">
      <img
        className="w-full my-4 mt-0 lg:my-0 lg:object-cover lg:h-full"
        src={
          window.innerWidth < 1024
            ? mobileImages[imageIndex]
            : desktopImages[imageIndex]
        }
        alt=""
      />
      <div className="bg-black absolute bottom-0 right-0 h-12 lg:-right-20 lg:ml-px">
        <StyledIcon
          icon={<IconAngleLeft />}
          button
          onClick={() => handleImageIndex(-1)}
          styles="inline-flex p-4 hover:bg-grayDarker"
        />
        <StyledIcon
          icon={<IconAngleRight />}
          button
          onClick={() => handleImageIndex(1)}
          styles="inline-flex p-4 hover:bg-grayDarker"
        />
      </div>
    </div>
  );
};

export default Carousel;
