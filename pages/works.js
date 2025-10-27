import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h1" fontSize={22} mb={3}>
          Projects & Work Samples
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={1}>
          {/* ----------- Project 1 ----------- */}
          <Section delay={0.1}>
            <Box
              pt={4}
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 4 }}
              align="left"
              borderWidth={1}
              borderColor="whiteAlpha.400"
              borderRadius="lg"
              overflow="hidden"
              shadow="md"
              p={2}
            >
              <Box
                as="iframe"
                src="https://drive.google.com/file/d/1Hr2Y4vO_De2rcA4GiZasTIcFR39TpAMa/preview"
                width="100%"
                height="240"
                allow="autoplay"
                borderRadius="lg"
                mb={3}
              />
              <Text fontWeight="bold" fontSize="md" mb={1}>
                AI-Powered State Scheme Navigator 
              </Text>
              <Text fontSize="sm" color="gray.400">
                A Full-stack + LLM app that processes User Requirements with Contextual Chatbot and Outputs Real Government Schemes Scraped from Official Sources. 
              </Text>
            </Box>
          </Section>

          {/* ----------- Project 2 ----------- */}
          <Section delay={0.2}>
            <Box
              pt={4}
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 4 }}
              align="left"
              borderWidth={1}
              borderColor="whiteAlpha.400"
              borderRadius="lg"
              overflow="hidden"
              shadow="md"
              p={2}
            >
              <Box
                as="iframe"
                src="https://drive.google.com/file/d/1vGULFOXDLbmx0LyOsYSTIN73zycteQnc/preview"
                width="100%"
                height="240"
                allow="autoplay"
                borderRadius="lg"
                mb={3}
              />
              <Text fontWeight="bold" fontSize="md" mb={1}>
                AI-Driven Travel & Social Discovery Platform
              </Text>
              <Text fontSize="sm" color="gray.400">
                A Full-Stack social travel platform designed to connect like-minded travelers. It combines real-time trip planning with social networking features such as swipe-based matching, post sharing, and destination feeds. Built with the MERN stack, it integrates map-based discovery, user authentication, and smart recommendations to make exploring the world more social and personal.
              </Text>
            </Box>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
