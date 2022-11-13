import { Box, Flex, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaCrown, FaPlay } from "react-icons/fa";

function Card({ item, index }) {
  const [state, setState] = useState(false);

  return (
    <GridItem
      w={"200px"}
      key={index}
      cursor={"pointer"}
      position={"relative"}
      borderRadius={"lg"}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      <Image src={item.url} alt={item.popupTitle} borderRadius="lg" w="100%" />
      <Box
        p={1}
        pos={"absolute"}
        top={3}
        left={3}
        bg={"whitesmoke"}
        color={"red"}
        borderRadius={50}
      >
        <FaCrown />
      </Box>
      {state && (
        <Flex
          h={51}
          w={51}
          zIndex={2}
          align={"center"}
          justify={"center"}
          pos={"absolute"}
          top={"37%"}
          left={"37%"}
          fontSize={"xl"}
          bg={"rgba(37, 37, 37, 0.377)"}
          color={"whitesmoke"}
          borderRadius={50}
          _hover={{
            color: "rgb(47, 47, 47)",
            bg: "whitesmoke",
          }}
        >
          <FaPlay style={{ marginLeft: "5px" }} />
        </Flex>
      )}
      {state && (
        <VStack
          h={"100%"}
          w={"100%"}
          pos={"absolute"}
          zIndex={0}
          bottom={0}
          borderRadius={"lg"}
          flexFlow={"column-reverse"}
          border="4px solid whitesmoke"
        >
          <Flex
            py={2}
            w={"100%"}
            bg={"whitesmoke"}
            color={"gray"}
            gap={1}
            wrap={"wrap"}
            fontSize={"sm"}
          >
            {item.audioLangString !== "" && (
              <Text color={"gray"} fontSize={"sm"} fontWeight="600">
                ● {item.audioLangString}
              </Text>
            )}
            {item.duration !== "" && <Text>● {item.duration}</Text>}
            {item.genre1 !== "" && <Text>● {item.genre1}</Text>}
            {item.genre2 !== "" && <Text>● {item.genre2}</Text>}
          </Flex>
          <Box w={"100%"}></Box>
        </VStack>
      )}
    </GridItem>
  );
}

export default Card;
