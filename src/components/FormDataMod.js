import React, { Component } from 'react';
import deleteIcon from '../img/delete.png';
import FormComponentMod from './FormComponentMod';
import SearchBar from './SearchBar';

class FormDataMod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formArr: [],
            data: true
        }
        this.handleChange = this.handleChange.bind(this)
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
    noData = () => {
        console.log("function called")
        let items = JSON.parse(localStorage.getItem('bookList')) || [];
        if (items.length === 0) {
            this.setState({
                data: true
            })
        }
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
    componentDidUpdate() {
        // this.getData();
    }
    componentDidMount() {
        this.getData();
        this.noData();
    }
    handleChange(dataId) {
        this.setState(prevState => {
            const updatedTodos = prevState.formArr.map(formArrElem => {
                if (formArrElem.dataId === dataId) {
                    return {
                        ...formArrElem,
                        fav: !formArrElem.fav
                    }
                }
                return formArrElem
            })
            // console.log(prevState.formArr)
            console.log(updatedTodos);
            localStorage.setItem('bookList', JSON.stringify(updatedTodos));
            return {
                formArr: updatedTodos
            }
        })
        // console.log(this.state.formArr)
    }
    render() {
        const formComponentMod = this.state.formArr.map((element, index, item) => {
            return (
                <FormComponentMod element={element} id={index} key={index} item={item} handleChange={this.handleChange} getData={this.getData} noData={this.noData} />
            )
        })
        // const formComponentMod = this.state.formArr.map((element, index) => {
        //     return (
        //         <FormComponentMod element={element} id={index} key={index} getData={this.getData} fav={false} noData={this.noData} />
        //     )
        // })
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
                            {formComponentMod}
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

export default FormDataMod;