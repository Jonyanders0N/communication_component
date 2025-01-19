import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { DefaultService } from '../default.service';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss'
})
export class ChildOneComponent implements OnChanges{
  
  @Input() valueInput!: string;
  @Output() valueInputChange = new EventEmitter<string>();

  defaultService = inject(DefaultService);

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['valueInput'].currentValue)
  }

  updateInput(value: any){
    // console.log(value.target.value);
    this.valueInputChange.emit(value.target.value)
  }
}
