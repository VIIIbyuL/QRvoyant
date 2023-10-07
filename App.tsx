import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native-elements";

import HomePage from "./src/pages/HomePage";
import SearchPage from "./src/pages/SearchPage";

export default function App() {
  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="HomePage" component={HomePage} />
        <stack.Screen name="SearchPage" component={SearchPage} />
        {/* Stack screen for other screens */}
      </stack.Navigator>
    </NavigationContainer>
  );
}
