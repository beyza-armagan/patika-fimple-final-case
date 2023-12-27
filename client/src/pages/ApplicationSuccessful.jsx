import { Box, Button, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import { useEffect, useState, useMemo } from "react";

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
        name: "beyza",
        surname: "beuyza",
        age: 30,
        tc: 8989,
        applicationReason: "nee",
        address: "ist",
        additionalInfo: "no info",
      },
    [location.state]
  );

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

    setData(dataWithCode);
  }, [setData, formData]);

  return (
    <div>
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
      <Link to={`/basvuru/${code}`}>
        <Flex alignItems="center">
          <Button mr={10}>Kod ile Sorgula</Button>
        </Flex>
      </Link>
      <Link to="#" onClick={handleGoBack}>
        Go Back
      </Link>
    </div>
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
