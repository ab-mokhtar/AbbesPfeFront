import { Demande } from "./Demande";
import { RessourceLivraison } from "./RessourceLivraison";

export class Livraison {
    id: number;
    versionLivraison:Date;
    typeLivraison: string;
    facturable:Date;
    demande:Demande;
    ressourceLivraison:RessourceLivraison;
}