import React from 'react';
import { View, ART } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {
 Surface,
 Shape,
 Group,
 Text
} = ART;

const Hexagon = props => (
  <View>
    <Surface
      width={styles.viewContainer.width}
      height={styles.viewContainer.height}
    >
      <Text font={'13px "Helvertica"'}>works</Text>
    </Surface>
    {props.children}
  </View>
)

const styles = EStyleSheet.create({
  $width: '100%',
  viewContainer: {
    width: '$width',
    height: '1.5 * $width'
  }
})

export default Hexagon;
