import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [],
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.scss'
})
export class ChildTwoComponent {
  @Input() valueInput!: string;

  ngOnChanges(){
    console.log(this.valueInput);
  }
}
