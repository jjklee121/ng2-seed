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
  title = 'omgz goatz!!!!';
  imageUrl = "http://www.naturallivingideas.com/wp-content/uploads/2015/08/baby-goat.jpg"

  onClick($event: MouseEvent) {
    $event.stopPropagation();
    console.log("clicked me!", $event);
  }

  onDivClick() {
    console.log("Handled by div!");
  }
}
