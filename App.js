import React, { Component } from "react";
import { Platform, StyleSheetRegistry, View, ART } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { HexGrid, Layout, Hexagon, Hex } from "./src/components/Hex_System";

const { Text, Shape, Group, Transform } = ART;

EStyleSheet.build({});

const styles = EStyleSheet.create({
  $width: "100%",
  viewContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2bd1e0"
  }
});
const icon = new Transform().move(-40, -60).scale(3.3);
export default class App extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <HexGrid width={1200} height={1000}>
          <Layout size={{ x: 80, y: 80 }} flat={false} spacing={1.1} origin={{ x: 415, y: 600 }}>
            <Hexagon q={0} r={0} s={0} fill={"#5661e3"} border={"white"} borderWidth={2.5} />

            <Hexagon q={0} r={-1} s={1} fill={"#5661e3"} border={"white"} borderWidth={2.5} />
            <Hexagon q={0} r={1} s={-1} fill={"#5661e3"} border={"white"} borderWidth={2.5} />
            <Hexagon q={1} r={-1} s={0} fill={"#5661e3"} border={"white"} borderWidth={2.5}>
              <Shape
                d={
                  "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                }
                fill={"#ffe64b"}
                transform={icon}
              />

              <Text font={'13.5px "Roboto bold"'} y={20} alignment="center" fill="white">
                No Wrist Band
              </Text>
              <Text font={'13.5px "Roboto bold"'} y={40} alignment="center" fill="white">
                Linked
              </Text>
            </Hexagon>
            <Hexagon q={1} r={0} s={-1} fill={"#5661e3"} border={"white"} borderWidth={2.5}>
              <Text font={'12px "Roboto"'} alignment="center" fill="white">
                1, 0, -1
              </Text>
            </Hexagon>
            <Hexagon q={-1} r={1} s={0} fill={"#5661e3"} border={"white"} borderWidth={2.5}>
              <Text font={'12px "Roboto"'} alignment="center" fill="white">
                -1, 1, 0
              </Text>
            </Hexagon>
            <Hexagon q={-1} r={0} s={1} fill={"#5661e3"} border={"white"} borderWidth={2.5} />
          </Layout>
        </HexGrid>
      </View>
    );
  }
}
