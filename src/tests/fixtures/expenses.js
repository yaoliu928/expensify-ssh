import moment from "moment";

const expenses = [
  {
    id: '1',
    description: 'Coffee',
    note: '',
    amount: 195,
    createdAt: 0
  }, {
    id: '2',
    description: 'Tea',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: '3',
    description: 'Salt',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];

export { expenses };