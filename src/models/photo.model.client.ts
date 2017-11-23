export class Photo {
  farm: Number;
  id: String;
  isfamily: Boolean;
  isfriend: Boolean;
  ispublic: Boolean;
  owner: String;
  secret: String;
  server: String;
  title: String;

  // email: String;
  // address; String;
  // constructor(_id, username, password) {
  //   this._id = _id;
  //   this.username = username;
  //   this.password = password;
  // }

  constructor(farm, id, isfamily, isfriend, ispublic, owner, secret, server, title) {
    this.farm = farm;
    this.id = id;
    this.isfamily = isfamily;
    this.isfriend = isfriend;
    this.ispublic = ispublic;
    this.owner = owner;
    this.secret = secret;
    this.server = server;
    this.title = title;

  }
}
