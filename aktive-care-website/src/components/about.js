import React from 'react';
import { Box, Text, VStack, Heading, Image, Button, Container, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaHeart, FaHome, FaSmile } from 'react-icons/fa';

function About() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="flex-start">
        {/* Hero Image and Introduction */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading as="h1" size="xl" mb={4}>Empowering Lives with Compassion and Care</Heading>
            <Text fontSize="lg">
              Discover the difference with Aktive Care, where every day is about enhancing the well-being and independence of our clients.
              Experience a personalized approach to home care that puts your needs and preferences first.
            </Text>
          </Box>
          <Box>
            <Image src="/faketeamimage.png" alt="Aktive Care Team" borderRadius="lg"/>
          </Box>
        </SimpleGrid>

        {/* Highlighted Features */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>Why Choose Aktive Care?</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            <Feature icon={FaHeart} title="Passionate Care">
              Our caregivers are not just qualified; they're passionate about making a positive impact in the lives they touch.
            </Feature>
            <Feature icon={FaHome} title="Home Comfort">
              Receive top-notch care without leaving the comfort of your home, making your care experience more personal and comfortable.
            </Feature>
            <Feature icon={FaSmile} title="Tailored to You">
              Every care plan is customized to fit individual needs and lifestyles, ensuring you receive the care you deserve.
            </Feature>
          </SimpleGrid>
        </Box>

        {/* Call to Action */}
        <Box textAlign="center" w="full">
          <Heading as="h2" size="lg" mb={4}>Join Our Family</Heading>
          <Text fontSize="lg" mb={6}>Ready to learn more about our care services? Let's start the conversation today.</Text>
          <Button colorScheme="teal" size="lg">Contact Us</Button>
        </Box>
      </VStack>
    </Container>
  );
}

// Feature component for highlighted features
function Feature({ icon, title, children }) {
  return (
    <Box textAlign="center">
      <Icon as={icon} w={10} h={10} color="teal.400" mb={4} />
      <Heading as="h3" size="md" mb={4}>{title}</Heading>
      <Text>{children}</Text>
    </Box>
  );
}

export default About;
