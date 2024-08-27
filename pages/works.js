import { Container, Heading, SimpleGrid, Divider, Button, Box, Image, Link } from "@chakra-ui/react";
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
            <Heading as={"h1"} fontSize={20} mb={1}>
                Websites
            </Heading>

            <SimpleGrid column={[2,2,2]} gap={6}>
                <Section delay={0.1}>
                    <NextLink href={"/"} passHref>
                    <Box pt={"5"} flexShrink={0} mt={{ base:4 , md: 0}} ml={{md:6}} align="left">
                        <Image shadow='lg' borderColor="whiteAlpha.500" borderWidth={1} borderStyle="solid" maxWidth="250px" display="inline-block" borderRadius="none" src="/images/website1.png" alt="website1"/>
                        <p>Portfolio Website</p>
                    </Box>
                    </NextLink>

                    <NextLink href={"https://data-visualisation-sobv.onrender.com"}>
                    <Box pt={"5"} flexShrink={0} mt={{ base:4 , md: 0}} ml={{md:6}} align="left">
                        <Image shadow='lg' borderColor="whiteAlpha.500" borderWidth={1} borderStyle="solid" maxWidth="250px" display="inline-block" borderRadius="none" src="/images/website2.png" alt="website1"/>
                        <p>Data Visualisation from API</p>
                    </Box>
                    </NextLink>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works