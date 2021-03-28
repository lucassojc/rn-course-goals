import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = React.useState('');

  const goalInputHandler = (enteredText) => setEnteredGoal(enteredText);
  return (
    <View style={classes.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={classes.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

export default GoalInput;

const classes = StyleSheet.create({
  inputContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});
