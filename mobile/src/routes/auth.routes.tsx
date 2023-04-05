import { Home } from "../screens/Home";
import { ProductDetails } from "../screens/ProductDetails";
import { ButtonShoppingCart } from "../components/ButtonShoppingCart";

import { Entypo, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignIn from "../screens/SignIn";
import { Cart } from "../screens/Cart";

const Tab = createBottomTabNavigator();

export function AuthRoutes() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown : false, 
        tabBarStyle:{
          backgroundColor:'#121212',
          borderTopColor:'transparent'
        },
        tabBarActiveTintColor: '#FFF',
        tabBarItemStyle: {
          paddingBottom: 5
        }
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Carrinho"
        component={Cart}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, size, color}) => (
            <ButtonShoppingCart focused={focused} size={size} color={color}/>
          )
        }}
      />

      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name="user" size={size} color={color} />
          )
        }}
      />
        
    </Tab.Navigator>
  )
}