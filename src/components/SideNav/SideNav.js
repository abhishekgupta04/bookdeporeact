import React, { Component } from 'react';

import logo from '../../img/logo.png';
import bookIcon from '../../img/bookIcon.png';
import addBooks from '../../img/add_books_select.png';
import addFavBooks from '../../img/add_favourite_select.png';

import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return ( 
        <div className="side-wrapper">
            <div className="side-container">
                <div className="logo-wrapper">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-wrapper">
                    <ul className="nav-listing">
                        <li className="nav-item">
                            <NavLink exact to="/">
                                <span className="nav-icon">
                                    <img src={bookIcon} alt="" />
                                </span>
                                <span className="nav-text">Add Books</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/books">
                                <span className="nav-icon">
                                    <img src={addBooks} alt="" />
                                </span>
                                <span className="nav-text">Books</span>
                                <span id="book-count" className="book-count">0</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/favbooks">
                                <span className="nav-icon">
                                    <img src={addFavBooks} alt="" />
                                </span>
                                <span className="nav-text">Favourites</span>
                                <span id="favbook-count" className="book-count">0</span>
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <a href="index.html" className="active">
                                <span className="nav-icon">
                                    <img src={bookIcon} alt="" />
                                </span>
                                <span className="nav-text">Add Books</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="books.html">
                                <span className="nav-icon">
                                    <img src={addBooks} alt="" />
                                </span>
                                <span className="nav-text">Books</span>
                                <span id="book-count" className="book-count">0</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="favourites.html">
                                <span className="nav-icon">
                                    <img src={addFavBooks} alt="" />
                                </span>
                                <span className="nav-text">Favourites</span>
                                <span id="favbook-count" className="book-count">0</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default SideNav;