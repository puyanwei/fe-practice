import '../styles/furniture-shop/furniture-shop-styles.css';
import 'tailwindcss/tailwind.css';
import IconArrow from 'icons/furniture-shop-icons/IconArrow';
import Carousel from 'components/furniture-shop/Carousel';
import StyledIcon from 'components/shared/StyledIcon';

const FurnitureShop = () => {
  return (
    <div className="furniture-shop">
      <Carousel
        mobileImages={[
          'images/mobile-image-hero-1.jpg',
          'images/mobile-image-hero-2.jpg',
          'images/mobile-image-hero-3.jpg',
        ]}
      />
      <div className="m-5">
        <h2 className="text-lg font-bold">
          Discover innovative ways to decorate
        </h2>
        <p className="furniture-desc">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <a href="#">
          <span className="inline-block uppercase text-xxs mt-10 ml-0 mb-2 mr-6 tracking-xlg font-semibold no-underline text-black">
            Shop now
          </span>
          <StyledIcon icon={<IconArrow />} styles="inline-block" />
        </a>
      </div>
      <img className="w-full my-10" src="images/image-about-dark.jpg" alt="" />
      <div className="m-5 mb-10">
        <h3 className="text-xxs font-bold uppercase tracking-xsm mb-2">
          About our furniture
        </h3>
        <p className="furniture-desc">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img className="w-full" src="images/image-about-light.jpg" alt="" />
    </div>
  );
};

export default FurnitureShop;
