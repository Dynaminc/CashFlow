import { Actionsheet, Box, Button, Input, HStack,Flex, 
    Text, Heading, ScrollView, VStack,Center, Circle, useDisclose, KeyboardAvoidingView } from 'native-base';
export default function Profile({navigation}){
    return(
        <Box flex={1} p={4} pt={8}  bg={'blueGray.100'}>
            <HStack justifyContent={'space-between'} alignItems={'center'} w={'full'} >
                <Heading fontSize={'2xl'} fontWeight={'medium'} pt={8} pb={4}>Profile</Heading>
            </HStack>
            <Center>
                <Circle size={'xl'} bg={'blueGray.400'} position={'relative'}>
                    <Circle size={'xs'} position={'absolute'} bg={'amber.100'} left={'70%'} top={'70%'}></Circle>
                    
                </Circle>
                <Heading fontSize={'2xl'} fontWeight={'medium'} pt={8}>Lionel Messi</Heading>
                <Text fontSize={'md'} my={2}  color={'#707070'} w={'60%'} textAlign={'center'}>
                    messibarcelona@football.com
                </Text>                
            </Center>
            <HStack rounded={'sm'} alignItems={'center'} p={2} my={1} mt={8} bg={'white'}>
                <Circle size={'sm'} mr={2} bg={'blueGray.300'}></Circle>
                <Text fontWeight={'medium'} ml={1} fontSize={'lg'} color={'blueGray.500'}>Edit Profile</Text>
            </HStack>
            <HStack rounded={'sm'} alignItems={'center'} p={2} my={1} bg={'white'}>
                <Circle size={'sm'} mr={2} bg={'blueGray.300'}></Circle>
                <Text fontWeight={'medium'} ml={1} fontSize={'lg'} color={'blueGray.500'}>Notification</Text>
            </HStack>
            <HStack rounded={'sm'} alignItems={'center'} p={2} my={1} bg={'white'}>
                <Circle size={'sm'} mr={2} bg={'blueGray.300'}></Circle>
                <Text fontWeight={'medium'} ml={1} fontSize={'lg'} color={'blueGray.500'}>Language</Text>
            </HStack>
            <HStack rounded={'sm'} alignItems={'center'} p={2} my={1} bg={'white'}>
                <Circle size={'sm'} mr={2} bg={'blueGray.300'}></Circle>
                <Text fontWeight={'medium'} ml={1} fontSize={'lg'} color={'blueGray.500'}>Security</Text>
            </HStack>                        
        </Box>
    )
}