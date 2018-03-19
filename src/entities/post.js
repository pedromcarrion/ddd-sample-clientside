class Post{
  constructor({title, body, userId}){
    this._title = title;
    this._body = body;
    this._userId = userId;
  }


  getTitle(){
    return this._title;
  }

  getBody(){
    return this._body;
  }

  getUserId(){
    return this._userId;
  }

}

export default Post;