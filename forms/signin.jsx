import { KeyboardAvoidingView, Center, Heading,Box, VStack, HStack, Text, Input, Button } from "native-base";

export default function SignIn(){
    return(
        <Box flex={1} py={10}>
            <Heading w={'full'}  textAlign={'center'} mt={8} fontSize={'4xl'} spacing={2} fontWeight={'medium'} >CASHFLOW</Heading>
        <Center flex={1}>
            
            
            <VStack flex={1} w={['95%','90%', '85%','80%','40%']} alignContent={'center'} justifyContent={'end'}>

                <Heading fontSize={'2xl'} mb={4} fontWeight={'medium'}>Sign In</Heading>
                <KeyboardAvoidingView mb={4}> 
                <Box my={4}>
                    <Heading fontSize={'md'} fontWeight={'medium'} mb={4}>Email</Heading>
                    <Input placeholder="agba@gmail.com" variant={'underlined'} fontSize={'sm'}></Input>
                </Box>
                <Box my={4}>
                    <Heading fontSize={'md'} fontWeight={'medium'} mb={4}>Password</Heading>
                    <Input placeholder="Input your password" variant={'underlined'} fontSize={'sm'}></Input>
                </Box>
                </KeyboardAvoidingView>
                <Button bg={'black'} color={'white'} size={'lg'} w={'full'} 
                        h={12} my={4}
                        _hover={{bg:'gray.900'}}
                        _active={{bg:'gray.800'}}
                        >Get Started</Button>
                <HStack justifyContent={'center'} alignItems={'center'}>
                    <Button variant={'unstyled'} color={'#7E7E7E'} p={0} m={0}> Already have an account?</Button>
                    <Button variant={'ghost'} colorScheme={'primary'} p={0} m={0}> Sign In?</Button>
                </HStack>
            </VStack>

        </Center>
        </Box>
    )
}