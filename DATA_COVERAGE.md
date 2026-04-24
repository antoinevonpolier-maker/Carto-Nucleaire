# Vérification données PDF

Cette version intègre les données sous deux niveaux :

1. Données structurées dans `src/data/nuclearMapping.ts` :
   - domaines ;
   - projets ;
   - acteurs ;
   - relations projets/acteurs ;
   - compétences ;
   - comptes majeurs ;
   - opportunités commerciales ;
   - plan de charge.

2. Données source exhaustives :
   - `sourceDataAudit` : table de traçabilité ligne par ligne, affichée dans l'onglet Données ;
   - `sourceDocuments` : texte extrait des PDF page par page, affiché dans l'onglet Données.

Objectif : aucune information issue de `Carto nuc. consigne.pdf` ou `Cartographie nucléaire.pdf` ne reste uniquement hors application.
