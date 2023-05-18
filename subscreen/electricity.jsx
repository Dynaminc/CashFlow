import { Box, Pressable,Button, Input, HStack,Flex, Text,
    Heading, ScrollView, VStack, Circle, KeyboardAvoidingView } from 'native-base';

export default function Electricity({navigation}){
    return(
        <Box flex={1} pt={8}  bg={'blueGray.50'} >
            <HStack w={'full'} p={4} shadow={'xl'} bg={'white'} pt={8}>
                <Pressable h={'full'} w={'10%'} bg={'blueGray.500'} rounded={'sm'} mr={1}></Pressable>
                <Heading fontSize={'2xl'} fontWeight={'medium'} >Electricity</Heading>
            </HStack>
            <ScrollView flex={1} p={4}>

            <Text fontSize={'xl'} mt={4} py={4} fontWeight={'medium'}>Select Vendor</Text>
            <HStack rounded={'lg'} alignItems={'center'} p={2} my={2} bg={'blueGray.100'} justifyContent={'space-between'}>
                <HStack alignItems={'center'}>
                    <Box w={12} h={12} rounded={'sm'} mr={2} bg={'blueGray.300'}></Box>
                    <Text fontWeight={'medium'} ml={1} fontSize={'lg'}>IBEDC</Text>
                </HStack>
                <Box w={12} h={12} rounded={'sm'} mr={2} bg={'blueGray.300'}></Box>
            </HStack>            
            <Text fontSize={'xl'} mt={4} py={4} fontWeight={'medium'}>Meter Number</Text>
            <Input placeholder={'Enter Mobile Number'} fontSize={'md'}  py={2} h={12} />
            <Text fontSize={'xl'} mt={1} py={4} fontWeight={'medium'}>Select Package</Text>
            <HStack p={4} gap={2} spacing={4}>
                <Button w={'50%'} size={'lg'}
                    // leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}
                    bg={'black'} color={'white'}
                    _hover={{bg:'blueGray.900'}}
                    _active={{bg:'blueGray.800'}}
                    py={4} m={1}>
                    Prepaid
                </Button>
                <Button w={'50%'} size={'lg'}
                    bg={'black'} color={'white'}
                    _hover={{bg:'blueGray.900'}}
                    _active={{bg:'blueGray.800'}}
                    py={4} m={1}>
                    Postpaid
                </Button>
            </HStack>
            <Text fontSize={'xl'} mt={1} py={4} fontWeight={'medium'}>Amount</Text>
            <Input placeholder={'Enter Total Amount'} fontSize={'md'} py={2} h={12} />
            
            
            <Button mt={8}
                    bg={'black'} color={'white'}
                    _hover={{bg:'blueGray.900'}}
                    _active={{bg:'blueGray.800'}}
                    onPress={()=>{navigation.navigate('Processing')}}
                    py={4}>
                        Proceed
            </Button>
            <Box h={24}></Box>
            </ScrollView>
        </Box>
    )
}