import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { FormsModule } from '@angular/forms';
import { JurossimplesComponent } from './jurossimples/jurossimples.component';
import { JuroscompostoComponent } from './juroscomposto/juroscomposto.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  bootstrap: [RootComponent],
  declarations: [RootComponent, JurossimplesComponent, JuroscompostoComponent],
})
export class AppModule {}
