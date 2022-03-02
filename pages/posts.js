import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Top Posts
            </Heading>
            <Section delay={0.1}>
                <Text fontSize={15}>
                    COMING SOON
                </Text>
            </Section>
        </Container>
    </Layout>
)
export default Posts