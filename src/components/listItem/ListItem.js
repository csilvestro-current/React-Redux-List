//import React, { Component } from 'react'
import React from 'react'

const ListItem = props => {  
  return (
    <li key={props.id} style={styles.list}>
      {/* <span>{props.val.contact}</span> */}
    </li>
  )
}
export default ListItem


const styles= {
  list: {
    padding: '2%',
    marginTop: '0.5%', 
    backgroundColor:'smokegrey',
    color: 'rgb(163,173,194)',
    margin: '5%',
    fontSize: '1.25em',
    fontWeight: 'bold',
    cursor: 'pointer',
    //borderRadius: '10%' 
  }
}
