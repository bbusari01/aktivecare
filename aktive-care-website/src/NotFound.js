import React from 'react';
import { Box, Heading, Text, Button, Container, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} align="center">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>404 Not Found</Heading>
          <Text fontSize="lg">
            The page you are looking for does not exist. It might have been moved or deleted.
          </Text>
        </Box>
        <Button 
          colorScheme="teal" 
          onClick={() => navigate('/')}
        >
          Return Home
        </Button>
      </VStack>
    </Container>
  );
}

export default NotFound;
