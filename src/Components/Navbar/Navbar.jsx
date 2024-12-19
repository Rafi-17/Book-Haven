import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links=<>
        <li><NavLink className={({isActive}) => isActive ? "bg-transparent border-[#23BE0A] text-[#23BE0A] border font-semibold" : ""} to={"/"}>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "bg-transparent border-[#23BE0A] text-[#23BE0A] border font-semibold" : ""} to={"/listedbooks"} >Listed Books</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "bg-transparent border-[#23BE0A] text-[#23BE0A] border font-semibold" : ""} to={"/pagestoread"}>Pages to read</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100 mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={'/'}><h2 className="text-lg md:text-2xl lg:text-4xl font-bold">Career Hub</h2></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="bg-[#23BE0A] rounded-lg py-1 md:py-2 lg:py-3 px-3 md:px-5 lg:px-7 text-sm md:text-base font-semibold lg:font-semibold text-white mr-4">Sign In</button>
        <button className="bg-[#59C6D2] rounded-lg py-1 md:py-2 lg:py-3 px-3 md:px-5 lg:px-7 text-sm md:text-base font-medium lg:font-semibold text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
