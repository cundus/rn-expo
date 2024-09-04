import {
   View,
   Text,
   FlatList,
   Image,
   FlatListProps,
   ListRenderItem,
   SafeAreaView,
   StatusBar,
} from "react-native";
import React from "react";

const LIST_1 = ["List 1", "List 2", "List 3", "List 4", "List 5"];
const LIST_2 = [
   {
      name: "List 1",
      image: "https://picsum.photos/200/300",
   },
   {
      name: "List 2",
      image: "https://picsum.photos/200/300",
   },
   {
      name: "List 3",
      image: "https://picsum.photos/200/300",
   },
];

const List = () => {
   const _renderItem: ListRenderItem<{ name: string; image: string }> = ({
      item,
   }) => {
      return (
         <View style={{ flex: 1, height: 200, margin: 10 }}>
            <Image
               source={{ uri: item.image }}
               alt="img"
               style={{
                  width: "100%",
                  height: "100%",
               }}
            />
            <Text>{item.name}</Text>
         </View>
      );
   };

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <StatusBar translucent />
         <View style={{ padding: 10, flex: 1 }}>
            {LIST_1.map((item) => (
               <Text key={item}>{item}</Text>
            ))}

            <View
               style={{
                  width: "100%",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginVertical: 10,
               }}
            ></View>

            <FlatList
               data={LIST_1}
               renderItem={({ item }) => <Text>{item}</Text>}
               keyExtractor={(item) => item}
            />

            <FlatList
               data={LIST_2}
               renderItem={_renderItem}
               numColumns={2}
               keyExtractor={(item, index) => index.toString()}
            />
         </View>
      </SafeAreaView>
   );
};

export default List;
