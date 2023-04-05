import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../contexts/auth'

export function Routes() {

  const {signed} = useAuth();
  
  return (
     signed ? <AppRoutes /> : <AuthRoutes />
  )
}