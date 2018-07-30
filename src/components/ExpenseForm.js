import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: 0
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            />
          <textarea
            placeholder="Add a note for your expenses (optional)"
            cols="30"
            rows="10"
            value={this.state.note}
            onChange={this.onNoteChange}
            >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

// Form
//  input, type text, placeholder: Description, autofocus
//  input, type number, placeholder: Amount
//  textarea, placeholder: Add a note for your expenses (optional)
//  button Add Expense

// state object
//   description: ''

// method onDescriptionChange takes an event e
//   constant description is assigned target value
//   setState description constant to description key in state object

// hook up text input to onChange onDescriptionChange
//   set value to state value

// setup note state
//  add note: '' to state object
// setup onChange and value for textarea
