import { Box, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Components/common/Card";

function LatestMovies() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios
         .get(`https://zee5-hi-fi.onrender.com/zeeLatest`)
         .then((res) => {
            setData(res.data);
         });
   }, []);

   return (
      <Box m={5} mt={20} textAlign="left">
         <Text fontSize="4xl" fontWeight="bold" my={7}>
             Movies on ZEE5 Hi-Fi
         </Text>
         <Grid
            my={4}
            gap={3}
            templateColumns="repeat(5, 1fr)"
         >
            {data.map((item, index) => (
               <Card item={item} index={index} />
            ))}
         </Grid>
      </Box>
   );
}

export default LatestMovies;
