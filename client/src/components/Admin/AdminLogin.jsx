import { useState } from "react";
import { Box, FormLabel, Input, Button } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("kodluyoruz");
  const [password, setPassword] = useState("bootcamp109");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if the entered credentials match the predefined admin credentials
    if (username === "kodluyoruz" && password === "bootcamp109") {
      // Successful login, navigate to the admin dashboard or desired path
      console.log("Login successful");
      navigate("/admin/basvuru-listesi");
    } else {
      // Display an error message for unsuccessful login
      setErrorMessage("Invalid username or password");
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Box
      maxW="400px"
      mx="auto"
      mt="4"
      p="6"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
    >
      <Box mb="4">
        <FormLabel htmlFor="username">Kullanıcı Adı:</FormLabel>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          width="100%"
        />
      </Box>
      <Box mb="4">
        <FormLabel htmlFor="password">Password:</FormLabel>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          width="100%"
        />
      </Box>
      <Button onClick={handleLogin} width="100%">
        Login
      </Button>
      {errorMessage && (
        <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
      )}
      <Link to="#" onClick={handleGoBack}>
        Go Back
      </Link>
    </Box>
  );
}

export default AdminLogin;
