import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teams } from '../interfaces/team';
import { IndexService } from '../services/index.service';

@Component({
  selector: 'app-index-modal-form',
  templateUrl: './index-modal-form.component.html',
  styleUrl: './index-modal-form.component.scss'
})
export class IndexModalFormComponent {
  @Input() team: Teams | null = null;
  @Input() modalVisible = false;
  @Output() close = new EventEmitter<void>();

  formData: Teams = { id: 0, name: '', badge: '' };
  error = '';

  constructor(private indexService: IndexService) {}

  ngOnInit() {
    if (this.team) {
      this.formData = { ...this.team };
    }
  }

  submitForm() {
    if (this.team) {
      this.indexService.putTeams(this.team.id, this.formData).subscribe({
        next: () => this.close.emit(),
        error: (err) => this.error = err.message
      });
    } else {
      this.indexService.postTeams(this.formData).subscribe({
        next: () => this.close.emit(),
        error: (err) => this.error = err.message
      });
    }
  }

  cancel() {
    this.close.emit();
  }
}
