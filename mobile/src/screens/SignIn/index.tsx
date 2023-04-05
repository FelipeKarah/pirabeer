import React, { useRef, useState } from 'react';
import { Button, Image, TouchableOpacity, Text, KeyboardAvoidingView, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import {useAuth} from '../../contexts/auth';
import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import logoImg from '../../assets/logo.png'
import { THEME } from '../../theme';
import { Platform } from 'expo-modules-core';
import Input from '../../components/Input';

const SignIn: React.FC = () => {

  const {signed, signIn} = useAuth();

  console.log('signed', signed)

  const scrollViewRef = React.useRef<ScrollView>()  

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [ isCopping, setIsCopping] = useState<boolean>(false)

  async function handleSignIn() {
    // setIsCopping(true);
    console.log('email',email)
    console.log('password', password)
    if(email == null && password == null ){
      // criar toast de notificação ( favor informar o email)
      console.log('Informe email e senha!')
      return;
    }
    signIn();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView 
          nestedScrollEnabled={true}
          onContentSizeChange={(contentWidth, contentHeight) => {
            scrollViewRef.current?.scrollTo({ y: contentHeight });
          }}>

            <Image 
              source={logoImg}
              style={styles.logo}
            />
            <Input
              label ='Login'
              placeholder='E-mail'
              IconName='mail'
              autoCapitalize='none'
              onChangeText={setEmail}
              value={email}
              autoCorrect={false}
              keyboardType="email-address"
            />
            <Input
              label ='Senha'
              placeholder='Password'
              secureTextEntry
              IconName='user'
              value={password}
              onChangeText={setPassword}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType="default"
            />
            <TouchableOpacity 
              style={styles.SignInButton}
              onPress={handleSignIn}
              disabled={isCopping}
            >
              <Text style={styles.signIn}>
                {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : 'Entrar'}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Background>
  );
};

export default SignIn;