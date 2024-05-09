import { Box, Button, Container, Flex, Heading, IconButton, Image, Link, SimpleGrid, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaBars, FaRocket, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = "blue.500";

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navbar */}
        <Box as="nav" pos="sticky" top={0} zIndex={3} bg={bgColor} w="full" py={2} px={4} shadow="sm">
          <Flex justify="space-between" align="center">
            <IconButton icon={<FaBars />} variant="ghost" aria-label="Open Menu" />
            <Stack direction="row" spacing={4}>
              <Link href="#hero" p={2}>
                Home
              </Link>
              <Link href="#features" p={2}>
                Features
              </Link>
              <Link href="#testimonials" p={2}>
                Testimonials
              </Link>
              <Link href="#cta" p={2}>
                Join Us
              </Link>
            </Stack>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex align="center" justify="center" bgImage="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZXJvJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3MTUyODYxODR8MA&ixlib=rb-4.0.3&q=80&w=1080" bgPos="center" bgSize="cover" bgRepeat="no-repeat" color="white" id="hero" h="70vh" p={8}>
          <VStack spacing={4}>
            <Heading as="h1" size="2xl" textAlign="center">
              Empower Your Creativity
            </Heading>
            <Text fontSize="xl">Join the revolution of innovation.</Text>
            <Button colorScheme="blue" size="lg">
              Get Started
            </Button>
          </VStack>
        </Flex>

        {/* Feature Section */}
        <Box py={10} px={6} bg={bgColor} id="features">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <FeatureCard title="Speed" description="Experience lightning-fast performance." />
            <FeatureCard title="Reliability" description="Trust in our industry-leading stability." />
            <FeatureCard title="Usability" description="Enjoy an intuitive and seamless interface." />
          </SimpleGrid>
        </Box>

        {/* Testimonial Carousel */}
        <Box bg="purple.100" py={10} px={6} id="testimonials">
          <VStack spacing={8}>
            <Text fontSize="2xl" fontWeight="bold">
              What Our Users Say
            </Text>
            <TestimonialCard content="This platform has transformed the way we work." author="Jane Doe" role="CEO, Tech Ventures" />
            <TestimonialCard content="A must-have tool for any serious professional." author="John Smith" role="Freelancer" />
          </VStack>
        </Box>

        {/* CTA Section */}
        <Flex bg="teal.500" color="white" py={10} px={6} align="center" justify="center" id="cta">
          <VStack spacing={3}>
            <Heading as="h3" size="lg">
              Ready to Start?
            </Heading>
            <Text>Sign up today and be part of the future.</Text>
            <Button colorScheme="orange" size="lg">
              Join Now
            </Button>
          </VStack>
        </Flex>

        {/* Footer */}
        <Box bg="gray.700" color="gray.200" py={5}>
          <Flex justify="space-between" px={6} align="center">
            <Text>&copy; {new Date().getFullYear()} Your Company</Text>
            <Stack direction="row" spacing={4}>
              <IconButton icon={<FaTwitter />} aria-label="Twitter" variant="ghost" />
              <IconButton icon={<FaInstagram />} aria-label="Instagram" variant="ghost" />
              <IconButton icon={<FaFacebookF />} aria-label="Facebook" variant="ghost" />
              <IconButton icon={<FaLinkedinIn />} aria-label="LinkedIn" variant="ghost" />
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

const FeatureCard = ({ title, description }) => (
  <VStack bg="white" p={4} shadow="md" borderRadius="md">
    <Text fontSize="xl" fontWeight="bold">
      {title}
    </Text>
    <Text>{description}</Text>
  </VStack>
);

const TestimonialCard = ({ content, author, role }) => (
  <VStack bg="white" p={4} shadow="md" borderRadius="md">
    <Text>{content}</Text>
    <Text fontWeight="bold">{author}</Text>
    <Text fontSize="sm">{role}</Text>
  </VStack>
);

export default Index;
