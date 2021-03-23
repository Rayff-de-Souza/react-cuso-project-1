import { Component } from 'react'

// css 
import './styles-global.css'

// components
import Card from './../../components/Card/index.jsx'
import loadPostsFunc from './../../utils/loadPosts/loadPosts.js'
import Input from './../../components/Input/index.jsx'

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
			posts: [],
			allPosts: [],
			page: 0,
			postsForPage: 3,
			searchValue: ''
		}
	}

	componentDidMount(){
		this.loadPosts()
	}

	loadPosts = async () => {
		const [ page, postsForPage ] = [ this.state.page, this.state.postsForPage ]
		const postsAndPhotos = await loadPostsFunc()
		this.setState({ posts: postsAndPhotos.slice(page, postsForPage), allPosts: postsAndPhotos })
	}

	loadMorePosts = () => {
		const [ posts, allPosts, page, postsForPage ] = [ this.state.posts, this.state.allPosts, this.state.page, this.state.postsForPage ]
		const nextPage = page + postsForPage
		const newPosts = [ ...posts ]
		const nextPosts = allPosts.slice(nextPage, nextPage + postsForPage)
		newPosts.push(...nextPosts)
		this.setState({ posts: newPosts, page: nextPage })
	}

	handleOnChangeSearch = (event) => {
		const [ searchValue, input ] = [ this.state.searchValue, event.target ]
		this.setState({ searchValue: input.value })
		console.log(input.value)
	}

	render(){
		const [ posts, allPosts, searchValue ] = [ this.state.posts, this.state.allPosts, this.state.searchValue ]
		const postsFiltered = !searchValue  ? posts : allPosts.filter((post) => post.title.toLowerCase().includes(searchValue))
		console.log(postsFiltered)
		return (
			<section className="container-home">
				<Input value={searchValue} onChange={this.handleOnChangeSearch}/>
				{
					!!postsFiltered.length ? <Card posts={postsFiltered}/>
					:
					<div>
						<h2>Nothing found</h2>
					</div>
				}
				
				{
					!searchValue ? <div className="btn-load-more"><button class="btn btn-primary" onClick={this.loadMorePosts}>Load more</button></div>
					:
					(<div class="searching"><label>...</label></div>)
				}
			</section>
		)
	}
}

export default Home