import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

test('should render AddExpensePage correctly', () => {
  const onSubmitSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={history}/>);
  expect(wrapper).toMatchSnapshot();
});

// test should handle onSubmit
  // define a spy function
  // define history object
  // get a wrapper of AddExpensePage component with items above
  // find and call ExpenseForm prop onSubmit. Pass in second fixture expense
  // expect history push to have been last called with the root directory
  // expect onSubmit to have been last called with second fixture expense

test('should handle onSubmit', () => {
  const onSubmitSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={history}/>);
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
});
