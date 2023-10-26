import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";

import HomePage from "./src/pages/HomePage";
import ProfilePage from "./src/pages/ProfilePage";
import SearchPage from "./src/pages/SearchPage";
import { setupDatabaseAsync } from "./src/services/database"; // Make sure this import path is correct

export default function App() {
  const stack = createStackNavigator();

  useEffect(() => {
    async function prepareApp() {
      await setupDatabaseAsync();
      // ... any other initialization tasks
    }

    prepareApp();
  }, []);

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="HomePage" component={HomePage} />
        <stack.Screen name="SearchPage" component={SearchPage} />
        <stack.Screen name="ProfilePage" component={ProfilePage} />
        {/* Stack screen for other screens */}
      </stack.Navigator>
    </NavigationContainer>
  );
}
