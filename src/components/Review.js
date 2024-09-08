import React from "react";

export default function Review({ rows, deleteRow }) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th className="expand">Review</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr keys={idx}>
                <td>{row.name}</td>
                <td>{row.review}</td>
                <td>
                  <button className="actions" onClick={() => deleteRow(idx)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>John</td>
            <td>
              Awesome movie! But disappointed by the ending, did'nt seem well
              thought out.
            </td>
            <td>
              <button className="actions">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
