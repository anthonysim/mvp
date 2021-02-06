// Did not have time to refactor to Context API

// import React, { Component } from 'react';
// const { Provider, Consumer } = React.createContext();

// class ThemeContextProvider extends Component {
//   constructor(props) {
//     super(props)
//     state = {
//       payee: "",
//       type: "Income",
//       memo: "",
//       amount: "",
//       transactions: [],
//     }
//   }

//   transactionsHandler() {
//     axios.get('http://localhost:5000/transactions')
//       .then(res => this.setState({ transactions: res.data }))
//       .catch(err => console.log(err))
//   }

//   onSubmitHandler(e) {
//     e.preventDefault();

//     let { payee, type, memo, amount } = this.state;
//     console.log(payee, type, memo, amount)

//     axios.post('http://localhost:5000/transaction', {
//       payee,
//       type,
//       memo,
//       amount
//     })
//       .then(() => this.transactionsHandler())
//       .then(this.setState({
//         payee: "",
//         type: "Income",
//         memo: "",
//         amount: ""
//       }))
//       .catch(err => console.error(err))
//   }

//   deleteHandler(e, mapID) {
//     e.preventDefault();

//     axios.delete(`http://localhost:5000/transaction/${mapID}`)
//       .then(() => this.transactionsHandler())
//       .then(() => console.log(`reactID ${mapID} deleted!`))
//       .catch(err => console.error(err))
//   }

//   updateHandler(e) {
//     e.preventDefault();
//     console.log('updated!')
//   }

//   render() {
//     return (
//       <Provider value={{
//         info: this.state,
//         tranFunc: this.transactionsHandler,
//         submitFunc: this.onSubmitHandler,
//         deleteFunc: this.deleteHandler,
//         updateFunc: this.updateHandler,
//       }}>
//         {this.props.children}
//       </Provider>
//     )
//   }
// }

// export { ThemeContextProvider, Consumer as ThemeContextProvider }