import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center w-full h-24 px-10 bg-amber-300">
      <Link to="/" className="text-4xl font-bold">
        헤더
      </Link>
    </div>
  );
};

export default Header;
