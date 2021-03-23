import './styles.css'

const Card = ({ posts }) => {
	return (
		<div className="posts">
			{
				posts.map((post) => (
					<div className="card cards-config" key={post.id}>
						<div className="card-body">
						<img src={post.image} alt={post.title} className="card-img-top"/>
							<h3 className="card-title">{post.title}</h3>
							<p className="card-text">{post.body}</p>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default Card