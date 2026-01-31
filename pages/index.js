import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  Icon,
  Text,
  Stack
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

// Animation wrapper for voxel feel
const PixelBox = motion(Box)

const Page = () => {
  const shadowColor = useColorModeValue('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)')
  const pixelBg = useColorModeValue('white', 'gray.800')
  const accentColor = useColorModeValue('teal.500', 'cyan.300')

  return (
    <Layout>
      <Container maxW="container.sm">
        {/* Voxel Hello Banner */}
        <Section delay={0.1}>
          <PixelBox
            borderRadius="0px" // Voxel art is angular
            border="2px solid"
            borderColor={useColorModeValue('black', 'whiteAlpha.800')}
            bg={pixelBg}
            p={3}
            mb={6}
            align="center"
            boxShadow={`6px 6px 0px ${shadowColor}`}
            fontFamily="'JetBrains Mono', monospace"
            fontSize="sm"
           
          >
            [STATUS]: Hello, I am a Digital Artist based in Mumbai!
          </PixelBox>
        </Section>

        <Box display={{ md: 'flex' }} mb={10}>
          <Box flexGrow={1}>
            <Heading 
                as="h2" 
                variant="page-title" 
                fontFamily="'Press Start 2P', cursive" // Optional: Need to import in fonts.js
                fontSize={{ base: 'xl', md: '5xl' }}
                letterSpacing="-1px"
            >
              Dev Bhanushali
            </Heading>
            <Text 
                fontFamily="'JetBrains Mono', monospace" 
                fontSize="xl"
                marginTop={"5"} 
                color={accentColor}
                fontWeight="bold"
            >
              &gt; Software Developer • System Design • Full Stack • AI • Web3
            </Text>
          </Box>
          
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <PixelBox
              whileHover={{ scale: 1.02, rotate: 2, boxShadow: `9px 9px 0px ${shadowColor}` }}
              transition={{ type: 'spring', stiffness: 300 }}
              display="inline-block"
              border="3px solid"
              borderColor={accentColor}
              boxShadow={`4px 4px 0px ${shadowColor}`}
              overflow="hidden"
            >
              <Image
                maxWidth="100px"
                src="/images/char.png"
                alt="Profile"
                fallbackSrc="https://via.placeholder.com/100"
                style={{ imageRendering: 'pixelated' }} // Critical for pixel art look
              />
            </PixelBox>
          </Box>
        </Box>

        <Section delay={0.2}>
          <Heading 
            as="h3" 
            variant="section-title" 
            display="inline-block"
            mb={4}
          >
            _About_Me
          </Heading>
          <Paragraph>
            I’m a builder at heart — I turn ideas into intelligent, interactive digital systems. 
            I work at the intersection of <Text as="span" color={accentColor} fontWeight="bold">Development</Text> and 
            <Text as="span" color={accentColor} fontWeight="bold"> Automation</Text>, creating apps powered 
            by generative interfaces.
          </Paragraph>
          <Box align="center" my={6}>
            <NextLink href="/works" passHref>
              <Button
                variant="outline"
                rightIcon={<ChevronRightIcon />}
                borderRadius="0px"
                borderWidth="2px"
                borderColor={accentColor}
                color={accentColor}
                _hover={{
                  bg: accentColor,
                  color: useColorModeValue('white', 'black'),
                  boxShadow: `4px 4px 0px ${shadowColor}`,
                  transform: 'translate(-2px, -2px)'
                }}
                _active={{ transform: 'translate(0px, 0px)' }}
                transition="all 0.1s"
              >
                View My Work
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title"  display="inline-block" mb={4}>
            _Journey
          </Heading>
          <Stack spacing={2}>
            <BioSection>
              <BioYear>2024</BioYear>
              Graduated in CS, Mumbai University.
            </BioSection>
            <BioSection>
              <BioYear>2025</BioYear>
              Building end-to-end AI systems and automation architectures.
            </BioSection>
          </Stack>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title"  display="inline-block" mb={4}>
            _On_The_Web
          </Heading>
          <List spacing={2}>
            {[
              { label: 'GitHub', icon: IoLogoGithub, href: 'https://github.com/dev-9820' },
              { label: 'LinkedIn', icon: IoLogoLinkedin, href: 'https://linkedin.com/in/dev-bhanushali' },
              { label: 'Instagram', icon: IoLogoInstagram, href: 'https://instagram.com/devb.exe' }
            ].map((social) => (
              <ListItem key={social.label}>
                <Link href={social.href} target="_blank" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={social.icon} />}
                    _hover={{ 
                        bg: useColorModeValue('teal.50', 'whiteAlpha.100'),
                        textDecoration: 'underline' 
                    }}
                    fontFamily="'JetBrains Mono', monospace"
                    fontSize="sm"
                  >
                    {social.label}
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
        </Section>

        <Box opacity={0.4} fontSize="xs" align="center" my={10} fontFamily="'JetBrains Mono', monospace">
          © {new Date().getFullYear()} Dev Bhanushali // NODE_MUMBAI_IN
        </Box>
      </Container>
    </Layout>
  )
}

export default Page