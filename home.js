import { StyleSheet, Image, Text, ImageBackground } from "react-native";
import carImg from "./assets/car.gif";

export default function App() {
  return (
    <ImageBackground
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe19tUflIOdwMPRMvUoNw-fPTLBOiQpdmYDg&usqp=CAU",
      }}
      style={styles.container}
    >
      <Image
        style={styles.logo}
        source={{
          uri: "https://cdn.dribbble.com/users/189524/screenshots/2818547/silhouette-solo-dribbble-03_v4.gif",
        }}
      />
      <Text style={styles.text}>Ahmed</Text>
      <Text style={styles.contact}>03310334392</Text>
      <Image style={styles.car} source={carImg} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 100,
  },
  contact: {
    fontSize: 50,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  car: {
    width: "100%",
    height: 200,
    position: "absolute",
    bottom: 0,
  },
});
