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

  postTeams(team: Teams): Observable<Teams> {
    return this.http.post<Teams>(this.url, team);
  }

  putTeams(teamId: number, updatedTeam: Teams): Observable<Teams> {
    return this.http.put<Teams>(`${this.url}/${teamId}`, updatedTeam);
  }

  deleteTeams(teamId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${teamId}`);
}

}