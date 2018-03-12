import PruebaRepository from './main-repository';
import 'babel-polyfill';
import './main.scss';

class Main{
    constructor(){
        this.__registerEvents();
        this.__pruebaRepository = new PruebaRepository();
        this.__usersContainer = document.getElementById('users');
        this.__postContainer = document.getElementById('post-created');
        this.__numerOfPosts = 1;
    }

    __registerEvents(){
        const btn = document.getElementById('btn-prueba');
        const btn2 = document.getElementById('btn-prueba2');

        btn.addEventListener('click', async () => { 
            try{
                const users = await this.__pruebaRepository.getUsers();
                this.__renderUsers(users);
            }catch(err){
                console.log(err);
            }
        });

        btn2.addEventListener('click', async () => {
            const post = await this.__pruebaRepository.createPost(`Post-${this.__numerOfPosts}`,'Prueba de post', 1)
            this.__numerOfPosts++;
            this.__renderPost(post);
        });
    }

    __renderUsers(users){
        this.__usersContainer.innerHTML ='';
        const list = document.createElement('ul');
        
        for(let i=0; i < users.length; i++){
            const element = document.createElement('li');
            element.innerText =  users[i].username;
            list.appendChild(element);
        }
        
        this.__usersContainer.appendChild(list);

    }

    __renderPost(post){
        this.__postContainer.innerHTML = '';

        const title = document.createElement('span');
        title.innerText = `Title: ${post.title}`;

        const body = document.createElement('span');
        body.innerText = `Body: ${post.body}`;

        const userId = document.createElement('span');
        userId.innerText = `User id: ${post.userId}`;

        this.__postContainer.appendChild(title);
        this.__postContainer.appendChild(body);
        this.__postContainer.appendChild(userId);
    }
}


new Main();