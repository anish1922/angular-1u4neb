import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppRoutingModuleModule} from './app-routing-module.module'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroserviceService } from './heroservice.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import {DashboardComponent} from './dashboard/dashboard.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModuleModule],
  declarations: [ AppComponent, HelloComponent, HeroesComponent, HeroDetailComponent, MessagesComponent,DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroserviceService, MessageService]
})
export class AppModule { }
