import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Signup() {
   const navigate = useNavigate();
   const { setData } = useContext(AppContext);
   const [text, setText] = useState({ email: '', password: '' });

   const handleSignup = () => {
      setData({ email: text.email, password: text.password });
      setText({ email: '', password: '' });
      goToLogin();
   }

   const goToLogin = () => { navigate('/login') }

   return (
      <Box mb={7}>
         <Text fontSize="xl" fontWeight="bold" lineHeight='3em'>Create a new account</Text>
         <Text lineHeight="1.2em" color='gray'>Create an account to continue enjoying <br /> uninterrupted video and personalised experience</Text>
         <VStack gap={7} mt={7} mb={4}>
            <Button width='333px' color='red' fontWeight='bold' borderRadius={50}>
               <FcGoogle className='google-icon' /> Sign in
            </Button>
            <Button bg='rgb(69, 9, 71)' _hover='rgb(69, 9, 71)' borderRadius={100} h='44px' w='44px' fontWeight='bold' pb={1}>or</Button>
         </VStack>
         <VStack gap={3}>
            <Input autoFocus={true} value={text.email} onChange={(e) => setText({ ...text, email: e.target.value })} type='email' variant='flushed' borderColor='rgb(111, 111, 111)' focusBorderColor='rgb(176, 80, 255)' placeholder='E-mail' w='333px' />
            <Input value={text.password} onChange={(e) => setText({ ...text, password: e.target.value })} type='password' variant='flushed' borderColor='rgb(111, 111, 111)' focusBorderColor='rgb(176, 80, 255)' placeholder='Password' w='333px' />
            <Text fontSize='sm' color='lightgray'>
               By proceeding you agree to our <span>Terms of Service</span> & <br /><span>Privacy Policy</span>
            </Text>
            <Button disabled={text.email === '' || text.password === ''} onClick={handleSignup} w='333px' h='47px' variant='outline' borderColor='rgb(111, 111, 111)' _hover="transparent" color='gray'>Sign up</Button>
            <Text fontSize='sm' color='whitesmoke'>Already Registered? <span onClick={goToLogin}>Login</span></Text>
         </VStack>
      </Box>
   );
}

export default Signup;