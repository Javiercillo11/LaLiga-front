// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexModule } from './views/index/index.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
  ],
  providers: [
    provideHttpClient() // ✅ Nueva forma recomendada
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
