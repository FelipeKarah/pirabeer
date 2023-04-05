import { Home } from "../screens/Home";
import { ProductDetails } from "../screens/ProductDetails";
import { ButtonShoppingCart } from "../components/ButtonShoppingCart";

import { Entypo, FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text} from 'react-native'
import SignIn from "../screens/SignIn";
import { Profile } from "../screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { ButtonAvatar } from "../components/ButtonAvatar";
import { ListProducts } from "../screens/Products";
import { Requests } from "../screens/Requests";
import { Cart } from "../screens/Cart";
import { THEME } from "../theme";
import { ProfileAddress } from "../screens/ProfileAddress";
import { RequestDetails } from "../screens/RequestDetails";
import { ProfileRegistration } from "../screens/ProfileRegistration";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();;

export function AppRoutes() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown : false, 
        tabBarStyle:{
          backgroundColor:THEME.COLORS.BACKGROUND_900,
          borderTopColor:'transparent'
        },
        tabBarActiveTintColor: '#FFF',
        tabBarItemStyle: {
          paddingBottom: 5
        }
    }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreens}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Produtos"
        component={ProductStackScreens}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="search" size={size} color={color} />
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
        name="MeusPedidos"
        component={RequestStackScreens}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="list-ul" size={size} color={color} />
          )
        }}
      />


      <Tab.Screen
        name="Profile"
        component={ProfileStackScreens}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({size, color}) => (
            <ButtonAvatar  size={size} color={color}/>
          )
        }}
      />
      
    </Tab.Navigator>

    
  )
}

function HomeStackScreens() {
  return (
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen
          name="home"
          component={Home}
        />
        <Stack.Screen
          name="productDetails"
          component={ProductDetails}
        />
        <Stack.Screen
          name="carts"
          component={Cart}
        />
      </Stack.Navigator>
  );
}

function ProfileStackScreens() {
  return (
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen
          name="profile"
          component={Profile}
        />
        <Stack.Screen
          name="profileAddress"
          component={ProfileAddress}
        />
        <Stack.Screen
          name="profileRegistration"
          component={ProfileRegistration}
        />
      </Stack.Navigator>
  );
}

function ProductStackScreens() {
  return (
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen
          name="listenProduct"
          component={ListProducts}
        />
        <Stack.Screen
          name="listenProductDetails"
          component={ProductDetails}
        />
        <Stack.Screen
          name="carts"
          component={Cart}
        />
      </Stack.Navigator>
  );
}

function RequestStackScreens() {
  return (
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen
          name="listenRequest"
          component={Requests}
        />
        <Stack.Screen
          name="listenRequestDetails"
          component={RequestDetails}
        />
      </Stack.Navigator>
  );
}

