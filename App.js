import { useFonts } from "expo-font";
import { Navigator } from './components/navigator/navigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    heading1: require("./assets/fonts/inter/Inter-Bold.ttf"),
    heading: require("./assets/fonts/inter/Inter-SemiBold.ttf"),
    body: require("./assets/fonts/inter/Inter-Regular.ttf"),
    bodyBold: require("./assets/fonts/inter/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}