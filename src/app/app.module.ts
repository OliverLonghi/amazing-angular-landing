import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { BigHeroComponent } from './layout/big-hero/big-hero.component';
import { ButtonComponent } from './layout/button/button.component';
import { WhiteDirective } from './layout/textstyles/white.directive';
import { BlackDirective } from './layout/textstyles/black.directive';
import { GreyDirective } from './layout/textstyles/grey.directive';
import { ItalicDirective } from './layout/textstyles/italic.directive';
import { LegendComponent } from './layout/legend/legend.component';
import { HeadlineComponent } from './layout/headline/headline.component';
import { SubtitleComponent } from './layout/subtitle/subtitle.component';
import { ContainerComponent } from './layout/container/container.component';
import { ContentSectionComponent } from './layout/content-section/content-section.component';
import { CardsComponent } from './layout/cards/cards.component';
import { CardComponent } from './layout/card/card.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WithoutSpaceDirective } from './layout/textstyles/without-space.directive';
import { ClientComponent } from './layout/client/client.component';
import { ClientsComponent } from './layout/clients/clients.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { LogoComponent } from './layout/logo/logo.component';
import { MenuItemComponent } from './layout/menu-item/menu-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BigHeroComponent,
    ButtonComponent,
    WhiteDirective,
    BlackDirective,
    GreyDirective,
    ItalicDirective,
    LegendComponent,
    HeadlineComponent,
    SubtitleComponent,
    ContainerComponent,
    ContentSectionComponent,
    CardsComponent,
    CardComponent,
    FooterComponent,
    WithoutSpaceDirective,
    ClientComponent,
    ClientsComponent,
    HeaderComponent,
    MenuComponent,
    LogoComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
