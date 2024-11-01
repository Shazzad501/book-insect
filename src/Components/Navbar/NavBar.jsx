import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = <>
      <li><NavLink to="/" className="font-bold text-base">Home</NavLink></li>
      <li><NavLink to="/readlist" className="font-bold text-base">Listed Book</NavLink></li>
      <li><a className="font-bold text-base">Pages to Read</a></li>
  </>
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto m-0 px-0 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
           {links}
          </ul>
        </div>
        <a className="text-xl font-bold">Book Insect</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-2">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <NavLink className="btn bg-[#23BE0A] text-white hover:bg-[#23BE0A] font-bold text-base">Sign In</NavLink>
        <NavLink className="btn bg-[#59C6D2] text-white hover:bg-[#59C6D2] font-bold text-base">Sign Up</NavLink>
      </div>
    </div>
  );
};

export default NavBar;