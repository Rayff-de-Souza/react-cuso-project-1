import './styles.css'

const Input = ({ value, onChange }) => {
	return (
		<div className="camp-search">
			<input type="search" className="search" placeholder="Type something or search for some card" onChange={onChange} value={value}/>
		</div>
	)
}

export default Input