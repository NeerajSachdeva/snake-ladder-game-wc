import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { SnakeLadderGameComponent } from './snake-ladder-game/snake-ladder-game.component';

@NgModule({
  declarations: [
    SnakeLadderGameComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class SnakeLadderGameModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const slComponent = createCustomElement(SnakeLadderGameComponent, {
      injector: this.injector,
    });

    customElements.define('snake-ladder-game', slComponent);
  }
}
