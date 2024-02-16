import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitComponent } from './components/fruit/fruit.component';
import { ContentComponent } from './components/content/content.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FruitComponent, ContentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
