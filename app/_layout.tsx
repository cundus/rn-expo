import {
   DarkTheme,
   DefaultTheme,
   ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";
import { store } from "@/store/store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   const colorScheme = useColorScheme();
   const [isLogin, setIsLogin] = useState(false);

   const [loaded] = useFonts({
      SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
   });

   useEffect(() => {
      if (loaded) {
         SplashScreen.hideAsync();
      }
   }, [loaded]);

   if (!loaded) {
      return null;
   }

   return (
      <Provider store={store}>
         <ThemeProvider value={DefaultTheme}>
            <Slot />
         </ThemeProvider>
      </Provider>
   );
}
