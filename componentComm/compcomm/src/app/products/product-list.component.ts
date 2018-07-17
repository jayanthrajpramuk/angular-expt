import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    
   // listFilter: string = 'Garden'; because of 2 way binding UI gets the value and filters it
   listFilter: string
   testfilter: string;
    showImage: boolean;
    private _getsetexample: string;

    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;

    filteredProducts: IProduct[];
    products: IProduct[];

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (products: IProduct[]) => {
                this.products = products;
                this.performFilter(this.listFilter);
            },
            (error: any) => this.errorMessage = <any>error
        );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy?: string): void {
        if (filterBy) {
            this.filteredProducts = this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
        } else {
            this.filteredProducts = this.products;
        }
    }

    ontestFilterChange(filter? : string): void {
        console.log("New Value:" + filter);

        //concept here
        // this is important to know that the value will not bind automatically
       // console.log("the model value , testfilter is "+ this.testfilter);
        // this is important to maintain same data.

        this.testfilter = filter;
        console.log("the model value , testfilter is "+ this.testfilter);
        this.performFilter(this.testfilter);
    }

    // concept here : need to know when will these getter and setter be called
    get getsetexample(): string {
        //console.log("Get fired")
        return this._getsetexample;
    }

    set getsetexample(value: string) {
        //console.log("Set fired")
          this._getsetexample = value;
          this.performFilter(value);
    }


}
