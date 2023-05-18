import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import SplashScreen from "./intro/splashScreen";
import Onboarding from "./intro/onboarding";
import SignIn from "./forms/signin";
import SignUp from "./forms/signup";
import SignSuccess from "./feedback/signSuccess";
import ProcessingPayment from "./feedback/processingPayment";
import SuccessPayment from "./feedback/successPayment";
import DashBoard from "./main/dashboard";
import CardPage from "./main/cards";
import Statistics from "./main/statistics";
import AtmLocator from "./main/atmLocator";
import AtmMap from "./main/atmMap";
import Transfer from "./subscreen/transfer";
import Deposit from "./subscreen/deposit";
import SearchBank from "./subscreen/searchBank";
import Airtime from "./subscreen/airtime";
import Electricity from "./subscreen/electricity";
import Profile from "./subscreen/profile";
import Reciepts from "./subscreen/reciepts";

// import { NavigationContainer } from "react-navigation";
// import {NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack';

import {NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import MyTabs from "./main";


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const Stack = createStackNavigator();
  return (
  <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator
        detachInactiveScreens
        animationEnabled
        gestureEnabled
        animationTypeForReplace={'push'}
        screenOptions={{
          headerShown: false
        }}
        >
          {/* <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Signin" component={SignIn} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="SignSuccess" component={SignSuccess} /> */}

          
          

          
          <Stack.Screen name="mytabs" component={MyTabs}/>

          <Stack.Screen name="SuccessPayment" component={SuccessPayment} />
          <Stack.Screen name="Processing" component={ProcessingPayment} />
          
          <Stack.Screen name="Locator" component= {AtmMap} />
          <Stack.Screen name="Transfer" component= {Transfer} />
          <Stack.Screen name="Deposit" component= {Deposit} />
          <Stack.Screen name="Searchbank" component={SearchBank} />
          <Stack.Screen name='Airtime' component={Airtime} />
          <Stack.Screen name='Electricity' component={Electricity} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name="Reciepts" component={Reciepts} />
        </Stack.Navigator>
    </NavigationContainer>

  </NativeBaseProvider>

  )
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}





// <Center
// _dark={{ bg: "blueGray.900" }}
// _light={{ bg: "blueGray.50" }}
// px={4}
// flex={1}
// >
// <VStack space={5} alignItems="center">
//   <NativeBaseIcon />
//   <Heading size="lg">Welcome to NativeBase</Heading>
//   <HStack space={2} alignItems="center">
//     <Text>Edit</Text>
//     <Box
//       _web={{
//         _text: {
//           fontFamily: "monospace",
//           fontSize: "sm",
//         },
//       }}
//       px={2}
//       py={1}
//       _dark={{ bg: "blueGray.800" }}
//       _light={{ bg: "blueGray.200" }}
//     >
//       App.js
//     </Box>
//     <Text>and save to reload.</Text>
//   </HStack>
//   <Link href="https://docs.nativebase.io" isExternal>
//     <Text color="primary.500" underline fontSize={"xl"}>
//       Learn NativeBase
//     </Text>
//   </Link>
//   <ToggleDarkMode />
// </VStack>
// </Center>