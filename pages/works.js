import { Container, Heading, SimpleGrid, Divider, Button, Box, Image } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from '../components/grid-item'
import thumbInsta from '../public/images/thumbInsta.png'
import Layout from "../components/layouts/article";
import { Stack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from 'next/link'

const Works = () => {
    return(
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Portfolio
            </Heading>
            
            <SimpleGrid column={[1,1,2]} gap={6}>
                <Section delay={0.1}>
                    <Box>
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                        <NextLink href={"https://devb3.itch.io/"}>
                            Games
                        </NextLink>
                    </Button>
                    </Box>
                    <Box flexShrink={0} mt={{ base:4 , md: 0}} ml={{md:6}} align="left" mt={"7"}>
                <Image shadow='lg' borderColor="whiteAlpha.800" borderWidth={1} borderStyle="solid" maxWidth="250px" display="inline-block" borderRadius="none" src="/images/game1.png" alt="Game1"/>

            </Box>
                </Section>
                <Section delay={0.2}>
                    <Box>
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                        <NextLink href={""}>
                            Websites
                        </NextLink>
                    </Button>
                    </Box>
                    <Box flexShrink={0} mt={{ base:4 , md: 0}} ml={{md:6}} align="left" mt={"7"}>
                <Image shadow='lg' borderColor="whiteAlpha.800" borderWidth={1} borderStyle="solid" maxWidth="250px" display="inline-block" borderRadius="none" src="/images/website1.png" alt="website1"/>
                </Box>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works