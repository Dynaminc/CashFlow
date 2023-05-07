import { KeyboardAvoidingView, Center, Heading,Box, VStack, HStack, Text, Input, Button } from "native-base";

export default function SignSuccess(){
    return(
        <Center flex={1} py={10}>
            <Center flex={1} w={['95%','90%', '85%','80%','40%']} alignContent={'center'} justifyContent={'center'}>
                <Heading fontSize={'3xl'} mb={2} fontWeight={'medium'} w={'full'} textAlign={'center'}>Successful</Heading>
                <Text fontSize={'md'} my={2}  color={'#707070'} w={'60%'} textAlign={'center'}> You have successfully registered in our app,Start using it</Text>
            </Center>
            <HStack alignItems={'center'} justifyContent={'center'}  w={'full'} >
                <Button bg={'black'} color={'white'} size={'lg'}  w={['95%','90%', '85%','80%','40%']}
                    h={12} my={4}
                    _hover={{bg:'gray.900'}}
                    _active={{bg:'gray.800'}}
                    >Start Using</Button>
            </HStack>
        </Center>
    )
}