import { Container, Heading, Text, Divider } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";

const Post = () => (
  <Layout title="Inside Netflix’s Recommendation Magic">
    <Container>
      <Heading as="h2" mb={4}>
        Inside Netflix’s Recommendation Magic: The Tech That Keeps You Binge-Watching
      </Heading>

      <Text mb={4}>
        It’s 2 a.m. You’ve promised yourself, “just one more episode,” and yet, somehow, Netflix cues up
        another show that looks oddly perfect for your mood. Coincidence? Not at all. It’s data science
        disguised as intuition.
      </Text>

      <Text mb={4}>
        Netflix’s recommendation system is built on layers of machine learning models that study everything
        you do — not in a creepy way, but in a “trying to understand you” way. It notices when you stop
        halfway through a series, what genres you search for after midnight, and even how long you hover over
        a title before clicking play. Every small action becomes a signal.
      </Text>

      <Text mb={4}>
        The brilliance lies in how invisible the tech feels. You don’t see the code or algorithms — you just
        feel understood. That’s the real art behind Netflix: combining human psychology with algorithmic
        precision so well that the line between “you chose this” and “we chose it for you” completely blurs.
      </Text>

      <Text mb={4}>
        It’s proof that in the streaming age, storytelling isn’t just about what’s made — it’s about how it’s
        discovered. And maybe, just maybe, Netflix’s smartest skill isn’t making us watch, but making us feel
        seen.
      </Text>

      <Divider my={6} />
      <Text fontSize="sm" color="gray.500">
        Written by Dev Bhanushali • Tech & Media Writer
      </Text>
    </Container>
  </Layout>
);

export default Post;
