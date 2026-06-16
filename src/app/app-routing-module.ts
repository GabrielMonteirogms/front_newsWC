import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortalComponent } from './pages/portal/portal-component/portal-component';
import { LatestComponent } from './components/latest-component/latest-component';
import { FeaturedComponent } from './components/featured-components/featured-component';
import { MostViewedComponent } from './components/most-viewed-component/most-viewed-component';
import { AdminComponent } from './pages/admin/admin-component/admin-component';
import { NewsDetailsComponent } from './components/new-details/new-details';

import { MatchesComponent } from './pages/matches/matches';
import { TeamsComponent } from './pages/teams/teams';
import { StadiumsComponent } from './pages/stadiums/stadiums';
import { CuriositiesComponent } from './pages/curiosities/curiosities';

const routes: Routes = [

  { path: '', component: PortalComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'most-viewed', component: MostViewedComponent },
  { path: 'news/:id', component: NewsDetailsComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'stadiums', component: StadiumsComponent },
  { path: 'curiosities', component: CuriositiesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}