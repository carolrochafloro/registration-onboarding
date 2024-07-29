import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.scss',
})
export class JoinUsComponent {
  @Output() buttonClicked = new EventEmitter<string>();

  emitEvent(accountType: string) {
    this.buttonClicked.emit(accountType);
  }
}
