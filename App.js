
import { WallpaperContextProvider } from './context/WallpaperContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ImagesScreen from './screens/ImagesScreen';
import ImagePreviewScreen from './screens/ImagePreviewScreen';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
  <>

<WallpaperContextProvider>
<NavigationContainer>
<Stack.Navigator screenOptions={{headerShown:false,animation:'none'}}>
  <Stack.Screen name='Home' component={Home}/>
  <Stack.Screen name='ImagesScreen' component={ImagesScreen}/>
  <Stack.Screen name='ImagePreviewScreen' component={ImagePreviewScreen}/>
</Stack.Navigator>


</NavigationContainer>
</WallpaperContextProvider>

  </>
  );
}
