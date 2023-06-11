enum Role {
    ADMIN,
    MANAGER,
    TeamLeader,
    DEV
  }

export interface Acteur {
    id: number;
    nom: string;
    prenom: string;
    mail: string;
    motdePasse: string;
    role: Role

}