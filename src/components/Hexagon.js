import React, { Component } from "react";
import { View, ART } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const { Surface, Shape, Group, Text } = ART;

const styles = EStyleSheet.create({
  $width: "100%",
  viewContainer: {
    width: "$width",
    height: "1.5 * $width",
    backgroundColor: "$heroBackground"
  }
});

class Hexagon extends Component {
  render() {
    console.log(styles);
    return (
      <View style={styles.viewContainer}>
        <Surface height={500} width={500}>
          <Text font={'50px "Roboto"'} fill="white">
            Works
          </Text>
        </Surface>
      </View>
    );
  }
}

export default Hexagon;
