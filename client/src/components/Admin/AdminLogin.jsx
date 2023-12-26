import { useState } from "react";
import { Box, FormLabel, Input, Button } from "@chakra-ui/react";
function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Check if the entered credentials match the predefined admin credentials
    if (username === "kodluyoruz" && password === "bootcamp109") {
      // Successful login, you can redirect to the admin dashboard or perform other actions here
      console.log("Login successful");
    } else {
      // Display an error message for unsuccessful login
      setErrorMessage("Invalid username or password");
    }
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
        <FormLabel htmlFor="username">Username:</FormLabel>
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
    </Box>
  );
}

export default AdminLogin;
