import { Box,Pressable, Button, HStack,Flex, Text, Heading, ScrollView, VStack } from 'native-base';

export default function AtmMap({navigation}){
    return(
        <Box flex={1} w={'full'} bg={'blueGray.100'} position={'relative'}>
            <HStack w={'full'} p={4} shadow={'xl'} bg={'white'} pt={8}>
                <Pressable h={'full'} w={'10%'} bg={'blueGray.500'} rounded={'sm'}
                    onPress={navigation.navigate('mytabs')}
                    ></Pressable>
                <Flex w={'90%'} mr={4} >
                    <Heading fontSize={'2xl'} textAlign={'center'} 
                    fontWeight={'medium'} >ATM Locator</Heading>
                </Flex>
            </HStack>
            <Box flex={1} bg={'blueGray.600'}></Box>
            <VStack position={'absolute'} w={'full'} bottom={8} 
                alignItems={'center'} justifyContent={'center'}>
                <HStack rounded={'lg'} bg={'white'} justifyContent={'space-between'}  w={'90%'}
                        shadow={3} alignItems={'center'} p={2} my={2}>
                    <Box w={12} h={12} rounded={'lg'} mr={2} bg={'blueGray.300'}></Box>
                    <Box minW={'50%'} h={'full'}>
                        <Text fontWeight={'medium'} ml={1} color={'blueGray.700'} fontSize={'lg'}>Access Bank ATM</Text>
                        <Text  color={'blueGray.400'}> Dubose Ave</Text>
                    </Box>
                    <Text fontWeight={'medium'} color={'green.700'} bg={'green.200'} rounded={'xl'} p={1}>
                    4km Avay
                    </Text>
                </HStack>
            </VStack>
                     

        </Box>
    )
}