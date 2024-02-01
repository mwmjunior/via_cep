import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import fonts
import { useFonts, Roboto_500Medium,Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './styles';
import { Header } from './src/components/Header/index';
import { Home } from './src/screens/Home';


export default function App() {

  //hooks para use useFonts(fontes)
  const [fontLoaded, fontError] = useFonts({
    Roboto_500Medium,Roboto_700Bold
  })

  if(!fontLoaded && !fontError)
  {
    return null;
  }

  return (
    <ContainerApp>
      <StatusBar/>
      <Header/>
      <Home/>
    </ContainerApp>
  );
}

