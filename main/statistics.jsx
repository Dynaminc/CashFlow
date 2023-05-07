import { Box, Button, HStack,Flex, Text, Heading, ScrollView, VStack } from 'native-base';

export default function Statistics(){
    return(
        <Box flex={1} p={4} pt={8}  bg={'gray.100'}>
            <HStack justifyContent={'space-between'} alignItems={'center'} w={'full'} pt={8} py={4}>
                <Heading fontSize={'2xl'} fontWeight={'medium'}  pb={4}>Statistics</Heading>
                <Box h={10} w={10} bg={'gray.500'} rounded={'sm'}></Box>
            </HStack>
            <Box h={64}>
                <Box h={48} bg={'gray.500'} position={'relative'} rounded={'xl'}>
                    <Flex position={'absolute'} top={'80%'} justifyContent={'center'} alignItems = {'center'} w={'full'}>
                        <HStack bg={'white'} h={24} w={'80%'} shadow={'lg'}
                            justifyContent={'space-evenly'} alignItems = {'center'} rounded={'xl'}>
                            <VStack >
                                <Text color={'gray.500'} fontSize={'sm'}>Earned</Text>
                                <Heading>$2,730</Heading>
                            </VStack>
                            <VStack >
                                <Text fontSize={'sm'} color={'gray.500'}>Spent</Text>
                                <Heading>$2,730</Heading>
                            </VStack>
                        </HStack>
                        
                    </Flex>

                </Box>
                
            </Box>
            <Text fontSize={'xl'} py={4} mt={8} fontWeight={'medium'}> Top Category</Text>
            <HStack justifyContent={'space-evenly'} mb={2}>
                <VStack w={'48%'}  p={2} alignItems={'center'} bg={'white'} rounded={'xl'} h={48}>
                    <Box h={24} bg={'gray.100'}></Box>
                    <Text fontWeight={'medium'} fontSize={'lg'}> Lunch and Dinner</Text>
                    <Text fontSize={'sm'} pb={4} color={'gray.400'}> $450</Text>
                    <Text fontSize={'xs'} fontWeight={'light'}>on track</Text>
                </VStack>
                <VStack w={'48%'}  p={2}
                    alignItems='center' bg={'white'} rounded={'xl'} h={48}>
                    <Box h={24} bg={'gray.100'}></Box>
                    <Text fontWeight={'medium'} fontSize={'lg'}> Lunch and Dinner</Text>
                    <Text fontSize={'sm'} pb={4} color={'gray.400'}> $450</Text>
                    <Text fontSize={'xs'} fontWeight={'light'}>on track</Text>
                </VStack>                
            </HStack>
        </Box>
    )
}