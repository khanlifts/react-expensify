import moment from 'moment';

// filters object with default values
// text, sortBy, startDate, endDate
const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

// filters object with defined values
const populatedFilters = {
  text: 'Swimming Pool',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};

// named export both objects
export { filters, populatedFilters };
