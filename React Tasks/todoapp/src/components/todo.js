import React from "react";
import AddTodo from "./add_todo";
import RadioButton from "./radio";

function TodoList({ value: { label, is_checked }, updateCheck, index }) {
  return (
    <div>
      <input
        type="checkbox"
        value={label}
        checked={is_checked}
        onChange={() => updateCheck(index)}
      />{" "}
      <label>{label}</label>
    </div>
  );
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    const data = localStorage.getItem("local_todo_data");
    const todo_data = data ? JSON.parse(data) : [];
    this.state = {
      todo_data,
      filter: "all"
    };
    this.toggelCheck = this.toggelCheck.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
    this.updateLocalList = this.updateLocalList.bind(this);
    this.handleRadioButtonSelect = this.handleRadioButtonSelect.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  toggelCheck(index) {
    this.setState(previousState => {
      let preparedState = [...previousState.todo_data];
      preparedState[index].is_checked = !previousState.todo_data[index]
        .is_checked;
      return { todo_data: preparedState };
    }, this.updateLocalList);
  }

  addNewTodo(data) {
    this.setState(
      previousState => ({ todo_data: [...previousState.todo_data, data] }),
      this.updateLocalList
    );
  }

  updateLocalList() {
    localStorage.setItem(
      "local_todo_data",
      JSON.stringify(this.state.todo_data)
    );
  }

  handleRadioButtonSelect(event) {
    this.setState({ filter: event.target.value });
  }

  filterData(todo_data) {
    return this.state.filter === "all"
      ? todo_data
      : todo_data.map(data => {
          if (this.state.filter === "checked" && data.is_checked) {
            return data;
          } else if (this.state.filter === "unchecked" && !data.is_checked) {
            return data;
          }
          return null;
        });
  }

  render() {
    const display_data =
      this.state.todo_data && this.state.todo_data.length ? (
        this.filterData(this.state.todo_data).map((data, index) => {
          return data ? (
            <TodoList
              key={`${index}_${data.label}`}
              value={data}
              index={index}
              updateCheck={this.toggelCheck}
            />
          ) : null;
        })
      ) : (
        <p>No todo list found</p>
      );
    return (
      <div>
        <h1>Todo List</h1>
        <div className="todo-create">
          <AddTodo todoAdd={this.addNewTodo} />
        </div>
        <br />
        <div>
          <RadioButton
            name="todo_filter"
            htmlFor="allToDo"
            value="all"
            label="All"
            checked={this.state.filter === "all"}
            onChange={this.handleRadioButtonSelect}
          />{" "}
          <RadioButton
            name="todo_filter"
            htmlFor="uncheckedToDo"
            value="unchecked"
            label="Unchecked"
            checked={this.state.filter === "unchecked"}
            onChange={this.handleRadioButtonSelect}
          />{" "}
          <RadioButton
            name="todo_filter"
            htmlFor="checkedToDo"
            value="checked"
            label="Checked"
            checked={this.state.filter === "checked"}
            onChange={this.handleRadioButtonSelect}
          />
        </div>
        <br />
        <div>{display_data}</div>
      </div>
    );
  }
}

export default Todo;
