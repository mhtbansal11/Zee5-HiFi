import { Box, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./common/Card";

function PremiumBollywood() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios
         .get(`https://zee5-hi-fi.onrender.com/premiumBollywood`)
         .then((res) => {
            setData(res.data);
         });
   }, []);

   return (
      <Box m={5} my={20} textAlign="left">
         <Text fontSize="4xl" fontWeight="bold" my={7}>
            Premium Bollywood Blockbusters
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

export default PremiumBollywood;
