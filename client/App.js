import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FamilyHomeScreen from "./pages/FamilyHomeScreen";
import FamilyInputScreen from "./pages/FamilyInputScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="FamilyInputScreen" component={FamilyInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
