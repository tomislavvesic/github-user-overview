import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {
  baseURL: string = "https://api.github.com";

  constructor(private http: HttpClient) {
  }

  getGithubUsers(userName: string = ''): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/search/users?q=${userName}in:login&per_page=10`)
  }

  getUserData(userName: string | null): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/users/${userName}`)
  }

  getUserRepos(userName: string | null): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/users/${userName}/repos`)
  }
}
