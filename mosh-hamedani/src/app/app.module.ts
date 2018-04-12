import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Courses1Component} from './app.courses1.component';
import {Courses2Component} from './app.courses2.component';
import {IndexComponent} from './app.index.component';
import { TestCliComponent } from './test-cli/test-cli.component';
import { DataBindingExampleComponent } from './data-binding-example/data-binding-example.component';
import { CoursesComponent } from './courses/courses.component';
import {CoursesServiceService } from './courses-service.service';
import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './star/star.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    Courses1Component,
    Courses2Component,
    IndexComponent,
    TestCliComponent,
    DataBindingExampleComponent,
    CoursesComponent,
    SummaryPipe,
    StarComponent,
    BootstrapPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [CoursesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
