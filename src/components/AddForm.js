import React, { Component } from 'react';


class AddForm extends Component {
    // documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            bookName: '',
            authorName: '',
            bookPrice: '',
            fav: false
            // items:[]
        }

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    // on form submit...
    handleFormSubmit(e) {
        e.preventDefault();
        const { bookName, authorName, bookPrice } = this.state;
        // console.log(bookName, authorName, bookPrice);
        if (authorName === "" || bookName === "" || bookPrice === "") {
            console.log(bookName, authorName, bookPrice);
            let formError = document.getElementById("form-error");
            formError.classList.add("show");
            setTimeout(function () { formError.className = formError.className.replace("show", ""); }, 3000);
        }
        else {
            let items = localStorage.getItem('bookList');
            if (items) {
                items = JSON.parse(items);
            } else {
                items = [];
            }

            // let items = [...this.state.items];
            items.push({
                bookName: this.state.bookName,
                authorName: this.state.authorName,
                bookPrice: this.state.bookPrice,
                fav: false,
                dataId: (this.state.bookName + - + this.state.bookPrice).replace(/\s+/g, "")
            });
            console.log(items)
            localStorage.setItem('bookList', JSON.stringify(items));
            // localStorage.setItem('document',JSON.stringify(items));
            let formSuccess = document.getElementById("form-success");
            formSuccess.classList.add("show");
            setTimeout(function () { formSuccess.className = formSuccess.className.replace("show", ""); }, 3000);
            this.setState({
                items,
                bookName: '',
                authorName: '',
                bookPrice: ''
            });
        }
    }

    printFavCount = () => {
        // let items = JSON.parse(localStorage.getItem('bookList'));
        let items = JSON.parse(localStorage.getItem('bookList')) || [];

        console.log(items.length)
        var output = items.filter(book => book.fav == true);
        console.log(output.length)
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
    // React Life Cycle
    componentDidMount() {
        localStorage.getItem('bookList')
        this.printFavCount();
    }

    componentDidUpdate() {
        // console.log(this.documentData)
        this.printFavCount();
    }
    render() {

        return (
            <div className="main-wrapper">
                <div id="form-error" className="form-toast error">Please fill all the text fields!!!</div>
                <div id="form-success" className="form-toast success">Book submitted successfully!!!</div>
                <div className="form-wrapper">
                    <div className="form-title">
                        <span>Add Book</span>
                    </div>
                    <div className="form-container">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <span className="form-label">Book Name</span>
                                <input type="text" name="bookName" className="form-input" value={this.state.bookName} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <span className="form-label">Author</span>
                                <input type="text" name="authorName" className="form-input" value={this.state.authorName} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <span className="form-label">Book Price</span>
                                <input type="number" name="bookPrice" className="form-input" value={this.state.bookPrice} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <button type="submit" id="bookSubmit">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddForm;