import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OffersComponent } from './components/offers/offers.component';
import { HomeComponent } from './components/home/home.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [AppComponent, OffersComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
