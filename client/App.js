import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FamilyHomeScreen from "./pages/FamilyHomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="FamilyHomeScreen" component={FamilyHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
