import {Component, OnInit} from '@angular/core';
import {IProduct} from './products';
import {ProductService} from './product.service';


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styles: ['thead {color:red}']
})

export class ProductListComponent implements OnInit {
  tableHeader: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listfilter: string;
  childMessage: string;

  get listfilter(): string {
    return this._listfilter;
  }

  set listfilter(value: string) {
    this._listfilter = value;
    this.filteredList = this.listfilter ? this.performSearch(this.listfilter) : this.products;
  }

  filteredList: IProduct[];
  products: IProduct[];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('This is from ngInit');
    this.products = this._productService.getProducts();
    this.filteredList = this.products;
    // this.listfilter = 'cart';
  }


  performSearch(listfilter: string): IProduct[] {
    listfilter = listfilter.toLowerCase();
    let filtered: IProduct[];
    filtered = this.products.filter(product => product.productName.toLowerCase().indexOf(listfilter) !== -1);
    return filtered;
  }

  onRatingClicked(message: string): void {
    this.childMessage = ` Rating of ` + message + ` is Clicked`;
  }

  constructor(private _productService: ProductService) {
    console.log('Product Service ' + _productService);
  }

}
