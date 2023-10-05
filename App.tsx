import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native-elements";

import HomePage from "./src/pages/HomePage";

export default function App() {
  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="HomePage" component={HomePage} />
        <Text>toyoyotoyoyo</Text>
        {/* Stack screen for other screens */}
      </stack.Navigator>
    </NavigationContainer>
  );
}
