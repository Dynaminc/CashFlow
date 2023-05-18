import {Center, Heading, Pressable} from 'native-base';

export default function SplashScreen({navigation}){
    return(
        <Pressable flex={1} px={4} bg={'blueGray.800'} onPress={()=>{navigation.navigate('Onboarding')}}>
            <Center flex={1}>
            <Heading color={'blueGray.50'}>Cash Flow</Heading>
            </Center>
        </Pressable>
    )
}
