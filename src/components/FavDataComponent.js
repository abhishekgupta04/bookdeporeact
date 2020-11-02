import React, { Component } from 'react';
import crossIcon from '../img/cross.png';
import crossHoverIcon from '../img/hover-cross.png';

class FavDataComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasChanged: false,
            data: true
        }
    }
    removeFav = (fav) => {
        let items = JSON.parse(localStorage.getItem('bookList'));
        let favTarget = fav.target.parentElement.parentElement;

        console.log(favTarget)

        // console.log(this.state.hasChanged)
        // favTarget.remove();
        // favTarget.parentElement.removeChild(favTarget)
        if (favTarget.getAttribute("data-id")) {
            this.setState(prevState => ({
                hasChanged: !prevState.hasChanged
            }));
            Object.keys(items).forEach(key => {
                if (items[key]["dataId"] === favTarget.getAttribute("data-id")) {
                    items[key]["fav"] = this.state.hasChanged
                }
            })
        }
        localStorage.setItem('bookList', JSON.stringify(items));
        // this.props.noData();
        var output = items.filter(book => book.fav == true);
        if (output.length === 0) {
            this.props.noData();
        }
        favTarget.style.display = "none";
    }
    printFavCount = () => {
        let items = JSON.parse(localStorage.getItem('bookList'));

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
        // this.props.noData();
    }
    componentDidMount() {
        this.printFavCount();
        // this.props.noData();
    }
    render() {
        // console.log(this.props.noData)
        const { bookName, authorName, bookPrice } = this.props.element;
        const { id } = this.props;
        // console.log(id, bookName, authorName, bookPrice);
        let dataId = `${bookName + - + bookPrice}`;
        dataId = dataId.replace(/\s+/g, "");
        return (
            <>
                <div className="book-card" id={id} data-id={dataId}>
                    <div className="book-delete-layer" onClick={this.removeFav}>
                        <img src={crossIcon} className="cross" />
                        <img src={crossHoverIcon} className="cross-hover" />
                    </div>
                    <div className="book-card-box">
                        <div className="img-box"></div>
                        <div className="book-title">{bookName}</div>
                        <div className="card-bottom">
                            <div className="book-author-layer"><span>By </span><span className="book-author">{authorName}</span></div>
                            <div className="book-price-layer"><span><i className="fa fa-inr" aria-hidden="true"></i></span><span className="book-price">{bookPrice}</span></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FavDataComponent;