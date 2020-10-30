import React, { Component } from 'react';
import searchIcon from "../img/search.png";

const SearchBar = () => {
    let search = document.getElementById('searchTxt');
    if (typeof (search) != 'undefined' && search != null) {
        search.addEventListener("input", function () {
            var input, filter, cards, cardContainer, title, i;
            input = document.getElementById("searchTxt");
            filter = input.value.toUpperCase();
            cardContainer = document.getElementById("main-wrapper");
            cards = cardContainer.getElementsByClassName("book-card");
            for (i = 0; i < cards.length; i++) {
                title = cards[i].querySelector(".book-title");
                if (title.innerText.toUpperCase().indexOf(filter) > -1) {
                    cards[i].style.display = "";
                } else {
                    cards[i].style.display = "none";
                }
            }
            noResult();
        })
    }
    function noResult() {
        let divs = document.querySelectorAll('.childCount > div');
        var divsArray = [].slice.call(divs);
        var displayNone = divsArray.filter(function (el) {
            return getComputedStyle(el).display === "none"
        });
        var displayShow = divsArray.filter(function (el) {
            return getComputedStyle(el).display !== "none"
        });
        var numberOfHiddenDivs = displayNone.length;
        var numberOfVisibleDivs = displayShow.length;

        let noResult = document.querySelector(".no-result");
        if (numberOfVisibleDivs === 0) {
            noResult.classList.add("found");
        }
        else {
            noResult.classList.remove("found");
        }
    }
    return (
        <div className="search-box">
            <img src={searchIcon} alt="search" />
            <input type="search" placeholder="Search Books" id="searchTxt" />
        </div>
    );
}

export default SearchBar;