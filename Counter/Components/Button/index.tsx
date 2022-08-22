import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';
import {styles} from './styles';

interface ButtonProps extends PressableProps {
  text: string;
}

const Button = ({text, ...props}: ButtonProps) => {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.label}>{text}</Text>
    </Pressable>
  );
};

export default Button;
