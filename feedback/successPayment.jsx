import { Center, VStack, Box, Heading, Text, Flex, Button, HStack } from "native-base";

export default function SuccessPayment(){
    return(
        <Center flex={1}>
            <Center w={['95%','90%', '85%','80%','40%']} alignContent={'center'} justifyContent={'center'}>
                <Box h={72} w={'full'} bg={'gray.50'} mb={4}></Box>
                <Heading fontSize={'2xl'} my={2} fontWeight={'medium'} w={'full'} textAlign={'center'}>Payment Successful</Heading>
                <Text fontSize={'md'} mb={16} w={'50%'}  color={'#707070'} textAlign={'center'}> Congratulations your payment has been completed</Text>
                <Box h={10}></Box>
                <Button bg={'black'} color={'white'} size={'lg'} w={'full'} 
                        h={12} my={4}
                        _hover={{bg:'gray.900'}}
                        _active={{bg:'gray.800'}}
                        >Back</Button>
            </Center>

        </Center>
    )
}