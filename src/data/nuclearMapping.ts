import type { Actor, CommercialOpportunity, Domain, LoadPlanItem, MajorAccount, Project, SourceDataAuditItem, SourceDocument } from "../types/mapping";

export const domains: Domain[] = [
  {
    "id": "civil",
    "name": "Nucléaire civil",
    "category": "Civil",
    "description": "Exploitation du parc nucléaire, nouveaux réacteurs, démantèlement, cycle du combustible, déchets, recherche et sûreté."
  },
  {
    "id": "defense",
    "name": "Défense / propulsion navale",
    "category": "Défense",
    "description": "Propulsion nucléaire navale, chaufferies des sous-marins et porte-avion, soutien en service et réacteurs d'essais.",
    "caution": "Certains sous-traitants ne sont pas identifiés dans les documents car le périmètre relève du secret défense."
  },
  {
    "id": "demantelement-fessenheim-chinon-bugey",
    "name": "Démantèlement nucléaire",
    "category": "Civil",
    "description": "Retrait combustible, décontamination, découpe, gestion des déchets, assainissement et remise en état de sites."
  },
  {
    "id": "grand-carenage",
    "name": "Grand carénage",
    "category": "Civil",
    "description": "Programme de prolongation du parc EDF : sûreté, génie civil, HVAC, contrôle commande, remplacements d'équipements et arrêts de tranche."
  },
  {
    "id": "epr-epr2",
    "name": "EPR / EPR2",
    "category": "Civil",
    "description": "Construction et finalisation de réacteurs EPR/EPR2 : Penly, Gravelines, Bugey et Flamanville."
  },
  {
    "id": "combustible",
    "name": "Cycle du combustible",
    "category": "Civil",
    "description": "Extraction, conversion, enrichissement, fabrication, utilisation et recyclage du combustible nucléaire."
  },
  {
    "id": "dechets-cigeo",
    "name": "Déchets radioactifs / CIGEO",
    "category": "Civil",
    "description": "Stockage profond des déchets radioactifs, ouvrages souterrains, ventilation, robotique, conditionnement, sûreté et confinement."
  },
  {
    "id": "recherche-rjh",
    "name": "Recherche nucléaire / RJH",
    "category": "Recherche",
    "description": "Réacteur Jules Horowitz : essais combustibles, matériaux irradiés, radioéléments médicaux, sûreté et prolongation du parc."
  },
  {
    "id": "fusion-iter",
    "name": "Fusion / ITER",
    "category": "Recherche",
    "description": "Projet de fusion sur Cadarache : bâtiments Tokamak, logistique, mécanique complexe, réseaux hydrauliques et traitement des déchets."
  },
  {
    "id": "smr",
    "name": "SMR / réacteurs innovants",
    "category": "Innovation",
    "description": "Nuward et acteurs français/européens des petits réacteurs modulaires et réacteurs innovants."
  },
  {
    "id": "dissuasion",
    "name": "Dissuasion nucléaire",
    "category": "Défense",
    "description": "Projet sensible mentionné dans les documents sous l'intitulé AETV.",
    "caution": "Information limitée / secret défense."
  }
];

export const projects: Project[] = [
  {
    "id": "res",
    "name": "RES - Réacteur d'essais",
    "domain": "Défense / propulsion navale",
    "category": "Réacteur d'essais",
    "description": "Réacteur nucléaire expérimental militaire destiné à tester et développer les chaufferies nucléaires des sous-marins et porte-avion français.",
    "objectives": [
      "Simulation des réacteurs embarqués",
      "Validation des technologies avant mise en mer",
      "Essais thermiques et matériaux dans des environnements en mer",
      "Formation des marins nucléaires et simulation des conditions réelles"
    ],
    "actors": [
      {
        "actorId": "technic-atome",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "AMO et conception, réalisation, mise en service de réacteurs nucléaires compacts pour réacteurs d'essais."
      },
      {
        "actorId": "cea",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Recherche nucléaire et appui aux réacteurs d'essais."
      },
      {
        "actorId": "dga",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Acteur public défense mentionné dans le périmètre propulsion navale."
      }
    ],
    "skills": [
      "réacteurs compacts",
      "sûreté nucléaire",
      "essais thermiques",
      "matériaux irradiés",
      "formation",
      "simulation",
      "instrumentation"
    ],
    "horizon": "Non précisé",
    "status": "Projet / installation sensible existante mentionnée",
    "opportunityLevel": "À qualifier",
    "commercialNotes": [
      "Périmètre défense : données limitées.",
      "Approche commerciale prudente via donneurs d'ordre et ingénieries habilitées."
    ],
    "recommendedProspectingAngle": "Qualifier les besoins d'essais, d'instrumentation, de soutien en service et de PMO, en tenant compte du caractère sensible du périmètre."
  },
  {
    "id": "s3g",
    "name": "S3G - Sous-marins nucléaires lanceurs d'engins",
    "domain": "Défense / propulsion navale",
    "category": "Propulsion navale",
    "description": "Programme de sous-marins nucléaires lanceurs d'engins avec maîtrise d'œuvre globale Naval Group et systèmes nucléaires majeurs TechnicAtome.",
    "objectives": [
      "Conception, production, maintenance et démantèlement des SNLE",
      "Intégration des missiles M51",
      "Soutien des chaufferies nucléaires"
    ],
    "actors": [
      {
        "actorId": "naval-group",
        "roleType": "MOE",
        "roleDescription": "Maîtrise d'œuvre globale : conception, production, maintenance et démantèlement des sous-marins nucléaires et porte-avion."
      },
      {
        "actorId": "technic-atome",
        "roleType": "MOE",
        "roleDescription": "Maîtrise d'œuvre des systèmes majeurs nucléaires : chaufferies nucléaires."
      },
      {
        "actorId": "thales",
        "roleType": "Responsable de lot",
        "roleDescription": "Systèmes de détection et sonars, électronique et systèmes embarqués."
      },
      {
        "actorId": "mbda",
        "roleType": "Responsable de lot",
        "roleDescription": "Systèmes d'armes et intégration des M51 sur SNLE."
      },
      {
        "actorId": "arianegroup",
        "roleType": "Responsable de lot",
        "roleDescription": "Conception et fabrication des missiles M51."
      },
      {
        "actorId": "framatome",
        "roleType": "Fournisseur",
        "roleDescription": "Composants pour circuits primaires, instrumentation et contrôle."
      },
      {
        "actorId": "orano",
        "roleType": "Fournisseur",
        "roleDescription": "Combustible nucléaire."
      },
      {
        "actorId": "thermodyn-ge",
        "roleType": "Sous-traitant",
        "roleDescription": "Conception et fabrication des turbines vapeur."
      }
    ],
    "skills": [
      "propulsion nucléaire navale",
      "tuyauterie",
      "fluides",
      "HVAC",
      "mécano-soudure",
      "électricité",
      "câblage",
      "montage",
      "intégration",
      "logistique industrielle",
      "instrumentation",
      "contrôle commande",
      "turbines vapeur"
    ],
    "horizon": "Long terme",
    "status": "Programme sensible",
    "opportunityLevel": "À qualifier",
    "commercialNotes": [
      "Sous-traitants détaillés non connus dans les documents pour raison de secret défense.",
      "Cibler les maîtres d'œuvre et responsables de lots déjà identifiés."
    ],
    "recommendedProspectingAngle": "Approcher Naval Group, TechnicAtome et fournisseurs identifiés sur des besoins support d'ingénierie, intégration, logistique industrielle et systèmes électriques."
  },
  {
    "id": "sna",
    "name": "SNA - Sous-marins nucléaires d'attaque",
    "domain": "Défense / propulsion navale",
    "category": "Propulsion navale",
    "description": "Programme de sous-marins nucléaires d'attaque, avec acteurs similaires à S3G pour propulsion, systèmes embarqués, armes et combustible.",
    "objectives": [
      "Conception, production, maintenance et démantèlement des SNA",
      "Intégration des systèmes d'armes et missiles",
      "Soutien en service des chaufferies"
    ],
    "actors": [
      {
        "actorId": "naval-group",
        "roleType": "MOE",
        "roleDescription": "Maîtrise d'œuvre globale."
      },
      {
        "actorId": "technic-atome",
        "roleType": "MOE",
        "roleDescription": "Maîtrise d'œuvre des systèmes majeurs nucléaires et chaufferies."
      },
      {
        "actorId": "thales",
        "roleType": "Responsable de lot",
        "roleDescription": "Systèmes de détection et sonars."
      },
      {
        "actorId": "mbda",
        "roleType": "Responsable de lot",
        "roleDescription": "Systèmes d'armes et missiles."
      },
      {
        "actorId": "framatome",
        "roleType": "Fournisseur",
        "roleDescription": "Composants circuits primaires, instrumentation et contrôle."
      },
      {
        "actorId": "orano",
        "roleType": "Fournisseur",
        "roleDescription": "Combustible nucléaire."
      },
      {
        "actorId": "thermodyn-ge",
        "roleType": "Sous-traitant",
        "roleDescription": "Turbines vapeur."
      }
    ],
    "skills": [
      "propulsion nucléaire navale",
      "tuyauterie",
      "fluides",
      "HVAC",
      "mécano-soudure",
      "électricité",
      "câblage",
      "montage",
      "intégration",
      "logistique industrielle",
      "sonars",
      "contrôle commande",
      "turbines vapeur"
    ],
    "horizon": "Long terme",
    "status": "Programme sensible",
    "opportunityLevel": "À qualifier",
    "commercialNotes": [
      "Secret défense sur les sous-traitants non cités.",
      "Opportunités surtout via comptes déjà présents dans la chaîne de valeur."
    ],
    "recommendedProspectingAngle": "Préparer des rendez-vous sur support technique, maintenance, intégration d'équipements et logistique industrielle."
  },
  {
    "id": "pang",
    "name": "PANG / France Libre - Porte-avion nouvelle génération",
    "domain": "Défense / propulsion navale",
    "category": "Propulsion navale",
    "description": "Porte-avion de nouvelle génération nommé France Libre, intégrant propulsion nucléaire, coque, systèmes embarqués, aviation, catapultes et turbines.",
    "objectives": [
      "Conception et assemblage du porte-avion",
      "Intégration des chaufferies nucléaires",
      "Intégration des systèmes embarqués, armes, aviation et catapultes"
    ],
    "actors": [
      {
        "actorId": "naval-group",
        "roleType": "MOE",
        "roleDescription": "Maîtrise d'œuvre globale."
      },
      {
        "actorId": "technic-atome",
        "roleType": "MOE",
        "roleDescription": "Maîtrise d'œuvre systèmes majeurs nucléaires."
      },
      {
        "actorId": "chantiers-atlantique",
        "roleType": "Sous-traitant",
        "roleDescription": "Construction navale de la coque et assemblage du navire."
      },
      {
        "actorId": "thales",
        "roleType": "Responsable de lot",
        "roleDescription": "Systèmes de détection, sonars, électronique et systèmes embarqués."
      },
      {
        "actorId": "mbda",
        "roleType": "Responsable de lot",
        "roleDescription": "Systèmes d'armes et missiles."
      },
      {
        "actorId": "framatome",
        "roleType": "Fournisseur",
        "roleDescription": "Composants circuits primaires, instrumentation et contrôle."
      },
      {
        "actorId": "orano",
        "roleType": "Fournisseur",
        "roleDescription": "Combustible nucléaire."
      },
      {
        "actorId": "dassault-aviation",
        "roleType": "Fournisseur",
        "roleDescription": "Aviation embarquée."
      },
      {
        "actorId": "arabelle-solutions",
        "roleType": "Sous-traitant",
        "roleDescription": "Conception et fabrication des turbines vapeur."
      },
      {
        "actorId": "general-atomics",
        "roleType": "Fournisseur",
        "roleDescription": "Catapulte électromagnétique."
      },
      {
        "actorId": "altrad-endel",
        "roleType": "Sous-traitant",
        "roleDescription": "Exemple de cible possible sur tuyauteries et fluides, lot non attribué dans les documents."
      },
      {
        "actorId": "foure-lagadec",
        "roleType": "Sous-traitant",
        "roleDescription": "Exemple de cible possible sur tuyauteries et fluides, lot non attribué dans les documents."
      }
    ],
    "skills": [
      "tuyauterie",
      "fluides",
      "HVAC",
      "ventilation",
      "mécano-soudure",
      "structure",
      "électricité",
      "câblage",
      "montage",
      "intégration d'équipements",
      "logistique industrielle",
      "turbines vapeur",
      "catapulte électromagnétique"
    ],
    "horizon": "Long terme",
    "status": "Programme sensible / lots partiellement non attribués",
    "opportunityLevel": "À qualifier",
    "commercialNotes": [
      "Plusieurs corps de métiers sont mentionnés mais sans attribution de lots.",
      "Secret défense sur les sous-traitants non connus."
    ],
    "recommendedProspectingAngle": "Qualifier les besoins métiers non attribués : tuyauterie, HVAC, mécano-soudure, électricité, montage, intégration et logistique."
  },
  {
    "id": "dissuasion-aetv",
    "name": "Dissuasion nucléaire / AETV",
    "domain": "Dissuasion nucléaire",
    "category": "Défense sensible",
    "description": "Projet AETV mentionné dans les documents sans informations détaillées.",
    "objectives": [
      "Non précisé dans les documents"
    ],
    "actors": [
      {
        "actorId": "cea",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Acteur recherche nucléaire/défense mentionné ; rôle précis AETV non précisé dans les documents."
      }
    ],
    "skills": [
      "Non précisé dans les documents"
    ],
    "horizon": "Projet sensible / limité",
    "status": "Information limitée / secret défense",
    "opportunityLevel": "À qualifier",
    "commercialNotes": [
      "Ne pas enrichir avec des informations non présentes.",
      "À traiter uniquement avec interlocuteurs habilités."
    ],
    "recommendedProspectingAngle": "Mention prudente uniquement : informations limitées / projet sensible."
  },
  {
    "id": "demantelement-fessenheim-chinon-bugey",
    "name": "Démantèlement nucléaire - Fessenheim, Chinon, Bugey et parc à venir",
    "domain": "Démantèlement nucléaire",
    "category": "Démantèlement",
    "description": "Démantèlement de sites après exploitation : retrait combustible, décontamination, découpe d'équipements, gestion des déchets et assainissement radiologique.",
    "objectives": [
      "Arrêt définitif et retrait du combustible",
      "Décontamination des circuits",
      "Découpe des équipements et démontage des structures, souvent avec robots en zones irradiées",
      "Tri, conditionnement et stockage via l'ANDRA",
      "Assainissement du site et remise en état"
    ],
    "actors": [
      {
        "actorId": "edf",
        "roleType": "Exploitant",
        "roleDescription": "Pilote le démantèlement des sites, définit les stratégies et finance."
      },
      {
        "actorId": "orano",
        "roleType": "Exploitant",
        "roleDescription": "Démantèle ses propres installations, expertise procédés et déchets."
      },
      {
        "actorId": "cea",
        "roleType": "Exploitant",
        "roleDescription": "Démantèlement de laboratoires et réacteurs expérimentaux."
      },
      {
        "actorId": "asn",
        "roleType": "Régulateur",
        "roleDescription": "Autorise les étapes, contrôle la sûreté et valide les méthodes."
      },
      {
        "actorId": "irsn",
        "roleType": "Régulateur",
        "roleDescription": "Analyse les risques et conseille l'ASN."
      },
      {
        "actorId": "andra",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Gestion et stockage des déchets radioactifs."
      },
      {
        "actorId": "assystem",
        "roleType": "AMO",
        "roleDescription": "Scénarios de démantèlement, spécifications sûreté/déchets, planning, coûts, risques, coordination multi-métiers."
      },
      {
        "actorId": "artelia",
        "roleType": "MOE",
        "roleDescription": "Études de conception et dimensionnement ventilation/fluides."
      },
      {
        "actorId": "egis",
        "roleType": "MOE",
        "roleDescription": "Gestion environnementale, impacts déchets et support exploitants."
      },
      {
        "actorId": "tractebel",
        "roleType": "MOE",
        "roleDescription": "Études de sûreté, architecture systèmes et conception d'installations complexes."
      },
      {
        "actorId": "orano-ds",
        "roleType": "Intégrateur",
        "roleDescription": "Solutions concrètes de découpe, traitement et démantèlement ; mentionné avec SPIE dans l'exemple démantèlement d'un circuit."
      },
      {
        "actorId": "onet-technologies",
        "roleType": "Intégrateur",
        "roleDescription": "Intervention en zones contrôlées, radioprotection, exécution terrain."
      },
      {
        "actorId": "spie-nucleaire",
        "roleType": "Intégrateur",
        "roleDescription": "Électricité, contrôle commande, déconnexion et mise en conformité avant démantèlement."
      },
      {
        "actorId": "framatome",
        "roleType": "Intégrateur",
        "roleDescription": "Équipements nucléaires, composants critiques, maintenance lourde et modifications."
      }
    ],
    "skills": [
      "sûreté nucléaire",
      "radioprotection",
      "gestion déchets",
      "robotique",
      "découpe sous immersion",
      "ventilation",
      "confinement",
      "PMO",
      "procédés",
      "décontamination",
      "assainissement radiologique",
      "traitement déchets",
      "coûts",
      "planning",
      "risques"
    ],
    "horizon": "Long terme",
    "status": "Programme long, délais très longs",
    "opportunityLevel": "Fort",
    "commercialNotes": [
      "Plus de 20 réacteurs à démanteler dans les années à venir selon les documents.",
      "Délais indiqués : 10 à 30 ans selon les opérations.",
      "Besoins récurrents en ingénierie, radioprotection, déchets, robotique et pilotage."
    ],
    "recommendedProspectingAngle": "Vendre des compétences sûreté, radioprotection, PMO, déchets, robotique, ventilation/confinement et support d'intégration terrain."
  },
  {
    "id": "grand-carenage",
    "name": "Grand carénage EDF",
    "domain": "Grand carénage",
    "category": "Maintenance lourde / prolongation de parc",
    "description": "Programme de prolongation des réacteurs nucléaires jusqu'à 50 ans et au-delà, avec sûreté, génie civil, HVAC, contrôle commande, travaux sismiques/incendies et remplacements d'équipements.",
    "objectives": [
      "Remplacement générateurs de vapeur",
      "Maintenance de cuve",
      "Rénovation des turbines",
      "Renforcement systèmes de secours",
      "Ajout DUS - Diesel Ultime Secours",
      "Amélioration du refroidissement",
      "Modernisation contrôle commande, instrumentation et systèmes électriques",
      "Travaux sismiques et incendies",
      "Remise à niveau HVAC",
      "Remplacement pompes primaires, robinetteries et pompes associées"
    ],
    "actors": [
      {
        "actorId": "edf",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Exploitant du parc et pilote du programme."
      },
      {
        "actorId": "assystem",
        "roleType": "AMO",
        "roleDescription": "Planification fine des arrêts, suivi avancement coûts/délais/risques, coordination entreprises et gestion modifications techniques."
      },
      {
        "actorId": "artelia",
        "roleType": "MOE",
        "roleDescription": "Conception circuits de tuyauteries/ventilations, dimensionnement débit/pression/thermique, PID, plans et notes de calculs."
      },
      {
        "actorId": "tractebel",
        "roleType": "MOE",
        "roleDescription": "Études de sûreté, architecture systèmes, analyse de risques."
      },
      {
        "actorId": "framatome",
        "roleType": "Fournisseur",
        "roleDescription": "Composants critiques, remplacement générateurs de vapeur, maintenance circuit primaire, équipements du cœur réacteur."
      },
      {
        "actorId": "orano",
        "roleType": "Fournisseur",
        "roleDescription": "Retrait et transport combustible, traitement combustible usé, déchets complexes."
      },
      {
        "actorId": "spie-nucleaire",
        "roleType": "Intégrateur",
        "roleDescription": "Électricité et contrôle commande, armoires électriques, tirage câble, mise à jour contrôle commande."
      },
      {
        "actorId": "actemium",
        "roleType": "Intégrateur",
        "roleDescription": "Automatisme, programmation, supervision et mise en service d'automates."
      },
      {
        "actorId": "onet-technologies",
        "roleType": "Intégrateur",
        "roleDescription": "Zone contrôlée, décontamination, maintenance sous radiation."
      },
      {
        "actorId": "altrad-endel",
        "roleType": "Sous-traitant",
        "roleDescription": "Démontage/remontage, tuyauterie, soudure, montage équipements."
      },
      {
        "actorId": "axima-nucleaire",
        "roleType": "Intégrateur",
        "roleDescription": "Ventilation, filtration, confinement radioactif."
      },
      {
        "actorId": "bouygues-construction",
        "roleType": "Sous-traitant",
        "roleDescription": "Génie civil : bâtiments DUS et renforcement structures existantes."
      },
      {
        "actorId": "vinci-construction",
        "roleType": "Sous-traitant",
        "roleDescription": "Génie civil : bâtiments DUS et renforcement structures existantes."
      },
      {
        "actorId": "ortec",
        "roleType": "Sous-traitant",
        "roleDescription": "Logistique, préparation interventions et support maintenance."
      }
    ],
    "skills": [
      "génie civil",
      "DUS",
      "sûreté nucléaire",
      "contrôle commande",
      "instrumentation",
      "systèmes électriques",
      "HVAC",
      "ventilation",
      "tuyauterie",
      "fluides",
      "automatisme",
      "maintenance",
      "radioprotection",
      "décontamination",
      "logistique industrielle",
      "PMO",
      "soudure",
      "turbines",
      "robinetterie"
    ],
    "horizon": "Long terme",
    "status": "Programme en cours jusqu'à 2035",
    "opportunityLevel": "Fort",
    "commercialNotes": [
      "56 réacteurs concernés jusqu'à 2035.",
      "Forte densité d'acteurs et d'arrêts de tranche : cible prioritaire pour foisonnement commercial."
    ],
    "recommendedProspectingAngle": "Prioriser EDF, Assystem, Framatome, Spie Nucléaire, Axima, Altrad Endel et les GC pour besoins récurrents en PMO, HVAC, électricité, tuyauterie, sûreté et logistique."
  },
  {
    "id": "epr-penly",
    "name": "EPR2 Penly",
    "domain": "EPR / EPR2",
    "category": "Nouveau réacteur",
    "description": "Chantier lancé de deux réacteurs EPR2 à Penly.",
    "objectives": [
      "Construction de 2 réacteurs de 1670 MWh indiqués dans les documents",
      "Mise en service visée 2038",
      "Travaux principaux 2024-2025 puis 12 ans de construction selon les documents"
    ],
    "actors": [
      {
        "actorId": "edf",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Pilotage des nouveaux projets EPR2."
      },
      {
        "actorId": "framatome",
        "roleType": "Fournisseur",
        "roleDescription": "Cuves, générateurs, combustible."
      },
      {
        "actorId": "orano",
        "roleType": "Fournisseur",
        "roleDescription": "Enrichissement et transport combustible."
      },
      {
        "actorId": "arabelle-solutions",
        "roleType": "Fournisseur",
        "roleDescription": "Turbines vapeur et alternateurs."
      },
      {
        "actorId": "assystem",
        "roleType": "AMO",
        "roleDescription": "Planification, suivi coûts/délais/risques, coordination et modifications techniques."
      },
      {
        "actorId": "egis",
        "roleType": "MOE",
        "roleDescription": "Maîtrise d'œuvre génie civil."
      },
      {
        "actorId": "bouygues",
        "roleType": "Sous-traitant",
        "roleDescription": "Génie civil, travaux lourds, bâtiment réacteur."
      },
      {
        "actorId": "eiffage",
        "roleType": "Sous-traitant",
        "roleDescription": "Génie civil, travaux lourds."
      },
      {
        "actorId": "vinci",
        "roleType": "Sous-traitant",
        "roleDescription": "Infrastructure industrielle."
      },
      {
        "actorId": "edvance",
        "roleType": "MOE",
        "roleDescription": "Conception / design du réacteur EPR2."
      }
    ],
    "skills": [
      "génie civil",
      "cuves",
      "générateurs vapeur",
      "combustible",
      "enrichissement",
      "transport combustible",
      "turbines vapeur",
      "alternateurs",
      "PMO",
      "coordination travaux",
      "sûreté nucléaire",
      "design réacteur"
    ],
    "horizon": "Long terme",
    "status": "Chantier lancé",
    "opportunityLevel": "Fort",
    "commercialNotes": [
      "Mise en service visée 2038.",
      "Budget indiqué dans les documents : 2,7 milliards d'euros.",
      "Grands volumes de génie civil et d'ingénierie sur durée longue."
    ],
    "recommendedProspectingAngle": "Cibler les lots génie civil, PMO, coordination chantier, sûreté, qualité, équipements critiques et interfaces industriels."
  },
  {
    "id": "epr-gravelines",
    "name": "EPR2 Gravelines",
    "domain": "EPR / EPR2",
    "category": "Nouveau réacteur planifié",
    "description": "Site planifié pour EPR2 ; acteurs non encore sélectionnés dans les documents.",
    "objectives": [
      "Construction prévue de réacteurs EPR nouvelle génération",
      "Acteurs à qualifier"
    ],
    "actors": [
      {
        "actorId": "edf",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Pilotage des nouveaux projets EPR2."
      }
    ],
    "skills": [
      "génie civil",
      "sûreté nucléaire",
      "HVAC",
      "contrôle commande",
      "électricité",
      "PMO",
      "tuyauterie",
      "procédés"
    ],
    "horizon": "Long terme",
    "status": "Planifié, chantier pas encore lancé",
    "opportunityLevel": "Fort",
    "commercialNotes": [
      "Acteurs pas encore sélectionnés selon les documents.",
      "Fenêtre commerciale intéressante pour qualification amont."
    ],
    "recommendedProspectingAngle": "Se positionner tôt auprès d'EDF, Edvance, ingénieries et grands GC avant attribution des lots."
  },
  {
    "id": "epr-bugey",
    "name": "EPR2 Bugey",
    "domain": "EPR / EPR2",
    "category": "Nouveau réacteur planifié",
    "description": "Site planifié pour EPR2 ; acteurs non encore sélectionnés dans les documents.",
    "objectives": [
      "Construction prévue de réacteurs EPR nouvelle génération",
      "Acteurs à qualifier"
    ],
    "actors": [
      {
        "actorId": "edf",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Pilotage des nouveaux projets EPR2."
      }
    ],
    "skills": [
      "génie civil",
      "sûreté nucléaire",
      "HVAC",
      "contrôle commande",
      "électricité",
      "PMO",
      "tuyauterie",
      "procédés"
    ],
    "horizon": "Long terme",
    "status": "Planifié, chantier pas encore lancé",
    "opportunityLevel": "Fort",
    "commercialNotes": [
      "Acteurs pas encore sélectionnés selon les documents.",
      "Bugey est également cité dans le démantèlement de réacteurs à venir."
    ],
    "recommendedProspectingAngle": "Qualifier à la fois les besoins nouveaux EPR2 et les opportunités autour du parc existant/démantèlement."
  },
  {
    "id": "flamanville-3",
    "name": "Flamanville 3 / EPR2 Flamanville - finalisation et essais",
    "domain": "EPR / EPR2",
    "category": "Finalisation / essais",
    "description": "Finalisation des travaux à Flamanville 3 : mise en service nucléaire, contrôle commande, qualification des équipements primaires, systèmes auxiliaires et essais chauds/froids.",
    "objectives": [
      "Mise en service nucléaire",
      "Finalisation contrôle commande",
      "Qualification équipements primaires",
      "Réglage systèmes auxiliaires",
      "Essais chauds et froids"
    ],
    "actors": [
      {
        "actorId": "assystem",
        "roleType": "MOE",
        "roleDescription": "Études systèmes, sûreté, HVAC, mécanique, supervision technique de chantier, support commissioning."
      },
      {
        "actorId": "egis",
        "roleType": "MOE",
        "roleDescription": "Génie civil, design et analyse des structures, BIM, coordination technique eau/bâtiment."
      },
      {
        "actorId": "tractebel",
        "roleType": "MOE",
        "roleDescription": "Études sûreté, systèmes et calculs d'ingénierie, support design EPR."
      },
      {
        "actorId": "onet-technologies",
        "roleType": "Intégrateur",
        "roleDescription": "Ingénierie installation nucléaire, préparation intervention, support essais, qualification équipements."
      },
      {
        "actorId": "nuvia",
        "roleType": "Sous-traitant",
        "roleDescription": "Radioprotection chantier, contrôle qualité et essais, mesures et contrôles."
      },
      {
        "actorId": "bouygues-construction-expertises-nucleaires",
        "roleType": "Sous-traitant",
        "roleDescription": "Génie civil principal bâtiment réacteur et bâtiment combustible, bétons, ferraillages, cuves et enceintes."
      },
      {
        "actorId": "vinci",
        "roleType": "Intégrateur",
        "roleDescription": "Via Cegelec, Spie Nucléaire et Actemium : câblage, installation électrique, installation et CVC nucléaire, essais."
      },
      {
        "actorId": "framatome",
        "roleType": "Fournisseur",
        "roleDescription": "Assemblage cuve réacteur, circuit primaire, contrôle commande, combustibles."
      },
      {
        "actorId": "altrad-endel",
        "roleType": "Sous-traitant",
        "roleDescription": "Tuyauterie nucléaire, robinetterie, montage mécanique, support essais."
      },
      {
        "actorId": "cea",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Maîtrise d'ouvrage mentionnée dans les documents."
      }
    ],
    "skills": [
      "commissioning",
      "essais",
      "contrôle commande",
      "HVAC",
      "mécanique",
      "génie civil",
      "BIM",
      "sûreté nucléaire",
      "radioprotection",
      "qualité",
      "câblage",
      "électricité",
      "CVC nucléaire",
      "tuyauterie",
      "robinetterie",
      "combustible"
    ],
    "horizon": "Court terme",
    "status": "Finalisation / essais",
    "opportunityLevel": "Moyen",
    "commercialNotes": [
      "Opportunités orientées support essais, qualification, contrôle qualité, mise en service et reprises techniques."
    ],
    "recommendedProspectingAngle": "Proposer profils essais/commissioning, contrôle qualité, radioprotection chantier, HVAC/CVC, contrôle commande et support installation."
  },
  {
    "id": "rjh",
    "name": "RJH - Réacteur Jules Horowitz",
    "domain": "Recherche nucléaire / RJH",
    "category": "Réacteur de recherche",
    "description": "Réacteur de recherche à eau sous pression de 100 MW destiné aux essais combustibles, matériaux irradiés, radioéléments médicaux, sûreté et prolongation du parc.",
    "objectives": [
      "Tester combustibles nucléaires actuels et futurs",
      "Qualifier matériaux soumis à irradiation",
      "Produire des radioéléments pour médecine nucléaire",
      "Soutenir la sûreté et la prolongation du parc nucléaire"
    ],
    "actors": [
      {
        "actorId": "cea",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Acteur recherche nucléaire, fusion et démantèlement."
      },
      {
        "actorId": "technic-atome",
        "roleType": "MOE",
        "roleDescription": "Conception et réalisation des composants principaux du bloc pile du réacteur."
      },
      {
        "actorId": "framatome",
        "roleType": "MOE",
        "roleDescription": "Construction et essais systèmes, préparation essais d'ensemble, capacités d'irradiation et études combustibles."
      },
      {
        "actorId": "edf",
        "roleType": "Financeur",
        "roleDescription": "Financeur et utilisateur de l'infrastructure."
      },
      {
        "actorId": "orano",
        "roleType": "Financeur",
        "roleDescription": "Financeur et utilisateur de l'infrastructure."
      },
      {
        "actorId": "assystem",
        "roleType": "AMO",
        "roleDescription": "Assistance à maîtrise d'œuvre, études détaillées GC, visas, plans, notes de calculs, transformation digitale SI projet."
      },
      {
        "actorId": "vinci-energies",
        "roleType": "Sous-traitant",
        "roleDescription": "Conception et réalisation des piscines nucléaires."
      },
      {
        "actorId": "cegelec",
        "roleType": "Sous-traitant",
        "roleDescription": "Fabrication du liner."
      },
      {
        "actorId": "boccard",
        "roleType": "Sous-traitant",
        "roleDescription": "Systèmes fluides, tuyauteries de refroidissement et utilités."
      },
      {
        "actorId": "axima-nucleaire",
        "roleType": "Sous-traitant",
        "roleDescription": "Ingénierie nucléaire et travaux tuyauterie/ventilation, systèmes de sûreté."
      },
      {
        "actorId": "fives-nordon",
        "roleType": "Sous-traitant",
        "roleDescription": "Tuyauterie industrielle, support et ligne de ventilation."
      },
      {
        "actorId": "acepp",
        "roleType": "Sous-traitant",
        "roleDescription": "Essais et data."
      },
      {
        "actorId": "reel",
        "roleType": "Industriel fabricant",
        "roleDescription": "Exemple de système de levage cité dans la consigne commerciale."
      }
    ],
    "skills": [
      "combustible",
      "matériaux irradiés",
      "radioéléments médicaux",
      "sûreté nucléaire",
      "génie civil",
      "piscines nucléaires",
      "liner",
      "fluides",
      "tuyauterie refroidissement",
      "ventilation",
      "essais",
      "data",
      "levage",
      "PMO",
      "transformation digitale"
    ],
    "horizon": "Moyen terme",
    "status": "Projet de recherche majeur",
    "opportunityLevel": "Fort",
    "commercialNotes": [
      "Projet utile pour comptes CEA, TechnicAtome, Framatome, Assystem, Vinci Energies et fabricants d'outils.",
      "La consigne cite REEL comme exemple d'industriel fabricant de systèmes de levage."
    ],
    "recommendedProspectingAngle": "Cibler essais, data, tuyauterie, ventilation, fluides, levage, GC et support digital/PMO."
  },
  {
    "id": "iter",
    "name": "ITER - Cadarache",
    "domain": "Fusion / ITER",
    "category": "Fusion nucléaire",
    "description": "Projet de fusion nucléaire sur le site de Cadarache : bâtiments Tokamak, mécanique complexe, grandes pièces, réseaux hydrauliques et traitement des déchets.",
    "objectives": [
      "Construire et intégrer le bâtiment Tokamak",
      "Gérer des composants internationaux de grandes dimensions",
      "Intégrer mécanique complexe, aimants, systèmes cryogéniques, systèmes de vide et tritium"
    ],
    "actors": [
      {
        "actorId": "cea",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Acteur français mentionné sur ITER et Cadarache."
      },
      {
        "actorId": "daher",
        "roleType": "Sous-traitant",
        "roleDescription": "Logistique, stockage, gestion composants sites Cadarache et port Saint-Louis, planification flux internationaux."
      },
      {
        "actorId": "egis",
        "roleType": "MOE",
        "roleDescription": "En groupement avec Assystem : BIM, modélisation, coordination bâtiments et infrastructures."
      },
      {
        "actorId": "assystem",
        "roleType": "MOE",
        "roleDescription": "Aux côtés d'Egis et Impressarios dans le consortium B.NEX."
      },
      {
        "actorId": "impressarios",
        "roleType": "MOE",
        "roleDescription": "Mentionné aux côtés d'Egis et Assystem dans le consortium B.NEX ; détail du lot non précisé dans les documents."
      },
      {
        "actorId": "bnex",
        "roleType": "MOE",
        "roleDescription": "Consortium B.NEX mentionné pour ITER."
      },
      {
        "actorId": "cnim",
        "roleType": "Industriel fabricant",
        "roleDescription": "Équipements spécifiques Tokamak, structures mécaniques complexes, port plug structures, anneaux de pré-compression, usinage haute exigence."
      },
      {
        "actorId": "gdes-revanti",
        "roleType": "Sous-traitant",
        "roleDescription": "Revêtements haute performance résistants chimique, anticontamination, décontaminables."
      },
      {
        "actorId": "dalkia",
        "roleType": "Sous-traitant",
        "roleDescription": "Groupement avec Veolia : maintenance et exploitation réseaux hydrauliques, surveillance traitement déchets."
      },
      {
        "actorId": "veolia",
        "roleType": "Sous-traitant",
        "roleDescription": "Groupement avec Dalkia sur contrat Fusion for Energy."
      },
      {
        "actorId": "fusion-for-energy",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Contrat F4E pour Dalkia/Veolia."
      }
    ],
    "skills": [
      "logistique industrielle",
      "BIM",
      "bâtiments",
      "infrastructures",
      "Tokamak",
      "mécanique complexe",
      "usinage haute exigence",
      "revêtements",
      "réseaux hydrauliques",
      "traitement déchets",
      "cryogénie",
      "vide",
      "tritium",
      "manutention"
    ],
    "horizon": "Long terme",
    "status": "Projet majeur en cours",
    "opportunityLevel": "Fort",
    "commercialNotes": [
      "Projet structurant pour Cadarache et comptes CEA, Daher, Egis, Assystem, Dalkia, Veolia, CNIM.",
      "Opportunités fortes sur logistique, BIM, mécanique complexe et exploitation réseaux."
    ],
    "recommendedProspectingAngle": "Préparer offres sur logistique grand gabarit, BIM, coordination infrastructures, mécanique complexe, maintenance réseaux et traitement déchets."
  },
  {
    "id": "cycle-combustible-orano",
    "name": "Cycle du combustible Orano - Tricastin, La Hague, Marcoule/Melox",
    "domain": "Cycle du combustible",
    "category": "Combustible",
    "description": "Cycle combustible géré par Orano : extraction uranium, conversion, enrichissement, fabrication, utilisation et recyclage.",
    "objectives": [
      "Extraction uranium",
      "Conversion en gaz sur Tricastin et Malvési",
      "Enrichissement U235",
      "Fabrication des assemblages combustibles",
      "Utilisation du combustible en centrales",
      "Recyclage à La Hague",
      "Fabrication MOX à Marcoule/Melox"
    ],
    "actors": [
      {
        "actorId": "orano",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Cycle combustible, extraction, conversion, enrichissement, retraitement, recyclage et démantèlement."
      },
      {
        "actorId": "edf",
        "roleType": "Utilisateur",
        "roleDescription": "Utilisation combustible dans les centrales."
      },
      {
        "actorId": "framatome",
        "roleType": "Fournisseur",
        "roleDescription": "Combustible et composants nucléaires associés dans l'écosystème."
      }
    ],
    "skills": [
      "extraction uranium",
      "conversion",
      "enrichissement",
      "fabrication combustible",
      "recyclage",
      "retraitement",
      "procédés chimiques",
      "ventilation nucléaire",
      "revamping",
      "manutention",
      "automatisation",
      "déchets",
      "MOX",
      "U235"
    ],
    "horizon": "Long terme",
    "status": "Activité industrielle récurrente avec modernisation ateliers",
    "opportunityLevel": "Fort",
    "commercialNotes": [
      "Sites cités : Tricastin, La Hague, Marcoule/Melox, Malvési pour conversion.",
      "Opportunités sur modernisation, ventilation, revamping procédés chimiques, manutention et automatisation."
    ],
    "recommendedProspectingAngle": "Cibler Orano sur procédés, ventilation nucléaire, revamping, automatisation, manutention et support déchets."
  },
  {
    "id": "cigeo",
    "name": "CIGEO - stockage profond des déchets radioactifs",
    "domain": "Déchets radioactifs / CIGEO",
    "category": "Déchets radioactifs",
    "description": "Projet ANDRA de stockage profond des déchets radioactifs : galeries souterraines, ventilation/extraction, robotique, conditionnement déchets, puits et tunnels.",
    "objectives": [
      "Construire galeries souterraines",
      "Installer ventilation et extraction",
      "Déployer manutention robotisée",
      "Conditionner les déchets",
      "Sécuriser puits et tunnels",
      "Assurer sûreté et confinement long terme"
    ],
    "actors": [
      {
        "actorId": "andra",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Gestion déchets radioactifs et pilotage CIGEO."
      },
      {
        "actorId": "edf",
        "roleType": "Financeur",
        "roleDescription": "Financeur/actionnaire du projet."
      },
      {
        "actorId": "orano",
        "roleType": "Financeur",
        "roleDescription": "Financeur/actionnaire et expertise colis déchets."
      },
      {
        "actorId": "cea",
        "roleType": "Financeur",
        "roleDescription": "Financeur/actionnaire."
      },
      {
        "actorId": "egis",
        "roleType": "MOE",
        "roleDescription": "MOE et ingénierie ouvrages de surface, GC, VRD, plateformes industrielles, contraintes nucléaires."
      },
      {
        "actorId": "artelia",
        "roleType": "MOE",
        "roleDescription": "Bâtiments industriels, systèmes énergétiques, lots CVC, confinement, interface MEP-sûreté-exploitation."
      },
      {
        "actorId": "vinci",
        "roleType": "Sous-traitant",
        "roleDescription": "GC nucléaire, ouvrages complexes, surface nucléaire, bétons spéciaux, GC profond, méthodes sous contrainte ASN."
      },
      {
        "actorId": "bouygues",
        "roleType": "Sous-traitant",
        "roleDescription": "Ouvrages spéciaux, GC forte technicité, puits d'accès, structures profondes, soutènement."
      },
      {
        "actorId": "eiffage",
        "roleType": "Sous-traitant",
        "roleDescription": "GC industriel longue durée, ouvrages béton et bâtiments d'exploitation."
      },
      {
        "actorId": "nge",
        "roleType": "Sous-traitant",
        "roleDescription": "Terrassement, GC souterrain, galeries, soutènement, béton projeté, logistique et accès chantier."
      },
      {
        "actorId": "herrenknecht",
        "roleType": "Industriel fabricant",
        "roleDescription": "Fabricant de tunnelier spécialisé dans l'argile."
      },
      {
        "actorId": "equans",
        "roleType": "Intégrateur",
        "roleDescription": "CVC nucléaire, confinement, filtration et redondances."
      },
      {
        "actorId": "spie",
        "roleType": "Intégrateur",
        "roleDescription": "Électricité industrielle, automatisme et contrôle commande."
      },
      {
        "actorId": "altrad-endel",
        "roleType": "Sous-traitant",
        "roleDescription": "Services industriels, équipements mécaniques, structures mécaniques, appui exploitation/maintenance nucléaire."
      },
      {
        "actorId": "fives",
        "roleType": "Industriel fabricant",
        "roleDescription": "Convoyeurs lourds et manutention automatisée."
      },
      {
        "actorId": "orano",
        "roleType": "Intégrateur",
        "roleDescription": "Expertise colis déchets et conformité installation CIGEO."
      },
      {
        "actorId": "assystem",
        "roleType": "AMO",
        "roleDescription": "Pilotage projet, interfaces, exigences réglementaires, planning, coûts, risques, instruction réglementaire, dossiers sûreté."
      },
      {
        "actorId": "tractebel",
        "roleType": "MOE",
        "roleDescription": "Sûreté, ventilation, confinement, installations électriques, géotechnique, comportement long terme, appui technique à l'ANDRA."
      }
    ],
    "skills": [
      "galeries",
      "ventilation",
      "extraction",
      "robotique",
      "conditionnement déchets",
      "puits",
      "tunnels",
      "sûreté nucléaire",
      "confinement",
      "CVC",
      "électricité",
      "automatisme",
      "génie civil",
      "VRD",
      "géotechnique",
      "soutènement",
      "béton projeté",
      "tunnelier",
      "manutention automatisée",
      "dossiers de sûreté",
      "réglementaire"
    ],
    "horizon": "Long terme",
    "status": "Projet long terme",
    "opportunityLevel": "Fort",
    "commercialNotes": [
      "Très forte variété de lots : GC, souterrain, CVC, électricité, automatisme, robotique, manutention, sûreté et réglementaire.",
      "Projet prioritaire pour comptes ANDRA, Egis, Artelia, Vinci, Bouygues, Equans, Spie, Fives, Assystem, Tractebel."
    ],
    "recommendedProspectingAngle": "Structurer une offre par lots : GC profond, CVC/confinement, automatisme, manutention/robotique, réglementaire et sûreté long terme."
  },
  {
    "id": "nuward",
    "name": "Nuward - SMR EDF x TechnicAtome",
    "domain": "SMR / réacteurs innovants",
    "category": "SMR",
    "description": "Projet de SMR Nuward en joint venture EDF x TechnicAtome, deux réacteurs à eau pressurisée de 2 x 170 MW.",
    "objectives": [
      "Concevoir un SMR à eau pressurisée",
      "Développer deux réacteurs par centrale",
      "Mise sur le marché prévue pour 2030 selon les documents"
    ],
    "actors": [
      {
        "actorId": "edf",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Joint venture Nuward avec TechnicAtome."
      },
      {
        "actorId": "technic-atome",
        "roleType": "MOE",
        "roleDescription": "Joint venture Nuward avec EDF."
      }
    ],
    "skills": [
      "SMR",
      "réacteur à eau pressurisée",
      "cœur réacteur",
      "neutronique",
      "thermomécanique",
      "sûreté",
      "layout",
      "installations",
      "maquettes",
      "prototypes",
      "contrôle commande"
    ],
    "horizon": "Moyen terme",
    "status": "Marché émergent / horizon 2030 mentionné",
    "opportunityLevel": "À qualifier",
    "commercialNotes": [
      "Marché émergent : données encore limitées dans les documents.",
      "Opportunités amont sur ingénierie, sûreté, maquettes, prototypes et layout."
    ],
    "recommendedProspectingAngle": "Se positionner tôt sur ingénierie amont, sûreté, layout, prototypage, contrôle commande et industrialisation."
  },
  {
    "id": "reacteurs-innovants",
    "name": "Réacteurs innovants - cartographie Servir 2040",
    "domain": "SMR / réacteurs innovants",
    "category": "Réacteurs innovants",
    "description": "Liste d'entreprises SMR/réacteurs innovants mentionnées comme à analyser dans une cartographie Servir 2040.",
    "objectives": [
      "Identifier les acteurs émergents",
      "Qualifier conception cœurs, neutronique, thermomécanique, sûreté, layout, maquettes et prototypes"
    ],
    "actors": [
      {
        "actorId": "renaissance-fusion",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Entreprise réacteurs/fusion innovants à qualifier."
      },
      {
        "actorId": "stellaria",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Entreprise réacteurs innovants à qualifier."
      },
      {
        "actorId": "taranis",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Entreprise réacteurs innovants à qualifier."
      },
      {
        "actorId": "thorizon",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Entreprise réacteurs innovants à qualifier."
      },
      {
        "actorId": "xmar",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Entreprise réacteurs innovants à qualifier."
      },
      {
        "actorId": "blue-capsule",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Entreprise réacteurs innovants à qualifier."
      },
      {
        "actorId": "calogena",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Entreprise réacteurs innovants à qualifier."
      },
      {
        "actorId": "hexana",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Entreprise réacteurs innovants à qualifier."
      },
      {
        "actorId": "jimmy-energy",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Entreprise réacteurs innovants à qualifier."
      },
      {
        "actorId": "newcleo",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Entreprise réacteurs innovants à qualifier."
      },
      {
        "actorId": "otrera-nuclear-energy",
        "roleType": "Donneur d'ordre / MOA",
        "roleDescription": "Entreprise réacteurs innovants à qualifier."
      }
    ],
    "skills": [
      "réacteurs innovants",
      "conception cœur",
      "neutronique",
      "thermomécanique",
      "sûreté",
      "layout",
      "installations",
      "maquettes",
      "prototypes"
    ],
    "horizon": "Moyen terme",
    "status": "Marché émergent à qualifier",
    "opportunityLevel": "À qualifier",
    "commercialNotes": [
      "Les documents ne détaillent pas les rôles individuels de ces entreprises.",
      "À qualifier via veille commerciale et rendez-vous discovery."
    ],
    "recommendedProspectingAngle": "Construire une approche discovery sur besoins d'ingénierie, sûreté, simulation, maquettes et industrialisation."
  }
];

export const actors: Actor[] = [
  {
    "id": "edf",
    "name": "EDF",
    "actorTypes": [
      "Donneur d'ordre / MOA",
      "Exploitant",
      "Financeur",
      "Utilisateur",
      "Compte prioritaire"
    ],
    "domains": [
      "Nucléaire civil",
      "Grand carénage",
      "EPR / EPR2",
      "Recherche nucléaire / RJH",
      "Déchets radioactifs / CIGEO",
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "exploitation réacteurs",
      "pilotage EPR2",
      "démantèlement sites",
      "financement infrastructures",
      "utilisation RJH",
      "grand carénage"
    ],
    "relatedProjects": [
      "grand-carenage",
      "epr-penly",
      "epr-gravelines",
      "epr-bugey",
      "rjh",
      "cigeo",
      "nuward",
      "demantelement-fessenheim-chinon-bugey"
    ],
    "subsidiariesOrRelatedEntities": [
      "Edvance",
      "Cyclife",
      "Framatome mentionnée comme acteur majeur lié à l'écosystème EDF"
    ],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé dans la consigne.",
      "Zoom demandé sur EDF et ses filiales / entités liées."
    ]
  },
  {
    "id": "framatome",
    "name": "Framatome",
    "actorTypes": [
      "Fournisseur",
      "Intégrateur",
      "MOE",
      "Compte prioritaire"
    ],
    "domains": [
      "Défense / propulsion navale",
      "Grand carénage",
      "EPR / EPR2",
      "Recherche nucléaire / RJH",
      "Cycle du combustible"
    ],
    "specialties": [
      "cuves",
      "générateurs de vapeur",
      "circuit primaire",
      "combustible",
      "instrumentation",
      "contrôle commande",
      "composants critiques",
      "essais systèmes"
    ],
    "relatedProjects": [
      "s3g",
      "sna",
      "pang",
      "grand-carenage",
      "epr-penly",
      "flamanville-3",
      "rjh",
      "cycle-combustible-orano"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Très présent sur équipements critiques, combustible et EPR/RJH."
    ]
  },
  {
    "id": "orano",
    "name": "Orano",
    "actorTypes": [
      "Donneur d'ordre / MOA",
      "Exploitant",
      "Fournisseur",
      "Intégrateur",
      "Financeur",
      "Compte prioritaire"
    ],
    "domains": [
      "Nucléaire civil",
      "Cycle du combustible",
      "Grand carénage",
      "Démantèlement nucléaire",
      "Déchets radioactifs / CIGEO",
      "Recherche nucléaire / RJH",
      "Défense / propulsion navale"
    ],
    "specialties": [
      "cycle combustible",
      "extraction uranium",
      "conversion",
      "enrichissement",
      "retraitement",
      "recyclage",
      "déchets",
      "procédés",
      "robotique démantèlement",
      "combustible nucléaire"
    ],
    "relatedProjects": [
      "s3g",
      "sna",
      "pang",
      "demantelement-fessenheim-chinon-bugey",
      "grand-carenage",
      "epr-penly",
      "rjh",
      "cycle-combustible-orano",
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [
      "Orano DS"
    ],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Très fort potentiel sur procédés, déchets, ventilation nucléaire, revamping et automatisation."
    ]
  },
  {
    "id": "orano-ds",
    "name": "Orano DS",
    "actorTypes": [
      "Intégrateur",
      "Sous-traitant"
    ],
    "domains": [
      "Démantèlement nucléaire"
    ],
    "specialties": [
      "découpe",
      "traitement",
      "démantèlement terrain",
      "robotique",
      "déchets"
    ],
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Mentionné dans l'exemple concret de démantèlement d'un circuit avec SPIE."
    ]
  },
  {
    "id": "cea",
    "name": "CEA",
    "actorTypes": [
      "Donneur d'ordre / MOA",
      "Exploitant",
      "Financeur",
      "Compte prioritaire"
    ],
    "domains": [
      "Défense / propulsion navale",
      "Recherche nucléaire / RJH",
      "Fusion / ITER",
      "Démantèlement nucléaire",
      "Déchets radioactifs / CIGEO",
      "Dissuasion nucléaire"
    ],
    "specialties": [
      "recherche nucléaire",
      "fusion",
      "démantèlement",
      "réacteurs expérimentaux",
      "sûreté",
      "financement"
    ],
    "relatedProjects": [
      "res",
      "demantelement-fessenheim-chinon-bugey",
      "flamanville-3",
      "rjh",
      "iter",
      "cigeo",
      "dissuasion-aetv"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Rôle cité sur recherche, fusion, démantèlement, RJH, ITER, CIGEO et projet sensible AETV."
    ]
  },
  {
    "id": "technic-atome",
    "name": "TechnicAtome",
    "actorTypes": [
      "Donneur d'ordre / MOA",
      "AMO",
      "MOE",
      "Compte prioritaire"
    ],
    "domains": [
      "Défense / propulsion navale",
      "Recherche nucléaire / RJH",
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "réacteurs nucléaires compacts",
      "propulsion nucléaire navale",
      "chaufferies",
      "bloc pile RJH",
      "SMR"
    ],
    "relatedProjects": [
      "res",
      "s3g",
      "sna",
      "pang",
      "rjh",
      "nuward"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Acteur central défense/propulsion et Nuward."
    ]
  },
  {
    "id": "naval-group",
    "name": "Naval Group",
    "actorTypes": [
      "MOE",
      "Compte prioritaire"
    ],
    "domains": [
      "Défense / propulsion navale"
    ],
    "specialties": [
      "conception navale",
      "production",
      "maintenance",
      "démantèlement sous-marins nucléaires",
      "porte-avion"
    ],
    "relatedProjects": [
      "s3g",
      "sna",
      "pang"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Maîtrise d'œuvre globale des programmes navals nucléaires."
    ]
  },
  {
    "id": "dga",
    "name": "DGA",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "Défense / propulsion navale"
    ],
    "specialties": [
      "programmes défense",
      "maîtrise d'ouvrage publique"
    ],
    "relatedProjects": [
      "res"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Rôle précis par projet non détaillé hors mention dans les donneurs d'ordre défense."
    ]
  },
  {
    "id": "thales",
    "name": "Thales",
    "actorTypes": [
      "Responsable de lot"
    ],
    "domains": [
      "Défense / propulsion navale"
    ],
    "specialties": [
      "sonars",
      "détection",
      "électronique",
      "systèmes embarqués"
    ],
    "relatedProjects": [
      "s3g",
      "sna",
      "pang"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Responsable de lots systèmes de détection/sonars."
    ]
  },
  {
    "id": "mbda",
    "name": "MBDA",
    "actorTypes": [
      "Responsable de lot"
    ],
    "domains": [
      "Défense / propulsion navale"
    ],
    "specialties": [
      "systèmes d'armes",
      "missiles",
      "intégration M51"
    ],
    "relatedProjects": [
      "s3g",
      "sna",
      "pang"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Cible potentielle sur intégration et systèmes embarqués, sous contraintes défense."
    ]
  },
  {
    "id": "arianegroup",
    "name": "ArianeGroup",
    "actorTypes": [
      "Responsable de lot"
    ],
    "domains": [
      "Défense / propulsion navale"
    ],
    "specialties": [
      "missiles M51",
      "conception missile",
      "fabrication missile"
    ],
    "relatedProjects": [
      "s3g"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Rôle missile M51 cité pour S3G."
    ]
  },
  {
    "id": "thermodyn-ge",
    "name": "ThermoDyn / GE",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Défense / propulsion navale"
    ],
    "specialties": [
      "turbines vapeur"
    ],
    "relatedProjects": [
      "s3g",
      "sna"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Turbines vapeur pour propulsion navale."
    ]
  },
  {
    "id": "chantiers-atlantique",
    "name": "Chantiers de l'Atlantique",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Défense / propulsion navale"
    ],
    "specialties": [
      "construction coque",
      "assemblage navire",
      "construction navale"
    ],
    "relatedProjects": [
      "pang"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Acteur coque et assemblage PANG."
    ]
  },
  {
    "id": "dassault-aviation",
    "name": "Dassault Aviation",
    "actorTypes": [
      "Fournisseur"
    ],
    "domains": [
      "Défense / propulsion navale"
    ],
    "specialties": [
      "aviation embarquée"
    ],
    "relatedProjects": [
      "pang"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Fournisseur aviation embarquée sur PANG."
    ]
  },
  {
    "id": "arabelle-solutions",
    "name": "Arabelle Solutions",
    "actorTypes": [
      "Fournisseur",
      "Sous-traitant"
    ],
    "domains": [
      "Défense / propulsion navale",
      "EPR / EPR2"
    ],
    "specialties": [
      "turbines vapeur",
      "alternateurs"
    ],
    "relatedProjects": [
      "pang",
      "epr-penly"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte technique important pour turbines vapeur et alternateurs."
    ]
  },
  {
    "id": "general-atomics",
    "name": "General Atomics",
    "actorTypes": [
      "Fournisseur"
    ],
    "domains": [
      "Défense / propulsion navale"
    ],
    "specialties": [
      "catapulte électromagnétique"
    ],
    "relatedProjects": [
      "pang"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Fournisseur cité pour catapulte électromagnétique PANG."
    ]
  },
  {
    "id": "assystem",
    "name": "Assystem",
    "actorTypes": [
      "AMO",
      "MOE",
      "Compte prioritaire"
    ],
    "domains": [
      "Démantèlement nucléaire",
      "Grand carénage",
      "EPR / EPR2",
      "Recherche nucléaire / RJH",
      "Fusion / ITER",
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "ingénierie système",
      "PMO",
      "sûreté",
      "déchets",
      "planning",
      "coûts",
      "risques",
      "coordination multi-métiers",
      "BIM en groupement",
      "digital projet"
    ],
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey",
      "grand-carenage",
      "epr-penly",
      "flamanville-3",
      "rjh",
      "iter",
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Très présent sur AMO/MOE, PMO, sûreté, EPR, RJH, ITER, CIGEO et démantèlement."
    ]
  },
  {
    "id": "artelia",
    "name": "Artelia",
    "actorTypes": [
      "MOE"
    ],
    "domains": [
      "Démantèlement nucléaire",
      "Grand carénage",
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "ventilation",
      "fluides",
      "CVC",
      "dimensionnement",
      "bâtiments industriels",
      "systèmes énergétiques",
      "confinement"
    ],
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey",
      "grand-carenage",
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Ingénierie à cibler sur lots ventilation/fluides/CVC/confinement."
    ]
  },
  {
    "id": "egis",
    "name": "Egis",
    "actorTypes": [
      "MOE",
      "Compte prioritaire"
    ],
    "domains": [
      "Démantèlement nucléaire",
      "EPR / EPR2",
      "Fusion / ITER",
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "génie civil",
      "BIM",
      "VRD",
      "ouvrages de surface",
      "gestion environnementale",
      "coordination infrastructures"
    ],
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey",
      "epr-penly",
      "flamanville-3",
      "iter",
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Positionné sur EPR Penly, Flamanville, ITER, CIGEO et démantèlement."
    ]
  },
  {
    "id": "tractebel",
    "name": "Tractebel",
    "actorTypes": [
      "MOE",
      "Compte prioritaire"
    ],
    "domains": [
      "Démantèlement nucléaire",
      "Grand carénage",
      "EPR / EPR2",
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "sûreté",
      "architecture systèmes",
      "risques",
      "calculs d'ingénierie",
      "géotechnique",
      "comportement long terme"
    ],
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey",
      "grand-carenage",
      "flamanville-3",
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Très orienté sûreté, systèmes et études long terme."
    ]
  },
  {
    "id": "onet-technologies",
    "name": "Onet Technologies",
    "actorTypes": [
      "Intégrateur",
      "Compte prioritaire"
    ],
    "domains": [
      "Démantèlement nucléaire",
      "Grand carénage",
      "EPR / EPR2"
    ],
    "specialties": [
      "zone contrôlée",
      "radioprotection",
      "décontamination",
      "maintenance sous radiation",
      "exécution terrain",
      "qualification équipements"
    ],
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey",
      "grand-carenage",
      "flamanville-3"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Très bon compte terrain/exploitation en zone contrôlée."
    ]
  },
  {
    "id": "spie-nucleaire",
    "name": "Spie Nucléaire",
    "actorTypes": [
      "Intégrateur",
      "Compte prioritaire"
    ],
    "domains": [
      "Démantèlement nucléaire",
      "Grand carénage",
      "EPR / EPR2"
    ],
    "specialties": [
      "électricité",
      "contrôle commande",
      "déconnexion systèmes",
      "mise en conformité",
      "armoires électriques",
      "tirage câble"
    ],
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey",
      "grand-carenage",
      "flamanville-3"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte prioritaire demandé sous Spie/Spie Nucléaire."
    ]
  },
  {
    "id": "spie",
    "name": "Spie",
    "actorTypes": [
      "Intégrateur",
      "Compte prioritaire"
    ],
    "domains": [
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "électricité industrielle",
      "automatisme",
      "contrôle commande",
      "systèmes complexes"
    ],
    "relatedProjects": [
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Cible CIGEO sur électricité, automatisme et contrôle commande."
    ]
  },
  {
    "id": "actemium",
    "name": "Actemium",
    "actorTypes": [
      "Intégrateur"
    ],
    "domains": [
      "Grand carénage",
      "EPR / EPR2"
    ],
    "specialties": [
      "automatisme",
      "programmation",
      "supervision",
      "mise en service automate",
      "câblage"
    ],
    "relatedProjects": [
      "grand-carenage",
      "flamanville-3"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Entité citée sur automatismes et via Vinci à Flamanville."
    ]
  },
  {
    "id": "altrad-endel",
    "name": "Altrad Endel / Altrad",
    "actorTypes": [
      "Sous-traitant",
      "Compte prioritaire"
    ],
    "domains": [
      "Grand carénage",
      "EPR / EPR2",
      "Déchets radioactifs / CIGEO",
      "Défense / propulsion navale"
    ],
    "specialties": [
      "tuyauterie",
      "soudure",
      "montage mécanique",
      "robinetterie",
      "équipements mécaniques",
      "maintenance nucléaire",
      "structures mécaniques"
    ],
    "relatedProjects": [
      "grand-carenage",
      "flamanville-3",
      "cigeo",
      "pang"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Cible naturelle pour tuyauterie, soudure, montage, mécanique et maintenance."
    ]
  },
  {
    "id": "axima-nucleaire",
    "name": "Axima Nucléaire / Axima",
    "actorTypes": [
      "Intégrateur",
      "Sous-traitant"
    ],
    "domains": [
      "Grand carénage",
      "Recherche nucléaire / RJH"
    ],
    "specialties": [
      "ventilation",
      "filtration",
      "confinement radioactif",
      "tuyauterie ventilation",
      "systèmes de sûreté"
    ],
    "relatedProjects": [
      "grand-carenage",
      "rjh"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Cible technique HVAC/ventilation/confinement."
    ]
  },
  {
    "id": "bouygues",
    "name": "Bouygues",
    "actorTypes": [
      "Sous-traitant",
      "Compte prioritaire"
    ],
    "domains": [
      "EPR / EPR2",
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "génie civil",
      "travaux lourds",
      "bâtiment réacteur",
      "ouvrages spéciaux",
      "puits d'accès",
      "structures profondes",
      "soutènement"
    ],
    "relatedProjects": [
      "epr-penly",
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Cible prioritaire GC EPR/CIGEO."
    ]
  },
  {
    "id": "bouygues-construction",
    "name": "Bouygues Construction",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Grand carénage"
    ],
    "specialties": [
      "génie civil",
      "bâtiments DUS",
      "renforcement structures"
    ],
    "relatedProjects": [
      "grand-carenage"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Présent Grand Carénage sur GC."
    ]
  },
  {
    "id": "bouygues-construction-expertises-nucleaires",
    "name": "Bouygues Construction Expertises Nucléaires",
    "actorTypes": [
      "Sous-traitant",
      "MOE"
    ],
    "domains": [
      "EPR / EPR2"
    ],
    "specialties": [
      "génie civil principal",
      "bâtiment réacteur",
      "bâtiment combustible",
      "bétons",
      "ferraillages",
      "cuves",
      "enceintes"
    ],
    "relatedProjects": [
      "flamanville-3"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Acteur listé dans MOE/entreprises et cité à Flamanville."
    ]
  },
  {
    "id": "vinci",
    "name": "Vinci",
    "actorTypes": [
      "Sous-traitant",
      "Intégrateur",
      "Compte prioritaire"
    ],
    "domains": [
      "EPR / EPR2",
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "infrastructure industrielle",
      "génie civil nucléaire",
      "bétons spéciaux",
      "câblage",
      "installation électrique",
      "CVC nucléaire",
      "essais"
    ],
    "relatedProjects": [
      "epr-penly",
      "flamanville-3",
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [
      "Vinci Construction",
      "Vinci Energies",
      "Cegelec",
      "Actemium",
      "Nuvia"
    ],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "À connecter avec Vinci Construction, Vinci Energies, Cegelec, Actemium."
    ]
  },
  {
    "id": "vinci-construction",
    "name": "Vinci Construction",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Grand carénage"
    ],
    "specialties": [
      "génie civil",
      "bâtiments DUS",
      "renforcement structures"
    ],
    "relatedProjects": [
      "grand-carenage"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Présent Grand Carénage sur GC."
    ]
  },
  {
    "id": "vinci-energies",
    "name": "Vinci Energies",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Recherche nucléaire / RJH"
    ],
    "specialties": [
      "piscines nucléaires",
      "électricité industrielle",
      "réalisation"
    ],
    "relatedProjects": [
      "rjh"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Cité sur RJH."
    ]
  },
  {
    "id": "cegelec",
    "name": "Cegelec",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Recherche nucléaire / RJH",
      "EPR / EPR2"
    ],
    "specialties": [
      "liner",
      "câblage",
      "électricité",
      "installation"
    ],
    "relatedProjects": [
      "rjh",
      "flamanville-3"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Cité RJH et via Vinci à Flamanville."
    ]
  },
  {
    "id": "eiffage",
    "name": "Eiffage",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "EPR / EPR2",
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "génie civil",
      "travaux lourds",
      "GC industriel longue durée",
      "ouvrages béton"
    ],
    "relatedProjects": [
      "epr-penly",
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Acteur GC EPR/CIGEO."
    ]
  },
  {
    "id": "edvance",
    "name": "Edvance",
    "actorTypes": [
      "MOE"
    ],
    "domains": [
      "EPR / EPR2"
    ],
    "specialties": [
      "conception EPR2",
      "design réacteur"
    ],
    "relatedProjects": [
      "epr-penly"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte lié à EDF à cibler sur design réacteur."
    ]
  },
  {
    "id": "nuvia",
    "name": "Nuvia",
    "actorTypes": [
      "Sous-traitant",
      "MOE"
    ],
    "domains": [
      "EPR / EPR2"
    ],
    "specialties": [
      "radioprotection chantier",
      "contrôle qualité",
      "essais",
      "mesures",
      "contrôles"
    ],
    "relatedProjects": [
      "flamanville-3"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Listé dans grandes ingénieries, groupe Vinci indiqué dans les documents."
    ]
  },
  {
    "id": "ortec",
    "name": "Ortec",
    "actorTypes": [
      "Sous-traitant",
      "MOE"
    ],
    "domains": [
      "Grand carénage"
    ],
    "specialties": [
      "logistique",
      "support maintenance",
      "préparation interventions"
    ],
    "relatedProjects": [
      "grand-carenage"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Compte intéressant sur logistique et support maintenance."
    ]
  },
  {
    "id": "boccard",
    "name": "Boccard",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Recherche nucléaire / RJH"
    ],
    "specialties": [
      "systèmes fluides",
      "tuyauteries refroidissement",
      "utilités",
      "mise en service"
    ],
    "relatedProjects": [
      "rjh"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Cité sur RJH."
    ]
  },
  {
    "id": "fives-nordon",
    "name": "Fives Nordon",
    "actorTypes": [
      "Sous-traitant",
      "Industriel fabricant"
    ],
    "domains": [
      "Recherche nucléaire / RJH"
    ],
    "specialties": [
      "tuyauterie industrielle",
      "support ventilation",
      "ligne de ventilation"
    ],
    "relatedProjects": [
      "rjh"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Cité sur RJH."
    ]
  },
  {
    "id": "acepp",
    "name": "ACEPP",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Recherche nucléaire / RJH"
    ],
    "specialties": [
      "essais",
      "data"
    ],
    "relatedProjects": [
      "rjh"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Cité sur essais et datas RJH."
    ]
  },
  {
    "id": "reel",
    "name": "REEL",
    "actorTypes": [
      "Industriel fabricant"
    ],
    "domains": [
      "Recherche nucléaire / RJH"
    ],
    "specialties": [
      "systèmes de levage",
      "outils industriels pour nucléaire"
    ],
    "relatedProjects": [
      "rjh"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Exemple cité dans la consigne : RJH, systèmes de levage."
    ]
  },
  {
    "id": "daher",
    "name": "Daher",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Fusion / ITER"
    ],
    "specialties": [
      "logistique",
      "stockage",
      "gestion composants",
      "flux internationaux",
      "grandes pièces"
    ],
    "relatedProjects": [
      "iter"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Cible ITER sur logistique et flux de composants."
    ]
  },
  {
    "id": "impressarios",
    "name": "Impressarios",
    "actorTypes": [
      "MOE"
    ],
    "domains": [
      "Fusion / ITER"
    ],
    "specialties": [
      "consortium B.NEX",
      "coordination projet",
      "support ITER"
    ],
    "relatedProjects": [
      "iter"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Mentionné dans le consortium B.NEX aux côtés d'Egis et Assystem ; rôle détaillé non précisé dans les documents."
    ]
  },
  {
    "id": "bnex",
    "name": "Consortium B.NEX",
    "actorTypes": [
      "MOE"
    ],
    "domains": [
      "Fusion / ITER"
    ],
    "specialties": [
      "BIM",
      "coordination bâtiments",
      "infrastructures"
    ],
    "relatedProjects": [
      "iter"
    ],
    "subsidiariesOrRelatedEntities": [
      "Egis",
      "Assystem",
      "Impressarios"
    ],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Consortium Egis, Assystem et Impressarios mentionné."
    ]
  },
  {
    "id": "cnim",
    "name": "CNIM",
    "actorTypes": [
      "Industriel fabricant"
    ],
    "domains": [
      "Fusion / ITER"
    ],
    "specialties": [
      "équipements Tokamak",
      "structures mécaniques complexes",
      "usinage haute exigence",
      "anneaux de pré-compression"
    ],
    "relatedProjects": [
      "iter"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Industriel fabricant cité sur ITER."
    ]
  },
  {
    "id": "gdes-revanti",
    "name": "GDES Revanti",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Fusion / ITER"
    ],
    "specialties": [
      "revêtements haute performance",
      "anticontamination",
      "décontaminable",
      "résistance chimique"
    ],
    "relatedProjects": [
      "iter"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Cité sur ITER."
    ]
  },
  {
    "id": "dalkia",
    "name": "Dalkia",
    "actorTypes": [
      "Sous-traitant",
      "Compte prioritaire"
    ],
    "domains": [
      "Fusion / ITER"
    ],
    "specialties": [
      "maintenance réseaux hydrauliques",
      "exploitation réseaux",
      "surveillance traitement déchets",
      "procédés"
    ],
    "relatedProjects": [
      "iter"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "La consigne commerciale cite aussi Dalkia réseau de chaleur de Paris, besoin de 4 ETP procédés et foisonnement possible jusqu'à GINKO ; point hors nucléaire mais utile pour le compte."
    ]
  },
  {
    "id": "veolia",
    "name": "Veolia",
    "actorTypes": [
      "Sous-traitant",
      "Compte prioritaire"
    ],
    "domains": [
      "Fusion / ITER"
    ],
    "specialties": [
      "traitement déchets",
      "réseaux hydrauliques",
      "exploitation maintenance"
    ],
    "relatedProjects": [
      "iter"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Groupement avec Dalkia sur contrat Fusion for Energy."
    ]
  },
  {
    "id": "fusion-for-energy",
    "name": "Fusion for Energy",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "Fusion / ITER"
    ],
    "specialties": [
      "contrats européens fusion",
      "maintenance réseaux hydrauliques",
      "traitement déchets"
    ],
    "relatedProjects": [
      "iter"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Contrat cité avec Dalkia et Veolia."
    ]
  },
  {
    "id": "andra",
    "name": "ANDRA",
    "actorTypes": [
      "Donneur d'ordre / MOA",
      "Exploitant"
    ],
    "domains": [
      "Déchets radioactifs / CIGEO",
      "Démantèlement nucléaire"
    ],
    "specialties": [
      "gestion déchets radioactifs",
      "stockage profond",
      "conditionnement",
      "sûreté long terme"
    ],
    "relatedProjects": [
      "cigeo",
      "demantelement-fessenheim-chinon-bugey"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Cible stratégique CIGEO et gestion déchets."
    ]
  },
  {
    "id": "asn",
    "name": "ASN",
    "actorTypes": [
      "Régulateur"
    ],
    "domains": [
      "Démantèlement nucléaire",
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "autorisation étapes",
      "contrôle sûreté",
      "validation méthodes"
    ],
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Faible",
    "commercialNotes": [
      "Régulateur : pas une cible commerciale classique, mais incontournable dans la compréhension des contraintes."
    ]
  },
  {
    "id": "irsn",
    "name": "IRSN",
    "actorTypes": [
      "Régulateur"
    ],
    "domains": [
      "Démantèlement nucléaire"
    ],
    "specialties": [
      "analyse risques",
      "conseil ASN",
      "radioprotection",
      "sûreté"
    ],
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Faible",
    "commercialNotes": [
      "Régulateur/expert : utile pour lecture des contraintes, pas cible de prospection directe."
    ]
  },
  {
    "id": "equans",
    "name": "Equans",
    "actorTypes": [
      "Intégrateur",
      "Compte prioritaire"
    ],
    "domains": [
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "CVC nucléaire",
      "confinement",
      "filtration",
      "redondances",
      "intégration technique"
    ],
    "relatedProjects": [
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Fort",
    "commercialNotes": [
      "Compte majeur demandé.",
      "Cible prioritaire CIGEO sur CVC, filtration et confinement."
    ]
  },
  {
    "id": "nge",
    "name": "NGE",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "terrassement",
      "GC souterrain",
      "galeries",
      "soutènement",
      "béton projeté",
      "logistique chantier"
    ],
    "relatedProjects": [
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Cité sur CIGEO."
    ]
  },
  {
    "id": "herrenknecht",
    "name": "Herrenknecht",
    "actorTypes": [
      "Industriel fabricant"
    ],
    "domains": [
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "tunnelier",
      "argile",
      "creusement"
    ],
    "relatedProjects": [
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Fabricant de tunnelier spécialisé dans l'argile."
    ]
  },
  {
    "id": "fives",
    "name": "Fives",
    "actorTypes": [
      "Industriel fabricant"
    ],
    "domains": [
      "Déchets radioactifs / CIGEO"
    ],
    "specialties": [
      "convoyeurs lourds",
      "manutention automatisée",
      "systèmes automatisés"
    ],
    "relatedProjects": [
      "cigeo"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "Moyen",
    "commercialNotes": [
      "Cité sur CIGEO et compte industriel fabricant."
    ]
  },
  {
    "id": "air-liquide",
    "name": "Air Liquide",
    "actorTypes": [
      "Compte prioritaire"
    ],
    "domains": [
      "Nucléaire civil"
    ],
    "specialties": [
      "Non précisé dans les documents"
    ],
    "relatedProjects": [],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Compte majeur demandé dans la consigne, mais aucun projet nucléaire précis n'est détaillé dans les documents fournis."
    ]
  },
  {
    "id": "totalenergies",
    "name": "TotalEnergies",
    "actorTypes": [
      "Compte prioritaire"
    ],
    "domains": [
      "Nucléaire civil"
    ],
    "specialties": [
      "Non précisé dans les documents"
    ],
    "relatedProjects": [],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Compte majeur demandé dans la consigne, mais aucun projet nucléaire précis n'est détaillé dans les documents fournis."
    ]
  },
  {
    "id": "foure-lagadec",
    "name": "Fouré Lagadec",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Défense / propulsion navale"
    ],
    "specialties": [
      "tuyauterie",
      "fluides"
    ],
    "relatedProjects": [
      "pang"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Exemple cité pour lots tuyauteries et fluides PANG, non attribués dans les documents."
    ]
  },
  {
    "id": "renaissance-fusion",
    "name": "Renaissance Fusion SAS",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "réacteurs innovants",
      "fusion",
      "à qualifier"
    ],
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Entreprise listée dans les SMR/réacteurs innovants ; détails non précisés."
    ]
  },
  {
    "id": "stellaria",
    "name": "STELLARIA",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "réacteurs innovants",
      "à qualifier"
    ],
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Entreprise listée ; détails non précisés."
    ]
  },
  {
    "id": "taranis",
    "name": "TARANIS",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "réacteurs innovants",
      "à qualifier"
    ],
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Entreprise listée ; détails non précisés."
    ]
  },
  {
    "id": "thorizon",
    "name": "THORIZON",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "réacteurs innovants",
      "à qualifier"
    ],
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Entreprise listée ; détails non précisés."
    ]
  },
  {
    "id": "xmar",
    "name": "XMAR",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "réacteurs innovants",
      "à qualifier"
    ],
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Entreprise listée ; détails non précisés."
    ]
  },
  {
    "id": "blue-capsule",
    "name": "BLUE CAPSULE",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "réacteurs innovants",
      "à qualifier"
    ],
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Entreprise listée ; détails non précisés."
    ]
  },
  {
    "id": "calogena",
    "name": "CALOGENA",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "réacteurs innovants",
      "à qualifier"
    ],
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Entreprise listée ; détails non précisés."
    ]
  },
  {
    "id": "hexana",
    "name": "HEXANA",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "réacteurs innovants",
      "à qualifier"
    ],
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Entreprise listée ; détails non précisés."
    ]
  },
  {
    "id": "jimmy-energy",
    "name": "Jimmy Energy SAS",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "réacteurs innovants",
      "à qualifier"
    ],
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Entreprise listée ; détails non précisés."
    ]
  },
  {
    "id": "newcleo",
    "name": "NEWCLEO",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "réacteurs innovants",
      "à qualifier"
    ],
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Entreprise listée ; détails non précisés."
    ]
  },
  {
    "id": "otrera-nuclear-energy",
    "name": "OTRERA NUCLEAR ENERGY",
    "actorTypes": [
      "Donneur d'ordre / MOA"
    ],
    "domains": [
      "SMR / réacteurs innovants"
    ],
    "specialties": [
      "réacteurs innovants",
      "à qualifier"
    ],
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Entreprise listée ; détails non précisés."
    ]
  },
  {
    "id": "ineo-nucleaire",
    "name": "Ineo Nucléaire",
    "actorTypes": [
      "MOE",
      "Intégrateur"
    ],
    "domains": [
      "Nucléaire civil"
    ],
    "specialties": [
      "électricité nucléaire",
      "intégration technique",
      "systèmes"
    ],
    "relatedProjects": [],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Listé dans l'index global des MOE/entreprises, sans projet précis dans les documents."
    ]
  },
  {
    "id": "ingerop",
    "name": "Ingérop",
    "actorTypes": [
      "MOE"
    ],
    "domains": [
      "Nucléaire civil"
    ],
    "specialties": [
      "ingénierie",
      "génie civil",
      "études"
    ],
    "relatedProjects": [],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Listé dans l'index global des MOE/entreprises, sans projet précis dans les documents."
    ]
  },
  {
    "id": "cyclife",
    "name": "Cyclife",
    "actorTypes": [
      "MOE",
      "Intégrateur"
    ],
    "domains": [
      "Démantèlement nucléaire"
    ],
    "specialties": [
      "démantèlement",
      "déchets",
      "traitement"
    ],
    "relatedProjects": [],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Listé dans les grandes ingénieries ; aucune relation projet détaillée dans les documents."
    ]
  },
  {
    "id": "endel",
    "name": "Endel",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Nucléaire civil"
    ],
    "specialties": [
      "maintenance industrielle",
      "tuyauterie",
      "montage"
    ],
    "relatedProjects": [],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Listé dans l'index global ; rapprochement possible avec Altrad Endel."
    ]
  },
  {
    "id": "valiance-fayat",
    "name": "Valiance / Fayat",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Nucléaire civil"
    ],
    "specialties": [
      "entreprise travaux",
      "à qualifier"
    ],
    "relatedProjects": [],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Listé dans l'index global des entreprises, sans projet précis."
    ]
  },
  {
    "id": "clemessy",
    "name": "Clemessy",
    "actorTypes": [
      "Sous-traitant",
      "Intégrateur"
    ],
    "domains": [
      "Nucléaire civil"
    ],
    "specialties": [
      "électricité",
      "contrôle commande",
      "automatisme"
    ],
    "relatedProjects": [],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Listé dans l'index global des entreprises."
    ]
  },
  {
    "id": "snef",
    "name": "SNEF",
    "actorTypes": [
      "Sous-traitant",
      "Intégrateur"
    ],
    "domains": [
      "Nucléaire civil"
    ],
    "specialties": [
      "électricité",
      "contrôle commande",
      "maintenance"
    ],
    "relatedProjects": [],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Listé dans l'index global des entreprises."
    ]
  },
  {
    "id": "bilfinger",
    "name": "Bilfinger",
    "actorTypes": [
      "Sous-traitant"
    ],
    "domains": [
      "Nucléaire civil"
    ],
    "specialties": [
      "maintenance industrielle",
      "services industriels"
    ],
    "relatedProjects": [],
    "subsidiariesOrRelatedEntities": [],
    "commercialPriority": "À qualifier",
    "commercialNotes": [
      "Listé dans l'index global des entreprises."
    ]
  }
];

export const majorAccounts: MajorAccount[] = [
  {
    "actorId": "air-liquide",
    "whyImportant": "Compte majeur explicitement demandé dans la consigne commerciale.",
    "projects": [],
    "specialties": [
      "Non précisé dans les documents"
    ],
    "opportunities": [
      "Compte à qualifier hors données projet nucléaire fournies"
    ],
    "priority": "À qualifier",
    "notes": [
      "Aucune relation projet nucléaire détaillée dans les documents."
    ]
  },
  {
    "actorId": "framatome",
    "whyImportant": "Présent sur défense, grand carénage, EPR, Flamanville, RJH et combustible.",
    "projects": [
      "s3g",
      "sna",
      "pang",
      "grand-carenage",
      "epr-penly",
      "flamanville-3",
      "rjh",
      "cycle-combustible-orano"
    ],
    "specialties": [
      "cuves",
      "générateurs vapeur",
      "circuit primaire",
      "contrôle commande",
      "combustible"
    ],
    "opportunities": [
      "support équipements critiques",
      "ingénierie essais",
      "contrôle commande",
      "maintenance lourde"
    ],
    "priority": "Fort",
    "notes": [
      "Compte prioritaire pour nucléaire civil et défense."
    ]
  },
  {
    "actorId": "totalenergies",
    "whyImportant": "Compte majeur explicitement demandé dans la consigne commerciale.",
    "projects": [],
    "specialties": [
      "Non précisé dans les documents"
    ],
    "opportunities": [
      "Compte à qualifier hors données projet nucléaire fournies"
    ],
    "priority": "À qualifier",
    "notes": [
      "Aucune relation projet nucléaire détaillée dans les documents."
    ]
  },
  {
    "actorId": "equans",
    "whyImportant": "Intégrateur technique CIGEO sur CVC, confinement, filtration et redondances.",
    "projects": [
      "cigeo"
    ],
    "specialties": [
      "CVC nucléaire",
      "confinement",
      "filtration",
      "redondances"
    ],
    "opportunities": [
      "CVC",
      "HVAC",
      "filtration",
      "confinement",
      "électricité technique"
    ],
    "priority": "Fort",
    "notes": [
      "Compte prioritaire CIGEO."
    ]
  },
  {
    "actorId": "edf",
    "whyImportant": "Donneur d'ordre/exploitant majeur : parc existant, EPR2, grand carénage, démantèlement, financement CIGEO/RJH et Nuward.",
    "projects": [
      "grand-carenage",
      "epr-penly",
      "epr-gravelines",
      "epr-bugey",
      "demantelement-fessenheim-chinon-bugey",
      "rjh",
      "cigeo",
      "nuward"
    ],
    "specialties": [
      "exploitation",
      "pilotage EPR2",
      "financement",
      "démantèlement",
      "grand carénage"
    ],
    "opportunities": [
      "PMO",
      "sûreté",
      "coordination projets",
      "arrêts de tranche",
      "qualification nouveaux projets"
    ],
    "subsidiariesOrRelatedEntities": [
      "Edvance",
      "Cyclife",
      "Framatome mentionnée dans l'écosystème"
    ],
    "priority": "Fort",
    "notes": [
      "La consigne demande un zoom sur EDF et ses filiales / entités liées."
    ]
  },
  {
    "actorId": "orano",
    "whyImportant": "Acteur clé cycle combustible, déchets, démantèlement, EPR, défense et CIGEO.",
    "projects": [
      "s3g",
      "sna",
      "pang",
      "grand-carenage",
      "epr-penly",
      "rjh",
      "cycle-combustible-orano",
      "cigeo",
      "demantelement-fessenheim-chinon-bugey"
    ],
    "specialties": [
      "combustible",
      "procédés",
      "déchets",
      "recyclage",
      "démantèlement",
      "robotique"
    ],
    "opportunities": [
      "procédés chimiques",
      "revamping",
      "ventilation",
      "manutention",
      "automatisation",
      "déchets"
    ],
    "subsidiariesOrRelatedEntities": [
      "Orano DS"
    ],
    "priority": "Fort",
    "notes": [
      "Compte prioritaire pour prospection multi-projets."
    ]
  },
  {
    "actorId": "cea",
    "whyImportant": "Acteur public majeur sur recherche, fusion, démantèlement, RJH, ITER, CIGEO et projets sensibles.",
    "projects": [
      "res",
      "rjh",
      "iter",
      "cigeo",
      "demantelement-fessenheim-chinon-bugey",
      "dissuasion-aetv"
    ],
    "specialties": [
      "recherche nucléaire",
      "fusion",
      "démantèlement",
      "réacteurs expérimentaux"
    ],
    "opportunities": [
      "ingénierie recherche",
      "essais",
      "sûreté",
      "PMO",
      "démantèlement"
    ],
    "priority": "Fort",
    "notes": [
      "Prudence sur AETV / dissuasion : information limitée."
    ]
  },
  {
    "actorId": "naval-group",
    "whyImportant": "Maîtrise d'œuvre globale des programmes navals nucléaires SNA, S3G, PANG.",
    "projects": [
      "s3g",
      "sna",
      "pang"
    ],
    "specialties": [
      "conception navale",
      "production",
      "maintenance",
      "démantèlement",
      "intégration"
    ],
    "opportunities": [
      "support ingénierie",
      "intégration équipements",
      "logistique industrielle",
      "tuyauterie/HVAC selon lots"
    ],
    "priority": "Fort",
    "notes": [
      "Périmètre défense avec secret défense sur certains sous-traitants."
    ]
  },
  {
    "actorId": "technic-atome",
    "whyImportant": "Acteur central propulsion nucléaire, réacteurs compacts, RJH et Nuward.",
    "projects": [
      "res",
      "s3g",
      "sna",
      "pang",
      "rjh",
      "nuward"
    ],
    "specialties": [
      "chaufferies nucléaires",
      "réacteurs compacts",
      "bloc pile",
      "SMR"
    ],
    "opportunities": [
      "ingénierie système",
      "essais",
      "contrôle commande",
      "sûreté",
      "support projets compacts"
    ],
    "priority": "Fort",
    "notes": [
      "Compte majeur demandé."
    ]
  },
  {
    "actorId": "assystem",
    "whyImportant": "AMO/MOE transverse très présent sur démantèlement, grand carénage, EPR, RJH, ITER et CIGEO.",
    "projects": [
      "demantelement-fessenheim-chinon-bugey",
      "grand-carenage",
      "epr-penly",
      "flamanville-3",
      "rjh",
      "iter",
      "cigeo"
    ],
    "specialties": [
      "PMO",
      "ingénierie système",
      "sûreté",
      "planning",
      "coûts",
      "risques",
      "digital"
    ],
    "opportunities": [
      "PMO",
      "coordination multi-métiers",
      "sûreté",
      "dossiers réglementaires",
      "transformation digitale"
    ],
    "priority": "Fort",
    "notes": [
      "Compte majeur demandé."
    ]
  },
  {
    "actorId": "egis",
    "whyImportant": "MOE sur génie civil, BIM, CIGEO, EPR, ITER et démantèlement.",
    "projects": [
      "demantelement-fessenheim-chinon-bugey",
      "epr-penly",
      "flamanville-3",
      "iter",
      "cigeo"
    ],
    "specialties": [
      "génie civil",
      "BIM",
      "ouvrages de surface",
      "VRD",
      "gestion environnementale"
    ],
    "opportunities": [
      "GC",
      "BIM",
      "coordination infrastructures",
      "études environnementales"
    ],
    "priority": "Fort",
    "notes": [
      "Compte majeur demandé."
    ]
  },
  {
    "actorId": "tractebel",
    "whyImportant": "MOE de sûreté, architecture systèmes et études long terme.",
    "projects": [
      "demantelement-fessenheim-chinon-bugey",
      "grand-carenage",
      "flamanville-3",
      "cigeo"
    ],
    "specialties": [
      "sûreté",
      "systèmes",
      "risques",
      "géotechnique",
      "long terme"
    ],
    "opportunities": [
      "études sûreté",
      "architecture systèmes",
      "calculs",
      "dossiers réglementaires"
    ],
    "priority": "Fort",
    "notes": [
      "Compte majeur demandé."
    ]
  },
  {
    "actorId": "dalkia",
    "whyImportant": "Compte demandé, présent ITER avec Veolia et cité dans la consigne commerciale pour foisonnement compte.",
    "projects": [
      "iter"
    ],
    "specialties": [
      "réseaux hydrauliques",
      "maintenance/exploitation",
      "traitement déchets",
      "procédés"
    ],
    "opportunities": [
      "procédés",
      "maintenance réseaux",
      "traitement déchets",
      "foisonnement compte"
    ],
    "priority": "Fort",
    "notes": [
      "La consigne cite réseau de chaleur de Paris, 4 ETP procédés et GINKO comme exemple de foisonnement hors nucléaire."
    ]
  },
  {
    "actorId": "veolia",
    "whyImportant": "Compte demandé, groupement avec Dalkia sur ITER/Fusion for Energy.",
    "projects": [
      "iter"
    ],
    "specialties": [
      "traitement déchets",
      "réseaux hydrauliques",
      "maintenance"
    ],
    "opportunities": [
      "déchets",
      "réseaux hydrauliques",
      "exploitation/maintenance"
    ],
    "priority": "Fort",
    "notes": [
      "Compte majeur demandé."
    ]
  },
  {
    "actorId": "vinci",
    "whyImportant": "Compte majeur demandé, présent EPR/CIGEO/Flamanville via filiales et intégration technique.",
    "projects": [
      "epr-penly",
      "flamanville-3",
      "cigeo"
    ],
    "specialties": [
      "génie civil",
      "infrastructures",
      "câblage",
      "CVC",
      "essais"
    ],
    "opportunities": [
      "GC",
      "électricité",
      "CVC nucléaire",
      "essais",
      "méthodes d'exécution"
    ],
    "subsidiariesOrRelatedEntities": [
      "Vinci Construction",
      "Vinci Energies",
      "Cegelec",
      "Actemium",
      "Nuvia"
    ],
    "priority": "Fort",
    "notes": [
      "Compte à foisonner par filiales."
    ]
  },
  {
    "actorId": "bouygues",
    "whyImportant": "Compte majeur demandé, présent EPR Penly et CIGEO sur GC lourd/profond.",
    "projects": [
      "epr-penly",
      "cigeo"
    ],
    "specialties": [
      "génie civil",
      "ouvrages spéciaux",
      "puits",
      "soutènement"
    ],
    "opportunities": [
      "GC nucléaire",
      "travaux lourds",
      "ouvrages profonds",
      "méthodes chantier"
    ],
    "subsidiariesOrRelatedEntities": [
      "Bouygues Construction",
      "Bouygues Construction Expertises Nucléaires"
    ],
    "priority": "Fort",
    "notes": [
      "Compte à foisonner sur EPR et CIGEO."
    ]
  },
  {
    "actorId": "spie",
    "whyImportant": "Compte majeur demandé, intégrateur technique sur CIGEO et via Spie Nucléaire sur démantèlement/grand carénage/Flamanville.",
    "projects": [
      "cigeo"
    ],
    "specialties": [
      "électricité",
      "automatisme",
      "contrôle commande"
    ],
    "opportunities": [
      "électricité industrielle",
      "automatisme",
      "contrôle commande",
      "mise en conformité"
    ],
    "subsidiariesOrRelatedEntities": [
      "Spie Nucléaire"
    ],
    "priority": "Fort",
    "notes": [
      "Voir aussi la fiche Spie Nucléaire."
    ]
  },
  {
    "actorId": "onet-technologies",
    "whyImportant": "Compte majeur demandé, intégrateur terrain zone contrôlée, radioprotection, décontamination et essais.",
    "projects": [
      "demantelement-fessenheim-chinon-bugey",
      "grand-carenage",
      "flamanville-3"
    ],
    "specialties": [
      "zone contrôlée",
      "radioprotection",
      "décontamination",
      "maintenance sous radiation"
    ],
    "opportunities": [
      "radioprotection",
      "intervention terrain",
      "maintenance",
      "support essais"
    ],
    "priority": "Fort",
    "notes": [
      "Très orienté exécution/exploitation."
    ]
  },
  {
    "actorId": "altrad-endel",
    "whyImportant": "Compte majeur demandé, présent Grand Carénage, Flamanville, CIGEO et cible potentielle PANG tuyauterie/fluides.",
    "projects": [
      "grand-carenage",
      "flamanville-3",
      "cigeo",
      "pang"
    ],
    "specialties": [
      "tuyauterie",
      "soudure",
      "montage mécanique",
      "robinetterie",
      "maintenance"
    ],
    "opportunities": [
      "tuyauterie",
      "montage",
      "maintenance",
      "mécanique",
      "soudure"
    ],
    "priority": "Fort",
    "notes": [
      "Compte prioritaire métiers terrain."
    ]
  }
];

export const commercialOpportunities: CommercialOpportunity[] = [
  {
    "id": "genie-civil",
    "skill": "Génie civil",
    "description": "Bâtiments réacteurs, DUS, ouvrages de surface, puits, tunnels, soutènement, GC profond et structures complexes.",
    "projects": [
      "grand-carenage",
      "epr-penly",
      "flamanville-3",
      "cigeo"
    ],
    "actors": [
      "egis",
      "bouygues",
      "bouygues-construction",
      "bouygues-construction-expertises-nucleaires",
      "vinci",
      "vinci-construction",
      "eiffage",
      "nge"
    ],
    "prospectTypes": [
      "MOE GC",
      "grands constructeurs",
      "entreprises travaux"
    ],
    "angle": "Proposer ingénieurs GC nucléaire, méthodes chantier, BIM, coordination technique et pilotage interfaces sûreté/chantier.",
    "horizon": "Long terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "hvac-ventilation",
    "skill": "HVAC / ventilation / CVC",
    "description": "Ventilation nucléaire, filtration, confinement, CVC bâtiments et remise à niveau HVAC.",
    "projects": [
      "grand-carenage",
      "flamanville-3",
      "rjh",
      "cigeo",
      "cycle-combustible-orano",
      "pang"
    ],
    "actors": [
      "artelia",
      "axima-nucleaire",
      "equans",
      "fives-nordon",
      "assystem",
      "egis",
      "vinci"
    ],
    "prospectTypes": [
      "ingénieries ventilation",
      "intégrateurs CVC",
      "MOE bâtiments"
    ],
    "angle": "Mettre en avant conception ventilation, calculs débit/pression/thermique, confinement, filtration et essais de mise en service.",
    "horizon": "Long terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "tuyauterie-fluides",
    "skill": "Tuyauterie / fluides",
    "description": "Tuyauteries de refroidissement, utilités, fluides, réseaux hydrauliques, robinetterie et montage mécanique.",
    "projects": [
      "rjh",
      "grand-carenage",
      "flamanville-3",
      "pang",
      "iter"
    ],
    "actors": [
      "boccard",
      "fives-nordon",
      "altrad-endel",
      "axima-nucleaire",
      "artelia",
      "dalkia",
      "veolia",
      "foure-lagadec"
    ],
    "prospectTypes": [
      "ensembliers tuyauterie",
      "montage mécanique",
      "exploitants réseaux"
    ],
    "angle": "Qualifier les besoins en études fluides, préfabrication, montage, support essais, maintenance réseaux et documentation qualité.",
    "horizon": "Moyen terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "electricite",
    "skill": "Électricité",
    "description": "Installation électrique, armoires, tirage de câbles, systèmes électriques et électricité industrielle.",
    "projects": [
      "grand-carenage",
      "flamanville-3",
      "cigeo",
      "pang"
    ],
    "actors": [
      "spie-nucleaire",
      "spie",
      "vinci",
      "cegelec",
      "actemium",
      "clemessy",
      "snef",
      "ineo-nucleaire"
    ],
    "prospectTypes": [
      "intégrateurs électriques",
      "filiales grands groupes",
      "maintenance électrique"
    ],
    "angle": "Proposer profils études/exécution électricité nucléaire, câblage, essais, mise en conformité et suivi qualité.",
    "horizon": "Moyen terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "controle-commande",
    "skill": "Contrôle commande",
    "description": "Modernisation contrôle commande, instrumentation, systèmes électriques, qualification et essais.",
    "projects": [
      "grand-carenage",
      "flamanville-3",
      "epr-penly",
      "cigeo",
      "nuward"
    ],
    "actors": [
      "framatome",
      "spie-nucleaire",
      "spie",
      "actemium",
      "edvance",
      "clemessy",
      "snef"
    ],
    "prospectTypes": [
      "intégrateurs contrôle commande",
      "fournisseurs équipements",
      "ingénieries EPR/SMR"
    ],
    "angle": "Positionner profils automatisme/contrôle commande, qualification, essais, documentation et cybersécurité si demandée par le client.",
    "horizon": "Long terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "automatisme",
    "skill": "Automatisme",
    "description": "Programmation, supervision, mise en service automates, systèmes automatisés et manutention robotisée.",
    "projects": [
      "grand-carenage",
      "cigeo",
      "cycle-combustible-orano",
      "reacteurs-innovants"
    ],
    "actors": [
      "actemium",
      "spie",
      "fives",
      "orano",
      "clemessy",
      "snef"
    ],
    "prospectTypes": [
      "intégrateurs automatisme",
      "fournisseurs de systèmes automatisés"
    ],
    "angle": "Vendre capacité de renfort sur programmation, supervision, FAT/SAT, mise en service et documentation d'exploitation.",
    "horizon": "Moyen terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "pmo",
    "skill": "PMO / gestion de projet",
    "description": "Planning, coûts, risques, coordination multi-métiers, interfaces réglementaires et suivi d'avancement.",
    "projects": [
      "grand-carenage",
      "epr-penly",
      "demantelement-fessenheim-chinon-bugey",
      "rjh",
      "cigeo",
      "nuward"
    ],
    "actors": [
      "assystem",
      "edf",
      "orano",
      "cea",
      "andra",
      "edvance"
    ],
    "prospectTypes": [
      "MOA",
      "AMO",
      "ingénieries système"
    ],
    "angle": "Proposer PMO nucléaire capables de gérer planning, coûts, risques, interfaces sûreté et coordination multi-métiers.",
    "horizon": "Long terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "surete",
    "skill": "Sûreté nucléaire",
    "description": "Études sûreté, architecture systèmes, dossiers réglementaires, justification technique et appui ASN.",
    "projects": [
      "demantelement-fessenheim-chinon-bugey",
      "grand-carenage",
      "flamanville-3",
      "cigeo",
      "nuward",
      "reacteurs-innovants",
      "rjh"
    ],
    "actors": [
      "tractebel",
      "assystem",
      "cea",
      "irsn",
      "asn",
      "edf",
      "andra"
    ],
    "prospectTypes": [
      "ingénieries sûreté",
      "MOA",
      "régulateurs/expertise"
    ],
    "angle": "Valoriser profils sûreté, dossiers réglementaires, analyses risques et interfaces avec exigences ASN/IRSN.",
    "horizon": "Long terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "radioprotection",
    "skill": "Radioprotection",
    "description": "Protection travailleurs, intervention zone contrôlée, mesures, contrôles, maintenance sous radiation.",
    "projects": [
      "demantelement-fessenheim-chinon-bugey",
      "grand-carenage",
      "flamanville-3"
    ],
    "actors": [
      "onet-technologies",
      "nuvia",
      "irsn",
      "orano-ds"
    ],
    "prospectTypes": [
      "intégrateurs terrain",
      "entreprises zone contrôlée",
      "prestataires essais"
    ],
    "angle": "Proposer renforts radioprotection terrain, mesures, contrôles, procédures d'intervention et préparation chantier.",
    "horizon": "Court terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "logistique",
    "skill": "Logistique industrielle",
    "description": "Flux de composants, accès chantier, préparation interventions, stockage et manutention de pièces lourdes/complexes.",
    "projects": [
      "iter",
      "grand-carenage",
      "cigeo",
      "pang"
    ],
    "actors": [
      "daher",
      "ortec",
      "nge",
      "fives",
      "naval-group"
    ],
    "prospectTypes": [
      "logisticiens industriels",
      "MOA grands chantiers",
      "constructeurs"
    ],
    "angle": "Mettre en avant planification flux, préparation interventions, logistique chantier, manutention et gestion pièces critiques.",
    "horizon": "Long terme",
    "opportunityLevel": "Moyen"
  },
  {
    "id": "robotique",
    "skill": "Robotique",
    "description": "Robotique nucléaire, découpe en zone irradiée, manutention robotisée et intervention à distance.",
    "projects": [
      "demantelement-fessenheim-chinon-bugey",
      "cigeo"
    ],
    "actors": [
      "orano",
      "orano-ds",
      "onet-technologies",
      "fives",
      "andra"
    ],
    "prospectTypes": [
      "intégrateurs terrain",
      "industriels automatisation",
      "exploitants déchets"
    ],
    "angle": "Qualifier besoins en robotique, téléopération, outillages de découpe, maintenance et qualification en environnement contraint.",
    "horizon": "Long terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "demantelement-fessenheim-chinon-bugey",
    "skill": "Démantèlement",
    "description": "Scénarios, découpe, décontamination, assainissement, déchets, radioprotection et intégration terrain.",
    "projects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "actors": [
      "edf",
      "orano",
      "cea",
      "assystem",
      "artelia",
      "egis",
      "tractebel",
      "onet-technologies",
      "spie-nucleaire",
      "framatome",
      "orano-ds"
    ],
    "prospectTypes": [
      "exploitants",
      "ingénieries",
      "intégrateurs terrain"
    ],
    "angle": "Construire offre de bout en bout : études, sûreté, terrain, déchets, robotique et PMO.",
    "horizon": "Long terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "maintenance",
    "skill": "Maintenance",
    "description": "Maintenance lourde, maintenance sous radiation, circuit primaire, turbines, support exploitation et réseaux.",
    "projects": [
      "grand-carenage",
      "flamanville-3",
      "iter",
      "cigeo"
    ],
    "actors": [
      "framatome",
      "onet-technologies",
      "orano",
      "altrad-endel",
      "ortec",
      "dalkia",
      "veolia",
      "bilfinger"
    ],
    "prospectTypes": [
      "exploitants",
      "mainteneurs industriels",
      "intégrateurs terrain"
    ],
    "angle": "Proposer support maintenance, méthodes, préparation interventions, qualité, essais et documentation.",
    "horizon": "Moyen terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "procedes",
    "skill": "Procédés",
    "description": "Procédés chimiques, combustible, déchets, traitement, réseaux, revamping et exploitation industrielle.",
    "projects": [
      "cycle-combustible-orano",
      "demantelement-fessenheim-chinon-bugey",
      "iter",
      "cigeo"
    ],
    "actors": [
      "orano",
      "dalkia",
      "veolia",
      "assystem",
      "artelia"
    ],
    "prospectTypes": [
      "exploitants procédés",
      "ingénieries process",
      "groupes environnement/énergie"
    ],
    "angle": "Cibler procédés chimiques/nucléaires, traitement déchets, revamping et optimisation d'exploitation.",
    "horizon": "Long terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "traitement-dechets",
    "skill": "Traitement déchets",
    "description": "Tri, conditionnement, stockage, conformité colis, surveillance traitement et dossiers sûreté déchets.",
    "projects": [
      "demantelement-fessenheim-chinon-bugey",
      "cigeo",
      "iter",
      "cycle-combustible-orano"
    ],
    "actors": [
      "andra",
      "orano",
      "veolia",
      "dalkia",
      "assystem",
      "egis",
      "tractebel"
    ],
    "prospectTypes": [
      "MOA déchets",
      "exploitants",
      "ingénieries sûreté/environnement"
    ],
    "angle": "Valoriser expertise déchets, conditionnement, conformité, traçabilité, dossiers sûreté et exploitation long terme.",
    "horizon": "Long terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "combustible",
    "skill": "Combustible",
    "description": "Extraction, conversion, enrichissement, fabrication, retraitement, recyclage, combustible réacteurs et études combustibles.",
    "projects": [
      "cycle-combustible-orano",
      "epr-penly",
      "rjh",
      "s3g",
      "sna",
      "pang"
    ],
    "actors": [
      "orano",
      "framatome",
      "edf",
      "technic-atome"
    ],
    "prospectTypes": [
      "exploitants combustible",
      "fournisseurs composants",
      "réacteurs de recherche"
    ],
    "angle": "Cibler procédés combustible, études, essais, transport/enrichissement et interfaces réacteurs.",
    "horizon": "Long terme",
    "opportunityLevel": "Fort"
  },
  {
    "id": "turbines",
    "skill": "Turbines vapeur",
    "description": "Conception/fabrication turbines vapeur, alternateurs et rénovation turbines.",
    "projects": [
      "s3g",
      "sna",
      "pang",
      "grand-carenage",
      "epr-penly"
    ],
    "actors": [
      "thermodyn-ge",
      "arabelle-solutions",
      "framatome"
    ],
    "prospectTypes": [
      "fournisseurs turbines",
      "équipementiers critiques"
    ],
    "angle": "Qualifier besoins support études, fabrication, essais, maintenance/rénovation et interfaces installation.",
    "horizon": "Long terme",
    "opportunityLevel": "Moyen"
  },
  {
    "id": "manutention-levage",
    "skill": "Manutention / levage",
    "description": "Systèmes de levage, manutention automatisée, convoyeurs lourds, pièces complexes et composants nucléaires.",
    "projects": [
      "rjh",
      "cigeo",
      "iter"
    ],
    "actors": [
      "reel",
      "fives",
      "daher",
      "herrenknecht"
    ],
    "prospectTypes": [
      "fabricants d'outils",
      "logisticiens",
      "industriels manutention"
    ],
    "angle": "Prospecter fabricants d'outils et intégrateurs sur levage, manutention automatisée, qualification et maintenance.",
    "horizon": "Moyen terme",
    "opportunityLevel": "Moyen"
  },
  {
    "id": "equipements-mecaniques",
    "skill": "Équipements mécaniques",
    "description": "Structures mécaniques, mécano-soudure, montage, composants critiques, outillages et structures Tokamak.",
    "projects": [
      "pang",
      "iter",
      "grand-carenage",
      "flamanville-3",
      "cigeo"
    ],
    "actors": [
      "cnim",
      "altrad-endel",
      "framatome",
      "naval-group",
      "technic-atome",
      "chantiers-atlantique"
    ],
    "prospectTypes": [
      "équipementiers",
      "ensembliers mécaniques",
      "MOE"
    ],
    "angle": "Qualifier besoins en conception mécanique, mécano-soudure, montage, contrôle qualité et support essais.",
    "horizon": "Long terme",
    "opportunityLevel": "Fort"
  }
];

export const loadPlan: LoadPlanItem[] = [
  {
    "id": "lp-grand-carenage",
    "projectId": "grand-carenage",
    "status": "Projet déjà lancé / en cours",
    "horizon": "Long terme",
    "timeframe": "Jusqu'à 2035 selon les documents",
    "opportunityLevel": "Fort",
    "notes": [
      "56 réacteurs concernés.",
      "Arrêts de tranche, modernisation sûreté, HVAC, contrôle commande, GC et équipements."
    ]
  },
  {
    "id": "lp-epr-penly",
    "projectId": "epr-penly",
    "status": "Chantier lancé",
    "horizon": "Long terme",
    "timeframe": "Travaux principaux 2024-2025, mise en service visée 2038 selon les documents",
    "opportunityLevel": "Fort",
    "notes": [
      "2 réacteurs de 1670 MWh indiqués.",
      "12 ans de construction mentionnés."
    ]
  },
  {
    "id": "lp-epr-gravelines",
    "projectId": "epr-gravelines",
    "status": "Planifié, acteurs pas encore sélectionnés",
    "horizon": "Long terme",
    "timeframe": "Non précisé dans les documents",
    "opportunityLevel": "Fort",
    "notes": [
      "Fenêtre de prospection amont."
    ]
  },
  {
    "id": "lp-epr-bugey",
    "projectId": "epr-bugey",
    "status": "Planifié, acteurs pas encore sélectionnés",
    "horizon": "Long terme",
    "timeframe": "Non précisé dans les documents",
    "opportunityLevel": "Fort",
    "notes": [
      "Bugey aussi cité sur démantèlement."
    ]
  },
  {
    "id": "lp-flamanville",
    "projectId": "flamanville-3",
    "status": "Finalisation / essais / contrôle commande",
    "horizon": "Court terme",
    "timeframe": "Non précisé dans les documents",
    "opportunityLevel": "Moyen",
    "notes": [
      "Opportunités essais, qualification, commissioning et support chantier."
    ]
  },
  {
    "id": "lp-cigeo",
    "projectId": "cigeo",
    "status": "Projet long terme",
    "horizon": "Long terme",
    "timeframe": "Non précisé dans les documents",
    "opportunityLevel": "Fort",
    "notes": [
      "GC profond, ventilation, robotique, conditionnement déchets, sûreté long terme."
    ]
  },
  {
    "id": "lp-demantelement",
    "projectId": "demantelement-fessenheim-chinon-bugey",
    "status": "Programme de très longue durée",
    "horizon": "Long terme",
    "timeframe": "10 à 30 ans selon opérations ; plus de 20 réacteurs à démanteler dans les années à venir selon les documents",
    "opportunityLevel": "Fort",
    "notes": [
      "Fessenheim, Chinon, Bugey cités."
    ]
  },
  {
    "id": "lp-iter",
    "projectId": "iter",
    "status": "Projet majeur en cours",
    "horizon": "Long terme",
    "timeframe": "Non précisé dans les documents",
    "opportunityLevel": "Fort",
    "notes": [
      "Cadarache, Tokamak, logistique, BIM, réseaux hydrauliques, déchets."
    ]
  },
  {
    "id": "lp-rjh",
    "projectId": "rjh",
    "status": "Projet de recherche majeur",
    "horizon": "Moyen terme",
    "timeframe": "Non précisé dans les documents",
    "opportunityLevel": "Fort",
    "notes": [
      "Réacteur à eau sous pression 100 MW ; essais, combustibles, matériaux, radioéléments médicaux."
    ]
  },
  {
    "id": "lp-smr",
    "projectId": "nuward",
    "status": "Marché émergent",
    "horizon": "Moyen terme",
    "timeframe": "Mise sur le marché prévue pour 2030 selon les documents",
    "opportunityLevel": "À qualifier",
    "notes": [
      "2 x 170 MW ; EDF x TechnicAtome."
    ]
  },
  {
    "id": "lp-reacteurs-innovants",
    "projectId": "reacteurs-innovants",
    "status": "Marché émergent à qualifier",
    "horizon": "Moyen terme",
    "timeframe": "Non précisé dans les documents",
    "opportunityLevel": "À qualifier",
    "notes": [
      "Liste d'acteurs à analyser via cartographie Servir 2040."
    ]
  },
  {
    "id": "lp-defense",
    "projectId": "s3g",
    "status": "Projet sensible / peu documenté côté sous-traitants",
    "horizon": "Long terme",
    "timeframe": "Non précisé dans les documents",
    "opportunityLevel": "À qualifier",
    "notes": [
      "Secret défense sur certains sous-traitants."
    ]
  },
  {
    "id": "lp-pang",
    "projectId": "pang",
    "status": "Programme sensible / lots partiellement non attribués",
    "horizon": "Long terme",
    "timeframe": "Non précisé dans les documents",
    "opportunityLevel": "À qualifier",
    "notes": [
      "Compétences métiers citées : tuyauterie, HVAC, mécano-soudure, électricité, montage, intégration, logistique."
    ]
  },
  {
    "id": "lp-combustible",
    "projectId": "cycle-combustible-orano",
    "status": "Activité industrielle récurrente / modernisation",
    "horizon": "Long terme",
    "timeframe": "Non précisé dans les documents",
    "opportunityLevel": "Fort",
    "notes": [
      "Tricastin, La Hague, Marcoule/Melox ; modernisation ateliers, ventilation, revamping, manutention, automatisation."
    ]
  }
];

export const sourceDocuments: SourceDocument[] = [
  {
    "id": "consigne",
    "title": "Carto nuc. consigne.pdf — Cahier des charges",
    "filename": "Carto nuc. consigne.pdf",
    "pageCount": 1,
    "pages": [
      {
        "page": 1,
        "text": "Cahier des charges jeudi 27 novembre 2025 10:47 Présentation sous format PPT Partir des projets, des actualités Exemple : Dalkia vient de gagner le réseau de chaleur de Paris, ils ont besoin de 4 ETP en procédés pourça. Mais aussi sur toutes les autres BU de Dalkia, voir même jusqu'à GINKO. Il faut foisonner le compte Construction PPT : - Mettre en avant les différents gros projets et sous forme de pieuvre les acteurs. Pour les acteurs, parlerde leurs spécialités. Ex : RJH : Reel (reel fait des systèmes de levage etc …) Estimer plan de charge dans le prochaines années. - Zoom sur des comptes majeurs comme Air Liquide, Framatome, Total Energies, Equans - Zoom sur toutes les filiales d'EDF - Lever le pied sur l'Hydrogène - Prioriser Nucléaire, biomasse et captage de CO2 Nucléaire : - Comme pour l'hydrogène (Zoom sur les distributeurs, ceux qui stock et ceux qui distribuent et letransport.), pour le nuc faire un zoom sur nuc civil et nuc militaire avec les acteurs, les champs decompétences et les filiales. Les industriels qui sont fabricants d'outils (système de levage par ex) à destination du nucléaire peuventêtre intéressant aussi. Point hebdo chaque jeudi 24/04/2026 10:31 OneNote\nhttps://vacoaconseilcom-my.sharepoint.com/personal/a_montel_nabboo-conseil_com/_layouts/15/Doc.aspx?sourcedoc={244ebb60-0a1a-4c1b-a… 1/1"
      }
    ]
  },
  {
    "id": "cartographie",
    "title": "Cartographie nucléaire.pdf — Données métier",
    "filename": "Cartographie nucléaire.pdf",
    "pageCount": 7,
    "pages": [
      {
        "page": 1,
        "text": "Cartographie nucléaire vendredi 5 décembre 2025 15:10 Objectif : Faire une cartographie du nucléaire sur GitMind Architecture de la cartographie : Légende : DOMAINE\n• Donneur d'ordre / MOA\n• AMO / MOE\n• Projets\n• MOE de ces projets DEFENSE Donneurs d'ordre MOA défense / propulsion navale :\n• TechnicAtome (Accompagnement des maitres d'ouvrages public (ex : Service des infrastructures de la défense) pourl'adaptation des bases navales ou des sites de soutiens à la propulsion nucléaire\n• CEA (recherche nucléaire, fusion, démantèlement)\n• TechnicAtome (AMO (Assistance maitrise d'ouvrage) : Conception, réalisation, mise en service de réacteurs nucléairescompactes pour les réacteurs d'essais (ex RES).)\n• Réacteurs d'essais RES\n• Réacteur nucléaire expérimental militaire.\n• Test et développement des réacteurs des chaufferies nucléaires des sous-marins et porte avion français.\n• Simulation des réacteurs embarqués\n• Validation des technologies avant la mise en mer\n• Essais thermiques, matériaux, dans des environnements en mer\n• Former les marins nucléaires et simuler les conditions réelles\n• DGA Maitrises d'œuvres\n• TechnicAtome (Maitrise d'oeuvre : Conception, réalisation, mise en service de réacteurs nucléaires compactes dans lapropulsion nucléaire navale. Projets sur les chaufferies des portes avions et sous-marins)\n• Naval Group (Maitrise d'oeuvre : Conception, Production, Maintenance et démantèlement des sous-marins nucléaires &porte-avion pour la Marine Nationale) Trois projets :\n• Sous-marins nucléaires d'attaque : SNA\n• Sous-marins nucléaires lanceurs d'engins : S3G\n• Porte-avion de nouvelle génération : PANG (nommé le France Libre) S3G :\n• Naval group : Maitrise d'œuvre global (Conception, Production, Maintenance et démantèlement des sous-marinsnucléaires & porte-avion pour la Marine Nationale)\n• TechnicAtome : Maitrise d'œuvre systèmes majeurs nucléaire (Conception, Production, Maintenance et démantèlementdes chaufferies nucléaires)\n• Thales : Responsable de lot : Systèmes de détections et sonars (électroniques & systèmes embarqués)\n• MBDA : Responsable de lot : Systèmes d'armes (Intégration des M51 sur SNLE)\n• ArianeGroup : Responsable de lot : Missiles (Conception et fabrication des M51)\n• Framatome : Fournisseur : Composants pour les circuits primaires, l'instrumentation et le contrôle\n• Orano : Fournisseur : Combustible nucléaire\n• ThermoDyn (filiale GE) : Sous-traitant : Conception et fabrication des turbines vapeur\n• Compliqué de connaitre les autres sous-traitants qui nous intéressent car c'est secret défense. SNA :\n• Naval group : Maitrise d'œuvre global (Conception, Production, Maintenance et démantèlement des sous-marinsnucléaires & porte-avion pour la Marine Nationale)\n• TechnicAtome : Maitrise d'œuvre systèmes majeurs nucléaire (Conception, Production, Maintenance et démantèlementdes chaufferies nucléaires)\n• Thales : Responsable de lot : Systèmes de détections et sonars (électroniques & systèmes embarqués)\n• MBDA : Responsable de lot : Systèmes d'armes et missile\n• Framatome : Fournisseur : Composants pour les circuits primaires, l'instrumentation et le contrôle\n• Orano : Fournisseur : Combustible nucléaire\n• ThermoDyn (filiale GE) : Sous-traitant : Conception et fabrication des turbines vapeur\n• Compliqué de connaitre les autres sous-traitants qui nous intéressent car c'est secret défense. 24/04/2026 10:30 OneNote\nhttps://vacoaconseilcom-my.sharepoint.com/personal/a_montel_nabboo-conseil_com/_layouts/15/Doc.aspx?sourcedoc={244ebb60-0a1a-4c1b-a… 1/7"
      },
      {
        "page": 2,
        "text": "PANG :\n• Naval group : Maitrise d'œuvre global (Conception, Production, Maintenance et démantèlement des sous-marinsnucléaires & porte-avion pour la Marine Nationale)\n• TechnicAtome : Maitrise d'œuvre systèmes majeurs nucléaire (Conception, Production, Maintenance et démantèlementdes chaufferies nucléaires)\n• Chantiers de l'atlantique : Construction navale de la coque du bateau et assemblage du navire\n• Thales : Responsable de lot : Systèmes de détections et sonars (électroniques & systèmes embarqués)\n• MBDA : Responsable de lot : Systèmes d'armes et missile\n• Framatome : Fournisseur : Composants pour les circuits primaires, l'instrumentation et le contrôle\n• Orano : Fournisseur : Combustible nucléaire\n• Dassault Aviation : Fournisseur : Aviation embarqué\n• Arabelle Solution : Sous-traitant : Conception et fabrication des turbines vapeur\n• Général atomics : Catapulte électromagnétique\n• Compliqué de connaitre les autres sous-traitants qui nous intéressent car c'est secret défense. Différents corps de métiers que l'on pourra retrouver mais dont les lots ne sont pas forcément attribués:\n• Tuyauteries et fluides (comme Altrad Endel ou Fouré Lagadec)\n• HVAC & ventilation\n• Mécano soudure et structure\n• Electricité & câblage\n• Montage et intégration d'équipements\n• Logistique industrielle CIVIL Donneurs d'ordre MOA civil (cycle combustible, déchets) :\n• EDF (exploitant réacteurs nucléaire et pilotage nvx projets EPR2)\n• Démantèlement nucléaire Après l'exploitation en centrale, on doit retirer le combustible, décontaminer l'installation, démonter leséquipements, traiter et évacuer les déchets radioactifs. Exploitants :\n• EDF (pilote le démantèlement des sites, définition des stratégies et finances)\n• ORANO (ils démantèlent leurs propres installation, forte expertise en procédés et déchets)\n• CEA (démantèlement de laboratoire, travail sur des réacteurs expérimentaux) Régulateur > ASN (autorité de sureté nucléaire) > IRSN (Institut de radioprotection et de sûreté nucléaire) L'ASN autorise les différentes étapes de démantèlement, contrôle la sureté, valide les méthodes dedémantèlement. IRSN : Ils analysent les risques et conseillent l'ASN Les grandes étapes du démantèlement :\n• Arrêt définitif : Arrêt de la production, retrait du combustible\n• Décontamination : Nettoyage des circuits, réduction de la radioactivité\n• Démantèlement : Découpe des équipements, démontage des structures, souvent avec des robots en zonesirradiées\n• Gestion des déchets : Tri (faible / moyenne / haute activité), conditionnement, stockage via l'ANDRA\n• Assainissement du site : Contrôle radiologique, remise en état Les contraintes majeures :\n• Sûreté nucléaire\n• Radioprotection des travailleurs\n• Gestion des déchets sur des décennies\n• Coûts (très élevés)\n• Délais (très longs : entre 10 et 30 ans) Les ingénieries dans le démantèlement et leurs rôles : Concevoir, structurer et piloter le démantèlement. Il ne démontent pas, ils cadrent :\n• Assystem : Ingénierie système + PMO. Ils définissent les scenarii de démantèlement, rédigent lesspécifications techniques sur la sûreté et les déchets. Ils pilotent les projets (Planning, coûts et risques.Coordination multi métier, très présents chez EDF.\n• Artelia : Etudes de conception et dimensionnement des installations sur la partie ventilation, fluides.\n• Egis : Gestion environnementale (impact des déchets). Support aux exploitants.\n• Tractebel : Etudes de sûreté, architecture des systèmes, conception d'installations complexes. Intégrateurs (entre les études et le terrain). Ils font le lien entre la conception et la réalisation, ils prennent lesétudes et les transforme en solutions concrètes :\n• Orano : Conception des procédés de démantèlement. Développement des outils de découpe. Robotique. Exemple : Ils définissent comment découper une cuve radioactive\n• Onet Technologies : Intégrateur terrain orienté exploitation. Ils interviennent en zone contrôlées,démantèlement des équipements, gestion de radioprotection. Très orienté exécution et exploitation.\n• Spie Nucléaire : Intégrateur de système technique. Modification des installations élec / contrôle commande,déconnexion des systèmes avant démantèlement, mise en conformité.\n• Framatome : Intégrateur d'équipements nucléaires. Intervention sur des composants critiques,maintenances lourdes et modifications d'équipements. 24/04/2026 10:30 OneNote\nhttps://vacoaconseilcom-my.sharepoint.com/personal/a_montel_nabboo-conseil_com/_layouts/15/Doc.aspx?sourcedoc={244ebb60-0a1a-4c1b-a… 2/7"
      },
      {
        "page": 3,
        "text": "Différence clé : Ingénierie Intégrateur Conçoit Réalise / met en œuvre Études Travaux + solutions MOE / AMO Entre MOE et terrain Vision globale Solution concrète Exemple concret : Démantèlement d’un circuit :\n• Assystem / Artelia → définissent comment démonter (études, sûreté)\n• SPIE / Orano DS → coupent, démontent, traitent\n• Onet → intervient en zone, sécurise, exécute\n• Grands carénage Equipements à remplacer :\n• Générateurs de vapeur\n• Maintenance de cuve\n• Rénovation des turbines Sûreté nucléaire :\n• Renforcement des systèmes de secours\n• Ajout DUS (Diesel Ultime Secours)\n• Amélioration du refroidissement Modernisation :\n• Amélioration de la partie contrôle commande, l'instrumentation et les systèmes électriques\n• Assystem (Planification fine des arrêts, suivi de l'avancement coûts / délais / risques, coordination entre lesentreprises et gestion des modifications techniques)\n• Artelia (Conception des circuits de tuyauteries et de ventilations, dimensionnement des installations (débit,pression, thermiques), production PID / plan d'implantation et notes de calculs)\n• Tractebel (Etude de sûreté nucléaire, architecture systèmes, analyse des risques)\n• Framatome (Composants critiques : Remplacement des générateurs de vapeurs, maintenance du circuitprimaire, intervention sur les équipements du cœur réacteur)\n• Orano (Retrait et transport du combustible, traitement du combustible usé, gestion des déchets complexes)\n• Spie nucléaire (Electricité et contrôle commande : Modernisation des systèmes, remplacement des armoiresélectriques, tirage de câble, mise à jour contrôle commande)\n• Actemium (Automatisme : Fonctionnement des systèmes, programmation, supervision et mise en service del'automate)\n• Onet Technologies (Travail en zone contrôlée, décontamination, maintenance sous radiation)\n• Altrad Endel (Démontage et remontage : tuyauterie, soudure et montage des équipements)\n• Axima nucléaire (Conception de la ventilation, filtration et confinement radioactif)\n• Bouygues Construction et Vinci Construction (Génie civil : Construction des bâtiments DUS, renforcementdes structures existantes)\n• Ortec (Logistique et support : Préparation des interventions et support de la maintenance)\n• FRAMATOME (AMO / MOE : conception et fourniture de réacteur, cuve, générateur de vapeur, fourniture combustible)\n• EPR (PENLY & GRAVELINES & BUGEY) PENLY - Chantiers lancé 2 réacteurs de 1670 MWH, mise en service visée en 2038, budget de 2.7 milliards d'euros. Début des travaux principaux : 2024 - 2025, puis 12 ans de construction\n• Framatome (Cuves, générateur, combustible)\n• Orano (Enrichissement et transport du combustible)\n• Arabelle solution (Turbines vapeur et alternateurs)\n• Assystem (Planification fine des arrêts, suivi de l'avancement coûts / délais / risques, coordination entre lesentreprises et gestion des modifications techniques)\n• Egis (Maitrise d'œuvre sur la partie génie civil)\n• Bouygues & Eiffage (Génie civil : Travaux lourds (bâtiment réacteur))\n• Vinci (Génie civil : Infrastructure industriel)\n• Edvance (Conception / Design du réacteur EPR 2) GRAVELINES - Chantier pas encore lancé, planifié\n• Acteurs pas encore sélectionnés BUGEY - Chantier pas encore lancé, planifié\n• Acteurs pas encore sélectionnés 24/04/2026 10:30 OneNote\nhttps://vacoaconseilcom-my.sharepoint.com/personal/a_montel_nabboo-conseil_com/_layouts/15/Doc.aspx?sourcedoc={244ebb60-0a1a-4c1b-a… 3/7"
      },
      {
        "page": 4,
        "text": "• EPR 2 Flamanville\n• Assystem (Etudes de systèmes, études de sureté, études HVAC, et de la mécanique. Supervision techniquede chantier, étude et support commissiong)\n• Egis (Génie Civil : Design et analyse des structures (modélisation BIM, coordination technique de l'eau /bâtiment))\n• Tractebel (études de sureté, études de systèmes et calculs d'ingénierie. Support design des EPR.\n• Onet (Ingénierie d'installation nucléaire : Préparation d'intervention, support aux essais, contribution à laqualification des équipements)\n• Nuvia (Radioprotection côté chantier, contrôle qualité et essai, travaux spécialisés type mesures etcontrôles)\n• Bouygues Construction Expertise Nucléaire (Génie civil principal du bâtiment réacteur, du bâtimentcombustible : Bétons, ferraillages, cuves et enceintes)\n• Vinci (Via ses filiales Cegelec, Spie Nucléaire et Actemium) fait : (Câblage, Installation électrique du site :Installation et CVC nucléaire, essais)\n• Framatome (Assemblage cuve réacteur, circuit primaire, système de contrôle commande, assemblage descombustibles\n• Altrad Endel (Tuyauterie nucléaire, robinetterie, montage mécanique et support aux essais)\n• CEA (Maitrise d'ouvrage) RJH (Réacteur Jules HOROWITCH) Réacteur de recherche destiné à :\n• Tester les combustibles nucléaires actuels et futurs\n• Qualifier les matériaux soumis à irradiations\n• Produire des radioéléments pour la médecine nucléaire\n• Soutenir la sureté et la prolongation du parc nucléaire Caractéristiques :\n• Réacteur à eaux sous pression\n• Puissance 100 MW 5 maitres d'œuvres / actionnaires :\n• TechnicAtome : Conception et réalisation des composants principaux du bloc pile du réacteur\n• Framatome : Construction et réalisation des essais systèmes. Préparation des essais d'ensemble. Fournituredes capacité d'irradiation et les études combustibles.\n• EDF : Financeur + utilisateur de l'infrastructure\n• Orano : Financeur + utilisateur de l'infrastructure\n• Assytem : Assistance à maitrise d'œuvre et des études détaillés sur la partie GC. (Vérification des visas, planset notes de calculs). Transformation digitale du système d'information projet. Entreprises :\n• Vinci Energies : Conception et réalisation des piscines nucléaire du réacteur.\n• Vinci Energies (CEGELEC) : Fabrication du liner\n• Boccard : Conception et mise en service des systèmes fluides, tuyauteries de refroidissement et utilités\n• Axima nucléaire : Ingénierie nucléaire et travaux tuyauterie ventilation. Système de sureté\n• Fives Nordon : Fabrication de la tuyauterie industrielle. Support et ligne de ventilation.\n• ACEPP : Essais et datas\n• CEA (recherche nucléaire, fusion et démantèlement)\n• Dissuasion nucléaire (AETV)\n• Projet secret, pas d'informations\n• ITER\n• Daher (Logistique : Stockage, Gestion des composants sites Cadarache et port Saint Louis. Planification fluxinternationaux de grandes pièces et hautes technicités)\n• Egis (En groupement avec Assystem. Ils gèrent la partie BIM (modélisation, coordination des bâtiments etinfrastructures)).\n• Assystem (Au côtés d'Egis et Impressarios dans le consortium B.NEX).\n• CNIM (Fabrication d'équipement spécifiques pour le Tokamak. Réalisation structures mécaniques complexescomme les port plug structures et anneaux de pré compression destinés à accompagner les bobines.Usinage et fabrication des pièces mécaniques à hautes exigences).\n• GDES Revanti (Revêtements de hautes performances pour les bâtiments et les structures avec despropriétés spécifiques (résistants chimique, anticontamination, décontaminable).\n• Dalkia et Veolia (Groupement) : Contrat avec Fusion for Energy (F4E) visant à la maintenance et àl'exploitation de réseaux hydrauliques et surveillance traitement des déchets.\n• ORANO (cycle combustible, retraitement, extraction, enrichissement, recyclage, démantèlement)\n• Industrie du combustible 6 étapes :\n• Extraction uranium\n• Conversion (Transformation uranium en gaz) : Usine Oran à Tricastin et à Malvési.\n• Enrichissement : Augmenter la proportion d'U235\n• Fabrication du combustible : Production des assemblages utilisés dans les réacteurs\n• Consommation / utilisation du combustible dans les centrales\n• Recyclage dans l'usine de La Hague d'Orano. Les grands sites :\n• Tricastin : Conversion + Enrichissement\n• La Hague : Retraitement\n• Marcoule : Fabrication du combustible MOX (mixed oxid fuel). (92% uranium (du combustible usé) et 8% deplutonium (extrait des réacteurs)). Le Mox est utilisé dans certains réacteurs 24/04/2026 10:30 OneNote\nhttps://vacoaconseilcom-my.sharepoint.com/personal/a_montel_nabboo-conseil_com/_layouts/15/Doc.aspx?sourcedoc={244ebb60-0a1a-4c1b-a… 4/7"
      },
      {
        "page": 5,
        "text": "À partir de l’adresse <https://teams.microsoft.com/v2/>\n• ANDRA (gestion déchets radioactifs)\n• CIGEO Actionnaire (financeurs) : EDF, Orano, CEA\n• Egis : Ingénierie ouvrages et bâtiments : Maitrise d'œuvre et ingénierie des ouvrages de surface. Ils s'occupent des études GC et VRD desplateformes industrielles. Intégration des contraintes nucléaires dans les infrastructures\n• Artelia : Ingénierie ouvrages et bâtiments : Même positionnement qu'Egis mais sur la partie bâtiment industriels, et systèmes énergétiques. Ils font laconception des lots CVC des bâtiments nucléaire. Dimensionnent des systèmes de confinements. InterfaceMEP <> Sureté <> Exploitation.\n• Vinci : Construction : Comme Egis, ils vont avoir toutes la partie GC nucléaire et ouvrages complexes. Construction des ouvragesde surface nucléaire, bétons spéciaux, GC profonds, méthode d'exécution sous contrainte ASN\n• Bouygues : Construction : Ouvrage spéciaux et GC à forte technicité. Creusement et réalisation des puits d'accès, structures complexesà grandes profondeurs, soutènement\n• Eiffage : GC industriel longue durée. Réalisation d'ouvrages en béton type bâtiment d'exploitation.\n• NGE : Terrassement et GC sous terrain (terrassement, creusement galeries, soutènement, béton projeté,partie logistique et accès chantier)\n• HERRENKNECHT : Fabriquant de tunnelier (spécialisé dans l'argile).\n• Equans : Intégration technique : Intégrateur énergétique et technique (CVC nucléaire, confinement, filtration et toutes les redondances)\n• Spie : Intégration technique : Electricité industrielle et systèmes complexes (Electricité, automatisme et contrôle commande)\n• Altrad : Service industriel et équipements spécifiques. Equipements mécaniques, structures mécaniques,appui exploitation et maintenance nucléaire..\n• Fives : Ingénierie industriel et systèmes automatisés (convoyeurs lourds, systèmes de manutentionautomatisés).\n• Orano : Expertise technique sur les colis de déchets. Expertise pour l'installation du site CIGEO pour vérifierla conformité.\n• Assystem : AMO, Pilotage projet et interface : Traduction d'exigences réglementaires en solutions industrielles. Appui planning, coûts, risques, support àl'instruction réglementaire, dossiers de sureté.\n• Tractebel : Sureté, Etudes long terme et expertise nucléaire : Définition de sureté des installations (ventilations, confinements, installations électriques). Mais aussi étude géotechnique et comportement des ouvrages (simulation du comportement en fonctionde l'argilité, des galeries et des ouvrages sur le très long terme). Mais aussi : appui technique indirect à l'Andra (justification technique face aux exigences de l'ASN etcontribue aux réponses aux questions réglementaires. Ils sécurisent techniquement les décisions.)\n• Entreprises des SMR / Réacteurs innovants ?\n• SMR / Réacteurs innovants\n• Nuward\n• Joint venture EDF x TechnicAtome\n• Deux réacteurs par centrale à eau pressurisée.\n• Puissance : 2 x 170 MW\n• Mise sur le marché prévue pour 2030\n• Voir cartographie de Servir 2040 sur les réacteurs innovants\n• Renaissance Fusion SAS\n• STELLARIA\n• TARANIS\n• THORIZON\n• XMAR\n• BLUE CAPSULE\n• CALOGENA\n• HEXANA\n• Jimmy Energy SAS\n• NEWCLEO\n• OTREA NUCLEAR ENERGY 24/04/2026 10:30 OneNote\nhttps://vacoaconseilcom-my.sharepoint.com/personal/a_montel_nabboo-conseil_com/_layouts/15/Doc.aspx?sourcedoc={244ebb60-0a1a-4c1b-a… 5/7"
      },
      {
        "page": 6,
        "text": "Liste des MOE : Grandes ingénieries :\n• Assytem\n• Egis\n• Tractebel\n• Nuvia (groupe Vinvi)\n• Onet Technologies\n• Ortec\n• Ineo Nucléaire\n• Ingerop\n• Artelia\n• Cyclife Entreprises :\n• Spie Nucléaire\n• Endel\n• Valiance (Fayat)\n• Axima\n• Bouygues Construction expertises nucléaires\n• Clemessy\n• SNEF\n• Billfinger Grands projets dans le nucléaire en France :\n• Grands carénage : Prolongation des réacteurs nucléaire jusqu'à 50 ans et au-delà. Renforcement du génie civil des bâtimentsréacteurs, modernisation des systèmes de contrôle commande, travaux sismiques et incendies, remise à niveau HVAC,remplacement des pompes primaires, robinetteries et pompes associées, amélioration des systèmes de suretés. 56 réacteurs sont concernés jusqu'à 2035\n• EPR : Construction de 6 réacteurs nouvelles génération (EPR). Meilleures performances : 1600 MW au lieu de 1300 MW pourles anciens. Ils sont conçus avec une double sécurité (double enceinte), récupération du corium. Les réacteurs doivent être construits à Penly et à Gravelines\n• EPR 2 Flamanville : Fin travaux à Flamanville 3 : Mise en service nucléaire, finalisation du contrôle commande, qualificationdes équipements primaires, réglage des systèmes auxiliaires, essais chauds / froids\n• CIGEO : Par l'ANDRA pour le stockage profond de déchets radioactifs. Construction de galeries souterraines avec des postes deventilation et d'extraction, systèmes de manutention robotisés, installation de conditionnement des déchets, sécurisation despuits et tunnels.\n• Démantèlement nucléaire de Fessenheim, Chinon, Bugey : Plus de 20 réacteurs à démanteler dans les années à venir. Déposedes équipements, assainissement radiologique, découpe sous immersion, robotique nucléaire, conditionnement des déchets,ventilation et confinement\n• ITER : Par CEA entre autre, sur le site de Cadarache. Fusion nucléaire. Bâtiment Tokamak. Intégration mécanique d'aimantsgéants, système cryogéniques, systèmes de vide, fonctionnement au tritium\n• SMR / Réacteurs innovants : Conception du cœurs, neutronique thermomécanique, sureté, layout / installations, maquetteset prototypes\n• Industrie du combustible : Géré par Orano sur les sites de La Hague, Tricastin et Melox. Modernisation des ateliers, systèmesde ventilations nucléaire, revamping des procédés chimiques, Système de manutention, Automatisation.\n• Propulsion nucléaire militaire : Conception réacteurs naval, systèmes fluidiques et mécaniques, intégration dans les sous-marins et porte avion, soutien en service.\n• Dissuasion nucléaire (AETV) : Projet AETV ?\n• Réacteurs d'essais : Projet RES ? 24/04/2026 10:30 OneNote\nhttps://vacoaconseilcom-my.sharepoint.com/personal/a_montel_nabboo-conseil_com/_layouts/15/Doc.aspx?sourcedoc={244ebb60-0a1a-4c1b-a… 6/7"
      },
      {
        "page": 7,
        "text": "24/04/2026 10:30 OneNote\nhttps://vacoaconseilcom-my.sharepoint.com/personal/a_montel_nabboo-conseil_com/_layouts/15/Doc.aspx?sourcedoc={244ebb60-0a1a-4c1b-a… 7/7"
      }
    ]
  }
];

export const sourceDataAudit: SourceDataAuditItem[] = [
  {
    "id": "audit-consigne-01",
    "source": "Carto nuc. consigne.pdf",
    "section": "Cahier des charges",
    "information": "Présentation attendue sous format PPT ; l'application web conserve l'objectif de support commercial et de présentation interne.",
    "relatedProjects": [],
    "relatedActors": [],
    "relatedSkills": []
  },
  {
    "id": "audit-consigne-02",
    "source": "Carto nuc. consigne.pdf",
    "section": "Méthode commerciale",
    "information": "Partir des projets et des actualités pour construire la cartographie commerciale.",
    "relatedProjects": [],
    "relatedActors": [],
    "relatedSkills": []
  },
  {
    "id": "audit-consigne-03",
    "source": "Carto nuc. consigne.pdf",
    "section": "Dalkia / foisonnement",
    "information": "Exemple : Dalkia a gagné le réseau de chaleur de Paris ; besoin cité de 4 ETP en procédés ; objectif de foisonner le compte, y compris autres BU et GINKO.",
    "relatedProjects": [
      "iter"
    ],
    "relatedActors": [
      "dalkia"
    ],
    "relatedSkills": [
      "Procédés",
      "Réseaux hydrauliques",
      "Traitement déchets"
    ]
  },
  {
    "id": "audit-consigne-04",
    "source": "Carto nuc. consigne.pdf",
    "section": "Construction PPT",
    "information": "Mettre en avant les gros projets sous forme de pieuvre avec les acteurs et les spécialités de chaque acteur.",
    "relatedProjects": [],
    "relatedActors": [],
    "relatedSkills": []
  },
  {
    "id": "audit-consigne-05",
    "source": "Carto nuc. consigne.pdf",
    "section": "RJH / industriel fabricant",
    "information": "Exemple cité : RJH avec REEL, qui fait des systèmes de levage ; les fabricants d'outils à destination du nucléaire sont à considérer.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [
      "reel"
    ],
    "relatedSkills": [
      "Manutention / levage"
    ]
  },
  {
    "id": "audit-consigne-06",
    "source": "Carto nuc. consigne.pdf",
    "section": "Plan de charge",
    "information": "Estimer le plan de charge dans les prochaines années.",
    "relatedProjects": [],
    "relatedActors": [],
    "relatedSkills": []
  },
  {
    "id": "audit-consigne-07",
    "source": "Carto nuc. consigne.pdf",
    "section": "Comptes majeurs",
    "information": "Zoom demandé sur Air Liquide, Framatome, TotalEnergies et Equans.",
    "relatedProjects": [],
    "relatedActors": [
      "air-liquide",
      "framatome",
      "totalenergies",
      "equans"
    ],
    "relatedSkills": []
  },
  {
    "id": "audit-consigne-08",
    "source": "Carto nuc. consigne.pdf",
    "section": "EDF",
    "information": "Zoom demandé sur toutes les filiales d'EDF.",
    "relatedProjects": [],
    "relatedActors": [
      "edf",
      "edvance"
    ],
    "relatedSkills": []
  },
  {
    "id": "audit-consigne-09",
    "source": "Carto nuc. consigne.pdf",
    "section": "Priorisation stratégique",
    "information": "Lever le pied sur l'hydrogène ; prioriser nucléaire, biomasse et captage de CO2.",
    "relatedProjects": [],
    "relatedActors": [],
    "relatedSkills": []
  },
  {
    "id": "audit-consigne-10",
    "source": "Carto nuc. consigne.pdf",
    "section": "Périmètre nucléaire",
    "information": "Zoom demandé sur nucléaire civil et nucléaire militaire avec acteurs, champs de compétences et filiales.",
    "relatedProjects": [],
    "relatedActors": [],
    "relatedSkills": []
  },
  {
    "id": "audit-consigne-11",
    "source": "Carto nuc. consigne.pdf",
    "section": "Rythme",
    "information": "Point hebdomadaire chaque jeudi.",
    "relatedProjects": [],
    "relatedActors": [],
    "relatedSkills": []
  },
  {
    "id": "audit-arch-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "Architecture",
    "information": "Architecture de cartographie : domaine, donneur d'ordre / MOA, AMO / MOE, projets et MOE des projets.",
    "relatedProjects": [],
    "relatedActors": [],
    "relatedSkills": []
  },
  {
    "id": "audit-defense-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "Défense MOA",
    "information": "TechnicAtome accompagne les maîtres d'ouvrages publics, par exemple le Service des infrastructures de la défense, pour l'adaptation des bases navales ou sites de soutien à la propulsion nucléaire.",
    "relatedProjects": [
      "sna", "s3g", "pang"
    ],
    "relatedActors": [
      "technic-atome"
    ],
    "relatedSkills": [
      "Propulsion nucléaire navale"
    ]
  },
  {
    "id": "audit-defense-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "Défense MOA",
    "information": "CEA est cité pour recherche nucléaire, fusion et démantèlement.",
    "relatedProjects": [
      "rjh",
      "iter",
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "cea"
    ],
    "relatedSkills": [
      "Recherche nucléaire",
      "Fusion",
      "Démantèlement"
    ]
  },
  {
    "id": "audit-defense-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "TechnicAtome AMO",
    "information": "TechnicAtome est cité comme AMO pour conception, réalisation et mise en service de réacteurs nucléaires compacts pour les réacteurs d'essais, dont RES.",
    "relatedProjects": [
      "res"
    ],
    "relatedActors": [
      "technic-atome"
    ],
    "relatedSkills": [
      "Réacteurs compacts"
    ]
  },
  {
    "id": "audit-defense-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "RES",
    "information": "RES est un réacteur nucléaire expérimental militaire.",
    "relatedProjects": [
      "res"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Réacteurs d'essais"
    ]
  },
  {
    "id": "audit-defense-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "RES",
    "information": "RES sert aux tests et développements des réacteurs des chaufferies nucléaires de sous-marins et porte-avion français.",
    "relatedProjects": [
      "res"
    ],
    "relatedActors": [
      "technic-atome",
      "naval-group"
    ],
    "relatedSkills": [
      "Chaufferies nucléaires"
    ]
  },
  {
    "id": "audit-defense-06",
    "source": "Cartographie nucléaire.pdf",
    "section": "RES",
    "information": "RES simule des réacteurs embarqués et valide des technologies avant la mise en mer.",
    "relatedProjects": [
      "res"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Simulation",
      "Validation technologique"
    ]
  },
  {
    "id": "audit-defense-07",
    "source": "Cartographie nucléaire.pdf",
    "section": "RES",
    "information": "RES couvre essais thermiques et matériaux en environnement marin.",
    "relatedProjects": [
      "res"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Essais thermiques",
      "Matériaux"
    ]
  },
  {
    "id": "audit-defense-08",
    "source": "Cartographie nucléaire.pdf",
    "section": "RES",
    "information": "RES sert à former les marins nucléaires et à simuler les conditions réelles.",
    "relatedProjects": [
      "res"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Formation",
      "Simulation"
    ]
  },
  {
    "id": "audit-defense-09",
    "source": "Cartographie nucléaire.pdf",
    "section": "Défense MOA",
    "information": "DGA est citée dans les donneurs d'ordre / MOA défense.",
    "relatedProjects": [
      "sna", "s3g", "pang"
    ],
    "relatedActors": [
      "dga"
    ],
    "relatedSkills": []
  },
  {
    "id": "audit-defense-10",
    "source": "Cartographie nucléaire.pdf",
    "section": "MOE défense",
    "information": "TechnicAtome est MOE pour conception, réalisation et mise en service de réacteurs nucléaires compacts de propulsion navale, sur chaufferies de porte-avions et sous-marins.",
    "relatedProjects": [
      "sna",
      "s3g",
      "pang"
    ],
    "relatedActors": [
      "technic-atome"
    ],
    "relatedSkills": [
      "Propulsion nucléaire navale",
      "Chaufferies nucléaires"
    ]
  },
  {
    "id": "audit-defense-11",
    "source": "Cartographie nucléaire.pdf",
    "section": "MOE défense",
    "information": "Naval Group est MOE global pour conception, production, maintenance et démantèlement de sous-marins nucléaires et porte-avion pour la Marine Nationale.",
    "relatedProjects": [
      "sna",
      "s3g",
      "pang"
    ],
    "relatedActors": [
      "naval-group"
    ],
    "relatedSkills": [
      "Construction navale",
      "Maintenance",
      "Démantèlement"
    ]
  },
  {
    "id": "audit-defense-12",
    "source": "Cartographie nucléaire.pdf",
    "section": "Projets défense",
    "information": "Trois projets cités : SNA, S3G et PANG / France Libre.",
    "relatedProjects": [
      "sna",
      "s3g",
      "pang"
    ],
    "relatedActors": [],
    "relatedSkills": []
  },
  {
    "id": "audit-s3g-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "S3G",
    "information": "S3G : Naval Group MOE global.",
    "relatedProjects": [
      "s3g"
    ],
    "relatedActors": [
      "naval-group"
    ],
    "relatedSkills": [
      "Construction navale"
    ]
  },
  {
    "id": "audit-s3g-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "S3G",
    "information": "S3G : TechnicAtome MOE systèmes majeurs nucléaire / chaufferies.",
    "relatedProjects": [
      "s3g"
    ],
    "relatedActors": [
      "technic-atome"
    ],
    "relatedSkills": [
      "Chaufferies nucléaires"
    ]
  },
  {
    "id": "audit-s3g-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "S3G",
    "information": "S3G : Thales responsable de lot systèmes de détection et sonars, électroniques et systèmes embarqués.",
    "relatedProjects": [
      "s3g"
    ],
    "relatedActors": [
      "thales"
    ],
    "relatedSkills": [
      "Sonars",
      "Systèmes embarqués"
    ]
  },
  {
    "id": "audit-s3g-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "S3G",
    "information": "S3G : MBDA responsable de lot systèmes d'armes, intégration des M51 sur SNLE.",
    "relatedProjects": [
      "s3g"
    ],
    "relatedActors": [
      "mbda"
    ],
    "relatedSkills": [
      "Systèmes d'armes"
    ]
  },
  {
    "id": "audit-s3g-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "S3G",
    "information": "S3G : ArianeGroup responsable de lot missiles, conception et fabrication des M51.",
    "relatedProjects": [
      "s3g"
    ],
    "relatedActors": [
      "arianegroup"
    ],
    "relatedSkills": [
      "Missiles"
    ]
  },
  {
    "id": "audit-s3g-06",
    "source": "Cartographie nucléaire.pdf",
    "section": "S3G",
    "information": "S3G : Framatome fournisseur de composants pour circuits primaires, instrumentation et contrôle.",
    "relatedProjects": [
      "s3g"
    ],
    "relatedActors": [
      "framatome"
    ],
    "relatedSkills": [
      "Circuit primaire",
      "Instrumentation",
      "Contrôle commande"
    ]
  },
  {
    "id": "audit-s3g-07",
    "source": "Cartographie nucléaire.pdf",
    "section": "S3G",
    "information": "S3G : Orano fournisseur du combustible nucléaire.",
    "relatedProjects": [
      "s3g"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Combustible"
    ]
  },
  {
    "id": "audit-s3g-08",
    "source": "Cartographie nucléaire.pdf",
    "section": "S3G",
    "information": "S3G : ThermoDyn, filiale GE, sous-traitant pour conception et fabrication de turbines vapeur.",
    "relatedProjects": [
      "s3g"
    ],
    "relatedActors": [
      "thermodyn-ge"
    ],
    "relatedSkills": [
      "Turbines vapeur"
    ]
  },
  {
    "id": "audit-s3g-09",
    "source": "Cartographie nucléaire.pdf",
    "section": "S3G",
    "information": "S3G : autres sous-traitants difficiles à connaître car secret défense.",
    "relatedProjects": [
      "s3g"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Information limitée / secret défense"
    ]
  },
  {
    "id": "audit-sna-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "SNA",
    "information": "SNA : Naval Group MOE global.",
    "relatedProjects": [
      "sna"
    ],
    "relatedActors": [
      "naval-group"
    ],
    "relatedSkills": [
      "Construction navale"
    ]
  },
  {
    "id": "audit-sna-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "SNA",
    "information": "SNA : TechnicAtome MOE systèmes majeurs nucléaire / chaufferies.",
    "relatedProjects": [
      "sna"
    ],
    "relatedActors": [
      "technic-atome"
    ],
    "relatedSkills": [
      "Chaufferies nucléaires"
    ]
  },
  {
    "id": "audit-sna-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "SNA",
    "information": "SNA : Thales responsable de lot systèmes de détection et sonars.",
    "relatedProjects": [
      "sna"
    ],
    "relatedActors": [
      "thales"
    ],
    "relatedSkills": [
      "Sonars",
      "Systèmes embarqués"
    ]
  },
  {
    "id": "audit-sna-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "SNA",
    "information": "SNA : MBDA responsable de lot systèmes d'armes et missiles.",
    "relatedProjects": [
      "sna"
    ],
    "relatedActors": [
      "mbda"
    ],
    "relatedSkills": [
      "Systèmes d'armes",
      "Missiles"
    ]
  },
  {
    "id": "audit-sna-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "SNA",
    "information": "SNA : Framatome fournisseur circuits primaires, instrumentation et contrôle.",
    "relatedProjects": [
      "sna"
    ],
    "relatedActors": [
      "framatome"
    ],
    "relatedSkills": [
      "Circuit primaire",
      "Instrumentation",
      "Contrôle commande"
    ]
  },
  {
    "id": "audit-sna-06",
    "source": "Cartographie nucléaire.pdf",
    "section": "SNA",
    "information": "SNA : Orano fournisseur combustible nucléaire.",
    "relatedProjects": [
      "sna"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Combustible"
    ]
  },
  {
    "id": "audit-sna-07",
    "source": "Cartographie nucléaire.pdf",
    "section": "SNA",
    "information": "SNA : ThermoDyn / GE sous-traitant turbines vapeur.",
    "relatedProjects": [
      "sna"
    ],
    "relatedActors": [
      "thermodyn-ge"
    ],
    "relatedSkills": [
      "Turbines vapeur"
    ]
  },
  {
    "id": "audit-sna-08",
    "source": "Cartographie nucléaire.pdf",
    "section": "SNA",
    "information": "SNA : autres sous-traitants difficiles à connaître car secret défense.",
    "relatedProjects": [
      "sna"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Information limitée / secret défense"
    ]
  },
  {
    "id": "audit-pang-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "PANG",
    "information": "PANG / France Libre : Naval Group MOE global.",
    "relatedProjects": [
      "pang"
    ],
    "relatedActors": [
      "naval-group"
    ],
    "relatedSkills": [
      "Construction navale"
    ]
  },
  {
    "id": "audit-pang-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "PANG",
    "information": "PANG : TechnicAtome MOE systèmes majeurs nucléaire / chaufferies.",
    "relatedProjects": [
      "pang"
    ],
    "relatedActors": [
      "technic-atome"
    ],
    "relatedSkills": [
      "Chaufferies nucléaires"
    ]
  },
  {
    "id": "audit-pang-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "PANG",
    "information": "PANG : Chantiers de l'Atlantique construit la coque et assemble le navire.",
    "relatedProjects": [
      "pang"
    ],
    "relatedActors": [
      "chantiers-atlantique"
    ],
    "relatedSkills": [
      "Construction navale",
      "Assemblage"
    ]
  },
  {
    "id": "audit-pang-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "PANG",
    "information": "PANG : Thales responsable systèmes de détection et sonars.",
    "relatedProjects": [
      "pang"
    ],
    "relatedActors": [
      "thales"
    ],
    "relatedSkills": [
      "Sonars"
    ]
  },
  {
    "id": "audit-pang-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "PANG",
    "information": "PANG : MBDA responsable systèmes d'armes et missiles.",
    "relatedProjects": [
      "pang"
    ],
    "relatedActors": [
      "mbda"
    ],
    "relatedSkills": [
      "Systèmes d'armes",
      "Missiles"
    ]
  },
  {
    "id": "audit-pang-06",
    "source": "Cartographie nucléaire.pdf",
    "section": "PANG",
    "information": "PANG : Framatome fournisseur circuits primaires, instrumentation et contrôle.",
    "relatedProjects": [
      "pang"
    ],
    "relatedActors": [
      "framatome"
    ],
    "relatedSkills": [
      "Circuit primaire",
      "Instrumentation",
      "Contrôle commande"
    ]
  },
  {
    "id": "audit-pang-07",
    "source": "Cartographie nucléaire.pdf",
    "section": "PANG",
    "information": "PANG : Orano fournisseur combustible nucléaire.",
    "relatedProjects": [
      "pang"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Combustible"
    ]
  },
  {
    "id": "audit-pang-08",
    "source": "Cartographie nucléaire.pdf",
    "section": "PANG",
    "information": "PANG : Dassault Aviation fournisseur aviation embarquée.",
    "relatedProjects": [
      "pang"
    ],
    "relatedActors": [
      "dassault-aviation"
    ],
    "relatedSkills": [
      "Aviation embarquée"
    ]
  },
  {
    "id": "audit-pang-09",
    "source": "Cartographie nucléaire.pdf",
    "section": "PANG",
    "information": "PANG : Arabelle Solutions sous-traitant turbines vapeur.",
    "relatedProjects": [
      "pang"
    ],
    "relatedActors": [
      "arabelle-solutions"
    ],
    "relatedSkills": [
      "Turbines vapeur"
    ]
  },
  {
    "id": "audit-pang-10",
    "source": "Cartographie nucléaire.pdf",
    "section": "PANG",
    "information": "PANG : General Atomics cité pour catapulte électromagnétique.",
    "relatedProjects": [
      "pang"
    ],
    "relatedActors": [
      "general-atomics"
    ],
    "relatedSkills": [
      "Catapulte électromagnétique"
    ]
  },
  {
    "id": "audit-pang-11",
    "source": "Cartographie nucléaire.pdf",
    "section": "PANG",
    "information": "PANG : autres sous-traitants difficiles à connaître car secret défense.",
    "relatedProjects": [
      "pang"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Information limitée / secret défense"
    ]
  },
  {
    "id": "audit-defense-metiers-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "Métiers défense",
    "information": "Lots non forcément attribués : tuyauteries et fluides, avec exemples Altrad Endel ou Fouré Lagadec.",
    "relatedProjects": [
      "pang",
      "sna",
      "s3g"
    ],
    "relatedActors": [
      "altrad-endel",
      "foure-lagadec"
    ],
    "relatedSkills": [
      "Tuyauterie / fluides"
    ]
  },
  {
    "id": "audit-defense-metiers-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "Métiers défense",
    "information": "Lots non forcément attribués : HVAC & ventilation.",
    "relatedProjects": [
      "pang",
      "sna",
      "s3g"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "HVAC",
      "Ventilation"
    ]
  },
  {
    "id": "audit-defense-metiers-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "Métiers défense",
    "information": "Lots non forcément attribués : mécano-soudure et structure.",
    "relatedProjects": [
      "pang",
      "sna",
      "s3g"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Mécano-soudure",
      "Structure"
    ]
  },
  {
    "id": "audit-defense-metiers-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "Métiers défense",
    "information": "Lots non forcément attribués : électricité & câblage.",
    "relatedProjects": [
      "pang",
      "sna",
      "s3g"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Électricité",
      "Câblage"
    ]
  },
  {
    "id": "audit-defense-metiers-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "Métiers défense",
    "information": "Lots non forcément attribués : montage et intégration d'équipements.",
    "relatedProjects": [
      "pang",
      "sna",
      "s3g"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Montage",
      "Intégration équipements"
    ]
  },
  {
    "id": "audit-defense-metiers-06",
    "source": "Cartographie nucléaire.pdf",
    "section": "Métiers défense",
    "information": "Lots non forcément attribués : logistique industrielle.",
    "relatedProjects": [
      "pang",
      "sna",
      "s3g"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Logistique industrielle"
    ]
  },
  {
    "id": "audit-civil-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "Civil",
    "information": "EDF est donneur d'ordre / MOA civil, exploitant des réacteurs nucléaires et pilote des nouveaux projets EPR2.",
    "relatedProjects": [
      "epr-penly",
      "epr-gravelines",
      "epr-bugey"
    ],
    "relatedActors": [
      "edf"
    ],
    "relatedSkills": [
      "Exploitation nucléaire"
    ]
  },
  {
    "id": "audit-demant-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "Démantèlement",
    "information": "Après exploitation en centrale : retrait combustible, décontamination, démontage équipements, traitement et évacuation déchets radioactifs.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "edf",
      "orano",
      "cea"
    ],
    "relatedSkills": [
      "Démantèlement",
      "Déchets radioactifs"
    ]
  },
  {
    "id": "audit-demant-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "Démantèlement exploitants",
    "information": "EDF pilote le démantèlement des sites, définit les stratégies et finance.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "edf"
    ],
    "relatedSkills": [
      "Pilotage",
      "Financement"
    ]
  },
  {
    "id": "audit-demant-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "Démantèlement exploitants",
    "information": "Orano démantèle ses propres installations et possède une forte expertise procédés et déchets.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Procédés",
      "Déchets"
    ]
  },
  {
    "id": "audit-demant-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "Démantèlement exploitants",
    "information": "CEA intervient sur démantèlement de laboratoire et réacteurs expérimentaux.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "cea"
    ],
    "relatedSkills": [
      "Démantèlement",
      "Réacteurs expérimentaux"
    ]
  },
  {
    "id": "audit-demant-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "Régulation",
    "information": "ASN autorise les étapes, contrôle la sûreté et valide les méthodes de démantèlement.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "asn"
    ],
    "relatedSkills": [
      "Sûreté nucléaire"
    ]
  },
  {
    "id": "audit-demant-06",
    "source": "Cartographie nucléaire.pdf",
    "section": "Régulation",
    "information": "IRSN analyse les risques et conseille l'ASN.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "irsn"
    ],
    "relatedSkills": [
      "Analyse de risques",
      "Radioprotection"
    ]
  },
  {
    "id": "audit-demant-07",
    "source": "Cartographie nucléaire.pdf",
    "section": "Étapes démantèlement",
    "information": "Étape : arrêt définitif, arrêt de la production et retrait du combustible.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Démantèlement"
    ]
  },
  {
    "id": "audit-demant-08",
    "source": "Cartographie nucléaire.pdf",
    "section": "Étapes démantèlement",
    "information": "Étape : décontamination, nettoyage des circuits et réduction de la radioactivité.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Décontamination"
    ]
  },
  {
    "id": "audit-demant-09",
    "source": "Cartographie nucléaire.pdf",
    "section": "Étapes démantèlement",
    "information": "Étape : démantèlement, découpe des équipements et démontage des structures, souvent avec robots en zones irradiées.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Découpe",
      "Robotique"
    ]
  },
  {
    "id": "audit-demant-10",
    "source": "Cartographie nucléaire.pdf",
    "section": "Étapes démantèlement",
    "information": "Étape : gestion des déchets, tri faible / moyenne / haute activité, conditionnement et stockage via ANDRA.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey",
      "cigeo"
    ],
    "relatedActors": [
      "andra"
    ],
    "relatedSkills": [
      "Déchets radioactifs",
      "Conditionnement"
    ]
  },
  {
    "id": "audit-demant-11",
    "source": "Cartographie nucléaire.pdf",
    "section": "Étapes démantèlement",
    "information": "Étape : assainissement du site, contrôle radiologique et remise en état.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Contrôle radiologique"
    ]
  },
  {
    "id": "audit-demant-12",
    "source": "Cartographie nucléaire.pdf",
    "section": "Contraintes démantèlement",
    "information": "Contraintes majeures : sûreté nucléaire, radioprotection des travailleurs, gestion des déchets sur des décennies, coûts très élevés et délais très longs entre 10 et 30 ans.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Sûreté nucléaire",
      "Radioprotection",
      "Déchets",
      "Coûts",
      "Délais"
    ]
  },
  {
    "id": "audit-demant-13",
    "source": "Cartographie nucléaire.pdf",
    "section": "Ingénierie démantèlement",
    "information": "Les ingénieries conçoivent, structurent et pilotent le démantèlement ; elles cadrent mais ne démontent pas.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "assystem",
      "artelia",
      "egis",
      "tractebel"
    ],
    "relatedSkills": [
      "Ingénierie",
      "PMO"
    ]
  },
  {
    "id": "audit-demant-14",
    "source": "Cartographie nucléaire.pdf",
    "section": "Ingénierie démantèlement",
    "information": "Assystem : ingénierie système + PMO, scénarios, spécifications sûreté et déchets, planning/coûts/risques, coordination multi-métier, très présent chez EDF.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "assystem"
    ],
    "relatedSkills": [
      "PMO",
      "Sûreté",
      "Déchets"
    ]
  },
  {
    "id": "audit-demant-15",
    "source": "Cartographie nucléaire.pdf",
    "section": "Ingénierie démantèlement",
    "information": "Artelia : conception et dimensionnement ventilation et fluides.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "artelia"
    ],
    "relatedSkills": [
      "Ventilation",
      "Fluides"
    ]
  },
  {
    "id": "audit-demant-16",
    "source": "Cartographie nucléaire.pdf",
    "section": "Ingénierie démantèlement",
    "information": "Egis : gestion environnementale, impact des déchets, support aux exploitants.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "egis"
    ],
    "relatedSkills": [
      "Environnement",
      "Déchets"
    ]
  },
  {
    "id": "audit-demant-17",
    "source": "Cartographie nucléaire.pdf",
    "section": "Ingénierie démantèlement",
    "information": "Tractebel : études de sûreté, architecture systèmes, conception d'installations complexes.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "tractebel"
    ],
    "relatedSkills": [
      "Sûreté",
      "Architecture systèmes"
    ]
  },
  {
    "id": "audit-demant-18",
    "source": "Cartographie nucléaire.pdf",
    "section": "Intégrateurs démantèlement",
    "information": "Les intégrateurs font le lien entre conception et réalisation, transformant les études en solutions concrètes.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "orano",
      "onet-technologies",
      "spie-nucleaire",
      "framatome"
    ],
    "relatedSkills": [
      "Intégration"
    ]
  },
  {
    "id": "audit-demant-19",
    "source": "Cartographie nucléaire.pdf",
    "section": "Intégrateurs démantèlement",
    "information": "Orano : procédés de démantèlement, outils de découpe, robotique, exemple découpe d'une cuve radioactive.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Procédés",
      "Découpe",
      "Robotique"
    ]
  },
  {
    "id": "audit-demant-20",
    "source": "Cartographie nucléaire.pdf",
    "section": "Intégrateurs démantèlement",
    "information": "Onet Technologies : intégrateur terrain orienté exploitation, zone contrôlée, équipements, radioprotection, exécution.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "onet-technologies"
    ],
    "relatedSkills": [
      "Zone contrôlée",
      "Radioprotection"
    ]
  },
  {
    "id": "audit-demant-21",
    "source": "Cartographie nucléaire.pdf",
    "section": "Intégrateurs démantèlement",
    "information": "Spie Nucléaire : systèmes techniques, installations électriques / contrôle commande, déconnexion systèmes avant démantèlement, mise en conformité.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "spie-nucleaire"
    ],
    "relatedSkills": [
      "Électricité",
      "Contrôle commande"
    ]
  },
  {
    "id": "audit-demant-22",
    "source": "Cartographie nucléaire.pdf",
    "section": "Intégrateurs démantèlement",
    "information": "Framatome : intégrateur d'équipements nucléaires, composants critiques, maintenances lourdes et modifications d'équipements.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "framatome"
    ],
    "relatedSkills": [
      "Équipements nucléaires",
      "Maintenance"
    ]
  },
  {
    "id": "audit-demant-23",
    "source": "Cartographie nucléaire.pdf",
    "section": "Différence ingénierie / intégrateur",
    "information": "Ingénierie : conçoit, études, MOE/AMO, vision globale. Intégrateur : réalise/met en œuvre, travaux et solutions, entre MOE et terrain, solution concrète.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "assystem",
      "artelia",
      "orano",
      "spie-nucleaire",
      "onet-technologies"
    ],
    "relatedSkills": [
      "Ingénierie",
      "Intégration"
    ]
  },
  {
    "id": "audit-demant-24",
    "source": "Cartographie nucléaire.pdf",
    "section": "Exemple démantèlement",
    "information": "Démantèlement d'un circuit : Assystem/Artelia définissent comment démonter ; SPIE/Orano DS coupent, démontent, traitent ; Onet intervient en zone, sécurise et exécute.",
    "relatedProjects": [
      "demantelement-fessenheim-chinon-bugey"
    ],
    "relatedActors": [
      "assystem",
      "artelia",
      "spie-nucleaire",
      "orano",
      "onet-technologies"
    ],
    "relatedSkills": [
      "Études",
      "Travaux",
      "Sécurisation"
    ]
  },
  {
    "id": "audit-gc-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Équipements à remplacer : générateurs de vapeur, maintenance de cuve, rénovation des turbines.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "framatome"
    ],
    "relatedSkills": [
      "Générateurs de vapeur",
      "Cuve",
      "Turbines"
    ]
  },
  {
    "id": "audit-gc-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Sûreté nucléaire : renforcement systèmes de secours, ajout DUS Diesel Ultime Secours, amélioration du refroidissement.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Sûreté nucléaire",
      "DUS",
      "Refroidissement"
    ]
  },
  {
    "id": "audit-gc-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Modernisation : contrôle commande, instrumentation et systèmes électriques.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "spie-nucleaire",
      "actemium"
    ],
    "relatedSkills": [
      "Contrôle commande",
      "Instrumentation",
      "Systèmes électriques"
    ]
  },
  {
    "id": "audit-gc-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Assystem : planification fine des arrêts, suivi coûts/délais/risques, coordination entreprises et modifications techniques.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "assystem"
    ],
    "relatedSkills": [
      "PMO",
      "Planification"
    ]
  },
  {
    "id": "audit-gc-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Artelia : circuits tuyauteries et ventilations, dimensionnement débit/pression/thermique, PID, plans d'implantation, notes de calcul.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "artelia"
    ],
    "relatedSkills": [
      "Tuyauterie",
      "Ventilation",
      "PID"
    ]
  },
  {
    "id": "audit-gc-06",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Tractebel : études de sûreté nucléaire, architecture systèmes, analyse des risques.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "tractebel"
    ],
    "relatedSkills": [
      "Sûreté",
      "Analyse de risques"
    ]
  },
  {
    "id": "audit-gc-07",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Framatome : composants critiques, générateurs de vapeur, circuit primaire, équipements cœur réacteur.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "framatome"
    ],
    "relatedSkills": [
      "Composants critiques",
      "Circuit primaire"
    ]
  },
  {
    "id": "audit-gc-08",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Orano : retrait et transport combustible, traitement combustible usé, déchets complexes.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Combustible",
      "Déchets complexes"
    ]
  },
  {
    "id": "audit-gc-09",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Spie Nucléaire : électricité et contrôle commande, armoires électriques, câbles, mise à jour contrôle commande.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "spie-nucleaire"
    ],
    "relatedSkills": [
      "Électricité",
      "Contrôle commande",
      "Câblage"
    ]
  },
  {
    "id": "audit-gc-10",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Actemium : automatisme, programmation, supervision, mise en service de l'automate.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "actemium"
    ],
    "relatedSkills": [
      "Automatisme",
      "Supervision"
    ]
  },
  {
    "id": "audit-gc-11",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Onet Technologies : zone contrôlée, décontamination, maintenance sous radiation.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "onet-technologies"
    ],
    "relatedSkills": [
      "Zone contrôlée",
      "Décontamination",
      "Maintenance"
    ]
  },
  {
    "id": "audit-gc-12",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Altrad Endel : démontage/remontage, tuyauterie, soudure, montage équipements.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "altrad-endel"
    ],
    "relatedSkills": [
      "Tuyauterie",
      "Soudure",
      "Montage"
    ]
  },
  {
    "id": "audit-gc-13",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Axima Nucléaire : ventilation, filtration, confinement radioactif.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "axima-nucleaire"
    ],
    "relatedSkills": [
      "Ventilation",
      "Filtration",
      "Confinement"
    ]
  },
  {
    "id": "audit-gc-14",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Bouygues Construction et Vinci Construction : génie civil, bâtiments DUS et renforcement structures existantes.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "bouygues",
      "vinci"
    ],
    "relatedSkills": [
      "Génie civil",
      "DUS"
    ]
  },
  {
    "id": "audit-gc-15",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Ortec : logistique, préparation des interventions et support maintenance.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "ortec"
    ],
    "relatedSkills": [
      "Logistique",
      "Maintenance"
    ]
  },
  {
    "id": "audit-gc-16",
    "source": "Cartographie nucléaire.pdf",
    "section": "Grand Carénage",
    "information": "Grand Carénage : prolongation des réacteurs jusqu'à 50 ans et au-delà ; travaux sismiques/incendies, HVAC, pompes primaires, robinetterie, systèmes de sûreté ; 56 réacteurs concernés jusqu'à 2035.",
    "relatedProjects": [
      "grand-carenage"
    ],
    "relatedActors": [
      "edf"
    ],
    "relatedSkills": [
      "Génie civil",
      "HVAC",
      "Pompes",
      "Robinetterie",
      "Sûreté"
    ]
  },
  {
    "id": "audit-epr-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR / EPR2",
    "information": "Framatome : AMO / MOE, conception et fourniture de réacteur, cuve, générateur de vapeur, combustible.",
    "relatedProjects": [
      "epr-penly",
      "flamanville-3"
    ],
    "relatedActors": [
      "framatome"
    ],
    "relatedSkills": [
      "Cuve",
      "Générateurs de vapeur",
      "Combustible"
    ]
  },
  {
    "id": "audit-epr-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR / EPR2",
    "information": "EPR Penly : chantier lancé ; 2 réacteurs de 1670 MWH ; mise en service visée 2038 ; budget 2,7 milliards d'euros ; travaux principaux 2024-2025 puis 12 ans de construction.",
    "relatedProjects": [
      "epr-penly"
    ],
    "relatedActors": [
      "edf"
    ],
    "relatedSkills": [
      "EPR2"
    ]
  },
  {
    "id": "audit-epr-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Penly",
    "information": "Penly : Framatome fournit cuves, générateur et combustible.",
    "relatedProjects": [
      "epr-penly"
    ],
    "relatedActors": [
      "framatome"
    ],
    "relatedSkills": [
      "Cuves",
      "Générateurs de vapeur",
      "Combustible"
    ]
  },
  {
    "id": "audit-epr-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Penly",
    "information": "Penly : Orano enrichissement et transport du combustible.",
    "relatedProjects": [
      "epr-penly"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Enrichissement",
      "Transport combustible"
    ]
  },
  {
    "id": "audit-epr-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Penly",
    "information": "Penly : Arabelle Solutions turbines vapeur et alternateurs.",
    "relatedProjects": [
      "epr-penly"
    ],
    "relatedActors": [
      "arabelle-solutions"
    ],
    "relatedSkills": [
      "Turbines vapeur",
      "Alternateurs"
    ]
  },
  {
    "id": "audit-epr-06",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Penly",
    "information": "Penly : Assystem planification arrêts, coûts/délais/risques, coordination et modifications techniques.",
    "relatedProjects": [
      "epr-penly"
    ],
    "relatedActors": [
      "assystem"
    ],
    "relatedSkills": [
      "PMO",
      "Planification"
    ]
  },
  {
    "id": "audit-epr-07",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Penly",
    "information": "Penly : Egis MOE génie civil.",
    "relatedProjects": [
      "epr-penly"
    ],
    "relatedActors": [
      "egis"
    ],
    "relatedSkills": [
      "Génie civil"
    ]
  },
  {
    "id": "audit-epr-08",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Penly",
    "information": "Penly : Bouygues & Eiffage génie civil / travaux lourds bâtiment réacteur.",
    "relatedProjects": [
      "epr-penly"
    ],
    "relatedActors": [
      "bouygues",
      "eiffage"
    ],
    "relatedSkills": [
      "Génie civil",
      "Bâtiment réacteur"
    ]
  },
  {
    "id": "audit-epr-09",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Penly",
    "information": "Penly : Vinci génie civil / infrastructure industrielle.",
    "relatedProjects": [
      "epr-penly"
    ],
    "relatedActors": [
      "vinci"
    ],
    "relatedSkills": [
      "Génie civil",
      "Infrastructure"
    ]
  },
  {
    "id": "audit-epr-10",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Penly",
    "information": "Penly : Edvance conception / design du réacteur EPR2.",
    "relatedProjects": [
      "epr-penly"
    ],
    "relatedActors": [
      "edvance"
    ],
    "relatedSkills": [
      "Design réacteur"
    ]
  },
  {
    "id": "audit-epr-11",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Gravelines",
    "information": "Gravelines : chantier pas encore lancé, planifié ; acteurs pas encore sélectionnés.",
    "relatedProjects": [
      "epr-gravelines"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Non précisé dans les documents"
    ]
  },
  {
    "id": "audit-epr-12",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Bugey",
    "information": "Bugey : chantier pas encore lancé, planifié ; acteurs pas encore sélectionnés.",
    "relatedProjects": [
      "epr-bugey"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Non précisé dans les documents"
    ]
  },
  {
    "id": "audit-epr-13",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Flamanville",
    "information": "Flamanville : Assystem études systèmes/sûreté/HVAC/mécanique, supervision chantier, support commissioning.",
    "relatedProjects": [
      "flamanville-3"
    ],
    "relatedActors": [
      "assystem"
    ],
    "relatedSkills": [
      "Systèmes",
      "Sûreté",
      "HVAC",
      "Mécanique",
      "Commissioning"
    ]
  },
  {
    "id": "audit-epr-14",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Flamanville",
    "information": "Flamanville : Egis génie civil, design et analyse structures, BIM, coordination technique eau/bâtiment.",
    "relatedProjects": [
      "flamanville-3"
    ],
    "relatedActors": [
      "egis"
    ],
    "relatedSkills": [
      "Génie civil",
      "BIM"
    ]
  },
  {
    "id": "audit-epr-15",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Flamanville",
    "information": "Flamanville : Tractebel études de sûreté, systèmes, calculs d'ingénierie et support design EPR.",
    "relatedProjects": [
      "flamanville-3"
    ],
    "relatedActors": [
      "tractebel"
    ],
    "relatedSkills": [
      "Sûreté",
      "Systèmes",
      "Calculs"
    ]
  },
  {
    "id": "audit-epr-16",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Flamanville",
    "information": "Flamanville : Onet préparation intervention, support essais, qualification équipements.",
    "relatedProjects": [
      "flamanville-3"
    ],
    "relatedActors": [
      "onet-technologies"
    ],
    "relatedSkills": [
      "Essais",
      "Qualification"
    ]
  },
  {
    "id": "audit-epr-17",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Flamanville",
    "information": "Flamanville : Nuvia radioprotection chantier, contrôle qualité et essais, mesures et contrôles.",
    "relatedProjects": [
      "flamanville-3"
    ],
    "relatedActors": [
      "nuvia"
    ],
    "relatedSkills": [
      "Radioprotection",
      "Contrôle qualité",
      "Essais"
    ]
  },
  {
    "id": "audit-epr-18",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Flamanville",
    "information": "Flamanville : Bouygues Construction Expertise Nucléaire génie civil principal bâtiment réacteur et combustible, bétons, ferraillages, cuves et enceintes.",
    "relatedProjects": [
      "flamanville-3"
    ],
    "relatedActors": [
      "bouygues-construction-expertises-nucleaires"
    ],
    "relatedSkills": [
      "Génie civil",
      "Béton",
      "Ferraillage"
    ]
  },
  {
    "id": "audit-epr-19",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Flamanville",
    "information": "Flamanville : Vinci via Cegelec, Spie Nucléaire et Actemium : câblage, installation électrique, installation et CVC nucléaire, essais.",
    "relatedProjects": [
      "flamanville-3"
    ],
    "relatedActors": [
      "vinci",
      "cegelec",
      "spie-nucleaire",
      "actemium"
    ],
    "relatedSkills": [
      "Câblage",
      "Électricité",
      "CVC",
      "Essais"
    ]
  },
  {
    "id": "audit-epr-20",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Flamanville",
    "information": "Flamanville : Framatome assemblage cuve réacteur, circuit primaire, contrôle commande et assemblage combustibles.",
    "relatedProjects": [
      "flamanville-3"
    ],
    "relatedActors": [
      "framatome"
    ],
    "relatedSkills": [
      "Cuve",
      "Circuit primaire",
      "Contrôle commande",
      "Combustible"
    ]
  },
  {
    "id": "audit-epr-21",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Flamanville",
    "information": "Flamanville : Altrad Endel tuyauterie nucléaire, robinetterie, montage mécanique et support essais.",
    "relatedProjects": [
      "flamanville-3"
    ],
    "relatedActors": [
      "altrad-endel"
    ],
    "relatedSkills": [
      "Tuyauterie",
      "Robinetterie",
      "Montage mécanique"
    ]
  },
  {
    "id": "audit-epr-22",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Flamanville",
    "information": "Flamanville : CEA maîtrise d'ouvrage.",
    "relatedProjects": [
      "flamanville-3"
    ],
    "relatedActors": [
      "cea"
    ],
    "relatedSkills": [
      "MOA"
    ]
  },
  {
    "id": "audit-epr-23",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR",
    "information": "EPR : construction de 6 réacteurs nouvelle génération ; 1600 MW au lieu de 1300 MW ; double enceinte, récupération du corium ; Penly et Gravelines cités.",
    "relatedProjects": [
      "epr-penly",
      "epr-gravelines",
      "epr-bugey"
    ],
    "relatedActors": [
      "edf"
    ],
    "relatedSkills": [
      "EPR",
      "Corium",
      "Double enceinte"
    ]
  },
  {
    "id": "audit-epr-24",
    "source": "Cartographie nucléaire.pdf",
    "section": "EPR Flamanville",
    "information": "Flamanville 3 : mise en service nucléaire, finalisation du contrôle commande, qualification équipements primaires, réglage systèmes auxiliaires, essais chauds/froids.",
    "relatedProjects": [
      "flamanville-3"
    ],
    "relatedActors": [
      "edf"
    ],
    "relatedSkills": [
      "Contrôle commande",
      "Essais chauds/froids",
      "Qualification"
    ]
  },
  {
    "id": "audit-rjh-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH / Réacteur Jules Horowitz : tester combustibles nucléaires actuels et futurs.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Combustible"
    ]
  },
  {
    "id": "audit-rjh-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : qualifier matériaux soumis à irradiations.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Matériaux irradiés"
    ]
  },
  {
    "id": "audit-rjh-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : produire des radioéléments pour médecine nucléaire.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Radioéléments médicaux"
    ]
  },
  {
    "id": "audit-rjh-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : soutenir la sûreté et la prolongation du parc nucléaire.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Sûreté"
    ]
  },
  {
    "id": "audit-rjh-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : réacteur à eau sous pression, puissance 100 MW.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Réacteur à eau sous pression"
    ]
  },
  {
    "id": "audit-rjh-06",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : TechnicAtome conçoit et réalise les composants principaux du bloc pile.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [
      "technic-atome"
    ],
    "relatedSkills": [
      "Bloc pile"
    ]
  },
  {
    "id": "audit-rjh-07",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : Framatome construction et essais systèmes, essais d'ensemble, capacités d'irradiation et études combustibles.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [
      "framatome"
    ],
    "relatedSkills": [
      "Essais systèmes",
      "Irradiation",
      "Combustible"
    ]
  },
  {
    "id": "audit-rjh-08",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : EDF financeur et utilisateur de l'infrastructure.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [
      "edf"
    ],
    "relatedSkills": [
      "Financement",
      "Utilisation infrastructure"
    ]
  },
  {
    "id": "audit-rjh-09",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : Orano financeur et utilisateur de l'infrastructure.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Financement",
      "Utilisation infrastructure"
    ]
  },
  {
    "id": "audit-rjh-10",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : Assystem AMOE et études détaillées génie civil, visas, plans, notes de calcul, transformation digitale SI projet.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [
      "assystem"
    ],
    "relatedSkills": [
      "AMOE",
      "Génie civil",
      "Digital projet"
    ]
  },
  {
    "id": "audit-rjh-11",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : Vinci Energies conçoit et réalise les piscines nucléaires du réacteur.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [
      "vinci-energies"
    ],
    "relatedSkills": [
      "Piscines nucléaires"
    ]
  },
  {
    "id": "audit-rjh-12",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : Vinci Energies / Cegelec fabrique le liner.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [
      "vinci-energies",
      "cegelec"
    ],
    "relatedSkills": [
      "Liner"
    ]
  },
  {
    "id": "audit-rjh-13",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : Boccard conception et mise en service systèmes fluides, tuyauteries de refroidissement et utilités.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [
      "boccard"
    ],
    "relatedSkills": [
      "Fluides",
      "Tuyauterie",
      "Refroidissement"
    ]
  },
  {
    "id": "audit-rjh-14",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : Axima Nucléaire ingénierie nucléaire, travaux tuyauterie ventilation, système de sûreté.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [
      "axima-nucleaire"
    ],
    "relatedSkills": [
      "Tuyauterie",
      "Ventilation",
      "Sûreté"
    ]
  },
  {
    "id": "audit-rjh-15",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : Fives Nordon fabrication tuyauterie industrielle, support et ligne de ventilation.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [
      "fives-nordon"
    ],
    "relatedSkills": [
      "Tuyauterie",
      "Ventilation"
    ]
  },
  {
    "id": "audit-rjh-16",
    "source": "Cartographie nucléaire.pdf",
    "section": "RJH",
    "information": "RJH : ACEPP essais et datas.",
    "relatedProjects": [
      "rjh"
    ],
    "relatedActors": [
      "acepp"
    ],
    "relatedSkills": [
      "Essais",
      "Data"
    ]
  },
  {
    "id": "audit-iter-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "ITER",
    "information": "ITER : CEA cité, site Cadarache, fusion nucléaire, bâtiment Tokamak.",
    "relatedProjects": [
      "iter"
    ],
    "relatedActors": [
      "cea"
    ],
    "relatedSkills": [
      "Fusion",
      "Tokamak"
    ]
  },
  {
    "id": "audit-iter-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "ITER",
    "information": "ITER : Daher logistique, stockage, gestion composants sites Cadarache et port Saint-Louis, flux internationaux de grandes pièces haute technicité.",
    "relatedProjects": [
      "iter"
    ],
    "relatedActors": [
      "daher"
    ],
    "relatedSkills": [
      "Logistique",
      "Stockage"
    ]
  },
  {
    "id": "audit-iter-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "ITER",
    "information": "ITER : Egis en groupement avec Assystem gère BIM, modélisation et coordination bâtiments/infrastructures.",
    "relatedProjects": [
      "iter"
    ],
    "relatedActors": [
      "egis",
      "assystem"
    ],
    "relatedSkills": [
      "BIM",
      "Bâtiments",
      "Infrastructures"
    ]
  },
  {
    "id": "audit-iter-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "ITER",
    "information": "ITER : Assystem aux côtés d'Egis et Impressarios dans le consortium B.NEX.",
    "relatedProjects": [
      "iter"
    ],
    "relatedActors": [
      "assystem",
      "egis",
      "impressarios"
    ],
    "relatedSkills": [
      "BIM",
      "Coordination"
    ]
  },
  {
    "id": "audit-iter-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "ITER",
    "information": "ITER : CNIM fabrique équipements spécifiques Tokamak, port plug structures, anneaux de pré-compression, pièces mécaniques haute exigence.",
    "relatedProjects": [
      "iter"
    ],
    "relatedActors": [
      "cnim"
    ],
    "relatedSkills": [
      "Tokamak",
      "Mécanique complexe"
    ]
  },
  {
    "id": "audit-iter-06",
    "source": "Cartographie nucléaire.pdf",
    "section": "ITER",
    "information": "ITER : GDES Revanti revêtements haute performance résistants chimiques, anticontamination et décontaminables.",
    "relatedProjects": [
      "iter"
    ],
    "relatedActors": [
      "gdes-revanti"
    ],
    "relatedSkills": [
      "Revêtements",
      "Décontamination"
    ]
  },
  {
    "id": "audit-iter-07",
    "source": "Cartographie nucléaire.pdf",
    "section": "ITER",
    "information": "ITER : Dalkia et Veolia groupement, contrat Fusion for Energy / F4E pour maintenance et exploitation réseaux hydrauliques et surveillance traitement déchets.",
    "relatedProjects": [
      "iter"
    ],
    "relatedActors": [
      "dalkia",
      "veolia",
      "fusion-for-energy"
    ],
    "relatedSkills": [
      "Maintenance",
      "Réseaux hydrauliques",
      "Traitement déchets"
    ]
  },
  {
    "id": "audit-iter-08",
    "source": "Cartographie nucléaire.pdf",
    "section": "ITER",
    "information": "ITER : intégration mécanique d'aimants géants, systèmes cryogéniques, systèmes de vide, fonctionnement au tritium.",
    "relatedProjects": [
      "iter"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Aimants géants",
      "Cryogénie",
      "Vide",
      "Tritium"
    ]
  },
  {
    "id": "audit-comb-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "Cycle combustible",
    "information": "Orano : cycle combustible, retraitement, extraction, enrichissement, recyclage et démantèlement.",
    "relatedProjects": [
      "cycle-combustible-orano"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Cycle combustible"
    ]
  },
  {
    "id": "audit-comb-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "Cycle combustible",
    "information": "Étape 1 : extraction uranium.",
    "relatedProjects": [
      "cycle-combustible-orano"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Extraction uranium"
    ]
  },
  {
    "id": "audit-comb-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "Cycle combustible",
    "information": "Étape 2 : conversion, transformation uranium en gaz, usines Orano à Tricastin et Malvési.",
    "relatedProjects": [
      "cycle-combustible-orano"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Conversion",
      "Tricastin",
      "Malvési"
    ]
  },
  {
    "id": "audit-comb-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "Cycle combustible",
    "information": "Étape 3 : enrichissement, augmenter la proportion d'U235.",
    "relatedProjects": [
      "cycle-combustible-orano"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Enrichissement",
      "U235"
    ]
  },
  {
    "id": "audit-comb-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "Cycle combustible",
    "information": "Étape 4 : fabrication du combustible, production des assemblages utilisés dans les réacteurs.",
    "relatedProjects": [
      "cycle-combustible-orano"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Fabrication combustible"
    ]
  },
  {
    "id": "audit-comb-06",
    "source": "Cartographie nucléaire.pdf",
    "section": "Cycle combustible",
    "information": "Étape 5 : consommation / utilisation du combustible dans les centrales.",
    "relatedProjects": [
      "cycle-combustible-orano"
    ],
    "relatedActors": [
      "edf"
    ],
    "relatedSkills": [
      "Utilisation combustible"
    ]
  },
  {
    "id": "audit-comb-07",
    "source": "Cartographie nucléaire.pdf",
    "section": "Cycle combustible",
    "information": "Étape 6 : recyclage dans l'usine de La Hague d'Orano.",
    "relatedProjects": [
      "cycle-combustible-orano"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Recyclage",
      "La Hague"
    ]
  },
  {
    "id": "audit-comb-08",
    "source": "Cartographie nucléaire.pdf",
    "section": "Cycle combustible",
    "information": "Sites : Tricastin conversion + enrichissement ; La Hague retraitement ; Marcoule/Melox fabrication MOX.",
    "relatedProjects": [
      "cycle-combustible-orano"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Tricastin",
      "La Hague",
      "Marcoule",
      "Melox",
      "MOX"
    ]
  },
  {
    "id": "audit-comb-09",
    "source": "Cartographie nucléaire.pdf",
    "section": "Cycle combustible",
    "information": "MOX : mixed oxide fuel, 92% uranium du combustible usé et 8% plutonium extrait des réacteurs ; utilisé dans certains réacteurs.",
    "relatedProjects": [
      "cycle-combustible-orano"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "MOX",
      "Plutonium"
    ]
  },
  {
    "id": "audit-comb-10",
    "source": "Cartographie nucléaire.pdf",
    "section": "Cycle combustible",
    "information": "Industrie du combustible : La Hague, Tricastin et Melox ; modernisation ateliers, ventilations nucléaires, revamping procédés chimiques, manutention, automatisation.",
    "relatedProjects": [
      "cycle-combustible-orano"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Ventilation nucléaire",
      "Revamping procédés",
      "Manutention",
      "Automatisation"
    ]
  },
  {
    "id": "audit-cigeo-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "ANDRA est citée pour gestion des déchets radioactifs et CIGEO.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "andra"
    ],
    "relatedSkills": [
      "Déchets radioactifs"
    ]
  },
  {
    "id": "audit-cigeo-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "CIGEO : actionnaires / financeurs EDF, Orano, CEA.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "edf",
      "orano",
      "cea"
    ],
    "relatedSkills": [
      "Financement"
    ]
  },
  {
    "id": "audit-cigeo-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Egis : MOE/ingénierie ouvrages de surface, GC et VRD plateformes industrielles, contraintes nucléaires.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "egis"
    ],
    "relatedSkills": [
      "Génie civil",
      "VRD"
    ]
  },
  {
    "id": "audit-cigeo-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Artelia : bâtiments industriels, systèmes énergétiques, conception CVC bâtiments nucléaires, confinement, interface MEP / sûreté / exploitation.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "artelia"
    ],
    "relatedSkills": [
      "CVC",
      "Confinement",
      "MEP"
    ]
  },
  {
    "id": "audit-cigeo-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Vinci : GC nucléaire, ouvrages complexes, ouvrages de surface, bétons spéciaux, GC profonds, méthodes sous contrainte ASN.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "vinci"
    ],
    "relatedSkills": [
      "Génie civil",
      "Bétons spéciaux"
    ]
  },
  {
    "id": "audit-cigeo-06",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Bouygues : ouvrages spéciaux, GC forte technicité, puits d'accès, structures grandes profondeurs, soutènement.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "bouygues"
    ],
    "relatedSkills": [
      "Puits",
      "Soutènement"
    ]
  },
  {
    "id": "audit-cigeo-07",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Eiffage : GC industriel longue durée, ouvrages en béton type bâtiment d'exploitation.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "eiffage"
    ],
    "relatedSkills": [
      "Génie civil",
      "Béton"
    ]
  },
  {
    "id": "audit-cigeo-08",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "NGE : terrassement et GC souterrain, galeries, soutènement, béton projeté, logistique et accès chantier.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "nge"
    ],
    "relatedSkills": [
      "Terrassement",
      "Galeries",
      "Béton projeté"
    ]
  },
  {
    "id": "audit-cigeo-09",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Herrenknecht : fabricant de tunnelier spécialisé dans l'argile.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "herrenknecht"
    ],
    "relatedSkills": [
      "Tunnelier",
      "Argile"
    ]
  },
  {
    "id": "audit-cigeo-10",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Equans : intégrateur énergétique et technique, CVC nucléaire, confinement, filtration et redondances.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "equans"
    ],
    "relatedSkills": [
      "CVC",
      "Confinement",
      "Filtration"
    ]
  },
  {
    "id": "audit-cigeo-11",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Spie : électricité industrielle, systèmes complexes, automatisme et contrôle commande.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "spie-nucleaire"
    ],
    "relatedSkills": [
      "Électricité",
      "Automatisme",
      "Contrôle commande"
    ]
  },
  {
    "id": "audit-cigeo-12",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Altrad : service industriel, équipements mécaniques, structures mécaniques, appui exploitation et maintenance nucléaire.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "altrad-endel"
    ],
    "relatedSkills": [
      "Équipements mécaniques",
      "Maintenance"
    ]
  },
  {
    "id": "audit-cigeo-13",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Fives : ingénierie industrielle et systèmes automatisés, convoyeurs lourds et manutention automatisée.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "fives"
    ],
    "relatedSkills": [
      "Convoyeurs",
      "Manutention automatisée"
    ]
  },
  {
    "id": "audit-cigeo-14",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Orano : expertise technique colis de déchets, conformité de l'installation du site CIGEO.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "orano"
    ],
    "relatedSkills": [
      "Colis déchets",
      "Conformité"
    ]
  },
  {
    "id": "audit-cigeo-15",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Assystem : AMO, pilotage projet, exigences réglementaires, planning/coûts/risques, instruction réglementaire, dossiers de sûreté.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "assystem"
    ],
    "relatedSkills": [
      "AMO",
      "PMO",
      "Dossiers de sûreté"
    ]
  },
  {
    "id": "audit-cigeo-16",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "Tractebel : sûreté, études long terme, ventilations, confinements, installations électriques, géotechnique, comportement de l'argilite/galeries/ouvrages, justification technique face ASN.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "tractebel"
    ],
    "relatedSkills": [
      "Sûreté",
      "Géotechnique",
      "Argilite"
    ]
  },
  {
    "id": "audit-cigeo-17",
    "source": "Cartographie nucléaire.pdf",
    "section": "CIGEO",
    "information": "CIGEO : stockage profond, galeries souterraines, ventilation/extraction, manutention robotisée, conditionnement déchets, puits et tunnels.",
    "relatedProjects": [
      "cigeo"
    ],
    "relatedActors": [
      "andra"
    ],
    "relatedSkills": [
      "Galeries",
      "Ventilation",
      "Extraction",
      "Robotique",
      "Conditionnement déchets",
      "Puits",
      "Tunnels"
    ]
  },
  {
    "id": "audit-smr-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "SMR / réacteurs innovants",
    "information": "Nuward : joint venture EDF x TechnicAtome.",
    "relatedProjects": [
      "nuward"
    ],
    "relatedActors": [
      "edf",
      "technic-atome"
    ],
    "relatedSkills": [
      "SMR"
    ]
  },
  {
    "id": "audit-smr-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "SMR / réacteurs innovants",
    "information": "Nuward : deux réacteurs par centrale à eau pressurisée ; puissance 2 x 170 MW ; mise sur le marché prévue pour 2030.",
    "relatedProjects": [
      "nuward"
    ],
    "relatedActors": [
      "edf",
      "technic-atome"
    ],
    "relatedSkills": [
      "Réacteur eau pressurisée"
    ]
  },
  {
    "id": "audit-smr-03",
    "source": "Cartographie nucléaire.pdf",
    "section": "SMR / réacteurs innovants",
    "information": "Voir cartographie Servir 2040 sur les réacteurs innovants.",
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Réacteurs innovants"
    ]
  },
  {
    "id": "audit-smr-04",
    "source": "Cartographie nucléaire.pdf",
    "section": "SMR / réacteurs innovants",
    "information": "Entreprises citées : Renaissance Fusion SAS, Stellaria, Taranis, Thorizon, XMAR, Blue Capsule, Calogena, Hexana, Jimmy Energy SAS, Newcleo, OTREA Nuclear Energy.",
    "relatedProjects": [
      "reacteurs-innovants"
    ],
    "relatedActors": [
      "renaissance-fusion",
      "stellaria",
      "taranis",
      "thorizon",
      "xmar",
      "blue-capsule",
      "calogena",
      "hexana",
      "jimmy-energy",
      "newcleo",
      "otrera-nuclear-energy"
    ],
    "relatedSkills": [
      "Réacteurs innovants"
    ]
  },
  {
    "id": "audit-smr-05",
    "source": "Cartographie nucléaire.pdf",
    "section": "SMR / réacteurs innovants",
    "information": "Compétences SMR/réacteurs innovants : conception du cœur, neutronique, thermomécanique, sûreté, layout/installations, maquettes et prototypes.",
    "relatedProjects": [
      "nuward",
      "reacteurs-innovants"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Cœur réacteur",
      "Neutronique",
      "Thermomécanique",
      "Sûreté",
      "Layout",
      "Maquettes",
      "Prototypes"
    ]
  },
  {
    "id": "audit-aetv-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "Dissuasion nucléaire",
    "information": "Dissuasion nucléaire / AETV : projet secret, pas d'informations.",
    "relatedProjects": [
      "dissuasion-aetv"
    ],
    "relatedActors": [],
    "relatedSkills": [
      "Information limitée / secret défense"
    ]
  },
  {
    "id": "audit-moe-01",
    "source": "Cartographie nucléaire.pdf",
    "section": "Liste MOE / entreprises",
    "information": "Grandes ingénieries citées : Assystem, Egis, Tractebel, Nuvia groupe Vinci, Onet Technologies, Ortec, Ineo Nucléaire, Ingérop, Artelia, Cyclife.",
    "relatedProjects": [],
    "relatedActors": [
      "assystem",
      "egis",
      "tractebel",
      "nuvia",
      "onet-technologies",
      "ortec",
      "ineo-nucleaire",
      "ingerop",
      "artelia",
      "cyclife"
    ],
    "relatedSkills": [
      "Ingénierie"
    ]
  },
  {
    "id": "audit-moe-02",
    "source": "Cartographie nucléaire.pdf",
    "section": "Liste MOE / entreprises",
    "information": "Entreprises citées : Spie Nucléaire, Endel, Valiance/Fayat, Axima, Bouygues Construction Expertises Nucléaires, Clemessy, SNEF, Bilfinger.",
    "relatedProjects": [],
    "relatedActors": [
      "spie-nucleaire",
      "altrad-endel",
      "valiance-fayat",
      "axima-nucleaire",
      "bouygues-construction-expertises-nucleaires",
      "clemessy",
      "snef",
      "bilfinger"
    ],
    "relatedSkills": [
      "Travaux",
      "Intégration"
    ]
  }
];

export const commercialContext = {
  "title": "Contexte commercial issu de la consigne",
  "notes": [
    "L'application doit servir d'outil de prospection commerciale pour identifier projets, donneurs d'ordre, MOA, AMO/MOE, intégrateurs, fournisseurs, sous-traitants, spécialités et comptes prioritaires.",
    "La consigne demande de partir des projets et actualités, puis de représenter les acteurs sous forme de pieuvre avec leurs spécialités.",
    "Exemple cité : Dalkia a gagné le réseau de chaleur de Paris et aurait besoin de 4 ETP procédés ; l'objectif commercial est de foisonner le compte, y compris jusqu'à GINKO. Cette donnée est conservée en note compte Dalkia, hors périmètre nucléaire strict.",
    "La consigne demande de lever le pied sur l'hydrogène et de prioriser nucléaire, biomasse et captage de CO2 ; l'application se concentre ici sur le nucléaire conformément au prompt.",
    "Un point hebdomadaire le jeudi est mentionné dans la consigne.",
    "Les informations inconnues ou sensibles sont libellées : Non précisé dans les documents ou Information limitée / secret défense."
  ]
} as const;


export const allSkills = Array.from(new Set([
  ...projects.flatMap((project) => project.skills),
  ...actors.flatMap((actor) => actor.specialties),
  ...commercialOpportunities.map((opportunity) => opportunity.skill),
])).sort((a, b) => a.localeCompare(b, "fr"));

export const allActorTypes = Array.from(new Set(actors.flatMap((actor) => actor.actorTypes))).sort((a, b) => a.localeCompare(b, "fr"));
export const allOpportunityLevels = ["Fort", "Moyen", "Faible", "À qualifier"] as const;
export const allHorizons = ["Court terme", "Moyen terme", "Long terme", "Non précisé", "Projet sensible / limité"] as const;

export function getProjectById(projectId: string) {
  return projects.find((project) => project.id === projectId);
}

export function getActorById(actorId: string) {
  return actors.find((actor) => actor.id === actorId);
}

export function getActorName(actorId: string) {
  return getActorById(actorId)?.name ?? actorId;
}

export function getProjectName(projectId: string) {
  return getProjectById(projectId)?.name ?? projectId;
}
