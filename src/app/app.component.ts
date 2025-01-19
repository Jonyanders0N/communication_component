import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildTwoComponent } from "./child-two/child-two.component";
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildThreeComponent } from "./child-three/child-three.component";
import { ChildFourComponent } from "./child-four/child-four.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildOneComponent, ChildTwoComponent, ChildThreeComponent, ChildFourComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_04';
  valueInput = 'Fernando';
}
