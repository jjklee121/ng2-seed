import { Component, Input } from '@angular/core'
import { CoursesComponent } from './courses.component'
import { LineChartDemoComponent } from './chart.component'
import { FavouriteComponent } from './favourite.component'


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CoursesComponent, LineChartDemoComponent, FavouriteComponent]
  //directives: [LineChartDemoComponent]

})
export class AppComponent {
  title = 'omgz goatz!!!!';
  imageUrl = "http://www.naturallivingideas.com/wp-content/uploads/2015/08/baby-goat.jpg"
  post;
  isFavourite: boolean

  onClick($event: MouseEvent) {
    $event.stopPropagation();
    console.log("clicked me!", $event);
  }

  onDivClick() {
    console.log("Handled by div!");
  }

  constructor() {
    this.post = {
      isFavourite: true
    };

    this.isFavourite = true;
  }


  
  

  onFavouriteChange($event) {
    console.log('app event: ' + $event);
    console.log('app this.isFavourite: ' + this.isFavourite);
    console.log('app post.isFavourite: ' + this.post.isFavourite )
    //this.isFavourite = !this.isFavourite;    

  }

  @Input() appIsFavourite = this.isFavourite;
  
}
