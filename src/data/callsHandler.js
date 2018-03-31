import { globalUrl } from './globalUrl';

const getData = (dataType = null, url = globalUrl) => {
    const dataChunk = dataType ? `/${dataType}` : '';
    const endpoint = `${url}${dataChunk}`;

    return fetch(endpoint).then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }).catch( (err) => {
        throw new Error(`There was the following problem: ${err} while fetching ${dataType}`);
    });
};

const postData = (dataType, postId, name, email, content) => {
    const endpoint = `${globalUrl}/${dataType}`;

    return fetch(
        endpoint, {
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
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }).catch( (err) => {
        throw new Error(`There was the following problem: ${err} while posting ${dataType}`);
    });
    
};

export { getData, postData }