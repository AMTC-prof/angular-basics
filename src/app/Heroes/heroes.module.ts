import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './Heroe/heroe.component';
import { ListadoComponent } from './Listado/listado.component';


@NgModule({
    declarations: [                           /* Declaracion de componentes del modulo */
       HeroeComponent,
       ListadoComponent
    ],
    exports: [                                /* Lo que queremos exportar, es decir que sea publico */
        ListadoComponent,
        HeroeComponent
    ],
    imports: [
        CommonModule                          /* Ofrece directivas como *ngFor y *ngIf */
    ]

})

export class HeroesModule{}