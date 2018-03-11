class MainRepository{
    constructor(){
        this.__usersUrl = 'https://jsonplaceholder.typicode.com/users';
    }

    getUsers(){
        return new Promise((resolve, reject) => {
            fetch(this.__usersUrl)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => reject(err));
        });
    }

}


export default MainRepository;