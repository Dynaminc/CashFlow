import { Box, Button, HStack,Flex, Text, Heading, ScrollView, VStack } from 'native-base';

function ATM(){
    const data = [
        1,2,3
    ]
    return(
        <>
        {data.map((item)=>(
            <HStack rounded={'lg'} justifyContent={'space-between'} 
                shadow={3} alignItems={'center'} p={2} key={item} my={2}>
                <Box w={12} h={12} rounded={'lg'} mr={2} bg={'gray.300'}></Box>
                <Box minW={'65%'} h={'full'}>
                    <Text fontWeight={'medium'} ml={1} color={'gray.700'} fontSize={'lg'}>Access Bank ATM</Text>
                    <Text  color={'gray.400'}> Dubose Ave</Text>
                </Box>
                <Text fontWeight={'medium'} color={'green.700'} bg={'green.200'} rounded={'xl'}>
                   4km Avay
                </Text>
            </HStack>
        ))}
        </>
    )
}

export default function AtmLocator(){
    return(
        <Box flex={1} p={4} pt={8}  bg={'gray.100'}>
            <HStack justifyContent={'space-between'} alignItems={'center'} w={'full'} >
                <Heading fontSize={'2xl'} fontWeight={'medium'} pt={8} pb={4}>Atm Locator</Heading>
                <Box h={10} w={10} bg={'gray.500'} rounded={'sm'}></Box>
            </HStack>
            <Box minH={64} p={4} bg={'white'} rounded={'xl'}>
                <Heading size={'sm'} pb={4} fontWeight={'medium'}>ATM near you</Heading>
                <ATM />
            </Box>
        </Box>
    )
}