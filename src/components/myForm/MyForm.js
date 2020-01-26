import React from 'react'

const MyForm = props => {  
  return (
    <form 
      style={styles.myForm} 
      onSubmit={props.handleSubmit}>
      <h1 style={styles.h1}>Create Post</h1>
        <input type='text'
                style={styles.input} 
                //name="pName" 
                value={props.pPost}
                onChange={props.handleChange}
                placeholder="What's on your mind Angelina?" />
        <button type="submit" style={styles.postBtn}>Post</button>  
        {/* <p>New Item: {props.myInput}</p> */}
    </form>
  )
}
export default MyForm


const styles= {
  myForm: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
    padding: 10,
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
    border: '1 solid gray',
    color: 'gray',
    //height: 200
  },
  h1: {
    fontWeight: '100',
    background: 'whitesmoke',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 2,
    padding: 10
  },
  input: {
    padding: 10,
    width: '75%',
    outline: 'none',
    border: 'none',
    fontSize: 25,
    fontWeight: '100',
    color: 'gray'
  },
  post: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //alignContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  postBtn: {
    //marginTop: 30,
    width: 150,
    height: 50,
    fontSize: 15,
    background:'whitesmoke',
    color: 'gray',
    borderRadius: 5,
    outline: 'none',
    borderTopStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    cursor: 'pointer'
  },
  avatar: {
    height: 75,
  },
  attachments: {
    borderColor: 'gray',
    borderTopStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    cursor: 'pointer',
    paddingLeft:25,
    paddingRight:25,
    paddingTop: 10,
    //paddingBottom: 10,
  },
  attachmentCont:{
    display:'flex',
    alignItems: 'center',
  },
  atText:{
    paddingRight: 10,
  }
}