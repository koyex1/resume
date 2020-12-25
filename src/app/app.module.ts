import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
 import {IvyCarouselModule} from 'angular-responsive-carousel';
import { LayerComponent } from './layer/layer.component';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LayerComponent
  ],
  imports: [
    BrowserModule,
	RouterModule,
	IvyCarouselModule,
	AppRoutingModule,
	NgbModule
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
