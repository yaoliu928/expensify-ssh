import React from "react";

const EditExpensePage = (props) => {
  console.log(props.match);
  return (
    <div>
      EditExpensePage with id of {props.match.params.id}
    </div>
  )
}

export default EditExpensePage;