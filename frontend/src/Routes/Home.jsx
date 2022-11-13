import { Box } from "@chakra-ui/react";

import Slideshow from "../Components/Slideshow";
import TopTen from "../Components/TopTen";
import LatestMovies from "../Components/LatestMovies";
import OriginalWeb from "../Components/OriginalWeb";
import IMDBtopPicks from "../Components/IMDBtopPicks";
import LeadingLadies from "../Components/LeadingLadies";
import PremiumBollywood from "../Components/PremiumBollywood";



function Home() {
   return (
      <Box my={7}>
         <Slideshow />
         <TopTen />
         <LatestMovies />
         <OriginalWeb />
         <IMDBtopPicks />
         <LeadingLadies />
         <PremiumBollywood />
      </Box>
   );
}

export default Home;