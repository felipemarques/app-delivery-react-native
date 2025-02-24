import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";

const products: Product[] = [
  {
    id: "1",
    name: "Hambúrguer Especial",
    description: "Delicioso hambúrguer artesanal com queijo cheddar e bacon.",
    price: "29.90",
    imageUrl:
      "https://media.istockphoto.com/id/2061716709/photo/grilled-rib-burger.webp?a=1&b=1&s=612x612&w=0&k=20&c=OeRKfT736HFidM_TmreA8T8XRgzCs7vjVKx-uzJdRgE=",
    calories: 850
  },
  {
    id: "2",
    name: "Pizza de Calabresa",
    description: "Pizza de calabresa com molho especial e queijo derretido." ,
    price: "49.90",
    imageUrl:
      "https://media.istockphoto.com/id/1207656123/photo/pizza-de-calabresa-brazilian-food-macro-photograph-of-a-calabrese-sausage-pizza-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=zzugQ0AlhegSzRV3_wbGB61J5KqB3zRs94RWzU_5pY8=",
    calories: 1200
  },
  {
    id: "3",
    name: "Batata Frita",
    description: "Batata frita crocante e dourada, perfeita para acompanhar seu lanche.",
    price: "14.90",
    imageUrl:
      "https://media.istockphoto.com/id/1212939790/photo/french-fries-in-craft-paper-on-a-gray-plate-on-a-wooden-background-american-traditional-fast.webp?a=1&b=1&s=612x612&w=0&k=20&c=LUNSc1Z7mdcuJSBDN1656q76Sc26Vjky6xI0ojogJnE=",
    calories: 450
  },
];

for (var i = 4; i < 40; i++) {
  products.push({
    id: "" + i,
    name: "Produto " + i,
    description: "",
    price: "29.90",
    imageUrl: "https://placehold.co/150x150.png",
    calories: 500
  });
}

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
                id={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                calories={item.calories}
                onPress={() => navigation.navigate("ProductDetail", { product: item })} 
                description={""}          
            />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
});

export default HomeScreen;
