import React, {Component} from 'react';

// This is the search bar that is included in the navbar. It is used to search for movies in the database
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
