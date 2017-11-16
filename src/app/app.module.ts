import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { DataService } from './services/data.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSidenavModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    // environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [
    DataService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
