import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className="flex p-5 justify-between bg-amber-100">
      <h1 className="font-bold">
        <Link to={"/"}>#VANLIFE</Link>
      </h1>
      <ul className="flex justify-between gap-5">
        <Link to={"/about"}>About</Link>
        <Link to={"/vans"}>Vans</Link>
      </ul>
    </nav>
  );
};
