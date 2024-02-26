import React from "react";
import { Box, Flex, VStack, Link, Icon } from "@chakra-ui/react";
import { FaHome, FaListAlt, FaUser } from "react-icons/fa";

const FooterNavigation = () => {
  return (
    <Flex as="footer" bg="brand.800" p={4} justifyContent="space-around" alignItems="center" color="white" position="fixed" left="0" bottom="0" width="100%">
      <VStack>
        <Icon as={FaHome} w={6} h={6} />
        <Link href="/" color="white">
          Home
        </Link>
      </VStack>
      <VStack>
        <Icon as={FaListAlt} w={6} h={6} />
        <Link href="/dashboard" color="white">
          Dashboard
        </Link>
      </VStack>
      <VStack>
        <Icon as={FaUser} w={6} h={6} />
        <Link href="/profile" color="white">
          Profile
        </Link>
      </VStack>
    </Flex>
  );
};

export default FooterNavigation;
