import React, { Component } from 'react';
import FavDataComponent from './FavDataComponent';
import SearchBar from './SearchBar';

class FavData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formArr: [],
            data: true
        }
    }

    getData = () => {
        let items = localStorage.getItem('bookList');
        if (items) {
            items = JSON.parse(items);
            this.setState({
                formArr: items,
                data: false
            })
        }
        else {
            this.setState({
                formArr: [],
                data: true
            })
        }

    }
    printFavCount = () => {
        let items = JSON.parse(localStorage.getItem('bookList')) || [];

        // console.log(items.length)
        var output = items.filter(book => book.fav == true);
        // console.log(output.length)
        let bookCount = document.querySelector("#book-count");
        let bookFavCount = document.querySelector("#favbook-count");
        if (localStorage.getItem('bookList') == null) {
            bookCount.innerText = 0;
            bookFavCount.innerText = 0;
            console.log(items.length)
        } else {
            bookCount.innerText = items.length;
            bookFavCount.innerText = output.length;
        }
    }
    componentDidUpdate() {
        this.printFavCount();
    }
    componentDidMount() {
        this.getData();
        this.printFavCount();
    }
    render() {
        let items = JSON.parse(localStorage.getItem('bookList')) || [];
        // console.log(items.length)
        var output = items.filter(book => book.fav == true);
        // console.log(output.length)
        const outputData = output.map((element, index) => {
            return (
                <FavDataComponent element={element} id={index} key={index} getData={this.getData} />
            )
        })
        const data = this.state.data;
        return (
            <>
                {/* <SearchBar /> */}
                <div className="main-wrapper" id="main-wrapper">
                    <div className="no-result">
                        <span>No Result Found... :( </span>
                    </div>
                    <div className={`childWrapper favListWrapper ${!data ? "" : "listHidden"}`}>
                        <SearchBar />
                        <div className="page-title"><span>Favourites</span></div>
                        <div id="listOfFav" className="childCount cardElement">
                            {/* {favDataComponent} */}
                            {outputData}
                        </div>
                    </div>
                    <div className={`no-data ${!data ? "" : "found"}`}>
                        <span>No data available, Please add some data from add books section... :) </span>
                    </div>
                </div>
            </>
        );
    }
}

export default FavData;
