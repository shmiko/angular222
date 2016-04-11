import { Component, OnInit } from 'angular2/core';
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';

@Component({
	selector: 'pm-products',
	templateUrl: 'app/products/product-list.component.html',
	styleUrls: ['app/products/product-list.component.css'],
	pipes: [ProductFilterPipe],
	directives: [StarComponent]
})

export class ProductListComponent implements OnInit{
	pageTitle: string = 'Item List';
	imageWidth: number = 50;
	imageHeight: number = 25;
	imageMargin: number = 2;
	showImage: boolean = true;
	errorMessage: string;
	listFilter: string;// = 'cart';
	products: IProduct[];
	//add methods after properties
	// private _productService;
	constructor(private _productService: ProductService) {
		// _productService = productService;
	}

	toggleImage(): void{
		this.showImage = !this.showImage;
	}

	ngOnInit(): void{

		this._productService.getProducts()
		.subscribe(
			products => this.products = products)
			error => this.errorMessage = <any>error;
	}

	onRatingClicked(message: string): void{
		this.pageTitle = 'Product List: ' + message;
	}

	

}