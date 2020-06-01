import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileManagerModule, ToolbarService, NavigationPaneService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileManagerModule
  ],
  providers: [ToolbarService, NavigationPaneService, DetailsViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
