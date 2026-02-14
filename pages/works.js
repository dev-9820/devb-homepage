import NextLink from 'next/link'
import Image from 'next/image'
import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text,
  Link,
  HStack,
  VStack,
  useColorModeValue,
  Badge,
  Button
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const PixelBox = motion(Box)

const ProjectCard = ({
  title,
  description,
  imageSrc,
  githubUrl,
  liveUrl,
  technologies,
  delay
}) => {
  const shadowColor = useColorModeValue('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)')
  const pixelBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('black', 'whiteAlpha.800')
  const accentColor = useColorModeValue('teal.500', '#67E8F9') // 'cyan.300' as hex code

  return (
    <Section delay={delay}>
      <PixelBox
        borderRadius="0px"
        border="2px solid"
        borderColor={borderColor}
        bg={pixelBg}
        overflow="hidden"
        boxShadow={`6px 6px 0px ${shadowColor}`}
        transition={{ type: 'spring', stiffness: 300 }}
        whileHover={{
          scale: 1.02,
          rotate: 1,
          boxShadow: `10px 10px 0px ${shadowColor}`,
          borderColor: accentColor
        }}
      >
        <Box
          position="relative"
          overflow="hidden"
          borderBottom="2px solid"
          borderColor={borderColor}
          width="100%"
          height={{ base: '220px', md: '260px' }}
          bg={useColorModeValue('gray.100', 'gray.900')}
        >
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'contain' }}
            quality={82}
            loading="lazy"
          />
        </Box>

        <VStack align="start" p={5} spacing={3}>
          <Heading
            as="h3"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="bold"
            fontFamily="'Press Start 2P', cursive"
            lineHeight="tall"
            color={accentColor}
          >
            {title}
          </Heading>

          <Text
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.300')}
            lineHeight="tall"
            fontFamily="'JetBrains Mono', monospace"
          >
            {description}
          </Text>

          {technologies && (
            <HStack spacing={2} flexWrap="wrap" gap={1}>
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  colorScheme="teal"
                  variant="outline"
                  fontSize="xs"
                  padding={2}
                  borderRadius="0"
                  fontFamily="'JetBrains Mono', monospace"
                  borderWidth="1px"
                  fontWeight="normal"
                >
                  {tech}
                </Badge>
              ))}
            </HStack>
          )}

          <HStack spacing={2} pt={1}>
            <Link href={githubUrl} isExternal _hover={{ textDecoration: 'none' }}>
              <Button
                size="sm"
                leftIcon={<FaGithub />}
                borderRadius="0"
                borderWidth="2px"
                borderColor={accentColor}
                color={accentColor}
                variant="outline"
                fontFamily="'JetBrains Mono', monospace"
                _hover={{
                  bg: accentColor,
                  color: useColorModeValue('white', 'black'),
                  boxShadow: `4px 4px 0px ${shadowColor}`,
                  transform: 'translate(-2px, -2px)'
                }}
                _active={{ transform: 'translate(0, 0)' }}
                transition="all 0.1s"
              >
                Repo
              </Button>
            </Link>
            {liveUrl && (
              <Link href={liveUrl} isExternal _hover={{ textDecoration: 'none' }}>
                <Button
                  size="sm"
                  leftIcon={<FaExternalLinkAlt />}
                  borderRadius="0"
                  borderWidth="2px"
                  borderColor={accentColor}
                  color={accentColor}
                  variant="outline"
                  fontFamily="'JetBrains Mono', monospace"
                  _hover={{
                    bg: accentColor,
                    color: useColorModeValue('white', 'black'),
                    boxShadow: `4px 4px 0px ${shadowColor}`,
                    transform: 'translate(-2px, -2px)'
                  }}
                  _active={{ transform: 'translate(0, 0)' }}
                  transition="all 0.1s"
                >
                  Live
                </Button>
              </Link>
            )}
          </HStack>
        </VStack>
      </PixelBox>
    </Section>
  )
}

const Works = () => {
  const shadowColor = useColorModeValue('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)')
  const pixelBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('black', 'whiteAlpha.800')
  const accentColor = useColorModeValue('teal.500', 'cyan.300')

  return (
    <Layout>
      <Container maxW="container.lg">
        <Section delay={0.05}>
          <PixelBox
            borderRadius="0px"
            border="2px solid"
            borderColor={borderColor}
            bg={pixelBg}
            p={3}
            mb={6}
            align="center"
            boxShadow={`6px 6px 0px ${shadowColor}`}
            fontFamily="'JetBrains Mono', monospace"
            fontSize="sm"
          >
            [STATUS]: Projects & work samples.
          </PixelBox>
        </Section>

        <Section delay={0.1}>
          <Box display="flex" flexDir={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" mb={8} gap={4}>
            <Heading
              as="h1"
              fontFamily="'Press Start 2P', cursive"
              fontSize={{ base: 'lg', md: 'xl' }}
              letterSpacing="-1px"
            >
              _Projects_&_Work
            </Heading>
            <NextLink href="/" passHref>
              <Button
                leftIcon={<ChevronLeftIcon />}
                variant="outline"
                borderRadius="0px"
                borderWidth="2px"
                borderColor={accentColor}
                color={accentColor}
                fontFamily="'JetBrains Mono', monospace"
                size="sm"
                _hover={{
                  bg: accentColor,
                  color: useColorModeValue('white', 'black'),
                  boxShadow: `4px 4px 0px ${shadowColor}`,
                  transform: 'translate(-2px, -2px)'
                }}
                _active={{ transform: 'translate(0px, 0px)' }}
                transition="all 0.1s"
              >
                Back
              </Button>
            </NextLink>
          </Box>
        </Section>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <ProjectCard
            title="AI - PDF Rule Checker"
            description="AI-powered tool that audits PDFs against custom rules and returns structured JSON. React, Node.js, Gemini API — interactive UI with real-time results."
            imageSrc="/images/ai-pdf-screenshot.png"
            githubUrl="https://github.com/dev-9820/AI-PDF"
            technologies={['React', 'Node.js', 'Gemini API', 'PDF']}
            delay={0.15}
          />

          <ProjectCard
            title="ScrapeFlow AI"
            description="Intelligent web scraping and data extraction platform. Automated collection, parsing, and structured export."
            imageSrc="/images/scraper.png"
            githubUrl="https://github.com/dev-9820/ScrapeFlow-AI"
            technologies={['AI', 'Web Scraping', 'Data']}
            delay={0.2}
          />

          <ProjectCard
            title="Secure Drive Frontend"
            description="React + Vite file-sharing frontend. JWT auth, dashboard, shareable links, file preview and download via access token."
            imageSrc="/images/file-ease-screenshot.png"
            githubUrl="https://github.com/dev-9820/file-ease-frontend"
            technologies={['React', 'Vite', 'JWT', 'File Sharing']}
            delay={0.25}
            liveUrl="https://file-ease-frontend.vercel.app/"
          />

          <ProjectCard
            title="EventEase Frontend"
            description="Responsive event booking UI. Vite + React, TailwindCSS, React Router, Context API, FullCalendar for bookings."
            imageSrc="/images/event.png"
            githubUrl="https://github.com/dev-9820/eventease-frontend"
            technologies={['React', 'Vite', 'TailwindCSS', 'FullCalendar']}
            delay={0.3}
            liveUrl="https://eventease-frontend-phi.vercel.app/"
          />

          <ProjectCard
            title="Fleet Management Landing"
            description="Landing page for fleet management services. Modern layout and service information."
            imageSrc="/images/fleet.png"
            githubUrl="https://github.com/dev-9820/Fleet-Management-Page"
            liveUrl="https://fleet-management-page.vercel.app/"
            technologies={['React', 'Landing Page', 'Fleet']}
            delay={0.35}
          />

          <ProjectCard
            title="Dental Clinic Landing"
            description="Landing page for dental clinic services. Responsive layout and service information."
            imageSrc="/images/dental.png"
            githubUrl="https://github.com/dev-9820/DentalcCinic"
            liveUrl="https://dentalc-cinic.vercel.app/"
            technologies={['React', 'Landing Page', 'Dental']}
            delay={0.4}
          />
        </SimpleGrid>

        <Box opacity={0.4} fontSize="xs" align="center" my={10} fontFamily="'JetBrains Mono', monospace">
          © {new Date().getFullYear()} Dev Bhanushali // WORKS_PAGE
        </Box>
      </Container>
    </Layout>
  )
}

export default Works
