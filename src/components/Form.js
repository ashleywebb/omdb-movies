import { useState } from "react";

export default function Form(props) {
    const [formData, setFormData] = useState({
        heckofItDoNTCOPY:'doesntmatter',
        searchTerm: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.movieSearch(formData.searchTerm)
    }

    return (
        <div className="header">
            <h1>
                OMDB
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="searchTerm"
                onChange={handleChange}
                value={formData.searchTerm}
                />
                <input type="submit" value="Search for Movie"/>
            </form>
        </div>
    )
}
