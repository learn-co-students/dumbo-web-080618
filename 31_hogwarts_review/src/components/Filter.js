import React from 'react'

function Filter (props) {
  return(
    <div>
      <label>Sort By:</label>
      <select onChange={props.selectHandler}>
        <option value="all">All</option>
        <option value='weight'>Weight</option>
        <option value='name'>Name</option>
      </select>
    </div>
  )
}

export default Filter
