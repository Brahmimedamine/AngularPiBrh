import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { AjouterEtablissementComponent } from './BackOffice/ajouter-etablissement/ajouter-etablissement.component';
import { ListeetablissementComponent } from './BackOffice/listeetablissement/listeetablissement.component';
import { AllTempleteFrontComponent } from './FrontOffice/all-templete-front/all-templete-front.component';
import { ModifieretablissementComponent } from './BackOffice/modifieretablissement/modifieretablissement.component';
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

const routes: Routes = [
 { path:"",
  component:AllTempleteFrontComponent,
  children:[
    {
      path:"",
      component:HomeFrontComponent
    },
    {
      path:"login",
      component:LoginComponent
    },
    {
      path:"etablissment",
      component:AfficheEtablissmentFrontComponent
    },
    {
      path:"detailetablissment/:id",
      component:DetailEtablissementComponent
    },
    
    
  ]
 },

{
  path:"admin",
  component:AllTemplateBackComponent,
  children:[
    {
      path:"listeEtablissement",
      component:ListeetablissementComponent
    },
    {
      path:"ajouterEtablissement",
      component:AjouterEtablissementComponent
    },
    {
      path:"modifierEtablissement/:id",
      component:ModifieretablissementComponent
    },
    {
      path:"listAmbulance",
      component:ListeAmbulanceComponent 
    },
    {
      path:"ajouterAmbulance",
      component:AjouterAffctAmbulanceComponent 
    },
    {
      path:"ajouterMorgue",
      component:AjouterMorgueComponent 
    },
    {
      path:"listeMorgue",
      component:ListeMorgueComponent 
    },
    {
      path:"UpdateMorgue/:id",
      component:UpdatemorgueComponent
    },

    {
      path:"detailAmbulance/:id",
      component:DetailAmbulanceComponent 
    },
    {
      path:"UpdateAmbulance/:id",
      component:UpdateAmbulanceComponent
    },
    {
      path:"ajouterAmbulancier",
      component:AjouterAmbulancierComponent 
    },
    {
      path:"modifierrAmbulancier/:id",
      component:UpdateAmbulancierComponent 
    },
    {
      path:"listeAmbulancier",
      component:ListeAmbulancierComponent 
    },

  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
