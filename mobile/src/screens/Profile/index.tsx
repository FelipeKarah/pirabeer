import React, {useState, useEffect} from 'react';
import { View,ImageBackground, TouchableOpacity, ActivityIndicator} from 'react-native';

import { styles } from './styles';
import {useAuth} from '../../contexts/auth';
import { Text } from 'react-native';
import backgroundImg from '../../../assets/avatar-default.png';
import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons'
import { THEME } from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

interface User{
  name:string;
  email:string;
}

export function Profile() {
  const {user, signOut} = useAuth()
  const [ isCopping, setIsCopping] = useState<boolean>(false)
  const [ userConnected, setUserConnected] = useState<User | null>(null)
  
  const navigation = useNavigation()

  function handleSignOut() {
    signOut();
  }
  
  const [loading, setLoading] = useState(true);

  function handleAddress(){
    navigation.navigate('profileAddress');
  }
  function handleRegistration(){
    navigation.navigate('profileRegistration');
  }

  useEffect(()=>{
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@Auth:user')

      if(storagedUser){  
        setUserConnected(JSON.parse(storagedUser));
      }
    }

    loadStorageData();
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ImageBackground 
          source={backgroundImg}
          style={styles.avatar}
          imageStyle={{ borderRadius: 100}}
          defaultSource={backgroundImg}
          >
        </ImageBackground>
        <TouchableOpacity 
          style={styles.buttonEditAvatar}
        >
          <View style={styles.backgroundEdit}>
            <Feather name="edit-2" size={24} style={styles.iconEdit} color="#FFF"/>
          </View>
        </TouchableOpacity >

        <Text style={styles.name}>
          Olá, {userConnected?.name}
        </Text>

        <TouchableOpacity  onPress={() => handleRegistration()}>
          <View>
            <Text style={styles.listenerOptions}>
              Dados Cadastrais
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => handleAddress()}>
          <View>
            <Text style={styles.listenerOptions}>
              Endereços
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity  >
          <View>
            <Text style={styles.listenerOptions}>
              Informações Complementares
            </Text>
          </View>
        </TouchableOpacity>
        

        <TouchableOpacity 
          style={styles.SignOutButton}
          onPress={handleSignOut}
          disabled={isCopping}
        >
          <Text style={styles.signOut}>
            {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : 'Sair'}
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </Background>
  );
}


