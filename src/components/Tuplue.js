import React from 'react'
import img from '../profile.jpg'

export default function (props) {
    let {sname,email,website,image,gender,skills}=props;
    let changeit=(skills)=>{
      let ans="";
      for(let i=0;i<skills.length;i++)
      {
        if(i===skills.length-1)
        {
         
          if(skills[i]==='1')
          ans+="HTML";
          else if(skills[i]==='2')
          ans+="CSS";
          else
          ans+="Js"
        }
        else
        {
          if(skills[i]==='1')
          ans+="HTML";
          else if(skills[i]==='2')
          ans+="CSS";
          else
          ans+="Js"
          ans+=",";
        }
      }
      return ans;
    }
  return (
    <>
    <td>
        <p>{sname}</p>
        <p>{gender}</p>
        <p>{email}</p>
        <p style={{textDecoration:"underline",color:"blue"}}>{website}</p>
        <p>{changeit(skills)}</p>
    </td>
    <td><img src={(image!=="")?image:img} className="img-thumbnail" style={{height:"200px",width:"200px"}} alt="profile"/></td>
    </>
  )
}
