import {
   View,
   Text,
   Button,
   FlatList,
   ListRenderItem,
   Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { deletePost, IPost, setPost } from "@/store/post/slice";
import { getPostAsync } from "@/store/post/thunk";

const index = () => {
   const posts = useAppSelector((state) => state.post.post);
   const dispatch = useAppDispatch();

   useEffect(() => {
      console.log("posts", posts);

      dispatch(getPostAsync());
   }, []);

   const _renderItem: ListRenderItem<IPost> = ({ item }) => {
      return (
         <View
            style={{
               flex: 1,
               height: 200,
               margin: 10,
               padding: 10,
               borderRadius: 10,
               borderWidth: 2,
               borderColor: "gray",
            }}
         >
            <View
               style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
               <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
               <Pressable
                  onPress={() => {
                     console.log("delete", item);

                     dispatch(deletePost(item.id));
                  }}
               >
                  <Text>Delete</Text>
               </Pressable>
            </View>
            <Text style={{}}>{item.content}</Text>
         </View>
      );
   };

   return (
      <View
         style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
         }}
      >
         <Text>index</Text>
         <Button
            title="fetch data"
            onPress={() => {
               getPostAsync();
            }}
         />
         <Button
            title="Go to list"
            onPress={() => {
               router.push("/(home)/list");
            }}
         />

         <FlatList
            data={posts || []}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id.toString()}
         />
      </View>
   );
};

export default index;
