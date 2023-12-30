import "tailwindcss/tailwind.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isApplicationPage = location.pathname.startsWith("/basvuru");
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <nav>
      <div className="mb-4">
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          <span className="underline underline-offset-4 decoration-7 decoration-blue-400 dark:decoration-blue-600">
            Başvuru Yönetim Sistemi
          </span>
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {isApplicationPage && (
          <div className="mb-4 sm:mb-0">
            <Link to="/basvuru-sorgula">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Başvuru Sorgula
              </button>
            </Link>
          </div>
        )}
        {!isAdminPage && (
          <div>
            <Link to="/admin">
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Admin Login
              </button>
            </Link>
          </div>
        )}
      </div>
      <hr className="border-blue-500 border-t-1 my-4 sm:my-6" />
    </nav>
  );
}

export default NavBar;
