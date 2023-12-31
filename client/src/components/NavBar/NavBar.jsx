import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

function NavBar() {
  const location = useLocation();
  const isApplicationPage =
    location.pathname.startsWith("/basvuru") ||
    location.pathname.endsWith("/admin");
  const accessToken = sessionStorage.getItem("accessToken");

  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-950 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <img src={logo} className="w-32 md:w-40 lg:w-56 h-auto" alt="Logo" />

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={handleMobileMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <i className="material-icons">menu</i>
        </button>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-3  rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 ">
            {accessToken && (
              <li>
                <Link
                  to="/admin/basvuru-listesi"
                  className="text-white font-normal block py-2 px-3 rounded  hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 "
                >
                  Admin Paneli
                </Link>
              </li>
            )}

            {isApplicationPage && (
              <li>
                <Link
                  to="/basvuru-sorgula"
                  className="text-white font-normal block py-2 px-3  rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 "
                >
                  Başvuru Sorgula
                </Link>
              </li>
            )}

            {isApplicationPage && (
              <li>
                <Link
                  to="/basvuru-olustur"
                  className="text-white font-normal block py-2 px-3  rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2"
                >
                  Başvuru Oluştur
                </Link>
              </li>
            )}

            {!accessToken && (
              <li>
                <Link
                  to="/admin"
                  className="text-white block font-normal py-2 px-3 rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2"
                >
                  Admin Giriş
                </Link>
              </li>
            )}

            {accessToken && (
              <li>
                <Link
                  to="/"
                  onClick={() => (
                    sessionStorage.removeItem("accessToken"),
                    sessionStorage.removeItem("refreshToken")
                  )}
                  className="text-white block font-normal py-2 px-3 rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2"
                >
                  Çıkış
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
