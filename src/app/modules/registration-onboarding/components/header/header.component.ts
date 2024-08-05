import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() step: number | undefined;
  @Input() stage: string | undefined;

  @Output() newStep = new EventEmitter<number>();

  onButtonClick() {
    if (this.step != undefined) {
      this.newStep.emit(this.step - 1);
    }
  }
}
