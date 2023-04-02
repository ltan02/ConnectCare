import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FamilyHomeScreen from "./pages/FamilyHomeScreen";
import { Text, Image } from "react-native-elements";
import FamilyHistoryScreen from "./pages/FamilyHistoryScreen";
import FamilyProfileScreen from "./pages/FamilyProfileScreen";
import FamilyInputScreen from "./pages/FamilyInputScreen";
import NurseClientDetails from "./pages/NurseClientDetails";
import { createStackNavigator } from "@react-navigation/stack";
import StandaloneInputScreen from "./pages/StandaloneInputScreen";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack2.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack2.Screen name="DashboardStack" component={FamilyHomeScreen} />
      <Stack2.Screen name="Input" component={FamilyInputScreen} />
      <Stack2.Screen name="AdditionalInfo" component={StandaloneInputScreen} />
    </Stack2.Navigator>
  );
}

function CareTakerPages() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F2FFFD",
          height: 85,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowOpacity: 0.06,
          shadowRadius: 20,
          elevation: 1,
        },
        tabBarLabel: ({ focused }) => {
          const fontWeight = focused ? "bold" : "normal";
          const textDecorationLine = focused ? "underline" : "none";
          return (
            <Text style={{ fontWeight, textDecorationLine }}>{route.name}</Text>
          );
        },
        tabBarItemStyle: { paddingTop: 10 },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={HomeStack}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: 30, height: 30 }}
              source={require("./assets/checklist.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={FamilyHistoryScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: 30, height: 30 }}
              source={require("./assets/chat.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={FamilyProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: 30, height: 30 }}
              source={require("./assets/user.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function NursePages() {
  return (
    <Stack3.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack3.Screen name="NurseClientDetails" component={NurseClientDetails} />
    </Stack3.Navigator>
  );
}

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 100, paddingLeft: 50}}>
      <TouchableOpacity onPress={() => navigation.navigate("CareTakerPages")}>
        <Text>CareTaker</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("NursePages")}>
        <Text>Nurses</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CareTakerPages" component={CareTakerPages} />
        <Stack.Screen name="NursePages" component={NursePages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
