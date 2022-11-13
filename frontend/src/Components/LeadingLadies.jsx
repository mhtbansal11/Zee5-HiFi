import { Box, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./common/Card";

function LeadingLadies() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios
         .get(`https://zee5-hi-fi.onrender.com/leadingLadies`)
         .then((res) => {
            setData(res.data);
         });
   }, []);

   return (
      <Box m={5} mt={20} textAlign="left">
         <Text fontSize="4xl" fontWeight="bold" my={7}>
            Leading Ladies
         </Text>
         <Grid
            className="scrollBar"
            my={4}
            templateColumns="repeat(20, 1fr)"
            gap={4}
            overflowX={"scroll"}
         >
            {data.map((item, index) => (
               <Card item={item} index={index} />
            ))}
         </Grid>
      </Box>
   );
}

export default LeadingLadies;
