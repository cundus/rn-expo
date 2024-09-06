import React from "react";
import { useAppSelector } from "@/store/store";
import { Redirect, Slot } from "expo-router";
import { Drawer } from "expo-router/drawer";

const AppLayout = () => {
   const auth = useAppSelector((state) => state.auth);

   if (!auth.isLoggedIn) {
      return <Redirect href="/login" />;
   }

   return (
      <Drawer>
         <Drawer.Screen name="index" options={{ title: "Home" }} />
      </Drawer>
   );
};

export default AppLayout;
