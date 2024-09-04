import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const Detail = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Detail</Text>
         <Button title="Go back" onPress={() => router.back()} />
         <Image
            source={require("../../assets/images/store_home_share.jpg")}
            alt="img"
            style={styles.localImage}
         />

         <Image
            source={{
               uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbfZyoxEp9R0ZfOoZLtmKjlM_4ca5Ti8HzA&s",
            }}
            alt="img"
            style={styles.localImage}
         />
      </View>
   );
};

export default Detail;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },

   title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
   },

   localImage: {
      width: 200,
      height: 200,
      marginBottom: 20,
      resizeMode: "contain",
   },
});
