import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL:"http://192.168.1.249:3333"  //Casa
  // baseURL:"http://192.168.221.172:3333"  //Celular

  // baseURL:"http://192.168.0.135:3333"
})

api.interceptors.request.use( async config => {
  const token = await  AsyncStorage.getItem('@Auth:token');

  if(token){
    (config.headers as any)['Authorization'] = `Bearer ${token}`
  }
  return config
});


export default api;

