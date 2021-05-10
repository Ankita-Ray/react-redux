import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTodo from './screens/AddTodo';
import TodoList from './screens/TodoList';
import VisibilityFilters from './screens/VisibilityFilters';
import './style.css';


export default function App() {
  return (
  <Provider store={store}>
    <View style={styles.container}>
      <Text style={styles.heading}
      >
        Todo App
      </Text>
      <AddTodo/>
 
      <VisibilityFilters/>  
      <TodoList/>
      
 
    </View>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   // justifyContent: 'center',
  },
  heading:{
    fontSize:40,
    fontWeight:500,
    color:'red',
    textDecorationLine:'underline'
  }
});