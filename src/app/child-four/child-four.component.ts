import { Component, inject } from '@angular/core';
import { DefaultService } from '../default.service';

@Component({
  selector: 'app-child-four',
  standalone: true,
  imports: [],
  templateUrl: './child-four.component.html',
  styleUrl: './child-four.component.scss'
})
export class ChildFourComponent {
  showValue!: string;

  defaultService = inject(DefaultService);

  ngOnInit(){
  this.defaultService.obs.subscribe(data => {
    this.showValue = data;
  })
  }
}
