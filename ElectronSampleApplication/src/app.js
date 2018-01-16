import React from 'react';
import AuthorizationHandler from './Components/AuthorizationHandler'
import AccountList from './Components/AccountList'
import setup from './Setup'

class App extends React.Component {

  constructor(props) {
    super(props);

    var config = setup();
    this.state = {
      access_token : null,
      config : config
    }
    let _this = this;
    AuthorizationHandler(config, function(result) {
        _this.setState({
          access_token : result
        })
    });

  }


    render() {
        if(this.state.access_token === null) {
          return (<div><h1>Loading</h1></div>)
        }
        return (
            <div>
                <h1 className="mainHeader">Min Saldo</h1>
                <AccountList config={this.state.config} access_token={this.state.access_token} />
            </div>
        );
    }
};

export default App;
