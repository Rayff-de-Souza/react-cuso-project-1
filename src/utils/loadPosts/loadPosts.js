const loadPosts = async () => {
	const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts")
	const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos")
	const [ posts, photos ] = await Promise.all([ postsResponse, photosResponse ])
	const postsData = await posts.json()
	const photosData = await photos.json()
	const postsAndPhotos = postsData.map((post, index) => {
		return { ...post, image: photosData[index].url }
	})

	return postsAndPhotos
}

export default loadPosts