import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Divider,
  Flex,
  Input,
  FormControl,
  Heading,
} from "@chakra-ui/react";
import AdminLogin from "../Admin/AdminLogin";

function NavBar() {
  return (
    <nav>
      <Box mb={14}>
        <Heading as="h1" size="lg">
          Başvuru Yönetim Sistemi
        </Heading>
      </Box>
      <Flex justifyContent="space-between" alignItems="center">
        <FormControl>
          <Link to="/basvuru-sorgula">
            <Flex alignItems="center">
              <Input
                type="text"
                id="code"
                placeholder="Lütfen başvuru numaranızı girin"
                size="lg" // Set the size to "lg" or adjust as needed
                mr={2}
                htmlSize={70}
                width="auto"
              />
              <Button mr={10}>Sorgula</Button>
            </Flex>
          </Link>
        </FormControl>

        <Link to="/admin">
          <Button>Admin Login</Button>
        </Link>
      </Flex>
      <Divider
        borderColor="teal.500" // Customize the border color
        borderWidth="3px" // Customize the border width
        marginY="13"
      />
    </nav>
  );
}

export default NavBar;
