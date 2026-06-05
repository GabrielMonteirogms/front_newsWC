import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminComponent } from './pages/admin/admin-component/admin-component';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { PortalComponent } from './pages/portal/portal-component/portal-component';
import {MostViewedComponent} from "./components/most-viewed-component/most-viewed-component";
import { FeaturedNewsComponents } from './components/featured-news-components/featured-news-components';
import { NewsCardComponent } from './components/news-card-component/news-card-component';
import { NewsFormComponent } from './components/news-form-component/news-form-component';

@NgModule({
  declarations: [
    App,
    AdminComponent,
    NavbarComponent,
    FooterComponent,
    PortalComponent,
    FeaturedNewsComponents,
    MostViewedComponent,
    NewsCardComponent,
    NewsFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
