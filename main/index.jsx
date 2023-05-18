import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer } from '@react-navigation/native'
import { HStack } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import DashBoard from './dashboard';
import CardPage from './cards';
import Statistics from './statistics';
import AtmLocator from './atmLocator';

const Tab = createMaterialBottomTabNavigator();

function MyTabs({navigation}) {

console.log(navigation)
  return (
    <HStack style={{ flex: 1 }}  w={'full'} justifyContent={'center'}>
        <Tab.Navigator
            initialRouteName="SignIn"
            activeColor="#606"  
            backgroundColor='#fff'
            screenOptions={({route})=>({
                backgroundColor: '#fff',
                tabBarIcon: ({focused, size, color }) =>{
                    let iconName;
                    if (route.name === 'Home'){
                        iconName = 'home'
                    }
                    else if (route.name === 'Bookmarks'){
                        iconName = 'book'
                    }
                    else if (route.name === 'Chat'){
                        iconName = 'book'
                    }  
                    else if (route.name === 'Profile'){
                        iconName = 'home'
                    }                                        
                    return(
                        <Icon
                            name={iconName}
                            size={25}
                        />
                    )
                }
            })}
            >
            <Tab.Screen 
                name="Dashboard" component={DashBoard} />
            <Tab.Screen 
                name="Cards" component={CardPage} />
            <Tab.Screen 
                name="Statistics" component={Statistics} />
            <Tab.Screen 
                name="Atm" component={AtmLocator} navigation={navigation}/>                
        </Tab.Navigator>
    </HStack>
  );
}

export default MyTabs;