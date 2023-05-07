import { Box, Button, HStack,Flex, Text, Heading, ScrollView, VStack, Circle } from 'native-base';

export default function Transfer(){
    return(
        <Box flex={1} p={4} pt={8}  bg={'gray.100'}>
            <HStack justifyContent={'space-between'} alignItems={'center'} w={'full'} pt={8} py={4}>
                <Heading fontSize={'2xl'} fontWeight={'medium'}  pb={4}>Transfer</Heading>
                <Box h={10} w={10} bg={'gray.500'} rounded={'sm'}></Box>
            </HStack>
            <HStack bg={'black'} p={4} justifyContent={'space-between'} rounded={'lg'}> 
                <Box>  
                    <Text fontSize={'sm'} letterSpacing={2} color={'white'}>Account Balance</Text>
                    <Heading size={'lg'} color={'white'}>$150,000</Heading>
                </Box>
                <Box h={10} w={10} bg={'gray.500'} rounded={'sm'}></Box>
            </HStack>
            
            <Text fontSize={'xl'} py={4} mt={8} fontWeight={'medium'}>Beneficiaries</Text>

            <ScrollView horizontal={true} mb={2}>
                <VStack minW={'33%'}  p={2} alignItems={'center'} bg={'white'} rounded={'xl'} h={40}>
                    <Circle size={16} bg={'gray.500'}></Circle>
                    <Text fontWeight={'medium'} fontSize={'sm'}> Lunch and Dinner</Text>
                </VStack>
            </ScrollView>

            <Text fontSize={'xl'} py={4} mt={8} fontWeight={'medium'}>Transfer Details</Text>
        </Box>
    )
}