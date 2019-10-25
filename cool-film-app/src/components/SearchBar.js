import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <form method={"get"}>
                    <input type={"text"} name={"search"} placeholder={"What are you looking for?"}/>
                    <input type={"submit"}/>
                </form>
            </div>
        );
    }

}

export default SearchBar;
