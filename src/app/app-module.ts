import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { AdminComponent } from './pages/admin/admin-component/admin-component';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { LatestComponent } from './components/latest-component/latest-component';
import { PortalComponent } from './pages/portal/portal-component/portal-component';
import { MostViewedComponent } from './components/most-viewed-component/most-viewed-component';
import { FeaturedComponent } from './components/featured-components/featured-component';
import { NewsCardComponent } from './components/news-card-component/news-card-component';
import { NewsFormComponent } from './components/news-form-component/news-form-component';


@NgModule({
  declarations: [
    App,
    AdminComponent,
    NavbarComponent,
    FooterComponent,
    FeaturedComponent,
    LatestComponent,
    PortalComponent,
    MostViewedComponent,
    NewsCardComponent,
    NewsFormComponent,
   
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
