import '../styles/furniture-shop/furniture-shop-styles.css';
import 'tailwindcss/tailwind.css';

const FurnitureShop = () => {
  return (
    <div className="furniture-shop">
      <div>Room</div>
      <nav> | home | shop | about | contact</nav>
      <div>Carousel</div>
      <div className="m-8">
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <h2>Shop now</h2>
      </div>
      <img src="images/image-about-dark.jpg" alt="" />
      <h3>About our furniture</h3>
      <p>
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
      <img src="images/image-about-light.jpg" alt="" />
    </div>
  );
};

export default FurnitureShop;
