import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { login } from "@/store/auth/slice";
import { Redirect } from "expo-router";

const Login = () => {
   const dispatch = useAppDispatch();
   const auth = useAppSelector((state) => state.auth);

   if (auth.isLoggedIn) {
      return <Redirect href="/" />;
   }

   return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         <Text>Login</Text>
         <Pressable onPress={() => dispatch(login())}>
            <Text>login</Text>
         </Pressable>
      </View>
   );
};

export default Login;
