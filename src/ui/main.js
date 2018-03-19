import MainService from '../services/main-service';
import 'babel-polyfill';
import './main.scss';

class Main{
    constructor(){
        this.__registerEvents();
        this.__mainService = new MainService();
        this.__usersContainer = document.getElementById('users');
        this.__postContainer = document.getElementById('post-created');
        this.__numerOfPosts = 1;
    }

    __registerEvents(){
        const btn = document.getElementById('btn-prueba');
        const btn2 = document.getElementById('btn-prueba2');

        btn.addEventListener('click', async () => { 
            try{
                const users = await this.__mainService.getUsers();
                this.__renderUsers(users);
            }catch(err){
                console.log(err);
            }
        });

        btn2.addEventListener('click', async () => {
            const post = await this.__mainService.createPost(`Post-${this.__numerOfPosts}`,'Prueba de post', 1)
            this.__numerOfPosts++;
            this.__renderPost(post);
        });
    }

    __renderUsers(users){
        this.__usersContainer.innerHTML ='';
        const list = document.createElement('ul');
        
        for(let i=0; i < users.length; i++){
            const element = document.createElement('li');
            element.innerText =  users[i].saludar();
            list.appendChild(element);
        }
        
        this.__usersContainer.appendChild(list);

    }

    __renderPost(post){
        this.__postContainer.innerHTML = '';

        const title = document.createElement('span');
        title.innerText = `Title: ${post.getTitle()}`;

        const body = document.createElement('span');
        body.innerText = `Body: ${post.getBody()}`;

        const userId = document.createElement('span');
        userId.innerText = `User id: ${post.getUserId()}`;

        this.__postContainer.appendChild(title);
        this.__postContainer.appendChild(body);
        this.__postContainer.appendChild(userId);
    }
}


new Main();