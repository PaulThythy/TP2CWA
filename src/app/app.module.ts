import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';
import { HeaderComponent } from './header/header.component';
import { Form, FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    HeaderComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PizzaListComponent]
})
export class AppModule {
  img:string="/asset/images/01.jpeg";
}
