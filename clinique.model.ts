import { typeClinique } from './typeclinique.model';

export class Clinique {
  idClinique!: number;
  nomClinique!: string;
  adresse!: string;
  telephone!: string;
  dateCreation!: Date;
  typeClinique!: typeClinique;
  idtype!: number; // ou idtype? : number;
  nomtype!: string; // ou nomtype? : string;

}
