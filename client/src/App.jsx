import { useState } from "react";
import "./App.css";
import {
  Container,
  HStack,
  VStack,
  Input,
  Button,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";
import ApplicationResults from "./components/ApplicationResults";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  const handleSeeResults = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Container p={4} centerContent>
            <Center>
              <HStack spacing={4}>
                <VStack spacing={4}>
                  <Heading as="h2" size="lg">
                    User Information
                  </Heading>
                  <form onSubmit={handleSubmit}>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <Input
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      value={formData.surname}
                      onChange={handleChange}
                    />
                    <Button type="submit" colorScheme="teal">
                      Submit
                    </Button>
                  </form>
                </VStack>
                <VStack spacing={4} mt={8}>
                  <Heading as="h2" size="lg">
                    Code
                  </Heading>
                  <Text fontSize="md">CODEE</Text>
                  <Button onSubmit={handleSeeResults} colorScheme="teal">
                    See Application Results
                  </Button>
                </VStack>
              </HStack>
            </Center>
          </Container>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
