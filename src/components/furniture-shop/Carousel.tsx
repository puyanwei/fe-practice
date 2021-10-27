import StyledIcon from 'components/shared/StyledIcon';
import IconAngleLeft from 'icons/furniture-shop-icons/IconAngleLeft';
import IconAngleRight from 'icons/furniture-shop-icons/IconAngleRight';
import IconHamburger from 'icons/furniture-shop-icons/IconHamburger';
import LogoRoom from 'icons/furniture-shop-icons/LogoRoom';

const Carousel = () => {
  const images = [];
  return (
    <div className="relative">
      <img
        className="w-full my-4 mt-0"
        src="images/mobile-image-hero-1.jpg"
        alt=""
      />
      <StyledIcon icon={<IconHamburger />} styles="absolute top-6 left-4" />
      <StyledIcon
        icon={<LogoRoom />}
        styles="absolute text-white font-semibold top-6 left-1/2 transform -translate-x-1/2"
      />
      <div className="bg-black absolute bottom-0 right-0 h-12">
        <StyledIcon icon={<IconAngleLeft />} styles="inline-block m-4" />
        <StyledIcon icon={<IconAngleRight />} styles="inline-block m-4" />
      </div>
    </div>
  );
};

export default Carousel;
