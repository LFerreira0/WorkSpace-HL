import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SandBoxComponent } from './main/sand-box/sand-box.component';
import { AppRoutingModule } from './app-routing.module';
import { ThreadsModule } from './threads/threads.module';
import "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-scss";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SandBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThreadsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
