import { createContext, useState, useEffect, useContext} from 'react'
import * as auth from '../services/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Loading } from '../components/Loading';
import api from '../services/api/api';
import { Users } from '../interfaces/Users';


interface AuthContextData {
  signed:boolean;
  user: Users | null;
  signIn(): Promise<void>;
  signOut():void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}: any) {
  const [user, setUser] = useState<Users | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@Auth:user' )
      const storagedToken = await AsyncStorage.getItem('@Auth:token')
    
      await new Promise(resolve => setTimeout(resolve, 2000))

      if(storagedUser && storagedToken){
        api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser))
        setLoading(false);
      }
    }

    loadStorageData();
  }, [])
 
  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user)
    
    api.defaults.headers.common.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.user) )
    await AsyncStorage.setItem('@Auth:token', response.token )
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
  }
  
  if(loading == true){
    return (
      <Loading />
    )
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user , signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;