import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchApplication() {
  const [applicationCode, setApplicationCode] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    return <Link to={`/basvuru-sorgula?code=${applicationCode}`} />;
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Başvuru Sorgula</h1>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Başvuru Kodu"
          value={applicationCode}
          onChange={(e) => setApplicationCode(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <Link to={`basvuru/${applicationCode}`}>
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Sorgula
          </button>
        </Link>
      </div>
      <hr className="border-teal-500 border-t-3 my-8" />

      <Link
        to="#"
        onClick={handleGoBack}
        className="text-blue-500 hover:underline font"
      >
        Go Back
      </Link>
    </div>
  );
}

export default SearchApplication;
