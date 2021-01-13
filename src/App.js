import {Component} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import EmployeeTable from "./components/EmployeeTable";
import SearchBar from './components/SearchBar';

class App extends Component{
  state = {
    employees:[],
    filter:""
}

setFilter = (filter) => {
  this.setState({filter: filter});
}

  componentDidMount() {
      let employees = [];

      axios.get("https://randomuser.me/api/?results=25").then(res => {
          employees = res.data.results;
          this.setState({employees: employees});
      })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron m-3 text-center">
          <h1>Employee Directory</h1>
        </div>
        <SearchBar setFilter={this.setFilter}/>
        <EmployeeTable employees={this.state.employees.filter(el => this.state.filter?(el.name.first + " " + el.name.last).toLowerCase().includes(this.state.filter.toLowerCase()):true)}/>
      </div>
    );
  }

}

export default App;
