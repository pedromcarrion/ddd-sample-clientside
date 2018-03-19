class UserEntity{
  constructor({name, username}){
    this._name = name;
    this._username= username;
  }

  getName(){
    return this._name;
  }

  saludar(){
    return `Hola me llamo ${this._name}`
  }
}

export default UserEntity;