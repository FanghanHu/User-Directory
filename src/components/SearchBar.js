import { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.css'

class SearchBar extends Component {
    render() {
        return (
            <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="Search" onChange={e => {
                    this.props.setFilter(e.target.value);
                }}/>
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
            </div>
        )
    }
}

export default SearchBar;