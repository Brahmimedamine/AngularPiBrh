import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { MainBackComponent } from './BackOffice/main-back/main-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FormsModule } from '@angular/forms';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AjouterEtablissementComponent } from './BackOffice/ajouter-etablissement/ajouter-etablissement.component';
import { ListeetablissementComponent } from './BackOffice/listeetablissement/listeetablissement.component';
import { ModifieretablissementComponent } from './BackOffice/modifieretablissement/modifieretablissement.component';
import { AllTempleteFrontComponent } from './FrontOffice/all-templete-front/all-templete-front.component';
import { AfficheEtablissmentFrontComponent } from './FrontOffice/affiche-etablissment-front/affiche-etablissment-front.component';
import { DetailEtablissementComponent } from './FrontOffice/detail-etablissement/detail-etablissement.component';
import { AjouterAffctAmbulanceComponent } from './BackOffice/ajouter-affct-ambulance/ajouter-affct-ambulance.component';
import { ListeAmbulanceComponent } from './BackOffice/liste-ambulance/liste-ambulance.component';
import { DetailAmbulanceComponent } from './BackOffice/detail-ambulance/detail-ambulance.component';
import { UpdateAmbulanceComponent } from './BackOffice/update-ambulance/update-ambulance.component';
import { AjouterAmbulancierComponent } from './BackOffice/ajouter-ambulancier/ajouter-ambulancier.component';
import { ListeAmbulancierComponent } from './BackOffice/liste-ambulancier/liste-ambulancier.component';
import { UpdateAmbulancierComponent } from './BackOffice/update-ambulancier/update-ambulancier.component';
import { AjouterMorgueComponent } from './BackOffice/ajouter-morgue/ajouter-morgue.component';
import { ListeMorgueComponent } from './BackOffice/liste-morgue/liste-morgue.component';
import { UpdatemorgueComponent } from './BackOffice/updatemorgue/updatemorgue.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    MainBackComponent,
    SidebarBackComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    HomeFrontComponent,
    LoginComponent,
    AjouterEtablissementComponent,
    ListeetablissementComponent,
    ModifieretablissementComponent,
    AllTempleteFrontComponent,
    AfficheEtablissmentFrontComponent,
    DetailEtablissementComponent,
    AjouterAffctAmbulanceComponent,
    ListeAmbulanceComponent,
    DetailAmbulanceComponent,
    UpdateAmbulanceComponent,
    AjouterAmbulancierComponent,
    ListeAmbulancierComponent,
    UpdateAmbulancierComponent,
    AjouterMorgueComponent,
    ListeMorgueComponent,
    UpdatemorgueComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
