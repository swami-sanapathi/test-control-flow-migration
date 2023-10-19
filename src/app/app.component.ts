import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormComponent],
  template: `<app-form/>`,
  styles: [],
})
export class AppComponent {
  title = 'test-control-flow-migration';
  test: boolean = true;

}
