import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseURL = "http://localhost:4000"

  constructor(private http: HttpClient) { }

  saveContact(data : any){
    return this.http.post('/contact/add', data);
  }

}
