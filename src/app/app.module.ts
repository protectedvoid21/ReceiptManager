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
import { ShareReceiptDialogComponent } from './main/navbar/share-receipt-dialog/share-receipt-dialog.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { ThemeToggleComponent } from './main/navbar/theme-toggle/theme-toggle.component';
import {HttpClientModule} from "@angular/common/http";
import { ShareReceiptIconComponent } from './main/navbar/share-receipt-icon/share-receipt-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PersonListComponent,
    ProductListComponent,
    AddPersonFormComponent,
    AddProductFormComponent,
    ShareReceiptDialogComponent,
    NavbarComponent,
    ThemeToggleComponent,
    ShareReceiptIconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
