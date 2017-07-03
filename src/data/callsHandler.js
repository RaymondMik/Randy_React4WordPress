import fetch from 'isomorphic-fetch';

class callsHandler {
    static getData(dataType) {
		const url = `http://www.ramonmiklus.com/restapi/wp-json/wp/v2/${dataType}`;

		return fetch(url).then(response => {
    
        	return response.json();
        
        }).catch(error => {
            console.log(`there was an error while fetching ${dataType}`);
            return error;
        });
    	
    }

    static postData(dataType, postId, name, email, content) {
        const url = `http://www.ramonmiklus.com/restapi/wp-json/wp/v2/${dataType}`;

        return fetch(
            url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },  
            body: JSON.stringify({
                post: postId,
                author_name: name,
                author_email: email,
                content: content,
            }),
        }).then(response => {
           
            return response.json();
        
        })
        
    }
}

export default callsHandler;
