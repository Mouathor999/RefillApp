import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoryPageModule } from '../pages/history/history.module';

import {ComponentsModule} from '../components/components.module';
import {MoreComponent} from '../components/more/more';
import {HistoryPage} from '../pages/history/history';
import {LaotelecomPage} from '../pages/laotelecom/laotelecom';
import {LaotelecomPageModule} from '../pages/laotelecom/laotelecom.module';
import {EtlPage} from '../pages/etl/etl';
import {EtlPageModule} from '../pages/etl/etl.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HistoryPageModule,
    EtlPageModule,
    LaotelecomPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    MoreComponent,
    EtlPage,
    LaotelecomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
