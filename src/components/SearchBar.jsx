import React from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';

/*
    SearchBar Component has a built in CSS and helps to provide 
    good looking feel of the Search bar with a magnifier icon.

    Props Usage:
    PlaceHolder : Provide the Place Holder text to be shown in the input text bar.
*/

function SearchBar({PlaceHolder}) {
    return (
        <div className='header_search'>
                <input type='text' placeholder={PlaceHolder} className='header__searchInput'/>
                <SearchIcon className='header__searchIcon'/>
        </div>
    )
}

export default SearchBar
