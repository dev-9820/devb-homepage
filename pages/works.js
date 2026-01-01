import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text,
  Image,
  Link,
  HStack,
  VStack,
  IconButton,
  useColorModeValue,
  Badge
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Section from "../components/section";
import Layout from "../components/layouts/article";

const ProjectCard = ({ title, description, imageSrc, githubUrl, liveUrl, technologies, delay }) => {
  const bgColor = useColorModeValue('whiteAlpha.50', 'whiteAlpha.50');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');

  return (
    <Section delay={delay}>
      <Box
        bg={bgColor}
        borderWidth={1}
        borderColor={borderColor}
        borderRadius="xl"
        overflow="hidden"
        shadow="lg"
        transition="all 0.3s"
        _hover={{
          transform: 'translateY(-5px)',
          shadow: 'xl',
          borderColor: 'blue.400'
        }}
      >
        <Box position="relative" overflow="hidden">
          <Image
            src={imageSrc}
            alt={title}
            width="100%"
            height="200px"
            objectFit="cover"
            borderRadius="lg"
            mb={4}
          />
        </Box>

        <VStack align="start" p={6} spacing={3}>
          <Heading as="h3" fontSize="xl" fontWeight="bold">
            {title}
          </Heading>

          <Text fontSize="sm" color="gray.500" lineHeight="tall">
            {description}
          </Text>

          {technologies && (
            <HStack spacing={2} flexWrap="wrap">
              {technologies.map((tech, index) => (
                <Badge margin={2} key={index} colorScheme="blue" variant="subtle" fontSize="xs" padding={2} rounded="md" shadow="md">
                  {tech}
                </Badge>
              ))}
            </HStack>
          )}

          <HStack>
            <Link href={githubUrl} isExternal>
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                size="lg"
                variant="ghost"
                colorScheme="gray"
                _hover={{ color: 'blue.400' }}
              />
            </Link>
            {liveUrl && (
              <Link href={liveUrl} isExternal>
                <IconButton
                  aria-label="Live Demo"
                  icon={<FaExternalLinkAlt />}
                  size="sm"
                  variant="ghost"
                  colorScheme="gray"
                  _hover={{ color: 'green.400' }}
                />
              </Link>
            )}
          </HStack>
        </VStack>
      </Box>
    </Section>
  );
};

const Works = () => {
  return (
    <Layout>
      <Container maxW="6xl">
        <Heading as="h1" fontSize={{ base: 24, md: 28 }} mb={8} textAlign="center">
          Projects & Work Samples
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8}>

        <ProjectCard
            title="AI - PDF Rule Checker"
            description="A professional AI-powered tool that audits PDFs against custom rules and returns structured JSON results. Built with React, Node.js, and the Gemini API, it provides an interactive user interface with real-time results and handles multiple rules in a single upload."
            imageSrc="/images/ai-pdf-screenshot.png"
            githubUrl="https://github.com/dev-9820/AI-PDF"
            technologies={['React', 'Node.js', 'Gemini API', 'PDF Processing']}
            delay={0.3}
            
          />

          <ProjectCard
            title="ScrapeFlow AI"
            description="An intelligent web scraping and data extraction platform powered by AI. Features automated data collection, intelligent parsing, and structured data export capabilities."
            imageSrc="/images/scraper.png"
            githubUrl="https://github.com/dev-9820/ScrapeFlow-AI"
            technologies={['AI', 'Web Scraping', 'Data Processing']}
            delay={0.4}
          />

          <ProjectCard
            title="Secure Drive Frontend"
            description="Frontend for the Secure File-Sharing application, built using React + Vite. Features include user login/signup with JWT auth, dashboard to view uploaded files, copyable shareable token links, file preview (metadata), and download files via access token."
            imageSrc="/images/file-ease-screenshot.png"
            githubUrl="https://github.com/dev-9820/file-ease-frontend"
            technologies={['React', 'Vite', 'JWT', 'File Sharing']}
            delay={0.1}
            liveUrl="https://file-ease-frontend.vercel.app/"
          />

          <ProjectCard
            title="EventEase Frontend"
            description="Modern Responsive UI for Event Booking Platform. A fully responsive, polished, production-ready frontend built using Vite + React.js, TailwindCSS, React Router, Context API (Auth + Toast + Events), and FullCalendar for bookings."
            imageSrc="/images/event.png"
            githubUrl="https://github.com/dev-9820/eventease-frontend"
            technologies={['React', 'Vite', 'TailwindCSS', 'FullCalendar']}
            delay={0.2}
            liveUrl="https://eventease-frontend-phi.vercel.app/"
          />

          <ProjectCard
            title="Fleet Management Landing Page"
            description="A professional landing page for fleet management services. Features modern design, responsive layout, and comprehensive service information."
            imageSrc="/images/fleet.png"
            githubUrl="https://github.com/dev-9820/Fleet-Management-Page"
            liveUrl="https://fleet-management-page.vercel.app/"
            technologies={['React', 'Landing Page', 'Fleet Management']}
            delay={0.5}
          />
          <ProjectCard
            title="Dental Clinic Landing Page"
            description="A professional landing page for Dental Clinic services. Features modern design, responsive layout, and comprehensive service information."
            imageSrc="/images/dental.png"
            githubUrl="https://github.com/dev-9820/DentalcCinic"
            liveUrl="https://dentalc-cinic.vercel.app/"
            technologies={['React', 'Landing Page', 'Dental Clinic']}
            delay={0.5}
          />

        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
