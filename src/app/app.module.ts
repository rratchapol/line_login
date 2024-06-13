import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineLoginComponent } from './line-login/line-login.component';
import { LineComponent } from './line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    LineLoginComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
