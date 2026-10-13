import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Clinique } from '../model/clinique.model';
import { CliniqueService } from '../services/clinique.service';
import { Router } from '@angular/router';
import { typeClinique } from '../model/typeclinique.model';

@Component({
  selector: 'app-add-clinique',
  imports: [FormsModule],
  templateUrl: './add-clinique.component.html'
})
export class AddCliniqueComponent implements OnInit {

  newClinique = new Clinique();
  typeClinique!: typeClinique[];
  updatedidtype! : number;

  message!: string;


  constructor(private cliniqueService: CliniqueService
              ,private router:Router
  ){}

  ngOnInit(): void {
    this.typeClinique = this.cliniqueService.listetypeclinique();

    
  }
  addClinique(){
    this.newClinique.typeClinique = this.cliniqueService.consulterTypeClinique(this.newClinique.idtype);
    this.newClinique.typeClinique = this.newClinique.typeClinique;

    this.cliniqueService.ajouterClinique(this.newClinique);
    this.message = 'Clinique ' + this.newClinique.nomClinique + ' ajoutée avec succès !';
    this.router.navigate(['cliniques']);

  }

}
