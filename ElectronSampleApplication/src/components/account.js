import React, { Component } from 'react'

class Account extends Component {

  constructor(props) {
    super(props);
    console.log(props.accountData);
    this.state = {
      account : props.accountData
    }
  }

  componentDidMount() {

  }

  render() {
    var a = this.state.account.accountNumber;
    var accountNumber = a.slice(0, 4) + "." + a.slice(4,8) + "." + a.slice(8);
    console.log(accountNumber);
      return(
        <div className="panel panel-secondary">
            <div className="panel-heading">
              {this.state.account.name}
            </div>
            <div className="panel-body">
                <h1>KR {this.state.account.balance}</h1>
            </div>
            <div className="panel-footer">
              <h4>{accountNumber}</h4>
            </div>
        </div>
      )
    }
}

export default Account;
