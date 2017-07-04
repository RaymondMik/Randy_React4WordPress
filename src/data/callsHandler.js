import fetch from 'isomorphic-fetch';
import {globalUrl} from './globalUrl';

class callsHandler {
    static getData(dataType) {
		const url = `${globalUrl}/${dataType}`;

		return fetch(url).then(response => {
    
        	return response.json();
        
        }).catch(error => {
            console.log(`there was an error while fetching ${dataType}`);
            return error;
        });
    	
    }

    static postData(dataType, postId, name, email, content) {
        const url = `${globalUrl}/${dataType}`;

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
