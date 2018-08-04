import moment from 'moment';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('should return text from setTextFilter', () => {
  const action = setTextFilter('Groceries');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Groceries'
  });
});

test('should return default empty string from setTextFilter', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should return default object from sortByDate', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should return default object from sortByAmount', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should return start date from setStartDate action', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should return end date from setEndDate action', () => {
  const action = setEndDate(moment(4000));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(4000)
  });
});
