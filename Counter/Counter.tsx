import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from './Components/Button';
import styles from './Styles';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const add = () => {
    setCount(x => x + 1);
  };
  const reset = () => {
    setCount(42);
  };
  return (
    <View>
      <Text style={styles.text}>Contagem</Text>
      <Text style={[styles.text, styles.number]}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button text="+" onPress={add} />
        <Button text="C" onPress={reset} />
      </View>
    </View>
  );
};

export default Counter;
