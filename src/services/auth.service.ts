import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { Logged } from 'src/app/Entity/Logged';
import { map } from 'rxjs/operators'
import {environment} from "../config/environment";
import { ApiService } from './api.service';

@Injectable({
	providedIn: 'root'
})

export class AuthService {

	//Configurazione standard per la chiamata al BE
	private options = {
	  'headers': new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	private optionsBearer : Object = {
		'headers': new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': localStorage.getItem("Bearer")!
		})
	};

  	constructor(
			private http: HttpClient,
			private apiService: ApiService
			) {}

  	login(username: String,  password: String) {
		return this.http.post<any>(this.apiService +'auth/signin', {
		    "username": username,
		    "password": password
		}, this.options).pipe(map(result => {
			return result;
		}));
	}

	logout() {
		localStorage.removeItem("Userdata");
		localStorage.removeItem("Bearer");
  		localStorage.removeItem("id");
		localStorage.removeItem("username");
		// Logged.logout();
    	window.location.href = '/login';
	}

	signup(email: string, password: string, username: string) {
		let role = ["ROLE_USER"];

		return this.http.post<any>(this.apiService+'auth/signup', {
			"email": 	email,
			"password": password,
			"role":		role,
			"username": username
		}, this.options).pipe(map(result => {
			return result;
		}));
	}

	finduser(username) {
		return this.http.get(this.apiService+'user/findByUsername?username=' + username, this.optionsBearer).pipe(map(result => {
			return result;
		}));
	}

	/*
	 * Aggiungere nelle varie chiamate al BE che non siano il login nel header
	 	key: Authorization
	 	value: "Bearer access-token"
	 */
}
