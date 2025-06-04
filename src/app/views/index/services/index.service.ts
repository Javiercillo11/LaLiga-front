import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teams } from '../interfaces/team'

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  private url = '../../../assets/team.json';

  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<Teams[]> {
    return this.http.get<Teams[]>(this.url);
  }
}