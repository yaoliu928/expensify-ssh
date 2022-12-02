import React from "react";
import { connect } from 'react-redux';
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarFocused: null,
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  onSortChange = (e) => {
    if (e.target.value === 'amount') {
      this.props.sortByAmount()
    } else if (e.target.value === 'date') {
      this.props.sortByDate()
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              placeholder="Search Expenses"
              type='text'
              value={this.props.filters.text}
              onChange={this.onTextChange} />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy} // controlled component: value is controlled by JS
              onChange={this.onSortChange}>
              <option value='amount' >Amount</option>
              <option value='date' >Date</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              showClearDates={true}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
}
);

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (date) => dispatch(setStartDate(date)),
  setEndDate: (date) => dispatch(setEndDate(date)),
  setTextFilter: (val) => dispatch(setTextFilter(val)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);