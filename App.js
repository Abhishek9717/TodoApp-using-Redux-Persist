import React,{Component} from 'react';
import { View } from 'react-native';

import List from './src/List';
import Input from './src/Input';
import Title from './src/Title';

import store from './redux/store'
import { actionCreators } from './redux/reducer'

export default class App extends Component{
  
  state = {
    // todos:[
    //   "click to remove",
    //   "Learn React Native",
    //   "Write Code",
    //   "Go to Sleep"
    // ]
  }

  componentWillMount(){
    const {todos} = store.getState();
    this.setState({todos});

    this.unsubscribe = store.subscribe(() => {
      const {todos} = store.getState();
      this.setState({todos});
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  /**************************************************************************** 
  //functions signature before using redux 
  onAddTodo = (text) => {
    const {todos} = this.state;
    this.setState({
      todos:[...todos, text]
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state;
    this.setState({
      todos:todos.filter((todo,i) => i!==index)
    })
  }
************************************************************************************/
  
  //functions after using redux
  onAddTodo = (text) => {
    store.dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    store.dispatch(actionCreators.remove(index))
  }



  render(){
    const {todos} = this.state;
    return(
      <View>
        <Title>To-Do List</Title>
        <Input
          placeholder={'Type a todo. Then hit Enter!!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List 
          list={todos}
          onPressItem={this.onRemoveTodo}
        />      
      </View>
    )
  }
}
