interface NavbarProps {
  headerNames: string[];
}

const Navbar = ({ headerNames }: NavbarProps) => (
  <nav>
    <ul className="flex">
      {headerNames.map((name) => (
        <li
          className="text-xxs font-bold inline-flex m-4 lg:font-thin lg:mt-0 lg:hover:underline"
          key={name}
        >
          <a href="/">{name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
