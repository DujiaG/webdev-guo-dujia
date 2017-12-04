import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {User} from '../../models/user.model.client';
const baseUrl = environment.baseUrl;

// Injecting service into Module

@Injectable()

export class UserService {
  constructor(private http: Http) {}
  // turn on security
  options: RequestOptions = new RequestOptions;

/*  users = [
    {_id: '123', username: 'alice', email: 'alice@wonderland.com', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', email: 'bob@marley.com', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', email: 'charly@garcia.com', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', email: 'jose@annunzi.com', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];*/


  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredential': this.findUserByCredential,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };

  register(username, password) {
    const url = baseUrl + '/api/register';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
      return response.json();
    });
  }

  createUser(user) {
    const url = baseUrl + '/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });

/*    user._id = (new Date()).getTime() + '';
    console.log(user);
      const url = baseUrl + '/api/user';
      return this.http.post(url, user) // construct user as json string and pass into http request
        .map((response: Response) => {
        return response.json();
    });*/
  }

  findUserById(userId: string) {
   const url = baseUrl + '/api/user/' + userId;
   return this.http.get(url)
     .map((response: Response) => {
     return response.json();
    });
  }

  findUserByUsername(username: string) {
   const url = baseUrl + '/api/user?username=' + username;
   return this.http.get(url)
     .map((response: Response) => {
     return response.json();
     });
  }

  findUserByCredential(username: string, password: string) {
    const url = baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
      return response.json();
      });
  }

  // updates the user in local users array whose id matches the userID parameter
  updateUser(newUser) {
    const url = baseUrl + '/api/user/' + newUser._id;
    return this.http.put(url, newUser)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteUser(userId) {
    const url = baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
      return response.json();
    });
  }
}


