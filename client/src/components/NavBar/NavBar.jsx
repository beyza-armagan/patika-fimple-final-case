import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Divider,
  Flex,
  FormControl,
  Heading,
} from "@chakra-ui/react";

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
              <Button mr={10}>Başvuru Sorgula</Button>
            </Flex>
          </Link>
        </FormControl>

        <Link to="/admin">
          <Button>Admin Login</Button>
        </Link>
      </Flex>
      <Divider borderColor="teal.500" borderWidth="1px" marginY="13" />
    </nav>
  );
}

export default NavBar;
