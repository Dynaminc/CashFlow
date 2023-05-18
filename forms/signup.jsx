import { KeyboardAvoidingView, Center, Heading,Box, VStack, HStack, Text, Input, Button } from "native-base";

export default function SignUp({navigation}){
    return(
        <Box flex={1} py={10}>
            <Heading w={'full'}  textAlign={'center'} mt={8} fontSize={'4xl'} spacing={2} fontWeight={'medium'} >CASHFLOW</Heading>
            <Box h={20}></Box>
        <Center flex={1} px={4}>
            
            
            <VStack flex={1} w={['95%','90%', '85%','80%','40%']} alignContent={'center'} >

                <Heading fontSize={'2xl'} mb={8} fontWeight={'medium'}>Create account</Heading>
                <KeyboardAvoidingView mb={4}>
                <Box my={1}>
                    <Heading fontSize={'md'} fontWeight={'medium'} mb={2}>Name</Heading>
                    <Input placeholder="Input your full name" variant={'underlined'} fontSize={'md'}></Input>
                </Box>                    
                <Box my={2}>
                    <Heading fontSize={'md'} fontWeight={'medium'} mb={2}>Email</Heading>
                    <Input placeholder="agba@gmail.com" variant={'underlined'} fontSize={'md'}></Input>
                </Box>
                <Box my={2}>
                    <Heading fontSize={'md'} fontWeight={'medium'} mb={2}>Password</Heading>
                    <Input  type ={'password'} placeholder="Input your password" variant={'underlined'} fontSize={'md'}></Input>
                </Box>
                <Box my={2}>
                    <Heading fontSize={'md'} fontWeight={'medium'} mb={2}>Repeat Password</Heading>
                    <Input  type ={'password'} placeholder="Retype password to confirm" variant={'underlined'} fontSize={'md'}></Input>
                </Box>                
                </KeyboardAvoidingView>
                <Button bg={'black'} color={'white'} size={'lg'} w={'full'} 
                        h={12} my={4} 
                        _hover={{bg:'blueGray.900'}}
                        _active={{bg:'blueGray.800'}}
                        onPress={()=>{navigation.navigate('SignSuccess')}}
                        >Get Started</Button>
                <HStack justifyContent={'center'} alignItems={'center'}>
                    <Button variant={'unstyled'} color={'#7E7E7E'} p={0} m={0}> Already have an account?</Button>
                    <Button variant={'ghost'} colorScheme={'primary'} p={0} m={0}
                    onPress={()=>{navigation.navigate('Signin')}}
                    > Sign In</Button>
                </HStack>
            </VStack>

        </Center>
        </Box>
    )
}