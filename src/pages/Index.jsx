import { Box, Button, Container, Flex, Heading, List, ListItem, Stack, Text, useToast, VStack, Image, Badge } from "@chakra-ui/react";
import { FaMotorcycle, FaCheck, FaMapMarkedAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Simulated data for the delivery order
  const order = {
    id: "BTSD123",
    pickupLocation: "123 BTS Street, Bangtan City",
    deliveryLocation: "321 ARMY Road, Seoul",
    customerName: "Kim Namjoon",
    customerPhone: "+82100001111",
    item: "BTS Special Edition Album",
    imageUrl: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHBhY2thZ2V8ZW58MHx8fHwxNzA4ODkwNTY5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  };

  // Function to accept the delivery
  const acceptDelivery = () => {
    toast({
      title: "Delivery accepted!",
      description: `You have accepted the delivery for order ${order.id}.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  // Function to mark the delivery as complete
  const completeDelivery = () => {
    toast({
      title: "Delivery completed!",
      description: `You have successfully delivered the order ${order.id}.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl" textAlign="center">
          BTS Delivery Rider App
        </Heading>
        <Flex align="center" justify="center">
          <FaMotorcycle size="3em" />
        </Flex>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Stack spacing={4}>
            <Flex justify="space-between">
              <Text fontSize="lg" fontWeight="bold">
                Order ID: {order.id}
              </Text>
              <Badge colorScheme="green">New</Badge>
            </Flex>
            <Box>
              <Image src={order.imageUrl} borderRadius="md" />
            </Box>
            <List spacing={2}>
              <ListItem>
                <FaMapMarkedAlt /> Pickup: {order.pickupLocation}
              </ListItem>
              <ListItem>
                <FaMapMarkedAlt /> Delivery: {order.deliveryLocation}
              </ListItem>
              <ListItem>Item: {order.item}</ListItem>
              <ListItem>Customer: {order.customerName}</ListItem>
              <ListItem>Phone: {order.customerPhone}</ListItem>
            </List>
            <Flex justify="space-between">
              <Button leftIcon={<FaCheck />} colorScheme="green" onClick={acceptDelivery}>
                Accept
              </Button>
              <Button leftIcon={<FaCheck />} colorScheme="blue" onClick={completeDelivery}>
                Delivered
              </Button>
            </Flex>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
