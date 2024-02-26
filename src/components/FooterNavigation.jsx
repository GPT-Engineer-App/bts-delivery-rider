import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaHome, FaUserCircle, FaClipboardList } from "react-icons/fa";

const FooterNavigation = () => {
  return (
    <Box as="footer" position="fixed" left={0} bottom={0} w="full" bg="gray.200" p={2}>
      <Flex justify="space-between" align="center">
        <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" />
        <IconButton aria-label="Orders" icon={<FaClipboardList />} variant="ghost" />
        <IconButton aria-label="Profile" icon={<FaUserCircle />} variant="ghost" />
      </Flex>
    </Box>
  );
};

export default FooterNavigation;
