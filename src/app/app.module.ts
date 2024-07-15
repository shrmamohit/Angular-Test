import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  DBConfig,
  NgxIndexedDBModule,
  NgxIndexedDBService,
} from 'ngx-indexed-db';
const dbConfig: DBConfig = {
  name: 'employee',
  version: 1,
  objectStoresMeta: [
    {
      store: 'employee',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'role', keypath: 'role', options: { unique: false } },
        { name: 'dateFrom', keypath: 'dateFrom', options: { unique: false } },
        { name: 'dateTo', keypath: 'dateTo', options: { unique: false } },
      ],
    },
  ],
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [provideAnimationsAsync(), NgxIndexedDBService],
  bootstrap: [AppComponent],
})
export class AppModule {}
