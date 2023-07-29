import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CounterComponent } from "./components/counter.component";

import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule{

}
