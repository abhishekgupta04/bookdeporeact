import React, { Component } from 'react';
import './App.css';
import SideNav from './components/SideNav/SideNav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddForm from './components/AddForm';
import FormData from './components/FormData';
import FavData from './components/FavData';
import FormDataMod from './components/FormDataMod';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  // printCount = () => {
  //   let items = JSON.parse(localStorage.getItem('bookList'));
  //   console.log(items.length)
  //   var output = items.filter(book => book.fav == true);
  //   console.log(output.length)
  //   let bookCount = document.querySelector("#book-count");
  //   let bookFavCount = document.querySelector("#favbook-count");
  //   if (localStorage.getItem('bookList') == null) {
  //     bookCount.innerText = 0;
  //     bookFavCount.innerText = 0;
  //   } else {
  //     bookCount.innerText = items.length;
  //     bookFavCount.innerText = output.length;
  //   }
  //   console.log("click")
  // }

  // componentDidUpdate() {
  //   this.printCount();
  // }
  // componentDidMount() {
  //   this.printCount();
  // }
  render() {
    return (
      <Router basename="/bookdeporeact">
        <div className="App content-wrapper">
          <SideNav />
          <Switch>
            <Route path="/" exact component={AddForm} />
            {/* <Route path="/books" exact component={FormData} /> */}
            <Route path="/books" exact component={FormDataMod} />
            <Route path="/favbooks" exact component={FavData} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div className="App content-wrapper">
//         <SideNav />
//         <Switch>
//           <Route path="/" exact component={AddForm} />
//           <Route path="/books" exact component={FormData} />
//           <Route path="/favbooks" exact component={FavData} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
