import React, { Component } from 'react';
import deleteIcon from '../img/delete.png';

class FormComponentMod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasChanged: false
        }
        // this.markFav = this.markFav.bind(this);
    }

    //delete cards
    handleClick = () => {
        let items = JSON.parse(localStorage.getItem('bookList'));
        items.splice(this.props.id, 1);
        localStorage.setItem('bookList', JSON.stringify(items));
        this.props.getData();
        this.printFavCount();
        this.props.noData();
    }
    //mark fav cards
    /*markFav = (fav) => {
        let items = JSON.parse(localStorage.getItem('bookList'));
        let favTarget = fav.target.parentElement.parentElement.parentElement.parentElement;

        this.setState(prevState => {
            const updatedTodos = prevState.items.map(item => {
                if (items.dataId === favTarget.getAttribute("data-id")) {
                    return {
                        ...items,
                        fav: !items.fav
                    }
                }
                return item
            })
            console.log(prevState.items)
            console.log(updatedTodos)
            return {
                items: updatedTodos
            }
        })

        localStorage.setItem('bookList', JSON.stringify(items));
    }*/

    //add fav class to the cards 
    printFav = () => {
        let items = JSON.parse(localStorage.getItem('bookList'));
        items.filter(function (obj) {
            if (obj.fav == true) {
                document.querySelector(`[data-id="${obj.dataId}"]`).classList.add("fav");
            }
            else {
                document.querySelector(`[data-id="${obj.dataId}"]`).classList.remove("fav");
            }
        });
    }

    //count total number of cards
    printFavCount = () => {
        let items = JSON.parse(localStorage.getItem('bookList'));
        var output = items.filter(book => book.fav == true);
        let bookCount = document.querySelector("#book-count");
        let bookFavCount = document.querySelector("#favbook-count");
        if (localStorage.getItem('bookList') == null) {
            bookCount.innerText = 0;
            bookFavCount.innerText = 0;
        } else {
            bookCount.innerText = items.length;
            bookFavCount.innerText = output.length;
        }
    }

    componentDidUpdate() {
        this.printFav();
        this.printFavCount();
    }
    componentDidMount() {
        this.printFav();
        this.printFavCount();
    }
    render() {
        // console.log(this.props.fav)
        const { bookName, authorName, bookPrice } = this.props.element;
        const { id } = this.props;
        // console.log(id, bookName, authorName, bookPrice);
        let dataId = `${bookName + - + bookPrice}`;
        dataId = dataId.replace(/\s+/g, "");

        const hasChanged = this.state.hasChanged;
        return (
            <>
                <div className={`book-card`} id={id} data-id={dataId}>
                    <div className="book-delete-layer" onClick={this.handleClick}><img src={deleteIcon} /></div>
                    <div className="book-card-box">
                        <div className="card-top">
                            <input
                                type="checkbox"
                                checked={this.props.element.fav}
                                onChange={() => this.props.handleChange(this.props.element.dataId)}
                                id={dataId}
                                className="fav-checkbox"
                            />
                            <label htmlFor={dataId}>
                                <div className="book-fav-layer"><span><i className="fa fa-heart-o" aria-hidden="true"></i><i className="fa fa-heart" aria-hidden="true"></i></span><span className="book-fav-text">Add to favourite</span></div>
                            </label>
                            {/* <div className="book-fav-layer" onClick={this.markFav}><span><i className="fa fa-heart-o" aria-hidden="true"></i><i className="fa fa-heart" aria-hidden="true"></i></span><span className="book-fav-text">Add to favourite</span></div> */}
                        </div>
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

export default FormComponentMod;