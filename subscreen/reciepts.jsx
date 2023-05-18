import { Actionsheet, Box, Button, Input, HStack,Flex, 
    Text, Heading, ScrollView, VStack,Center, Circle, useDisclose, KeyboardAvoidingView } from 'native-base';

export default function Reciepts(){
    return(
        <Center flex={1} p={4} pt={8}  bg={'black'}>
            <Center mt={8}>
                <Heading fontSize={'xl'} fontWeight={'bold'} color={'blueGray.50'} pt={8}>My Receipt</Heading>              
            </Center>
            <Box rounded={'xl'} bg={'white'} my={8} w={'full'} p={8}>
                <Center borderBottomColor={'blueGray.100'} borderBottomWidth={2} pb={4}>
                    <Box w={16} h={16} rounded={'xl'} bg={'blueGray.400'} mt={1}></Box>
                    <Heading fontSize={'2xl'} fontWeight={'bold'} color={'blueGray.800'} pt={2}>Transfer complete</Heading>              
                </Center>
                <HStack rounded={'sm'} alignItems={'center'} p={2} my={1} mt={8} bg={'white'} w={'full'} mb={4}>
                    <Circle size={'sm'} mr={2} bg={'blueGray.300'}></Circle>
                    <Box>
                        <Text fontWeight={'medium'} ml={1} color={'blueGray.500'}>Recipient</Text>
                        <Text fontWeight={'medium'} fontSize={'lg'} ml={1} color={'blueGray.800'}>Baby Dev</Text>
                    </Box>
                </HStack>

                <Box my={4}>
                    <Text  ml={1} color={'blueGray.500'}>Reference Number</Text>
                    <Text fontWeight={'medium'} fontSize={'lg'} color={'blueGray.800'}>#D79004321786</Text>
                </Box>

                <HStack my={4}>
                    <Box w={'50%'}>
                        <Text  ml={1} color={'blueGray.500'}>Amount Sent</Text>
                        <Text fontWeight={'medium'} fontSize={'lg'} ml={1} color={'blueGray.800'}>$45.09</Text>
                    </Box>
                    <Box w={'50%'}>
                        <Text  ml={1} color={'blueGray.500'}>Transfer Fee</Text>
                        <Text fontWeight={'medium'} fontSize={'lg'} ml={1} color={'blueGray.800'}>$0.00</Text>
                    </Box>
                </HStack>
                <Button mt={8} rounded={'lg'} fontWeight={'medium'}
                    bg={'black'} color={'white'}
                    _hover={{bg:'blueGray.900'}}
                    _active={{bg:'blueGray.800'}}
                    mx={8}
                    py={4}> 
                        Share
            </Button>
            </Box>
            <Text px={8} fontWeight={'medium'} mb={8} textAlign={'center'} 
                fontSize={'md'} color={'white'}>Your transfer will arrive to the recipient within 48 hours</Text>                      
        </Center>
    )
}