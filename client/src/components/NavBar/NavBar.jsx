import { Link } from "react-router-dom";
import { Button, Divider, Flex, Input, FormControl } from "@chakra-ui/react";

function NavBar() {
  return (
    <nav>
      <Flex justifyContent="space-between" alignItems="center">
        <FormControl>
          <Link to="/basvuru-sorgula">
            <Flex alignItems="center">
              <Input
                type="text"
                id="code"
                placeholder="Lütfen başvuru numaranızı girin"
                mr={2}
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
