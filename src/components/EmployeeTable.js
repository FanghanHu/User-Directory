import {Component} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class EmployeeTable extends Component{
    state = {
        employees:[]
    }

    componentDidMount() {
        let employees = [];

        axios.get("https://randomuser.me/api/?results=500").then(res => {
            employees = res.data.results;
            this.setState({employees: employees});
        })
        

    }

    render() {
        return (
            <table className="table table-striped table-responsive">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    {this.state.employees.map(employee => <tr key={employee.login.uuid}>
                        <td>{employee.name.first} {employee.name.last}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.location.street.number} {employee.location.street.name}, {employee.location.city}, {employee.location.state}, {employee.location.postcode}, {employee.location.country}</td>
                    </tr>)}
                </tbody>
            </table>
        );
    }
}

export default EmployeeTable;