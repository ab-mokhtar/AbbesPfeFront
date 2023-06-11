import { Charge } from "./charge";
import { Client } from "./client";
import { Commentaire } from "./commentaire";
import { Date } from "./date";
import { Priorite } from "./priorite";
import { Reference } from "./reference";
import { Statut } from "./statut";

export class Demande {
    id!: number;
  objetDemande!: string;
  planifie!: string;
  opportunite!: string;
  bu!: string;
  resume!: string;
  contexte!: string;
  anticipation!: string;
  phase!: string;
  dommaine!: string;
  technologie!: string;
  typeTrigramme!: string;
  valeurTrigramme!: string;
  charge!: Charge;
  reference!: Reference;
  priorite!: Priorite;
  date!: Date[];
  commentaire!: Commentaire[];
  client!: Client;
  statut!: Statut;
}
