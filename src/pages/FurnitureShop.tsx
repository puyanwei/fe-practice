import '../styles/furniture-shop/furniture-shop-styles.css';
import 'tailwindcss/tailwind.css';
import IconArrow from 'icons/furniture-shop-icons/IconArrow';

const FurnitureShop = () => {
  return (
    <div className="furniture-shop">
      <h3>room</h3>
      <nav> home | shop | about | contact</nav>
      <img
        className="w-full my-4"
        src="images/mobile-image-hero-1.jpg"
        alt=""
      />
      <div className="m-8">
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
          <span className="inline-block uppercase text-xxs my-6 mr-8 tracking-xlg font-semibold no-underline text-black">
            Shop now
          </span>
          <IconArrow />
        </a>
      </div>
      <img className="w-full" src="images/image-about-dark.jpg" alt="" />
      <div className="m-8">
        <h3 className="text-xxs uppercase tracking-xsm">About our furniture</h3>
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
