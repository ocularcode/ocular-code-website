import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CloudComponent } from './cloud/cloud.component';
import { CloudsComponent } from './clouds/clouds.component';
import { ParticleComponent } from './particle/particle.component';
import { ParticlesComponent } from './particles/particles.component';
import { LogoComponent } from './logo/logo.component';
import { InProgressComponent } from './force/inProgress.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticlesComponent,
    CloudsComponent,
    CloudComponent,
    ParticleComponent,
    LogoComponent,
    InProgressComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
