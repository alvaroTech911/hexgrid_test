import React, { Component } from "react";
import PropTypes from "prop-types";
import { ART } from "react-native";

const { Surface, Shape, Group, Text } = ART;

class HexGrid extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { width, height, viewBox } = this.props;
    return <Surface height={height} width={width}>{this.props.children}</Surface>;
  }
}
export default HexGrid;
