import React, { Component } from 'react';
import deleteIcon from '../img/delete.png';
import FormComponent from './FormComponent';
import SearchBar from './SearchBar';

class FormData extends Component {
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
    componentDidMount() {
        this.getData();
    }
    render() {
        const formComponent = this.state.formArr.map((element, index) => {
            return (
                <FormComponent element={element} id={index} key={index} getData={this.getData} fav={false} />
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
                    <div className={`childWrapper bookListWrapper ${!data ? "" : "listHidden"}`}>
                        <SearchBar />
                        <div className="page-title"><span>All Books</span></div>
                        <div id="listOfBooks" className="childCount cardElement">
                            {formComponent}
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

export default FormData;