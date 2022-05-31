import React, { Component } from 'react'
import css from './css/Content.module.css'
import Loader from './Loader'
import PostItemAPI from './PostItemAPI'
import axios from 'axios'
import API_KEY from '../secrets'

export class ContentAPI extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      posts: [],
      savedPosts: []
    }
  }

  componentDidMount() {
      this.fecthImages();
    }
  

  async fecthImages() {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
    const fetchedPosts = response.data.hits
    this.setState({
      isLoaded: true,
      posts: fetchedPosts,
      savedPosts: fetchedPosts
    })
  }

  filterPosts = (event) => {
    const name = event.target.value.toLowerCase()
    const filteredPosts = this.state.savedPosts.filter(post => {
      return post.user.toLowerCase().includes(name);
  })
    this.setState({posts: filteredPosts})
  }

  render() {
    return (
      <div className={css.content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor='searchInput'>Search:</label>
            <input type="search" id="searchInput" placeholder='By Author' onChange={this.filterPosts}></input>
            <h4>posts found:{this.state.posts.length}</h4>
          </form>
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? (<PostItemAPI savedPosts={this.state.posts} />) : (<Loader />)}
        </div>
      </div>
    )
  }
}

export default ContentAPI