import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeelinePage } from './beeline';

@NgModule({
  declarations: [
    BeelinePage,
  ],
  imports: [
    IonicPageModule.forChild(BeelinePage),
  ],
})
export class BeelinePageModule {}
