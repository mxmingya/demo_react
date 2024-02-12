import React, {useState} from "react"

const DisplayCustomers = ({customers}) => {

    return (customers.length === 0) ? 
    (
        <div>No Search Results</div>
    ) : 
    (
        <div>
            <table >
            <thead>
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Income</th>
            </tr>
        </thead>
        <tbody>
        {customers.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.location}</td>
            <td>{row.income}</td>
          </tr>
        ))}
      </tbody>
            </table>
        </div>
    )
}

export default DisplayCustomers;