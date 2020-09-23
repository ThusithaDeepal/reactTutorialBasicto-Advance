import React from 'react'
import ColumnFragemnt from './ColumnFragemnt'

export default function TableFragment() {
  return (
    <table>

      <tbody style={{ border: "10px" }}>
        <tr>
          <ColumnFragemnt />

        </tr>
      </tbody>
    </table>
  )
}
