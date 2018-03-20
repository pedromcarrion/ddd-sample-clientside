import 'babel-polyfill';
import User from '../entities/user';
import Post from '../entities/post';

class MainService{
  constructor(mainRepository){
    this._mainRepository = mainRepository;
  }


  async getUsers(){

    const usersJson = await this._mainRepository.getUsers();
    const users = [];

    for(let i=0; i < usersJson.length; i++){
      const userJson = usersJson[i];
      const user = new User({name: userJson.name, username: userJson.username});
      users.push(user);
    }

    return users;

  }


  async createPost(title, body, userId){

    const post = new Post({title, body, userId});
    const postJson = await this._mainRepository.createPost(post);
    return post;
  }

}


export default MainService;
