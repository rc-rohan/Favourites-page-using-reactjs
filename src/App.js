import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Accounts from './Pages/Accounts'
import Colleagues from './Pages/Colleagues'
import Integration from './Pages/Integration'
import Notification from './Pages/Notification'
import PageNotFound from './Pages/PageNotFound'
import Tags from './Pages/Tags'
import Sidebar from './Components/Sidebar'


function App() {
  return (
    <div className='app'>
      <Router>
        <Sidebar />
        <div className="pageContent">
          <Switch>
            <Route exact path="/account" component={Accounts} />
            <Route exact path="/colleagues" component={Colleagues} />
            <Route exact path="/" component={Integration} />
            <Route exact path="/notification" component={Notification} />
            <Route exact path="/tags" component={Tags} />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App
