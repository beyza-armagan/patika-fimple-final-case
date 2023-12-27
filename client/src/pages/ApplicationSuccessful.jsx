import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useData } from "../context/DataContext";
import { useEffect, useState } from "react";

const ApplicationSuccessful = () => {
  const { data, setData } = useData();
  const [code, setCode] = useState(null);

  const location = useLocation();
  // Memoize the formData object to prevent unnecessary recreation
  const formData = location.state?.formData || {
    name: "beyza",
    surname: "beuyza",
    age: 30,
    tc: 8989,
    applicationReason: "nee",
    address: "ist",
    additionalInfo: "no info",
  };

  useEffect(() => {
    // Generate a random application code
    const generatedCode = Math.floor(1000 + Math.random() * 9000);

    setCode(generatedCode);
    console.log(generatedCode);

    // Add applicationCode to the form data inside the useEffect callback
    const dataWithCode = {
      ...formData,
      applicationCode: generatedCode,
    };

    // Set data only once when the component mounts
    setData(dataWithCode);
  }, [setData, formData]);

  // Use useEffect to log the updated data when it changes
  useEffect(() => {
    console.log("yeni data:", data);
  }, [data]);

  return (
    <Box p={4}>
      <p className="text-2xl font-bold mb-4">Başvurunuz Başarıyla Alındı!</p>
      <p>Ad: {formData.name}</p>
      <p>Soyad: {formData.surname}</p>
      <p>Age: {formData.age}</p>
      <p>TC: {formData.tc}</p>
      <p>Başvuru Nedeni: {formData.applicationReason}</p>
      <p>Adres: {formData.address}</p>
      <p>Başvuru Detayları: {formData.additionalInfo}</p>
      <p>Başvuru Kodu: {code}</p>
    </Box>
  );
};

ApplicationSuccessful.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number,
    tc: PropTypes.number,
    applicationReason: PropTypes.string,
    address: PropTypes.string,
    additionalInfo: PropTypes.string,
  }),
};

export default ApplicationSuccessful;
