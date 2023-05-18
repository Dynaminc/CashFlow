import { Box, Button, Pressable, HStack,Flex, Text, Heading, ScrollView, VStack } from 'native-base';


function ATM({navigation}){
    const data = [
        1,2,3
    ]
    return(
        <>
        {data.map((item)=>(
            <Pressable onPress={()=>{
                navigation.navigate('Locator')
            }}>
            <HStack rounded={'lg'} justifyContent={'space-between'} borderBottomWidth={1}  borderBottomColor={'gray.200'}
                 alignItems={'center'} p={4} key={item} my={2}>
                <Box w={12} h={12} rounded={'lg'} mr={2} bg={'blueGray.300'}></Box>
                <Box w={'60%'} h={'full'}>
                    <Text fontWeight={'medium'} ml={1} color={'blueGray.700'} fontSize={'lg'}>Access Bank ATM</Text>
                    <Text  color={'blueGray.400'}> Dubose Ave</Text>
                </Box>
                <Text fontWeight={'medium'} color={'green.700'} bg={'green.200'} rounded={'xl'} p={1}>
                   4km Away
                </Text>
            </HStack>
            </Pressable>
        ))}
        </>
    )
}

export default function AtmLocator({navigation}){
    console.log(navigation)
    return(
        <Box flex={1} p={4} pt={8}  bg={'blueGray.100'}>
            <HStack justifyContent={'space-between'} alignItems={'center'} w={'full'} >
                <Heading fontSize={'2xl'} fontWeight={'medium'} pt={8} pb={4}>Atm Locator</Heading>
                <Box h={10} w={10} bg={'blueGray.500'} rounded={'sm'}></Box>
            </HStack>
            <Box minH={64} p={2} bg={'white'} rounded={'xl'}>
                <Heading size={'sm'} pb={4} fontWeight={'medium'}>ATM near you</Heading>
                <ATM navigation={navigation}/>
            </Box>
        </Box>
    )
}