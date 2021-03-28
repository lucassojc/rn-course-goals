import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = React.useState('');

  const goalInputHandler = (enteredText) => setEnteredGoal(enteredText);

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={classes.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={classes.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={classes.buttonsContainer}>
          <View style={classes.button}>
            <Button title="CANCEL" onPress={props.onCancel} color="red" />
          </View>
          <View style={classes.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const classes = StyleSheet.create({
  inputContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: { width: '40%' },
});
