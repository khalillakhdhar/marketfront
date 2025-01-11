import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { InterceptorService } from './shared/services/utils/interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [
    provideHttpClient(),
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
