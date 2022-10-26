import React from "react";
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input
      type='text'
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }} />
    <select
      value={props.filters.sortBy} // controlled component: value is controlled by JS
      onChange={(e) => {
        if (e.target.value === 'amount') {
          props.dispatch(sortByAmount())
        } else if (e.target.value === 'sort') {
          props.dispatch(sortByDate())
        }
      }}>
      <option value='amount' >Amount</option>
      <option value='date' >Date</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);