import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {CallNumber} from '@ionic-native/call-number';
import {SMS} from '@ionic-native/sms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ComponentsModule} from '../components/components.module';
import {MoreComponent} from '../components/more/more';
import {HistoryPage} from '../pages/history/history';
import { HistoryPageModule } from '../pages/history/history.module';
import {LaotelecomPage} from '../pages/laotelecom/laotelecom';
import {LaotelecomPageModule} from '../pages/laotelecom/laotelecom.module';
import {EtlPage} from '../pages/etl/etl';
import {EtlPageModule} from '../pages/etl/etl.module';
import {BeelinePage} from '../pages/beeline/beeline';
import {BeelinePageModule} from '../pages/beeline/beeline.module';

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
    LaotelecomPageModule,
    BeelinePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    MoreComponent,
    EtlPage,
    LaotelecomPage,
    BeelinePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
