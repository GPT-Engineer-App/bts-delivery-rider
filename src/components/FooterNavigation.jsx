import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaHome, FaUserCircle, FaClipboardList } from "react-icons/fa";

const FooterNavigation = () => {
  return (
    <Box as="footer" position="sticky" left={0} bottom={0} w="full" bg="brand.900" p={2} zIndex={1}>
      <Flex justify="space-between" align="center">
        <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" color="white" />
        <IconButton aria-label="Orders" icon={<FaClipboardList />} variant="ghost" color="white" />
        <IconButton aria-label="Orders" icon={<FaClipboardList />} variant="ghost" color="white" as="a" href="/orders" />
        <IconButton aria-label="Profile" icon={<FaUserCircle />} variant="ghost" color="white" />
      </Flex>
    </Box>
  );
};

export default FooterNavigation;
