import '../styles/furniture-shop/furniture-shop-styles.css';
import 'tailwindcss/tailwind.css';
import IconArrow from 'icons/furniture-shop-icons/IconArrow';
import IconHamburger from 'icons/furniture-shop-icons/IconHamburger';

const FurnitureShop = () => {
  return (
    <div className="furniture-shop">
      <div className="relative">
        <img
          className="w-full my-4 mt-0"
          src="images/mobile-image-hero-1.jpg"
          alt=""
        />
        <div className="absolute top-6 left-4">
          <IconHamburger />
        </div>
        <h3 className="absolute text-white font-semibold top-4 left-1/2 transform -translate-x-1/2">
          room
        </h3>
      </div>
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
        <a href="/">
          <span className="inline-block uppercase text-xxs mt-10 ml-0 mb-2 mr-6 tracking-xlg font-semibold no-underline text-black">
            Shop now
          </span>
          <span className="inline-block">
            <IconArrow />
          </span>
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
