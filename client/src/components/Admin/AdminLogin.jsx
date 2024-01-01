import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        setErrorMessage("Kullanıcı adı ve parola boş bırakılamaz.");
        return;
      }

      const response = await axios.post(
        "https://ticketsystem-ts7l.onrender.com/admin-login",
        {
          username,
          password,
        }
      );

      console.log(response);
      console.log("Login successful");
      sessionStorage.setItem("accessToken", response.data.accessToken);
      sessionStorage.setItem("refreshToken", response.data.refreshToken);
      navigate("/admin/basvuru-listesi");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Yanlış parola veya kullanıcı adı");
    }
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
            required
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
            required
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
    </div>
  );
}

export default AdminLogin;
