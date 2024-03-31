import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EtablissementService } from 'src/app/services/etablissement.service';

@Component({
  selector: 'app-detail-etablissement',
  templateUrl: './detail-etablissement.component.html',
  styleUrls: ['./detail-etablissement.component.css']
})
export class DetailEtablissementComponent {
constructor(private service:EtablissementService,private router:Router,private activatedRoute:ActivatedRoute){

}
routeSub!: Subscription;

etab:any
  id:any

ngOnInit(): void {

  this.etab={
    idEtab:null,
    nomEtab:null,
    numFixe:null,

    adresse: null,
    typeEtab: null,
    nbLits: null,
    prixNuit: null

  }
  this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
    this.id = params['id']; });
   
   this.service.getEtablissement(this.id).subscribe(p =>{
    console.log(p);
    this.etab = p;
  
  });

}
buttonReturn(){
  this.router.navigate(['/etablissment'])
}


}
