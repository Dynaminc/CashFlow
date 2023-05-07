import { Center, VStack, Box, Heading, Text, Flex, Button, HStack } from "native-base";

export default function Onboarding(){
    return(
        <Center flex={1}>
            <VStack w={['95%','90%', '85%','80%','40%']} alignContent={'center'} justifyContent={'center'}>
                <Box minH={72} bg={'gray.50'}></Box>
                <Heading fontSize={'4xl'} mb={3} textAlign={'center'} mt={4} color={'#424242'}>The Ultimate Financial Management App</Heading>
                <Text textAlign={'center'} fontSize={'lg'} lineHeight={35} pb={4} my={2}  color={'#707070'}>Stay in control of your finances, pay bills, and manage your accounts on-the-go with CashFlow Mobile - The Secure and Convenient Way to Bank.</Text>
                <Button bg={'black'} color={'white'} size={'lg'} w={'full'} 
                        h={12} my={4}
                        _hover={{bg:'gray.900'}}
                        _active={{bg:'gray.800'}}
                        >Get Started</Button>
                <HStack justifyContent={'center'} alignItems={'center'}>
                    <Button variant={'unstyled'} color={'#7E7E7E'} p={0} m={0}> Already have an account?</Button>
                    <Button variant={'ghost'} colorScheme={'primary'} p={0} m={0}> Sign In?</Button>
                </HStack>
            </VStack>

        </Center>
    )
}