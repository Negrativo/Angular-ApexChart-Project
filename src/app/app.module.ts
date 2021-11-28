import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from "ng-apexcharts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoBarrasComponent } from './graficos/grafico-barras/grafico-barras.component';
import { GraficoAreaComponent } from './graficos/grafico-area/grafico-area.component';
import { GraficoPizzaComponent } from './graficos/grafico-pizza/grafico-pizza.component';
import { GraficoCandleComponent } from './graficos/grafico-candle/grafico-candle.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoBarrasComponent,
    GraficoAreaComponent,
    GraficoPizzaComponent,
    GraficoCandleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
