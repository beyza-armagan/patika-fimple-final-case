import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("kodluyoruz");
  const [password, setPassword] = useState("bootcamp109");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "kodluyoruz" && password === "bootcamp109") {
      // navigate to the admin dashboard or desired path
      console.log("Login successful");
      navigate("/admin/basvuru-listesi");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <div className="mx-auto max-w-md p-4 border-1 border-solid border-gray-300 rounded-md shadow-md mb-6">
        <h1 className="text-2xl font-bold mb-6">Admin Girişi</h1>

        <div className="mb-4">
          <label htmlFor="username" className="block font-bold">
            Kullanıcı Adı:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-bold">
            Parola:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mt-4 rounded"
        >
          Giriş Yap
        </button>
        {errorMessage && (
          <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
        )}
      </div>
      <Link
        to="#"
        onClick={handleGoBack}
        className="text-blue-500 hover:underline font"
      >
        Geri Dön
      </Link>
    </div>
  );
}

export default AdminLogin;
