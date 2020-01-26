import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction';
import MyForm from '../components/myForm/MyForm';

class MyList extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
    const contact = {
      name: this.state.name
    }
    this.props.createContact(contact);
    e.target.reset()
  }

  listView = (data, index)=> {
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
    </div> 
    )
  }

  deleteContact = (e, index) => {
    e.preventDefault();
    this.props.deleteContact(index);
  }


  render() {
    return (
      <div style={styles.container}>
        <h1>Redux List</h1>
        <MyForm 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
        />  
        <hr />
        { <div>
          {this.props.contacts.map((contact, i) => this.listView(contact, i))}
        </div> }
      </div>
    )
  }
}


//Connect: Extracting Data with mapStateToProps
// As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that the connected component needs. It’s frequently referred to as just mapState for short.

// It is called every time the store state changes.
// It receives the entire store state, and should return an object of data this component needs.

//Syntax:   function mapStateToProps(state, ownProps?)

// Many common operations result in new object or array references being created:

// Creating new arrays with someArray.map() or someArray.filter()
// Selecting portion of an array with array.slice
// Copying values with Object.assign
// Copying values with the spread operator { ...oldState, ...newData }



const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
};

// Connect: Dispatching Actions with mapDispatchToProps
// As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.

// dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.

// With React Redux, your components never access the store directly - connect does it for you. React Redux gives you two ways to let components dispatch actions:

// By default, a connected component receives props.dispatch and can dispatch actions itself.
// connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.
// The mapDispatchToProps functions are normally referred to as mapDispatch for short, but the actual variable name used can be whatever you want.

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
        
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: 'gray'
  },
  list: {
    padding: '2%',
    backgroundColor:'whitesmoke',
    color: 'rgb(163,173,194)',
    margin: '1%',
    fontSize: '1.25em',
    fontWeight: 'bold',
    cursor: 'pointer',
    //borderRadius: '10%' 
  }
}