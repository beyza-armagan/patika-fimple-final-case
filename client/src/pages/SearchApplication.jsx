import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Divider,
  Flex,
  Input,
  FormControl,
  Heading,
} from "@chakra-ui/react";
import { useData } from "../context/DataContext";

function SearchApplication() {
  const { data, setData } = useData();
  const applicationCode = data.applicationCode || "";
  const navigate = useNavigate();

  console.log(applicationCode);
  const handleSearch = () => {
    // Perform search logic here based on the applicationCode
    // For now, let's navigate to the "/basvuru-sorgula" route with the applicationCode as a query parameter
    navigate(`/basvuru-sorgula?code=${applicationCode}`);
  };

  const setApplicationCode = (value) => {
    // Update the applicationCode in the data context
    setData({ ...data, applicationCode: value });
  };

  return (
    <Box>
      <Heading as="h1" size="lg">
        Başvuru Sorgula
      </Heading>
      <Flex justifyContent="space-between" alignItems="center">
        <FormControl>
          <Flex alignItems="center">
            <Input
              type="text"
              placeholder="Başvuru Kodu"
              value={applicationCode}
              onChange={(e) => setApplicationCode(e.target.value)}
              mr={2}
            />
            <Link to="/admin">
              <Button onClick={handleSearch}>Sorgula</Button>{" "}
            </Link>
          </Flex>
        </FormControl>
      </Flex>
      <Divider
        borderColor="teal.500" // Customize the border color
        borderWidth="3px" // Customize the border width
        marginY="13"
      />
    </Box>
  );
}

export default SearchApplication;
