import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductDetailScreen = ({ route }: any) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>R$ {product.price}</Text>
      <Text style={styles.calories}>🔥 {product.calories} kcal</Text>
      <Text style={styles.description}>
        {product.description || "Nenhuma descrição disponível."}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: "gray",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  calories: {
    fontSize: 14,
    color: "red",
    marginTop: 5,
  },
});

export default ProductDetailScreen;
