import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useState } from "react";
import { login } from '../util/auth';
import { Alert } from 'react-native';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    }
    catch (err){
      Alert.alert('Authentication Failed!', 'Could not log you in. Please check your credentials and try again later.');
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Logging you in...'/>
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
