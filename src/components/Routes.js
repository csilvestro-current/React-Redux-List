import React, { Component } from 'react'
//React Router
import { Route, Switch } from 'react-router-dom'
import MyList from '../pages/MyList'

class Routes extends Component {
  render() {
    return (
      <section className="content main-content">
        <Switch>
          <Route exact path='/' component={MyList} />
          <Route exact path='/MyList' component={MyList} />
        </Switch>
      </section>
    );
  }
}

export default Routes
