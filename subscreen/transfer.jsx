import { Actionsheet, Box, Button, Input, HStack,Flex, Text, Heading, ScrollView, VStack, Circle, useDisclose, KeyboardAvoidingView } from 'native-base';

function Beneficiary({navigation}){
    const data = [
        1,2,3,4,5,6
    ]
    return(
        <>
        {data.map((item)=>(
            <VStack key={item} w={24} py={4} p={2} mr={2} alignItems={'center'} bg={'blueGray.100'} rounded={'xl'} h={32}>
                <Circle size={16} bg={'blueGray.500'}></Circle>
                <Text fontWeight={'medium'} fontSize={'sm'} pt={4}> Lucas</Text>
            </VStack>
        ))}
        </>
    )
}
export default function Transfer({navigation}){
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();

    return(
        <Box flex={1} pt={8}  bg={'blueGray.50'} >
            <HStack justifyContent={'space-between'} alignItems={'center'} w={'full'} pt={8} py={4} px={4}>
                <Heading fontSize={'2xl'} fontWeight={'medium'}  pb={4}>Transfer</Heading>
                <Box h={10} w={10} bg={'blueGray.500'} rounded={'sm'}></Box>
            </HStack>
            <ScrollView flex={1} p={4}>
            <HStack bg={'black'} p={4} justifyContent={'space-between'} rounded={'lg'}> 
                <Box>  
                    <Text fontSize={'lg'} letterSpacing={2} color={'white'}>Account Balance</Text>
                    <Heading size={'xl'} color={'white'}>$150,000</Heading>
                </Box>
                <Box h={10} w={10} bg={'blueGray.500'} rounded={'sm'}></Box>
            </HStack>
            
            <Text fontSize={'xl'} mt={4} py={4} fontWeight={'medium'}>Beneficiaries</Text>
            <Box h={40} pt={4}>
            <ScrollView horizontal={true}>
                <Beneficiary navigation={navigation} />                         
            </ScrollView>
            </Box>
            <Text fontSize={'xl'} py={4} mt={4} fontWeight={'medium'}>Transfer Details</Text>
            <KeyboardAvoidingView flex={1}>
                <Input placeholder={'Select Bank Account'} fontSize={'md'} my={2} py={2} h={12} />
                <Input placeholder={'Account Number'} fontSize={'md'} my={2} py={2} h={12} />
                <Input placeholder={'Total Amount'} fontSize={'md'} my={2} py={2} h={12} />
                <Input placeholder={'Description'} fontSize={'md'} my={2} py={2} h={12} />
            </KeyboardAvoidingView >
            <Button mt={8}
                    bg={'black'} color={'white'}
                    _hover={{bg:'blueGray.900'}}
                    onPress={onOpen}
                    _active={{bg:'blueGray.800'}}
                    py={4}>
                        Proceed
            </Button>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
            <Heading fontSize={'2xl'} fontWeight={'medium'} w={'full'} textAlign={'center'} pt={8} pb={4}>Confirm Details</Heading>
            <Actionsheet.Item>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                    <Text color={'blueGray.500'} w={'50%'} fontSize={'md'}>Bank</Text>
                    <HStack alignItems={'center'}  w={'50%'}>
                        <Circle size={'sm'} bg={'blueGray.400'}></Circle>
                        <Text  fontSize={'md'} color={'black'} fontWeight={'medium'} px={2}>Palmpay LTD</Text>
                    </HStack>
                </HStack>
            </Actionsheet.Item>
            <Actionsheet.Item>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                    <Text color={'blueGray.500'} w={'50%'} fontSize={'md'}>Account Number</Text>
                    <Text  fontSize={'md'} color={'black'} fontWeight={'medium'} px={2}>0508022622</Text>
                </HStack>
            </Actionsheet.Item>
            <Actionsheet.Item>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                    <Text color={'blueGray.500'} w={'50%'} fontSize={'md'}>Account Name</Text>
                    <Text  fontSize={'md'} color={'black'} fontWeight={'medium'} px={2}>Baby Dev</Text>
                </HStack>
            </Actionsheet.Item>
            <Actionsheet.Item>                
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                    <Text color={'blueGray.500'} w={'50%'} fontSize={'md'}>Amount</Text>
                    <Text  fontSize={'md'} color={'black'} fontWeight={'medium'} px={2}>$2,500</Text>
                </HStack>
            </Actionsheet.Item>
            <Actionsheet.Item>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                <Button 
                        bg={'black'} color={'white'}
                        _hover={{bg:'blueGray.900'}}
                        onPress={()=>{onClose();navigation.navigate('Processing')}}
                        _active={{bg:'blueGray.800'}}
                        w={'full'}
                        py={4}
                        >
                           
                        Confirm
                </Button>
                </HStack>
            </Actionsheet.Item>
            </Actionsheet.Content>
        </Actionsheet>
            <Box h={24}></Box>
            </ScrollView>
        </Box>
    )
}