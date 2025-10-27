import { Container, Heading, Text, Divider } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";

const Post = () => (
  <Layout title="From Film to Frame: The Tech Behind Marvel’s VFX Universe">
    <Container>
      <Heading as="h2" mb={4}>
        From Film to Frame: The Tech Behind Marvel’s VFX Universe
      </Heading>

      <Text mb={4}>
        There’s a moment in every Marvel film where you just stop and think, “How did they even make that?”
        The truth is, it’s not just movie magic — it’s a blend of cutting-edge physics, real-time rendering,
        and an insane amount of human patience.
      </Text>

      <Text mb={4}>
        Every explosion, every portal, every iron suit is the result of hundreds of artists working with
        simulation engines, motion capture rigs, and AI-assisted compositing. Marvel’s visual effects
        pipelines use tools like Houdini, Unreal Engine, and proprietary render farms that turn raw
        imagination into photorealism — frame by frame.
      </Text>

      <Text mb={4}>
        What’s beautiful is how tech and creativity coexist here. Engineers write code that mimics fire and
        smoke, while artists shape that code into emotion. It’s the ultimate collaboration between logic and
        storytelling — science and soul.
      </Text>

      <Text mb={4}>
        As real-time rendering and AI-based animation evolve, the future of filmmaking is heading toward
        something extraordinary: worlds that react, adapt, and evolve as fast as we can imagine them.
      </Text>

      <Divider my={6} />
      <Text fontSize="sm" color="gray.500">
        Written by Dev Bhanushali • Creative Technologist
      </Text>
    </Container>
  </Layout>
);

export default Post;
