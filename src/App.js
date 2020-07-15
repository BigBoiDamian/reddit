import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import PostList from './Components/PostList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      loading: true,
      subTitle: "",
    }
  } 

  componentDidMount() {
    this.preformSearch();
  }

  preformSearch = (query = "Memes") => {
    axios.get(`https://www.reddit.com/r/${query}.json`)
    .then( resData => {
      this.setState({posts: resData.data.data.children, loading: false, subTitle: query});
    })
    .catch(err => {
      console.log("Error fetching and parsing data", err);
    });
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">{this.state.subTitle} Search</h1>
            <SearchForm onSearch={this.preformSearch} />      
          </div>   
        </div>    
        <div className="main-content">
        {
          (this.state.loading)
          ? <p>Hold on man...</p>
          : <PostList data={this.state.posts}/>
        }
        </div>
      </div>
    )
  }
}
