import React, { Component } from "react";
import { Platform, StyleSheetRegistry, View, ART } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { HexGrid, Layout, Hexagon, Hex } from "./src/components/Hex_System";

const { Text, Shape } = ART;

EStyleSheet.build({});

const styles = EStyleSheet.create({
  $width: "100%",
  viewContainer: {
    width: "100%",
    height: "90%",
    backgroundColor: "white"
  }
});
const x = () => EStyleSheet.value("100%", "width");
export default class App extends Component {
  render() {
    console.log(x());
    return (
      <View style={styles.viewContainer}>
        <HexGrid width={1200} height={1200}>
          <Layout size={{ x: 80, y: 80 }} flat={true} spacing={1.1} origin={{ x: 415, y: 600 }}>
            <Hexagon q={0} r={0} s={0} />

            <Hexagon q={0} r={-1} s={1} />
            <Hexagon q={0} r={1} s={-1} />
            <Hexagon q={1} r={-1} s={0}>
              <Text font={'12px "Roboto"'} alignment="center" fill="white">
                1, -1, 0
              </Text>
            </Hexagon>
            <Hexagon q={1} r={0} s={-1}>
            
              <Text font={'12px "Roboto"'} alignment="center" fill="white">
                1, 0, -1
              </Text>
            </Hexagon>

            <Hexagon q={-1} r={1} s={0}>
              <Text font={'12px "Roboto"'} alignment="center" fill="white">
                -1, 1, 0
              </Text>
            </Hexagon>
            <Hexagon q={-1} r={0} s={1} />
          </Layout>
        </HexGrid>
      </View>
    );
  }
}
