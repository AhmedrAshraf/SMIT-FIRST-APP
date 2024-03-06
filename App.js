import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
{
  /* map() */
  /* () => {} */
}
function Resturant() {
  const [showMore, setShowMore] = useState(false);

  var coverImg =
    "https://timelinecovers.pro/facebook-cover/download/yummy-vegetables-facebook-cover.jpg";

  var burgerImg =
    "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg";
  var pizzaImg =
    "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*";
  var broastImg =
    "https://www.caterermiddleeast.com/cloud/2021/12/23/q14Ott5Z-ALBaik-dubai.jpg";
  var SandwichImg =
    "https://media.istockphoto.com/id/1397193477/photo/club-sandwich-made-with-bacon-ham-turkey-cheese-lettuce-and-tomato.jpg?s=612x612&w=0&k=20&c=fjNyxTEA0L88bqENs8_SKMnfAOyWlNPGxLIxz9nsSss=";

  var foods = [
    { title: "Pizza", price: 500, img: pizzaImg },
    { title: "Burger", price: 120, img: burgerImg },
    { title: "Broast", price: 270, img: broastImg },
    { title: "Sandwich", price: 300, img: SandwichImg },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: coverImg }}
        style={{ width: "100%", height: 200 }}
      />
      <Text style={styles.heading}>Discount</Text>

      {/* cards */}
      {/* <View style={styles.cardRow}> */}
      <ScrollView horizontal>
        {foods.map((item) => {
          return (
            <View style={styles.card}>
              <Image
                source={{ uri: item.img }}
                style={{ width: "100%", height: 120 }}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text>Rs: {item.price}</Text>
            </View>
          );
        })}
        </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  cardRow: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  card: {
    padding: 4,
    width: 200,
    height: 185,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
    marginVertical: 5,
    fontWeight: "700",
  },
});

export default Resturant;
