interface CarouselButtonProps {
  children: JSX.Element;
  onClick: () => void;
}

const CarouselButton = ({ children, onClick }: CarouselButtonProps) => (
  <button className="inline-block p-4" onClick={onClick}>
    {children}
  </button>
);

export default CarouselButton;
