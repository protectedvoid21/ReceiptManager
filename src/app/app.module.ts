import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonListComponent } from './main/person-list/person-list.component';
import { ProductListComponent } from './main/product-list/product-list.component';
import { AddPersonFormComponent } from './main/person-list/add-person-form/add-person-form.component';
import { AddProductFormComponent } from './main/product-list/add-product-form/add-product-form.component';
import { SplitwiseDialogComponent } from './main/share-receipt-icon/share-receipt-dialog/splitwise-dialog.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { ThemeToggleComponent } from './main/navbar/theme-toggle/theme-toggle.component';
import {HttpClientModule} from "@angular/common/http";
import { SplitwiseButtonComponent } from './main/share-receipt-icon/splitwise-button.component';
import { ConfirmShareDialogComponent } from './main/confirm-share-dialog/confirm-share-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PersonListComponent,
    ProductListComponent,
    AddPersonFormComponent,
    AddProductFormComponent,
    SplitwiseDialogComponent,
    NavbarComponent,
    ThemeToggleComponent,
    SplitwiseButtonComponent,
    ConfirmShareDialogComponent
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
