import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts'; 
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), CanvasJSAngularChartsModule, HttpClientModule]
};
