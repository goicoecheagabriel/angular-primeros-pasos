import { NgModule } from "@angular/core";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule {}
