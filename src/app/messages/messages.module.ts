import { NgModule } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MessagesComponent
  ],
})

export class MessagesModule {}
