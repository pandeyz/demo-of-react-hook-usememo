import React, { useState, useMemo } from 'react';
import userposts from './userposts.json';

function App() {

	const [posts, setPosts] = useState(userposts);

	const [searchTxt, setSearchTxt] = useState('');

    const handleTextChange = (event) => {
    	setSearchTxt(event.target.value);
    }

    const handleSearch = () => {
		filterPosts();
    }

    const filterPosts = () => {
		const filteredPosts = posts.filter((post) => {
	      	if( searchTxt !== '' )
	      	{
	      		console.log('Filter function is running ...');
		        return post.title.toLowerCase().includes(searchTxt);
	      	}
      	});
      	setPosts(filteredPosts);
	}

	useMemo(() =>
		filterPosts,
		[searchTxt]
	);

	return (
		<div className="container" style={{ marginTop: 50 }}>
			<div style={{marginLeft: 20}}>
	        	<input type="text" onChange={handleTextChange} />
	        	<button type="button" onClick={handleSearch}>Search</button>
        	</div>

        	<div style={{marginLeft: 20, marginTop: 20}}><h4>Posts</h4></div>
            <ul>
            {
            	( posts.length > 0 )
            	?
            	posts.map((post, index) => <li key={index}>{post.title}</li>)
            	:
            	<li>No data found</li>

            }
            </ul>
        </div>
	);
}

export default App;
