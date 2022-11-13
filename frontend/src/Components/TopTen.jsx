import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa";

function TopTen() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios
         .get(`https://zee5-hi-fi.onrender.com/zeeTop10`)
         .then((res) => {
            setData(res.data);
         });
   }, []);

   return (
      <Box m={5} mt={20} textAlign="left">
         <Text fontSize="4xl" fontWeight="bold" my={7}>
            Top 10 in India
         </Text>
         <Grid templateColumns="repeat(5, 1fr)" gap={7} my={4}>
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
                  <Text className="top-ten-numbers">{item.top10Numbers}</Text>
               </GridItem>
            ))}
         </Grid>
      </Box>
   );
}

export default TopTen;
