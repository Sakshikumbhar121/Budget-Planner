import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppComponent // Import the standalone component here
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync('noop')
  ]
})
export class AppModule { }
