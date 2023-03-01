import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {VendingMachineComponent} from "./vending-machine/vending-machine.component";
import { MessageDisplayComponent } from './message-display/message-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PowerButtonComponent} from "./power-button/power-button.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {VendingItemDisplayComponent} from "./vending-item-display/vending-item-display.component";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatBadgeModule} from "@angular/material/badge";


@NgModule({
  declarations: [
    VendingMachineComponent,
    MessageDisplayComponent,
    PowerButtonComponent,
    VendingItemDisplayComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatIconModule,
        HttpClientModule,
        MatButtonModule,
        MatChipsModule,
        MatBadgeModule
    ],
  providers: [],
  bootstrap: [VendingMachineComponent]
})
export class AppModule { }
