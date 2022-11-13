import { Box, Button, Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

function Login() {
   const navigate = useNavigate();
   const { data, setIsLogin } = useContext(AppContext);
   const [text, setText] = useState({ email: '', password: '' });

   const handleLogin = () => {
      if (text.email === data.email && text.password === data.password) {
         setIsLogin(true);
         alert('Login Successful');
         navigate('/');
      } else {
         alert('Invalid Credentials');
         setText({ email: '', password: '' });
      }
   }

   const goToSignup = () => { navigate('/signup') }

   return (
      <Box mb={7}>
         <Text fontSize="xl" fontWeight="bold" lineHeight='3em'>Login to ZEE5 Hi-Fi</Text>
         <Text lineHeight="1.2em" color='gray'>Login to continue enjoying uninterrupted video and <br /> personalised experience</Text>
         <VStack gap={7} mt={7} mb={4}>
            <HStack gap={4}>
               <Flex h='44px' w='44px' borderRadius='50%' bg='whitesmoke' align='center' justify='center' cursor='pointer'>
                  <DiApple style={{ color: 'black', fontSize: '1.7rem' }} />
               </Flex>
               <Flex h='44px' w='44px' borderRadius='50%' bg='whitesmoke' align='center' justify='center' cursor='pointer'>
                  <FcGoogle style={{ fontSize: '1.4rem' }} />
               </Flex>
               <Flex h='44px' w='44px' borderRadius='50%' bg='dodgerblue' align='center' justify='center' cursor='pointer'>
                  <FaFacebookF style={{ fontSize: '1.4rem' }} />
               </Flex>
               <Flex h='44px' w='44px' borderRadius='50%' bg='blue.500' align='center' justify='center' cursor='pointer'>
                  <FaTwitter style={{ fontSize: '1.2rem' }} />
               </Flex>
            </HStack>
            <Button bg='rgb(69, 9, 71)' _hover='rgb(69, 9, 71)' borderRadius={100} h='44px' w='44px' fontWeight='bold' pb={1}>or</Button>
         </VStack>
         <VStack gap={4}>
            <Input type='email' autoFocus={true} value={text.email} onChange={(e) => setText({ ...text, email: e.target.value })} variant='flushed' borderColor='rgb(111, 111, 111)' focusBorderColor='rgb(176, 80, 255)' placeholder='E-mail' w='333px' />
            <Input type='password' value={text.password} onChange={(e) => setText({ ...text, password: e.target.value })} variant='flushed' borderColor='rgb(111, 111, 111)' focusBorderColor='rgb(176, 80, 255)' placeholder='Password' w='333px' />
            <Text fontSize='sm' color='rgb(176, 80, 255)'>Forgot Password?</Text>
            <Button disabled={text.email === '' || text.password === ''} onClick={handleLogin} w='333px' h='47px' variant='outline' borderColor='rgb(111, 111, 111)' _hover="transparent" color='gray'>Login</Button>
            <Text fontSize='sm' color='lightgray'>New to ZEE5? <span onClick={goToSignup}>Register</span></Text>
         </VStack>
      </Box>
   );
}

export default Login;