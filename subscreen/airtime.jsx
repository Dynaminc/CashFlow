import { Box, Pressable,Button, Input, HStack,Flex, Text,
    Heading, ScrollView, VStack, Circle, KeyboardAvoidingView } from 'native-base';
function Providers(){
        const data = [
            {   
                image: 'mtn.png',
                name: 'Mtn'
            },
            {   
                image: 'glo.png',
                name: 'Glo'
            },
            {   
                image: 'airtel.png',
                name: 'Airtel'
            },
            {   
                image: '9mobile.png',
                name: '9Mobile'
            }            
        ]        
        return(
            <>
            {data.map((item)=>(
                <VStack key={item.name} w={24} py={4} p={2} mr={2} alignItems={'center'} bg={'blueGray.100'} rounded={'xl'} h={32}>
                    <Circle size={16} bg={'blueGray.500'}></Circle>
                    <Text fontWeight={'medium'} fontSize={'sm'} pt={4}> {item.name}</Text>
                </VStack>
            ))}
            </>
        )
    }
export default function Airtime({navigation}){
    return(
        <Box flex={1} pt={8}  bg={'blueGray.50'} >
            <HStack w={'full'} p={4} shadow={'xl'} bg={'white'} pt={8}>
                <Pressable h={'full'} w={'10%'} bg={'blueGray.500'} rounded={'sm'} mr={1}></Pressable>
                <Heading fontSize={'2xl'} fontWeight={'medium'} >Mobile Top Up</Heading>
            </HStack>
            <ScrollView flex={1} p={4}>
            <HStack bg={'black'} p={4} justifyContent={'space-between'} rounded={'lg'}> 
                <Box>  
                    <Text fontSize={'lg'} letterSpacing={2} color={'white'}>Account Balance</Text>
                    <Heading size={'xl'} color={'white'}>$150,000</Heading>
                </Box>
                <Box h={10} w={10} bg={'blueGray.500'} rounded={'sm'}></Box>
            </HStack>


            <Text fontSize={'xl'} mt={4} py={4} fontWeight={'medium'}>Network Providers</Text>
            <Box h={40} pt={4}>
            <ScrollView horizontal={true}>
                <Providers />                         
            </ScrollView>
            </Box>

            <Text fontSize={'xl'} mt={4} py={4} fontWeight={'medium'}>Mobile Number</Text>
            <Input placeholder={'Enter Mobile Number'} fontSize={'md'}  py={2} h={12} />
            <Text fontSize={'xl'} mt={1} py={4} fontWeight={'medium'}>Amount</Text>
            <Input placeholder={'Enter Total Amount'} fontSize={'md'} py={2} h={12} />
            <Text fontSize={'xl'} mt={1} py={4} fontWeight={'medium'}>Description</Text>
            <Input placeholder={'Description'} fontSize={'md'} py={1} h={12} />
            
            <Button mt={8}
                    bg={'black'} color={'white'}
                    _hover={{bg:'blueGray.900'}}
                    _active={{bg:'blueGray.800'}}
                    py={4}
                    onPress={()=>{navigation.navigate('Processing')}}
                    >
                        Proceed
            </Button>
            <Box h={24}></Box>
            </ScrollView>
        </Box>
    )
}