import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component2';
import { ProductListComponent } from '../products/product-list.component';
import { ConvertToSpacesPipe } from '../products/convert-to-spaces-pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from '../products/product.service';


@NgModule({
  declarations: [
    AppComponent, AppComponent2, ProductListComponent, ConvertToSpacesPipe, StarComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
