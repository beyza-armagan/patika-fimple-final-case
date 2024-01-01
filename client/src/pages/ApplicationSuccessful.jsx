import { useLocation, useNavigate, Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const ApplicationSuccessful = () => {
  const { setData } = useData();
  const [code, setCode] = useState(null);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/basvuru-olustur"); // Go back to the previous page
  };

  const location = useLocation();

  const formData = useMemo(
    () =>
      location.state?.formData || {
        name: "",
        surname: "",
        age: "",
        tc: "",
        applicationReason: "",
        address: "",
        // additionalInfo: formData.additionalInfo,
      },
    [location.state]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const file = location.state?.file;
        // generate a random code
        const generatedCode = Math.floor(1000 + Math.random() * 9000);
        console.log("inhere");
        setCode(generatedCode);

        const dataWithCode = {
          ...formData,
          file,
          date: Date.now(),
          applicationCode: generatedCode,
        };

        // POST request to save the data
        await axios.post(
          "https://ticketsystem-ts7l.onrender.com/basvuru-olustur",
          dataWithCode
        );

        console.log(dataWithCode);

        setData(dataWithCode);
      } catch (error) {
        console.error("Error saving data:", error);
      }
    };

    fetchData();
  }, [setData, formData]);

  return (
    <>
      <div className="mx-auto max-w-md p-4 border-1 border-solid border-gray-300 rounded-md shadow-md mb-5">
        <h1 className="text-2xl font-bold mb-6">
          Başvurunuz Başarıyla Alındı!
        </h1>
        <span className="inline-block px-2 py-1 rounded-full bg-green-500 text-white mb-3">
          Başvuru Kodunuz: {code}
        </span>

        <div className="mb-2">
          <label className="font-bold">Ad: </label>
          <span className="ml-2">{formData.name}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Soyad: </label>
          <span className="ml-2">{formData.surname}</span>
        </div>

        <div className="mb-2">
          <label className="font-bold">Yaş: </label>
          <span className="ml-2">{formData.age}</span>
        </div>

        <div className="mb-2">
          <label className="font-bold">TC: </label>
          <span className="ml-2">{formData.tc}</span>
        </div>

        <div className="mb-2">
          <label className="font-bold">Başvuru Nedeni: </label>
          <span className="ml-2">{formData.applicationReason}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Adres: </label>
          <span className="ml-2">{formData.address}</span>
        </div>

        <div className="mb-2">
          <label className="font-bold">Fotoğraflar/ Ekler: </label>
          <img src={location.state?.file} />
        </div>
      </div>
      <hr className="mx-auto max-w-md border-blue-500 border-t-3 my-8" />
      <Link
        to="#"
        onClick={handleGoBack}
        className="text-blue-500 hover:underline font"
      >
        Geri Dön
      </Link>
    </>
  );
};

export default ApplicationSuccessful;
