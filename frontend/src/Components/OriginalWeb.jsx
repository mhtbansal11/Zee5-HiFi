import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCrown, FaPlay } from "react-icons/fa";

function OriginalWeb() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios
         .get(`https://zee5-hi-fi.onrender.com/zeeOriginalWebSeries`)
         .then((res) => {
            setData(res.data);
         });
   }, []);

   return (
      <Box m={5} mt={20} textAlign="left">
         <Text fontSize="4xl" fontWeight="bold" my={7}>
            ZEE5 Hi-Fi Original Web Series
         </Text>
         <Grid templateColumns="repeat(6, 1fr)" gap={4} my={4}>
            {data.map((item, index) => (
               <GridItem key={index} cursor="pointer" position="relative">
                  <Image
                     src={item.url}
                     alt={item.popupTitle}
                     borderRadius="md"
                     w="100%"
                  />
                  <Box className="card-icon" top="7px" left="7px">
                     <FaCrown />
                  </Box>
                  <Box
                     className="card-play-icon"
                     h="3rem"
                     w="3rem"
                     top="41%"
                     left="36%"
                     fontSize="md"
                  >
                     <FaPlay style={{ marginLeft: "3px" }} />
                  </Box>
               </GridItem>
            ))}
         </Grid>
      </Box>
   );
}

export default OriginalWeb;
