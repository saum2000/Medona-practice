import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    return ( <
        Form inline > < h4 className = "heading h" > FIND STORE: < /h4> <
        Form.Control type = 'text'
        name = 'q'
        onChange = {
            (e) => setKeyword(e.target.value)
        }
        placeholder = 'Search Products...'
        className = 'mr-sm-2 ml-sm-5 frm' >
        <
        /Form.Control> <
        Button type = 'submit'
        variant = 'outline-success'
        className = 'p-2' >
        Search <
        /Button> <
        h4 className = 'heading' >
        SEARCH RADIUS: < /
        h4 > <
        select className = 'radius' >
        <
        option value = "1km" > 1 km < /option> <
        option value = "2km" > 2 km < /option> <
        option value = "5km" > 5 km < /option> <
        option value = "10km" > 10 km < /option> <
        option value = "50km" > 50 km < /option>

        <
        /select>  < /
        Form >
    )
}
export default SearchBox