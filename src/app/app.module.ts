import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    DataService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
