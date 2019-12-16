import React from 'react';

function Search(props) {


    console.log('in child', props.sendToSearch)

    var url = 'http://www.omdbapi.com/?s=' + props.sendToSearch
        + '&apikey=d0c2d96b'
    console.log(url)
    console.log('url is passed')
    fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        
        }
        )
    return (
        <div>
<p ></p>

        </div>

    )
}

export default Search;