import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Clinique } from '../model/clinique.model';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CliniqueService } from '../services/clinique.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cliniques',
  standalone: true,
  imports: [FormsModule,DatePipe,RouterLink],
  templateUrl: './cliniques.component.html',
})
export class CliniquesComponent implements OnInit {
  cliniques: Clinique[];

  constructor(private cliniqueService: CliniqueService) {
    this.cliniques = cliniqueService.listeCliniques();
  }
  supprimerClinique(clinique: Clinique) {
    const conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.cliniqueService.supprimerClinique(clinique);
    }

  ngOnInit(): void {
  }
}