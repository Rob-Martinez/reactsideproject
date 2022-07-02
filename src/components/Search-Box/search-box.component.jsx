import { Component } from "react";


class SearchBox extends Component {
    render () {


        return(
            <div className="App">
                <input 
                    className={`searchbox ${this.props.className}`}
                    type="search" 
                    placeholder={`placeholder ${this.props.placeholder}`}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default SearchBox;