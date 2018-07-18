import { Component, OnInit, 
    ViewChild, AfterViewInit, ElementRef, 
    ViewChildren, QueryList } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { Action } from 'rxjs/scheduler/Action';
import { Http } from '@angular/http';
import { NgModel } from '@angular/forms';
import { CriteriaComponent } from './criteria/criteria.component';
import { EventEmitter } from 'protractor';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
   
   
    ngAfterViewInit(): void {
        console.log("view Child ngAfterViewInit :" + this.testfilterRefVal);
        console.log(this.ipvalue);
        console.log(this.tableRefVal);
        console.log("Ipvalues", this.ipValues);
        console.log(" Single NG Model values" , this.ipvalue4);
        console.log("****NG Model values" , this.ngModelValues);

        console.log("Child Component link" ,  this.ipvalue5);
        console.log("Criteria Component Value is" ,  this.critTemplate);

        // not picking second one. check here
        console.log("Multi Crit" , this.crit2);
        console.log("Criteria Component Value is 2 " , this.critTemplate2);


     /* this.ngModelValues._results[3].valueChanges
        .subscribe(
            ()=> {
                console.log("Value is CHanged from ngModel! " , this.ngmodel5);
                this.newparentvalue = this.ngmodel5;
               
            }
        ); */
        
        
       
        this.testfilterRefVal.nativeElement.focus();
    }

    pageTitle: string = 'Product List';
    
   // listFilter: string = 'Garden'; because of 2 way binding UI gets the value and filters it
   listFilter: string
   testfilter: string;
    showImage: boolean;
    private _getsetexample: string;
    ngmodel4: string;
    ngmodel5: string;
    dynamicValue: string = "Vihaan";
    newparentvalue: string;


    

    @ViewChild('testfilterRef') testfilterRefVal: ElementRef;

    @ViewChild('ipvalue') ipvalue : ElementRef;
    @ViewChildren('tableRef') tableRefVal : QueryList<ElementRef>;

    @ViewChildren('ipvalue2, ipvalue3') ipValues : QueryList<ElementRef>;
   
    @ViewChildren(NgModel) ngModelValues : QueryList<NgModel>;
    @ViewChild('ipvalue4') ipvalue4 : NgModel;

    @ViewChild('ipvalue5') ipvalue5 : ElementRef;

    @ViewChild('critemplate') critTemplate: CriteriaComponent;
    @ViewChild('critemplate2') critTemplate2: CriteriaComponent;
    @ViewChild(CriteriaComponent) crit2: QueryList<CriteriaComponent>;

    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;
    

    filteredProducts: IProduct[];
    products: IProduct[];

    constructor(private productService: ProductService) {
        // concept here 
// angular will first initalize the component completly and then it goes in to the template initalization
// that is the reason we will not be able to see any value when we have it in the constructor.

       console.log("view Child :" + this.testfilterRefVal);
     }

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

    onChildChange(value) {
                console.log("After Change in the child comp", value);
    }


}

export enum actionList {
load,
save,
edit,   
delete
}

