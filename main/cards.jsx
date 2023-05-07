import { Box, Button, HStack, Text, Heading, ScrollView } from 'native-base';

function Card(){
    return(
        <Box minW={74} h={48} py={2} >
        <Box shadow={'lg'} rounded={'xl'} w={'full'} h={'full'} bg={'blue.900'} color={'white'} p={4} px={8}>
            <Text color={'white'} py={1} fontSize={'xl'}>Finaci</Text>
            <Text fontSize={'3xl'} color={'white'} fontWeight={'medium'}>**** **** **** 2345</Text>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Text color={'white'} pt={4} fontSize={'xs'}>Card Holder Name</Text>
                    <Heading fontSize={'lg'} color={'white'} fontWeight={'bold'} >Agba Dev</Heading>
                </Box>
                <Box>
                    <Text color={'white'} pt={4} fontSize={'xs'}>Expiry Date</Text>
                    <Heading fontSize={'lg'} color={'white'} fontWeight={'bold'} >02/30</Heading>
                </Box>                            
            </HStack>
        </Box>
    </Box>
    )

}
export default function CardPage(){
    return(
        <Box flex={1} >
            <Box p={4}>
                <Heading fontSize={'3xl'} fontWeight={'medium'} pt={8} pb={4}>Cards</Heading>
                <HStack justifyContent={'center'}>
                    <Button w={'50%'}
                        borderRadius={0}
                        bg={'black'} color={'white'}
                        _hover={{bg:'gray.900'}}
                        _active={{bg:'gray.800'}}
                        py={4}>
                            Physical Cards
                    </Button>
                    <Button w={'50%'}
                        borderRadius={0}
                        bg={'gray.500'} color={'white'}
                        _hover={{bg:'gray.900'}}
                        _active={{bg:'gray.800'}}
                        py={4}
                        >
                            Virtual Cards
                    </Button>
                </HStack>
            </Box>
            {/* <ScrollView p={4} flex={1} py={8} pb={8}>
                <Text fontSize={'xl'} pb={4} fontWeight={'medium'}> Credit Card</Text>
                <Card />
                <Card />
                <Text fontSize={'xl'} py={4} fontWeight={'medium'}> Debit Card</Text>

                <Card />
                <Card />
                <Box h={24}></Box>
            </ScrollView>  */}
            <ScrollView p={4} flex={1} py={8} pb={8}>
                <Text fontSize={'xl'} pb={4} fontWeight={'medium'}> Virtual Cards</Text>
                <Card />
                <Box h={64}></Box>
                <Button 
                    bg={'black'} color={'white'}
                    _hover={{bg:'gray.900'}}
                    _active={{bg:'gray.800'}}
                    py={4}>
                        Add New Card
                </Button>
                <Box h={24}></Box>
            </ScrollView>             
        </Box>       
    )
}