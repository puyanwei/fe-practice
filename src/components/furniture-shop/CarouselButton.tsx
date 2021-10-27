interface CarouselButtonProps {
  children: JSX.Element;
  onClick: () => void;
}

const CarouselButton = ({ children, onClick }: CarouselButtonProps) => (
  <div className="inline-block m-4 cursor-pointer" onClick={onClick}>
    {children}
  </div>
);

export default CarouselButton;
