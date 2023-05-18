import { KeyboardAvoidingView, Center, Heading,Box, VStack, HStack, Text, Input, Button, Spinner } from "native-base";

export default function ProcessingPayment({navigation}){
    return(
        <Center flex={1} py={10}>
            <Center flex={1} w={['95%','90%', '85%','80%','40%']}>
                <Spinner color={'black'} size={'lg'} mb={4}/>
                <Heading fontSize={'2xl'} mb={16} fontWeight={'medium'} w={'full'} textAlign={'center'}>Processing Payment</Heading>
            </Center>
            <HStack alignItems={'center'} justifyContent={'center'}  w={'full'} >
                <Button bg={'black'} color={'white'} size={'lg'}  w={['95%','90%', '85%','80%','40%']}
                    h={12} my={4}
                    _hover={{bg:'blueGray.900'}}
                    _active={{bg:'blueGray.800'}}
                    onPress={()=>{navigation.navigate('mytabs')}}
                    >Cancel</Button>
            </HStack>
    </Center>        
    )
}