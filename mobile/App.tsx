import { StatusBar, View, Text} from 'react-native';
import { Background } from './src/components/Background/index'
import { useRef, useEffect } from 'react'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import './src/services/notifications/notificationConfigs'
import { getPushNotificationToken } from './src/services/notifications/getPushNotificationToken'
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/auth';



export default function App() {

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
    
  })

  useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    })

    return () => {
      if(getNotificationListener.current && responseNotificationListener.current ){
        Notifications.removeNotificationSubscription(getNotificationListener.current);
        Notifications.removeNotificationSubscription(responseNotificationListener.current);
      }
    }
    
  }, [])

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });
  

  return (
    <Background>
      <StatusBar 
      barStyle="light-content" 
      backgroundColor="transparent" 
      translucent />

      <NavigationContainer>

        <AuthProvider>
          { fontsLoaded ? <Routes /> : <Loading /> }
        </AuthProvider>
        
      </NavigationContainer>



    </Background>
  );
}

