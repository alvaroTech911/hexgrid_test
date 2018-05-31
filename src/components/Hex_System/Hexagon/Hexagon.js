import React, { Component } from "react";
import PropTypes from "prop-types";
import { ART } from "react-native";
import Hex from "../models/Hex";
import HexUtils from "../HexUtils";

const { Surface, Shape, Group, Text, Transform } = ART;

class Hexagon extends Component {
  static propTypes = {
    q: PropTypes.number.isRequired,
    r: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
    fill: PropTypes.string,
    data: PropTypes.object,
    children: PropTypes.node
  };

  static contextTypes = {
    layout: PropTypes.object, // TODO Shape
    points: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
    const { q, r, s } = props;
    const { layout } = context;
    const hex = new Hex(q, r, s);
    const pixel = HexUtils.hexToPixel(hex, layout);
    this.state = { hex, pixel };
  }

  // TODO Refactor to reduce duplicate
  componentWillReceiveProps(nextProps) {
    const { q, r, s } = nextProps;
    const { layout } = this.context;
    const hex = new Hex(q, r, s);
    const pixel = HexUtils.hexToPixel(hex, layout);
    this.setState({ hex, pixel });
  }

  render() {
    const { fill, cellStyle, className } = this.props;
    const { points } = this.context;
    const { hex, pixel } = this.state;
    const transform = new Transform().move(pixel.x, pixel.y);
    const fillId = 'red';
    return (
      <Group transform={transform}>
        <Group >
          <Shape d={points} fill={fillId} stroke={"white"} />
          {this.props.children}
        </Group>
      </Group>
    );
  }
}

export default Hexagon;
