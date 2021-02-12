import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParticleComponent } from './particle/particle.component';
import { CloudComponent } from './cloud/cloud.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticleComponent,
    CloudComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
