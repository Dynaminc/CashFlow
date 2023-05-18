import { Center, ScrollView, HStack, Box, Heading, Button, Text, Icon, VStack, Circle} from "native-base"
import { Pressable } from "react-native"

function TopCards(){
    return(
        
        <ScrollView horizontal={true} py={2} w={'full'} >
            <Box minW={74} minH={40} p={2} >
                <Box shadow={'lg'} rounded={'xl'} w={'full'} h={'full'} bg={'blue.900'} color={'white'} p={4} px={8}>
                    <Text color={'white'} py={1} fontSize={'md'}>Opay Digitals</Text>
                    <Text fontSize={'lg'} color={'white'} fontWeight={'medium'}>2345   567*   66**  123 *</Text>
                    <Text color={'white'} pt={4} fontSize={'xs'}>Account Balance</Text>
                    <Heading fontSize={'3xl'} color={'white'} fontWeight={'bold'} >$1,500</Heading>
                </Box>
            </Box>
            <Box minW={74} minH={40} p={2} >
                <Box shadow={'lg'} rounded={'xl'} w={'full'} h={'full'} bg={'purple.500'} color={'white'} p={4} px={8}>
                    <Text color={'white'} py={1} fontSize={'md'}>Palmpay</Text>
                    <Text fontSize={'lg'} color={'white'} fontWeight={'medium'}>2345   567*   66**  123 *</Text>
                    <Text color={'white'} pt={4} fontSize={'xs'}>Account Balance</Text>
                    <Heading fontSize={'3xl'} color={'white'} fontWeight={'bold'} >$150,000</Heading>
                </Box>
            </Box>
        </ScrollView>
    )
}
function PaySections({navigation}){
    const actionData = [
        {
            name: 'Transfer',
            icon: 'transfer'
        },
        {
            name: 'Deposit',
            icon: 'deposit.png'
        },
        {
            name: 'Electricity',
            icon: 'electricity.png'
        },        
        // {
        //     name: 'Loan',
        //     icon: 'loan.png'
        // },        
        {
            name: 'Airtime',
            icon: 'airtime.png'
        },        
        // {
        //     name: 'Betting',
        //     icon: 'Betting.png'
        // },                                                
        {
            name: 'Electricity',
            icon: 'electricity.png'
        },        
        // {
        //     name: 'Loan',
        //     icon: 'loan.png'
        // },        
    ]
    return(
        <>
            <HStack w={'full'} py={1} justifyContent={'space-between'} >
                {actionData.slice(0,4).map(data=>(
                    <Pressable w={'25%'} size={'lg'} key={data.name} 
                    onPress={()=>{navigation.navigate(data.name)}}>
                        <VStack alignItems={'center'} >
                            <Circle size={'sm'} bg={'blueGray.500'}></Circle>
                            <Text fontWeight={'medium'} py={2}>{data.name}</Text>
                        </VStack>
                    </Pressable>
                ))}
            </HStack>        
            <HStack w={'full'} py={1} justifyContent={'space-between'} >
                {actionData.slice(4,actionData.length).map(data=>(
                    <Pressable w={'25%'} size={'lg'} key={data.name+'1'}>
                        <VStack alignItems={'center'} >
                            <Circle size={'sm'} bg={'blueGray.500'}></Circle>
                            <Text fontWeight={'medium'} py={2}>{data.name}</Text>
                        </VStack>
                    </Pressable>
                ))}  
            </HStack>  
        </>      
    )
}

function Transactions(){
    const data = [
        1,2,3
    ]
    return(
        <>
        {data.map((item)=>(
            <HStack justifyContent={'space-between'} alignItems='center' py={2} pr={2} key={item} borderBottomWidth={1} borderColor={'blueGray.200'}>
                <Box w={12} h={12} rounded={'lg'} mr={2} bg={'red.100'}></Box>
                <Box minW={'65%'} h={'full'}>
                    <Text fontWeight={'medium'} ml={1} color={'blueGray.700'} fontSize={'lg'}>Shopping</Text>
                    <Text  color={'blueGray.400'}> 14/06/23</Text>
                </Box>
                <Text fontWeight={'medium'} color={'red.500'}>
                    -$4,500
                </Text>
            </HStack>
        ))}
        </>
    )
}

export default function DashBoard({navigation}){
    return(
        <Box flex={1} bg={'white'}>
        <Center flex={1} bg={'blueGray.100'}>
        {/* ['90%','80%','70%','60%','40%'] */}
        <Box flex={1} w={'full'} pb={4}>
            <HStack p={4} justifyContent={'space-between'} shadow={'xl'} bg={'white'} pt={8}>
                <Box>
                    <Heading fontSize={'2xl'} fontWeight={'medium'} pl={1} >Hello!</Heading>
                    <Text fontSize={'lg'} color={'blueGray.600'} textAlign={'center'}> Twitchyyyy1</Text>
                </Box>                    
                <Box h={'full'} w={16} bg={'blueGray.500'} rounded={'sm'}></Box>
            </HStack>
            <ScrollView w={'full'} p={4}>
                <TopCards />

                <Box p={4} bg={'white'} shadow={'xl'} rounded={'lg'} my={4}>
                    <HStack justifyContent={'space-between'} alignItems={'center'} pb={4} >
                        <Text fontSize={'xl'} pb={2} fontWeight={'medium'} textAlign={'center'}> Quick Actions</Text>
                    </HStack>
                    <PaySections navigation={navigation} />
                </Box>

                <Box p={4} bg={'white'} shadow={'xl'} rounded={'lg'} my={4}>
                    <Text fontSize={'xl'} pb={4} fontWeight={'medium'}> Recent Transactions</Text>
                    <Transactions />                   
                </Box>

                <HStack p={4} bg={'blueGray.200'} shadow={'xl'} rounded={'lg'} my={4} justifyContent={'space-between'} pb={4}>
                    <Box>
                        <Heading fontWeight={'bold'} pt={4} pb={1} fontSize={'xl'}> Get $80 bonus </Heading>                  
                        <Text  color={'blueGray.500'} pb={4} ml={1} fontSize={'lg'}> for each new user you invite </Text>
                        <Button
                            size={'sm'}
                            w={'50%'}
                            h={12}
                            bg={'black'} color={'white'}
                            _hover={{bg:'blueGray.900'}}
                            _active={{bg:'blueGray.800'}}
                        >
                            Get Started
                        </Button>
                    </Box>
                    <Box bg={'blueGray.300'} w={'30%'} h={'full'} rounded={'lg'}></Box>
                </HStack>
            </ScrollView>

        </Box>
        </Center>
        </Box>
    )
}