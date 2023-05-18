import { Box, Pressable,Button, Input, HStack,Flex, Text, 
    Heading, ScrollView, VStack, Circle, KeyboardAvoidingView } from 'native-base';
export default function Deposit({navigation}){
    return(
        <Box flex={1} pt={8}  bg={'blueGray.50'} >
            <HStack w={'full'} p={4} shadow={'xl'} bg={'white'} pt={8}>
                <Pressable h={'full'} w={'10%'} bg={'blueGray.500'} rounded={'sm'} mr={1}></Pressable>
                <Heading fontSize={'2xl'} fontWeight={'medium'} >Deposit</Heading>
            </HStack>
            <ScrollView flex={1} p={4}>
            <HStack bg={'black'} p={4} justifyContent={'space-between'} rounded={'lg'}> 
                <Box>  
                    <Text fontSize={'lg'} letterSpacing={2} color={'white'}>Account Balance</Text>
                    <Heading size={'xl'} color={'white'}>$150,000</Heading>
                </Box>
                <Box h={10} w={10} bg={'blueGray.500'} rounded={'sm'}></Box>
            </HStack>
            
            <HStack rounded={'lg'} alignItems={'center'} p={2} my={2} mt={8} bg={'blueGray.200'}>
                <Box w={12} h={12} rounded={'sm'} mr={2} bg={'blueGray.300'}></Box>
                <Text fontWeight={'medium'} ml={1} fontSize={'lg'}>Request Money From Beneficiaries</Text>
            </HStack>
            <HStack rounded={'lg'} alignItems={'center'} my={2} p={2} bg={'blueGray.200'}>
                <Box w={12} h={12} rounded={'sm'} mr={2} bg={'blueGray.300'}></Box>
                <Text fontWeight={'medium'} ml={1} fontSize={'lg'}>Direct Deposit from Bank</Text>
            </HStack>
            </ScrollView>
        </Box>
    )
}