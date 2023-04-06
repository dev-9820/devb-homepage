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
    IoLogoGithub
} from 'react-icons/io5'
import {SunIcon} from '@chakra-ui/icons'

const Page=()=> {
    return (
        <Layout>
        <Container>
            <Box boxShadow='lg' borderRadius="lg" bg={useColorModeValue('whiteAlpha.900','whiteAlpha.200')} p={1.5} mt={3} mb={6} align="center">
                Hello, I am a Digital Developer based in India!
            </Box>

            <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
                Dev Bhanushali
            </Heading>
            <p>Digital Developer (Games / Websites / Apps)</p>
            </Box>
            <Box flexShrink={0} mt={{ base:4 , md: 0}} ml={{md:6}} align="center">
                <Image shadow='lg' borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/dev.jpg" alt="Profile"/>
            </Box>
            </Box>
            <Section delay={0.1}>
                <Heading paddingBottom='12px' as="h3" variant="section-title">
                    Work / Study
                </Heading>
                <Paragraph>Dev is a Third Year Engineering student and works as a freelance Developer in Games, Apps and Websites... with sheer passion in Problem Solving.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} shadow="lg" colorScheme="teal">
                        My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading paddingBottom='12px' as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2002</BioYear>
                   Born in Maharashtra, India.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Ongoing Third Year of Engineering in ECS
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading paddingBottom='12px' as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    3D Animation, VFX, Machine Learning, Artificial Intelligence, Game development, Web/App development, Video Editing
                </Paragraph>
            </Section>
            <Section delay={0.4}>
                <Heading paddingBottom='12px' as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://www.instagram.com/devvvv.b/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}/>}>
                                Devvvv.b
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
                © 2022 Dev Bhanushali . All Rights Reserved.
                </Heading>
            </Section>
        </Container>
        </Layout>
    )
}
export default Page