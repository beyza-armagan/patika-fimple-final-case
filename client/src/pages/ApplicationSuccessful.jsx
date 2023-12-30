import { useLocation, useNavigate, Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const ApplicationSuccessful = () => {
  const { setData } = useData();
  const [code, setCode] = useState(null);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const location = useLocation();

  // Memoize the formData object to prevent unnecessary recreation
  const formData = useMemo(
    () =>
      location.state?.formData || {
        name: formData.name,
        surname: formData.surname,
        age: formData.age,
        tc: formData.tc,
        applicationReason: formData.applicationReason,
        address: formData.address,
        additionalInfo: formData.additionalInfo,
      },
    [location.state]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Generate a random application code
        const generatedCode = Math.floor(1000 + Math.random() * 9000);

        setCode(generatedCode);
        console.log(generatedCode);

        // Add applicationCode to the form data inside the useEffect callback
        const dataWithCode = {
          ...formData,
          applicationCode: generatedCode,
        };

        // Make a POST request to save the data to the server
        const response = await axios.post(
          "http://localhost:3000/basvuru-olustur",
          dataWithCode
        );

        console.log("Data saved successfully:", response.data);

        // Update the context or local state if needed
        setData(dataWithCode);
      } catch (error) {
        console.error("Error saving data:", error);
      }
    };

    fetchData();
  }, [setData, formData]);

  return (
    <div className="p-4">
      <p className="text-2xl font-bold mb-4">Başvurunuz Başarıyla Alındı!</p>
      <p>Ad: {formData.name}</p>
      <p>Soyad: {formData.surname}</p>
      <p>Age: {formData.age}</p>
      <p>TC: {formData.tc}</p>
      <p>Başvuru Nedeni: {formData.applicationReason}</p>
      <p>Adres: {formData.address}</p>
      <p>Başvuru Detayları: {formData.additionalInfo}</p>
      <p>Başvuru Kodu: {code}</p>

      <Link to={`/basvuru/${code}`} className="inline-block mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Kod ile Sorgula
        </button>
      </Link>
      <Link to="#" onClick={handleGoBack} className="inline-block mt-4">
        Go Back
      </Link>
    </div>
  );
};

export default ApplicationSuccessful;
