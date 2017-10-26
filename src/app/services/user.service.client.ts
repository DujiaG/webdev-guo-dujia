import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {User} from '../../models/user.model.client';

// Injecting service into Module

@Injectable()

export class UserService {
  constructor(private http: Http) {}

  users = [
    {_id: '123', username: 'alice', email: 'alice@wonderland.com', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', email: 'bob@marley.com', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', email: 'charly@garcia.com', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', email: 'jose@annunzi.com', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];


  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredential': this.findUserByCredential,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };

  createUser(user: User) {
    user._id = (new Date()).getTime() + '';
/*    this.users.push(user);
    return user;*!/*/
    console.log(user);
      const url = 'http://localhost:3100/api/user';
      return this.http.post(url, user) // construct user as json string and pass into http request
      // asynchronous call, map response from server to receive here
        .map((response: Response) => {
        return response.json();
    });
  }

  findUserById(userId: string) {
/*    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users[x];
      }
    }*/
   const url = 'http://localhost:3100/api/user/' + userId;
   return this.http.get(url)
     .map((response: Response) => {
     return response.json();
    });
  }

  findUserByUsername(username: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
/*   const url = 'http://localhost:3100/api/user?username=' + username;
   return this.http.get(url)
     .map((response: Response) => {
     return response.json();
     });*/
  }

  findUserByCredential(username: string, password: string) {
/*    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {
        return this.users[x];
      }
    }*/
    const url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
      return response.json();
      });
  }

  // updates the user in local users array whose id matches the userID parameter
  updateUser(userId: string, newUser: User) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.put(url, newUser)
      .map((response: Response) => {
        return response.json();
      });
/*    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x] = user;
      }*/

  }

  deleteUser(userId) {
/*    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users.splice(x, 1);
      }*/
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
      return response.json();
    });
  }
}


