import { Component, OnInit } from '@angular/core';
import { CliniqueService } from '../services/clinique.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinique } from '../model/clinique.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { typeClinique } from '../model/typeclinique.model';

@Component({
  selector: 'app-update-clinique',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-clinique.component.html',
  styles: ``
})
export class UpdateCliniqueComponent implements OnInit {
  currentClinique = new Clinique();
  typeClinique! : typeClinique[];
  updatedidtype! : number;


  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private cliniqueService: CliniqueService) {


  }

  ngOnInit(): void {
    this.typeClinique = this.cliniqueService.listetypeclinique();
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentClinique = this.cliniqueService.consulterClinique(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentClinique);
    this.updatedidtype = this.currentClinique.idtype;
  }

  updateClinique()
  {
    this.currentClinique.typeClinique = this.cliniqueService.consulterTypeClinique(this.updatedidtype);
    this.cliniqueService.modifierClinique(this.currentClinique);
    this.router.navigate(['cliniques']);
  }

}
