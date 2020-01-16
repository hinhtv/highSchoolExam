import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models';
import { Observable } from 'rxjs';
import { Common } from '../Models/common';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    userRole = [
        { id: 1, role: 'ADMIN' },
        { id: 2, role: 'STUDENT' },
        { id: 3, role: 'TEACHER' },
    ];

    constructor(private http: HttpClient) {}

    getUser(): Observable<User[]> {
        return this.http.get<User[]>(Common.API + 'user/getAll');
    }

    getUserById(id: string): Observable<User> {
        return this.http.get<User>(Common.API + 'user/detail/' + id);
    }

    createUser(user: User) {
        return this.http.post<User>(Common.API + 'user/create', user);
    }

    login(user: User): Observable<User> {
        return this.http.post<User>(Common.API + 'user/login', user);
    }

    updateUser(id: string, user: User): Observable<User> {
        console.log(JSON.stringify(user));
        return this.http.put<User>(Common.API + 'user/update/' + id, user);
    }
}
