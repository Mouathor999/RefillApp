import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtlPage } from './etl';

@NgModule({
  declarations: [
    EtlPage,
  ],
  imports: [
    IonicPageModule.forChild(EtlPage),
  ],
})
export class EtlPageModule {}
