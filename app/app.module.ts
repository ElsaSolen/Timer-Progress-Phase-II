import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlertViewComponent } from './alert-view/alert-view.component';
import { DisplayComponent } from './display/display.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    AlertViewComponent,
    DisplayComponent,
    ProgressBarComponent,
    SimpleAlertViewComponent,
    TabComponent,
    TabsComponent,
    TimerComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
