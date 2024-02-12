import React, {useState} from "react";
import customers from "../List";
import DisplayCustomers from "./DisplayCustomers";

const SearchUser = () => {

    const [data, setData] = useState(customers);
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
        let val = e.target.value;
        
        let filteredCustomers = data.filter(c => {
                return c.name.includes(val) || c.age.toString().includes(val) || c.location.includes(val) || c.income.toString().includes(val);
            });
    
        setData((val == "" || val.length == 0) ? customers : filteredCustomers);
    }

    return (
        <div className="centered-container">
            <div className="input-container">  
            <input
                type="text"
                value={searchText}
                onChange={(e) => handleInputChange(e)}
                placeholder="Search Users Here"
            />
            </div>
           
            <div className="customer-display-container">
                <DisplayCustomers searchText={searchText} customers={data}/>
            </div>
        </div>
    )
}

export default SearchUser;