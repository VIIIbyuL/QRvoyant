import { ClerkProvider } from "@clerk/clerk-react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import React, { useEffect } from "react";

import HomePage from "./src/pages/HomePage";
import ProfilePage from "./src/pages/ProfilePage";
import SearchPage from "./src/pages/SearchPage";
import { setupDatabaseAsync } from "./src/services/database";

export default function App() {
  const stack = createStackNavigator();

  // Accessing the publishable key
  const publishableKey = process.env.EXPO_CLERK_PUBLISHABLE_KEY;

  console.log("Publishable Key:", publishableKey);

  useEffect(() => {
    async function prepareApp() {
      await setupDatabaseAsync();
    }

    prepareApp();
  }, []);

  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey}
    >
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="HomePage" component={HomePage} />
          <stack.Screen name="SearchPage" component={SearchPage} />
          <stack.Screen name="ProfilePage" component={ProfilePage} />
          {/* Stack screen for other screens */}
        </stack.Navigator>
      </NavigationContainer>
    </ClerkProvider>
  );
}
