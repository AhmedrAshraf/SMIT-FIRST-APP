import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRef, useState } from "react";

function Counter() {
  const [readCount, updateCount] = useState(0);
  var time = useRef();

  function increatCount() {
    updateCount(readCount + 1);
  }

  function decreaseCount() {
    if (readCount > 0) {
      updateCount(readCount - 1);
    }
  }

  function resetCount() {
    updateCount(0);
  }

  function startCount() {
    time.current = setInterval(()=>{
      updateCount(prev => prev + 1);
    }, 1000);
  }

  function stopCount() {
    clearInterval(time.current)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{readCount}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={increatCount} style={styles.customButton}>
          <Text style={styles.buttonText}>Plus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decreaseCount} style={styles.customButton}>
          <Text style={styles.buttonText}>Minus</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={resetCount} style={styles.customButton}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={startCount} style={styles.customButton}>
        <Text style={styles.buttonText}>Start Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopCount} style={styles.customButton}>
        <Text style={styles.buttonText}>Stop Count</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "wheat",
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    fontSize: 100,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  customButton: {
    marginBottom: 10,
    width: 150,
    height: 50,
    borderRadius: 5,
    backgroundColor: "tomato",
    borderWidth: 2,
    borderColor: "brown",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
});
export default Counter;
