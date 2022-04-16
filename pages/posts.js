import { Container, Heading, SimpleGrid, Text, Image, color } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import NextLink from 'next/link'
import thumb1 from '../public/images/thumb1.png'
import thumb2 from '../public/images/thumb2.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Top Posts
            </Heading>
            <Section>
            <SimpleGrid columns={[1,1,2]} gap={6}>
            <GridItem
                title="Another Day at University"
                thumbnail={thumb1}
                href="https://www.instagram.com/reel/CcAk-9DKAMQ/?igshid=YmMyMTA2M2Y=" />
            <GridItem
                title="Day 109"
                thumbnail={thumb2}
                href="https://www.instagram.com/reel/Cbhngrvqd_H/?igshid=YmMyMTA2M2Y=" />
            </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)
export default Posts