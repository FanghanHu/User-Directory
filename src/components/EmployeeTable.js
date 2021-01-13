import {Component} from "react";

class EmployeeTable extends Component{
    state = {
        nameSort:""
    }

    getNameSortIcon = () => {
        switch(this.state.nameSort) {
            case "asc":
                return "fa fa-sort-up";
            case "dsc":
                return "fas fa-sort-down";
            default:
                return "fa fa-sort";
        }
    }

    handleNameSortBtn = () => {
        if(this.state.nameSort === "asc") {
            this.setState({nameSort: "dsc"});
        } else {
            this.setState({nameSort: "asc"});
        }
    }

    render() {
        const employees = this.props.employees;
        if(this.state.nameSort === "asc") {
            employees.sort((a, b) => a.name.first.toUpperCase()<b.name.first.toUpperCase()?-1:1);
        } else if (this.state.nameSort === "dsc") {
            employees.sort((a, b) => a.name.first.toUpperCase()<b.name.first.toUpperCase()?1:-1);
        }
        return (
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th>
                            Name <button className="btn" onClick={this.handleNameSortBtn}><i className={this.getNameSortIcon()} aria-hidden="true"></i></button>
                        </th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => <tr key={employee.login.uuid}>
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