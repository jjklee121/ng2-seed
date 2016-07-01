import { Component } from '@angular/core'
import { CoursesComponent } from './courses.component'
//import { LineChartDemoComponent } from './chart.component'


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CoursesComponent]
  //directives: [LineChartDemoComponent]
})
export class AppComponent {
  title = 'app works! omgz!!!!!!!!!';
}
