import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, populatedFilters } from '../fixtures/filters';

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper

beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={populatedFilters}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
  />);
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: populatedFilters
  });
  expect(wrapper).toMatchSnapshot();
});

// test should handle text filter
test('should handle text filter', () => {
  const value = 'Test Text for filters text';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

// should sort by date
test('should sort by date', () => {
  const value = 'date';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});
// should sort by Amount
test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

// should handle date change
test('should handle date change', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')(populatedFilters);
  expect(setStartDate).toHaveBeenLastCalledWith(populatedFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(populatedFilters.endDate);
});

// should handle date focus change
test('should handle date focus change', () => {
  const value = 'startDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(value);
  expect(wrapper.state('calendarFocused')).toBe(value);
});
