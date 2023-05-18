import { Box, Pressable,Button, Input, HStack,Flex, Text, 
    Heading, ScrollView, VStack, Circle, KeyboardAvoidingView } from 'native-base';


function SearchItems(){
    const data = [
        {   
            image: 'access.png',
            name: 'Access Bank PLC'
        },
        {   
            image: 'uba.png',
            name: 'United Bank of Africa'
        },
        {   
            image: 'opay.png',
            name: 'Opay'
        },
        {   
            image: 'Palmpay',
            name: 'Palmpay'
        }


    ]
    return(
        <>
        {data.map((item)=>(
            <HStack rounded={'lg'} key={item} alignItems={'center'} p={2} my={2} bg={'white'}>
                <Box w={12} h={12} rounded={'sm'} mr={2} bg={'blueGray.100'}></Box>
                <Text fontWeight={'medium'} ml={1} fontSize={'lg'}>{item.name}</Text>
            </HStack>
      ))}
      </>
  )
}

export default function SearchBank(){
    return(
        <Box flex={1} pt={8}  bg={'blueGray.50'} >
            <Box pt={8} p={4} bg={'white'} >
                <HStack w={'full'} shadow={'xl'} >
                    <Pressable h={'full'} w={'10%'} bg={'blueGray.500'} rounded={'sm'} mr={1}></Pressable>
                    <Heading fontSize={'2xl'} fontWeight={'medium'} >Deposit</Heading>
                </HStack>
                <Input mt={8} fontSize={'md'} py={2} h={16} bg={'blueGray.200'} placeholder='Search'
                />
            </Box>
            <ScrollView flex={1} p={4}pb={8} mt={8} bg={'blueGray.200'}>

            <SearchItems />
            <SearchItems />
            <SearchItems />
            <Box h={24}></Box>
            </ScrollView>
        </Box>
    )
}