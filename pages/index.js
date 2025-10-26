import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, List, ListItem, Icon } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BellIcon, ChevronRightIcon, EditIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'

import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoYouTubee,
    IoLogoDiscord,
    IoLogoDropbox,
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'
import {SunIcon} from '@chakra-ui/icons'

const Page=()=> {
    return (
        <Layout>
        <Container>
            <Box boxShadow='lg' borderRadius="lg" bg={useColorModeValue('whiteAlpha.900','whiteAlpha.200')} p={1.5} mt={3} mb={6} align="center">
                Hello, I am a Digital Arist based in Mumbai, India!
            </Box>

            <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
                Dev Bhanushali
            </Heading>
            <p>Developer • AI/ML Engineer • LLM Integrator •  </p>
            </Box>
            <Box flexShrink={0} mt={{ base:4 , md: 0}} ml={{md:6}} align="center">
                <Image shadow='lg' borderColor="blue.200" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/dev.jpg" alt="Profile"/>

            </Box>
            </Box>
            <Section delay={0.1}>
          <Heading paddingBottom="12px" as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            I’m a builder at heart — I turn ideas into intelligent, interactive digital systems. I work at
            the intersection of <b>Development</b> and <b>Automation</b>, creating apps powered
            by <b>LLMs, RAG pipelines, and generative interfaces</b>. From crafting modern UIs to
            engineering data-driven backends, I love designing software that learns, adapts, and delivers
            real value.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                shadow="lg"
                colorScheme="teal"
                _hover={{ transform: 'scale(1.05)' }}
              >
                View My Work
              </Button>
            </NextLink>
          </Box>
        </Section>
            <Section delay={0.2}>
          <Heading paddingBottom="12px" as="h3" variant="section-title">
            Journey
          </Heading>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed Junior College.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Began developing full-stack projects integrating AI/ML — from interactive web apps to
            intelligent learning platforms.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Graduated in Computer Science, Mumbai University.
          </BioSection>
          <BioSection>
            <BioYear>2025</BioYear>
            Working as a Full Stack & AI Developer — building end-to-end web systems, integrating
            LLMs, automation, and scalable architectures.
          </BioSection>
        </Section>
            <Section delay={0.3}>
          <Heading paddingBottom="12px" as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            AI Automation, Machine Learning, Full Stack Development, 3D Web Experiences, Game Design,
            Generative Tools, and solving complex problems with creativity and code.
          </Paragraph>
        </Section>
            <Section delay={0.4}>
                <Heading paddingBottom='12px' as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
              <Link href="https://www.linkedin.com/in/dev-bhanushali-8b082b388/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                  Dev Bhanushali
                </Button>
              </Link>
            </ListItem>
                    <ListItem>
                        <Link href="https://www.instagram.com/devb.exe/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}/>}>
                                devb.exe
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://twitter.com/devb003" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}/>}>
                                DevB003
                            </Button>
                        </Link>
                    </ListItem>
                    
                    <ListItem>
                        <Link href="" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
                                DevB
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
            <Section>
                <Heading as="h6" fontSize={"12"} color="gray" align="center">
                © {new Date().getFullYear()} Dev Bhanushali • All Rights Reserved
                </Heading>
            </Section>
        </Container>
        </Layout>
    )
}
export default Page