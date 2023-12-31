import { ClerkProvider } from "@clerk/clerk-react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants, { ExpoConfig } from "expo-constants";
import React, { useEffect } from "react";

import HomePage from "./src/pages/HomePage";
import ProfilePage from "./src/pages/ProfilePage";
import SearchPage from "./src/pages/SearchPage";
import { setupDatabaseAsync } from "./src/services/database";

interface CustomManifestExtra extends ExpoConfig {
  CLERK_PUBLISHABLE_KEY?: string;
}

export default function App() {
  const stack = createStackNavigator();
  const publishableKey = (Constants.manifest2?.extra as CustomManifestExtra)
    ?.CLERK_PUBLISHABLE_KEY;

  useEffect(() => {
    async function prepareApp() {
      await setupDatabaseAsync();
      // ... any other initialization tasks
    }

    prepareApp();
  }, []);

  return (
    <ClerkProvider publishableKey={publishableKey}>
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
