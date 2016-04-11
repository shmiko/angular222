import { Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core';

//decorator
@Component ({
	selector: 'ai-star',
	templateUrl: 'app/shared/star.component.html',
	styleUrls: ['app/shared/star.component.css']
})	

//define properties used in the css
export class StarComponent implements OnChanges{
	@Input() rating: number;
	starWidth: number;
	@Output() ratingClicked: EventEmitter<string> = 
		new EventEmitter<string>();
	ngOnChanges(): void{
		this.starWidth = this.rating * 86 / 5; //based on width of star in px
	}
	onClick(){
		this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
	}
}