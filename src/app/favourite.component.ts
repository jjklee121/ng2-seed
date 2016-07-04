import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component ({
    selector: 'favourite',
    template: `
    <div>
    <i class="glyphicon" [class.glyphicon-star-empty]="!isFavourite"
                    [class.glyphicon-star]="isFavourite"
                    (click)="onClick()">
    </i>
    <input type="text" [(ngModel)]="isFavourite" />
    </div>
    `
    //,inputs: ['isFavourite']
      ,styles: [`
    .glyphicon-star {
      color: orange;
    }
    `]
})


export class FavouriteComponent {
    @Input('is-favourite') isFavourite = false;

    

    @Output() change = new EventEmitter();
    //isFavourite = false;

    @Output() componentIsFavourite = this.isFavourite;

    //@Output() isFavourite = this.isFavourite;

    onClick(){
        console.log('favourite.component:' + this.isFavourite)
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newValue: this.isFavourite });
    }
}