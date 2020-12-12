import React from "react";

class Menu extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <span>
                    Select By
                <select name="food" value='Sort by:'>
                        <option value="Date">Date</option>
                        <option value="Title">Title</option>
                        <option value="def">Default</option>
                </select>
                    </span>
            </div>
        )
    }

}
export default Menu;