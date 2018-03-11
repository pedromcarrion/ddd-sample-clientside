import PruebaRepository from './main-repository';

class Main{
    constructor(){
        this.__registerEvents();
        this.__pruebaRepository = new PruebaRepository();
        this.__usersContainer = document.querySelectorAll('#users')[0];
    }

    __registerEvents(){
        const btn = document.querySelectorAll('#btn-prueba')[0];

        btn.addEventListener('click', () => { 

            this.__pruebaRepository.getUsers()
            .then((data) => {
                this.__renderUsers(data);
            })
            .catch((err) => console.log(err));
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
}


new Main();