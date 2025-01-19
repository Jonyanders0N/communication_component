import { Component, inject } from '@angular/core';
import { DefaultService } from '../default.service';

@Component({
  selector: 'app-child-three',
  standalone: true,
  imports: [],
  templateUrl: './child-three.component.html',
  styleUrl: './child-three.component.scss'
})
export class ChildThreeComponent {
  defaultService = inject(DefaultService);
  setValue(value: any){
    this.defaultService.updateValue(value.target.value)
  }
}
