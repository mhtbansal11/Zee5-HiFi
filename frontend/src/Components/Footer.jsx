import { Box, Button, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
   return (
      <Box borderTop='1px solid rgb(27, 27, 27)' py={7} px={14} color='lightgray'>
         <HStack gap={3}>
            <Text className='footer-topic-title' fontWeight='bold'>Download Apps</Text>
            <Image src='https://www.zee5.com/images/play_store.png?ver=2.52.15' />
            <Image src='https://www.zee5.com/images/app_store.png?ver=2.52.15' />
            <Spacer />
            <Text className='footer-topic-title' fontWeight='bold'>Connect with us</Text>
            <HStack gap={1}>
               <Button color='blue.500' bg='rgb(34, 26, 41)' p={3} borderRadius='50%'>
                  <FaFacebook />
               </Button>
               <Button color='#f24b8f' bg='rgb(34, 26, 41)' p={3} borderRadius='50%'>
                  <FaInstagram />
               </Button>
               <Button color='blue.300' bg='rgb(34, 26, 41)' p={3} borderRadius='50%'>
                  <FaTwitter />
               </Button>
               <Button color='red.500' bg='rgb(34, 26, 41)' p={3} borderRadius='50%'>
                  <FaYoutube />
               </Button>
            </HStack>
         </HStack>
         <HStack my={7} gap={4} color='rgb(111, 111, 111)' fontSize='12px'>
            <Box className='footer-hover' borderRight='1px solid gray' pr={7}>About us</Box>
            <Box className='footer-hover' borderRight='1px solid gray' pr={7}>Help Center</Box>
            <Box className='footer-hover' borderRight='1px solid gray' pr={7}>Privacy Policy</Box>
            <Box className='footer-hover'>Terms of Use</Box>
         </HStack>
         <HStack mb={14} justifyContent="space-between">
            <VStack fontSize='13px' align='start' color='rgb(111, 111, 111)'>
               <Text className="footer-topic-title" fontWeight='bold' my={3} color='white'>Popular TV Shows</Text>
               <Text className='footer-hover'>Kumkum Bhagya</Text>
               <Text className='footer-hover'>Kundali Bhagya</Text>
               <Text className='footer-hover'>Bhagya Lakshmi</Text>
               <Text className='footer-hover'>Tujhse Hai Raabta</Text>
               <Text className='footer-hover'>Kyun Rishton Mein Katti Bat</Text>
            </VStack>
            <VStack fontSize='13px' align='start' color='rgb(111, 111, 111)'>
               <Text className="footer-topic-title" fontWeight='bold' my={3} color='white'>Premium Movies</Text>
               <Text className='footer-hover'>Kya Meri Sonam Gupta Bewafa Hai?</Text>
               <Text className='footer-hover'>Helmet</Text>
               <Text className='footer-hover'>200 Halla Ho</Text>
               <Text className='footer-hover'>14 Phere</Text>
               <Text className='footer-hover'>Dial 100</Text>
            </VStack>
            <VStack fontSize='13px' align='start' color='rgb(111, 111, 111)'>
               <Text className="footer-topic-title" fontWeight='bold' my={3} color='white'>Popular LIVE TV Channels</Text>
               <Text className='footer-hover'>Aaj Tak</Text>
               <Text className='footer-hover'>Zee News</Text>
               <Text className='footer-hover'>Zee TV HD</Text>
               <Text className='footer-hover'>&TV HD</Text>
               <Text className='footer-hover'>Zee Marathi HD</Text>
            </VStack>
            <VStack fontSize='13px' align='start' color='rgb(111, 111, 111)'>
               <Text className="footer-topic-title" fontWeight='bold' my={3} color='white'>Popular Web Series</Text>
               <Text className='footer-hover'>Sunflower</Text>
               <Text className='footer-hover'>Jeet Ki Zid</Text>
               <Text className='footer-hover'>Bicchoo Ka Khel</Text>
               <Text className='footer-hover'>State of Siege: 26/11</Text>
               <Text className='footer-hover'>Naxalbari</Text>
            </VStack>
            <VStack fontSize='13px' align='start' color='rgb(111, 111, 111)'>
               <Text className="footer-topic-title" fontWeight='bold' my={3} color='white'>Bollywood Top Celebrities</Text>
               <Text className='footer-hover'>Ranveer Singh</Text>
               <Text className='footer-hover'>Disha Patani</Text>
               <Text className='footer-hover'>Deepika Padukone</Text>
               <Text className='footer-hover'>Salman Khan</Text>
               <Text className='footer-hover'>Nora Fatehi</Text>
            </VStack>
         </HStack>
         <Text w='lg' cursor='pointer' align='start' my={10} fontSize='12px' color='rgb(111, 111, 111)'>
            Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+ <br />
            Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights reserved.
         </Text>
      </Box>
   );
}

export default Footer;