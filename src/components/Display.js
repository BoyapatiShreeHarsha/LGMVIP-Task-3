import React, { useState, useEffect, useContext } from 'react'
import '../css/Display.css'
import Tuplue from './Tuplue'
import DataContext from '../contest/DataContest';

function Display() {
  const [arr, setarr] = useState([]);
  const constest = useContext(DataContext);
  let { result } = constest;

  useEffect(() => {
    setarr(result);
    // eslint-disable-next-line
  }, [result,])

  return (
    <div className='Display_body'>
      <h2 style={{textAlign:"center" , margin:"10px 0px"}}>Enrolled Students</h2>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((ele) => {
              return <tr><Tuplue key={ele.email} sname={ele.sname} gender={ele.gender} email={ele.email} website={ele.website} skills={ele.skills} image={ele.image} /></tr>
            })
          }

        </tbody>


      </table>
    </div>
  )
}

export default Display
