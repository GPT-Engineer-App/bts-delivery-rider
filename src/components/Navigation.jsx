import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FaHome, FaListAlt, FaUser } from "react-icons/fa";

const Navigation = () => {
  return (
    <Flex bg="brand.800" p={4} justifyContent="space-between" alignItems="center" color="white">
      <Box p="2">
        <FaHome />
        <Text ml="2" display="inline">
          Home
        </Text>
      </Box>
      <Box p="2">
        <FaListAlt />
        <Text ml="2" display="inline" as="a" href="/dashboard">
          Dashboard
        </Text>
      </Box>
      <Box p="2">
        <FaUser />
        <Text ml="2" display="inline">
          Profile
        </Text>
      </Box>
    </Flex>
  );
};

export default Navigation;
