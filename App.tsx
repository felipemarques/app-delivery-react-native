import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Produtos" }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: "Detalhes do Produto" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
