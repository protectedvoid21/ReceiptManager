import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonListComponent } from './main/person-list/person-list.component';
import { ProductListComponent } from './main/product-list/product-list.component';
import { AddPersonFormComponent } from './main/add-person-form/add-person-form.component';
import { AddProductFormComponent } from './main/add-product-form/add-product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PersonListComponent,
    ProductListComponent,
    AddPersonFormComponent,
    AddProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
