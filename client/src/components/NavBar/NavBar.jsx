import "tailwindcss/tailwind.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isApplicationPage = location.pathname.startsWith("/basvuru");
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <nav className="bg-blue-950 ... px-4 py-2 mb-4">
      <div className="flex justify-between items-center">
        <div className="mb-4 flex items-center">
          <img
            src="../../public/apply.png" // Replace with the actual path to your image
            alt="Logo"
            className="w-8 h-8 mr-2 align-middle" // Adjust the size and margin as needed
            color="white"
          />
          <h1 className="mb-4 text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-tight text-white dark:text-white baseline">
            <span className="underline underline-offset-4 decoration-7 decoration-blue-500 dark:decoration-blue-600">
              Başvuru Yönetim Sistemi
            </span>
          </h1>
        </div>
        <div className="flex space-x-4">
          {isApplicationPage && (
            <div className="flex items-center">
              <Link to="/basvuru-sorgula">
                <button
                  type="button"
                  className="bg-blue-500 hover:border-blue-300 border-transparent border-2 text-white px-4 py-2 rounded"
                >
                  Başvuru Sorgula
                </button>
              </Link>
            </div>
          )}
          {isApplicationPage && (
            <div className="flex items-center">
              <Link to="/basvuru-olustur">
                <button
                  type="button"
                  className="bg-blue-500 hover:border-blue-300 border-transparent border-2 text-white px-4 py-2 rounded"
                >
                  Başvuru Oluştur
                </button>
              </Link>
            </div>
          )}
          {!isAdminPage && (
            <div className="flex items-center">
              <Link to="/admin">
                <button className="bg-blue-800 hover:border-blue-300 border-transparent border-2 text-white px-4 py-2 rounded">
                  Admin Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
