import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRountingModule } from './app.routing.module';

import { PhotosModules } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ErrorsModule,
    CoreModule,
    PhotosModules,
    AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
