import {Component} from '@angular/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    templateUrl: 'courses.component.html',
    styleUrls: ['courses.component.css'],
    moduleId: module.id,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = 'The first course';
    //courses = ["Course1", "Course2", "Course3"];
    courses;

    // constructor() {
    //     new CourseService() //tight coupling        
    // }

    //di
    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }


    isFavourite = false;
    onClick() {
        console.log("clicked star");
        this.isFavourite = !this.isFavourite;
    }
}