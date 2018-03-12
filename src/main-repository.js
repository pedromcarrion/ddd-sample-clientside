class MainRepository{
    constructor(){
        this.__usersUrl = 'https://jsonplaceholder.typicode.com/users';
        this.__postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    }

    getUsers(){
        return new Promise((resolve, reject) => {
            fetch(this.__usersUrl)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => reject(err));
        });
    }

    createPost(title, body, userId){
        return new Promise((resolve, reject) => {
            fetch(this.__postsUrl, {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    body,
                    userId
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
              .then(response => response.json())
              .then(json => resolve(json))
              .catch(err => reject(err));
        });
    }

}


export default MainRepository;