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
    <>
      <div className="mx-auto max-w-md p-4 border-1 border-solid border-gray-300 rounded-md shadow-md mb-5">
        <h1 className="text-2xl font-bold mb-6">Başvuru Sorgula</h1>
        <div className="mx-auto max-w-md p-4 ">
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 mb-4">
              <label htmlFor="applicationCode" className="block font-bold">
                Başvuru Kodu:
              </label>
              <input
                type="text"
                id="applicationCode"
                placeholder="Başvuru Kodu"
                value={applicationCode}
                onChange={(e) => setApplicationCode(e.target.value)}
                className="border p-2 rounded"
              />
            </div>
          </div>

          <div>
            <Link to={`basvuru/${applicationCode}`}>
              <button
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Sorgula
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Link
        to="#"
        onClick={handleGoBack}
        className="text-blue-500 hover:underline font"
      >
        Geri Dön
      </Link>{" "}
    </>
  );
}

export default SearchApplication;
