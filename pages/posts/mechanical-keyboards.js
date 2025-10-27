import { Container, Heading, Text, Divider } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";

const Post = () => (
  <Layout title="Why India Still Isn’t Ready for Mechanical Keyboards">
    <Container>
      <Heading as="h2" mb={4}>
        Why India Still Isn’t Ready for Mechanical Keyboards
      </Heading>

      <Text mb={4}>
        Hi, I’m Dev — and I love typing. When I was younger, I used to challenge my friends to see who could
        type their name the fastest on those clunky school computer lab keyboards. I always won. Maybe that’s
        where it started — the simple joy of keys clicking under my fingers.
      </Text>

      <Text mb={4}>
        Fast-forward a decade, typing has become a utility for most people. But for me, it’s still a craft.
        And the tool that makes it special? <b>Mechanical keyboards.</b> They’re not just input devices —
        they’re instruments. Each switch feels like a note, every keystroke has texture, and when the rhythm
        hits just right, it feels like playing a quiet song that only you can hear.
      </Text>

      <Text mb={4}>
        Unfortunately, in India, the love for mechanical keyboards still lives in small corners of Reddit
        threads and Discord servers. Walk into a store and you’ll see endless rows of cheap membrane
        keyboards and RGB “gaming” ones — but almost nothing for people who actually care about typing. It’s
        still treated like a luxury, not a lifestyle.
      </Text>

      <Text mb={4}>
        The truth is, a good mechanical keyboard can last for years. You can repair it, mod it, and make it
        yours. Try explaining that to someone used to ₹700 office boards that die after a few monsoon months.
        The idea of paying ₹8,000 for a keyboard sounds absurd — until you press the first key and realize
        what you’ve been missing all along.
      </Text>

      <Text mb={4}>
        I’ve built and collected a few over the years — linear switches for coding sprints, tactiles for
        writing long pieces like this one. Each one has a personality. It’s a small ritual I love: sit down,
        connect the cable, hear that satisfying <i>click</i>, and suddenly, work doesn’t feel like work
        anymore.
      </Text>

      <Text mb={4}>
        I think India will catch up eventually. As creators, coders, and writers grow, people will start to
        value the feeling of the tools they use every day. Until then, I’ll keep typing away, key by key,
        building my tiny rebellion against dull keyboards.
      </Text>

      <Divider my={6} />
      <Text fontSize="sm" color="gray.500">
        Written by Dev Bhanushali • Mechanical Keyboard Enthusiast
      </Text>
    </Container>
  </Layout>
);

export default Post;
