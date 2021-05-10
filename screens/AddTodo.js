import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import store from '../redux/store';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatchEvent(this.props.addTodo(this.state.input));
    store.dispatch(addTodo(this.state.input));
    store.subscribe(()=>
    {console.log('Store value is now',store.getState());}
);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div style={{marginTop:30}}>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(null,{ addTodo })(AddTodo);
// export default AddTodo;
