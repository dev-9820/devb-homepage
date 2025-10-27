import { Container, Heading, SimpleGrid, Text, Image, color } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import NextLink from 'next/link'
import thumb1 from '../public/images/thumb1.png'
import thumb2 from '../public/images/thumb2.png'
// Thumbnails (replace with your actual images in /public/images)
import thumbAIcinema from '../public/images/rise.jpg';
import thumbNetflix from '../public/images/netflix.jpg';
import thumbMarvelVFX from '../public/images/marvel.jpg';
import thumbKeyboard from '../public/images/keyboard.jpg';
const Posts = () => (
  <Layout title="Articles">
    <Container>
      <Heading as="h3" fontSize={22} mb={4}>
        Featured Articles
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem
  title="Why India Still Isn’t Ready for Mechanical Keyboards"
  thumbnail={thumbKeyboard}
  href="/posts/mechanical-keyboards"
/>

          <GridItem
            title="The Rise of AI in Cinema: How Algorithms Are Changing Storytelling"
            thumbnail={thumbAIcinema}
            href="/posts/ai-in-cinema"
          />

          <GridItem
            title="Inside Netflix’s Recommendation Magic: The Tech That Keeps You Binge-Watching"
            thumbnail={thumbNetflix}
            href="/posts/netflix-recommendation"
          />

          <GridItem
            title="From Film to Frame: The Tech Behind Marvel’s VFX Universe"
            thumbnail={thumbMarvelVFX}
            href="/posts/marvel-vfx"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;