# hackingTime

Modèle :
On créé une collection Salarié avec les champs voulus (id, nom, etc.).
Salarie {
    salaire: float,
    photo: String,
    nom: String,
    prenom: String,
    email: String,
    DDN: date, 
    DDE: date,
    DDS: date,
    poste: String,
    numArriv: int,
    motif : String
}

Voici la génération aléatoire faite à l’aide de Json Generator :
http://beta.json-generator.com/GzlTKD6

[
  '{{repeat(5, 10)}}',
  {
    _id: '{{objectId()}}',
    salaire: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    photo: 'http://placehold.it/32x32',
    nom: '{{firstName()}}',
    prenom: '{{surname()}}',
    email: function (tags) {
      // Email tag is deprecated, because now you can produce an email as simple as this:
      return (this.prenom + '.' + this.nom + '@Tp.com').toLowerCase();
    },
    DDN: '{{date(new Date(1970,0,1), new Date(1980,0,1))}}', 
    DDE: '{{moment(this.date(new Date(2000, 0, 1), new Date())).format("LLLL")}}',
    DDS: '{{random("Saturday, January 21, 2012 5:03 AM", "Tuesday, August 26, 2014 2:48 AM","Friday, March 6, 2015 9:39 AM", "")}}',
    poste:'{{random("secrétaire", "commercial", "informaticien")}}',
    numArriv:'{{index(1)}}',
    motif:""
  }
]

Cela permet de générer aléatoirement des données à insérer via mongodb.
Pour cela on fait un db.salarie.insert() avec le texte généré par Json Generator.

