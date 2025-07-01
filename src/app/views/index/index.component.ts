import { Component } from '@angular/core';
import { Teams } from './interfaces/team';
import { IndexService } from './services/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  teams: Teams[] = [];
  spinning = true;
  error = '';
  modalVisible = false;
  selectedTeam: Teams | null = null;

  constructor(
    private indexService: IndexService
  ){}

  ngOnInit() {
    this.indexService.getAllTeams().subscribe({
      next: (data) => {
        this.teams = data;
        this.spinning = false;
      },
      error: (err) => {
        this.error = err.message;
        this.spinning = false;
      }
    });
  }

  openModal(team?: Teams) {
    this.selectedTeam = team || null;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedTeam = null;
  }

  deleteTeam(teamId: number) {
    this.indexService.deleteTeams(teamId).subscribe({
      next: () => {
        this.teams = this.teams.filter(t => t.id !== teamId);
      },
      error: (err) => {
        this.error = err.message;
      }
    });
  }
}
