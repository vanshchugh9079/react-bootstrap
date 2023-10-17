import React from 'react'

function Aside(props) {
  return (
    <aside className={"col-2 " + props.cls + " temp-border"+"p-0"}>{props.children}</aside>
  )
}

export default Aside
