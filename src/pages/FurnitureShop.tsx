import { useEffect, useState } from 'react';
import sanityClient from 'sanityClient';
import '../styles/furniture-shop/furniture-shop-styles.css';
import 'tailwindcss/tailwind.css';

import IconArrow from 'icons/furniture-shop-icons/IconArrow';
import Carousel from 'components/furniture-shop/Carousel';
import StyledIcon from 'components/shared/StyledIcon';
import IconClose from 'icons/furniture-shop-icons/IconClose';
import IconHamburger from 'icons/furniture-shop-icons/IconHamburger';
import LogoRoom from 'icons/furniture-shop-icons/LogoRoom';
import Navbar from 'components/furniture-shop/Navbar';

const FurnitureShop = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    sanityClient.fetch(`*`).then((data) => console.log(data));
  }, []);

  return (
    <div className="furniture-shop">
      {showNavbar && (
        <div className="flex justify-between">
          <StyledIcon
            icon={<IconClose />}
            button
            styles="inline-flex p-4"
            onClick={() => setShowNavbar(false)}
          />
          <Navbar headerNames={['home', 'shop', 'about', 'contact']} />
        </div>
      )}
      <div className="relative">
        <span
          className={`${
            showNavbar ? 'grey-out-children' : ''
          } lg:flex lg:flex-col lg:h-screen`}
        >
          <div className="lg:h-full lg:inline-flex lg:flex-grow-2">
            <Carousel
              mobileImages={[
                'images/mobile-image-hero-1.jpg',
                'images/mobile-image-hero-2.jpg',
                'images/mobile-image-hero-3.jpg',
              ]}
              desktopImages={[
                'images/desktop-image-hero-1.jpg',
                'images/desktop-image-hero-2.jpg',
                'images/desktop-image-hero-3.jpg',
              ]}
            />
            {!showNavbar && (
              <>
                <StyledIcon
                  icon={<LogoRoom />}
                  styles="absolute text-white font-semibold top-4 left-1/2 transform -translate-x-1/2 lg:hidden"
                />
                <StyledIcon
                  icon={<IconHamburger />}
                  button
                  styles="absolute top-4 left-4 cursor-pointer lg:hidden"
                  onClick={() => setShowNavbar(true)}
                />
              </>
            )}
            <div className="m-5 lg:m-14 lg:w-2/5">
              <h2 className="text-lg font-bold">
                Discover innovative ways to decorate
              </h2>
              <p className="furniture-desc">
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </p>
              <a href="/">
                <span className="inline-block uppercase text-xxs mt-10 ml-0 mb-2 mr-6 tracking-xlg font-semibold no-underline text-black">
                  Shop now
                </span>
                <StyledIcon icon={<IconArrow />} styles="inline-block" />
              </a>
            </div>
          </div>
          <div className="lg:h-full lg:inline-flex lg:flex-grow-1">
            <img
              className="w-full my-10 lg:my-0 lg:object-cover"
              src="images/image-about-dark.jpg"
              alt=""
            />
            <div className="m-5 mb-10 lg:w-4/5 lg:m-12">
              <h3 className="text-xxs font-bold uppercase tracking-xsm mb-2">
                About our furniture
              </h3>
              <p className="furniture-desc">
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </p>
            </div>
            <img
              className="w-full object-cover"
              src="images/image-about-light.jpg"
              alt=""
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default FurnitureShop;
