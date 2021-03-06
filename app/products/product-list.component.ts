import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Discography';
    imageWidth: number = 50;
    imageHeight: number = 35;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string = "";
    errorMessage: string;
    products: IProduct[];


    constructor(private _productService: ProductService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
           this._productService.getProducts()
                     .subscribe(
                       products => this.products = products,
                       error =>  this.errorMessage = <any>error); 
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Music List: ' + message;
    }
}