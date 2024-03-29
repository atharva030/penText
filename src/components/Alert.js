import React from 'react'

export default function Alert(props) {
  const capitalize=(word)=>{
    if (word==="danger"){
      word="Error"
    }
    const lower=word.toLowerCase();
    return lower.charAt(0).toLowerCase() + lower.slice(1);
  }
  return (
    <div style={{height:"60px"}}>
 {   props.alert && <div className={"alert alert-warning alert-dismissible fade show"} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> :{props.alert.message}
  </div>}
</div>
  )
}
