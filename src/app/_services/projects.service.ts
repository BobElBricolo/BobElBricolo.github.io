import { Injectable } from '@angular/core';
import {Project} from "../_models/Project";
import {Tag} from "../_models/Tag";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: 'Jeu d\'échecs',
      summary: 'Défiez vos amis dans une bataille d\'anticipation et de stratégie pour atteindre le mat.',
      description: 'Au cours d\'un projet de session, mon équipe et moi avons collaboré sur le développement d\'un jeu d\'échecs. En plus des aspects fondamentaux tels que les déplacements des pions et la promotion, nous avons enrichi l\'expérience en intégrant des fonctionnalités telles que le changement de couleurs et bien d\'autres.',
      projectLink: 'https://github.com/wolf-361/echec-javafx',
      tags: [Tag.JAVAFX, Tag.JAVA],
      pictures: ["../../assets/ImagesProjets/Chess/Game.PNG", "../../assets/ImagesProjets/Chess/GameJouer.PNG", "../../assets/ImagesProjets/Chess/GameCouleurs.PNG", "../../assets/ImagesProjets/Chess/Menu.PNG"]
    },
    {
      id: 1,
      name: 'Jeu d\'arcade 2D',
      summary: 'Incarner un chevalier dans ce jeu d\'action épique où vous devrez affronter des hordes d\'ennemis redoutables.',
      description: '\n' +
        'Plongez au cœur de l\'action médiévale avec notre passionnant jeu d\'arcade, où vous incarnez un vaillant chevalier déterminé à défendre son château contre une horde croissante de redoutables monstres. Affûtez vos compétences au fil du temps, car chaque seconde qui s\'écoule amène une nouvelle vague d\'ennemis à terrasser. Serez-vous capable de protéger votre royaume et de devenir le gardien incontesté du château? Préparez-vous à l\'ultime défi!',
      projectLink: 'https://github.com/BobElBricolo/Jeu-Arcade-2D',
      tags: [Tag.UNITY, Tag.CSHARP],
      pictures: ["../../assets/ImagesProjets/2DUnity/Jeu.PNG", "../../assets/ImagesProjets/2DUnity/Acceuil.PNG", "../../assets/ImagesProjets/2DUnity/Instructions.PNG", "../../assets/ImagesProjets/2DUnity/Mort.PNG"]
    },

    {
      id: 2,
      name: 'Mini-jeu d\'action 3D',
      summary: 'Explorez des contrées mystérieuses et défiez d\'immenses monstres dans cette aventure où chaque défi façonne votre légende.',
      description: '"A Knight\'s Wrath" est un mini-jeu d\'action auquel j\'ai participé. Vous incarnez un intrépide' +
        ' chevalier qui se bat contre des hordes d\'ennemis et d\'imposants boss. Le jeu se déroule sur plusieurs mini-cartes, chacune offrant des défis uniques. En tant que chevalier, les joueurs doivent faire preuve de compétence et de ruse pour surmonter des vagues d\'ennemis' +
        ' variés. Les combats intenses exigent une maîtrise de la stratégie pour triompher.',
      projectLink: 'https://github.com/BobElBricolo/A_Knights_Wrath',
      tags: [Tag.UNITY, Tag.CSHARP],
      pictures: ["../../assets/ImagesProjets/3DUnity/ImageAffiche.png", "../../assets/ImagesProjets/3DUnity/ImageFin.png",
        "../../assets/ImagesProjets/3DUnity/ImagePont.png", "../../assets/ImagesProjets/3DUnity/ImagePlatForm.png"]
    },
    {
      id: 3,
      name: 'Résolution de matrices',
      summary: '\n' +
        'Cette application console a été conçue pour résoudre des matrices en utilisant diverses méthodes.',
      description: 'Cette application a été réalisée dans le cadre d\'un projet universitaire. Elle permet de résoudre des matrices selon plusieurs méthodes telle que la méthode de Cramer, la méthode de Jacobi, la méthode de Gauss-Seidel et plus encore.',
      projectLink: 'https://github.com/BobElBricolo/Resolution-de-matrice',
      tags: [Tag.CSHARP],
      pictures: ["../../assets/ImagesProjets/Matrice/Menu.PNG","../../assets/ImagesProjets/Matrice/Gauss.PNG"]
    },
    {
      id: 4,
      name: 'Jeu de combat console',
      summary: 'Ce jeu permet à deux joueurs de se confronter dans un jeu de combat interactif et compétitif depuis la console.',
      description: 'Ce projet universitaire, réalisé il y a quelques années, propose une expérience de jeu à deux joueurs où chacun sélectionne l\'une des trois classes disponibles pour s\'affronter tour à tour. Un mélange subtil de stratégie et de chance rend ce mini-jeu captivant et imprévisible.',
      projectLink: 'https://github.com/BobElBricolo/Combat-Console',
      tags: [Tag.CPLUS],
      pictures: ["../../assets/ImagesProjets/Combat/Intro.PNG", "../../assets/ImagesProjets/Combat/PremierCoup.PNG", "../../assets/ImagesProjets/Combat/Mort.PNG"]
    },
    {
      id: 5,
      name: 'Sérialisation d\'un objet',
      summary: 'Cette application console offre la capacité de sérialiser ou désérialiser des objets à partir de fichiers JSON.',
      description: 'Cette application console, conçue pour un projet universitaire, offre la possibilité de sérialiser ou de désérialiser tout objet à partir d\'un fichier JSON, sous réserve que l\'objet dispose d\'un constructeur approprié, offrant ainsi une flexibilité accrue dans la gestion des données.',
      projectLink: 'https://github.com/BobElBricolo/Serialisation-Objet',
      tags: [Tag.CSHARP],
      pictures: ["../../assets/ImagesProjets/Serialize/Objet.PNG", "../../assets/ImagesProjets/Serialize/Deserialize.PNG"]
    }
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id:number): Project{
    let project  = this.projects.find(project=> project.id ===id);

    if(project === undefined){
      throw new TypeError('There is no project with the id of ' + id);
    }

    return project;
  }

  GetProjectByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project){
      let foundAll=true;

      filterTags.forEach(function (filterTag){
        if(project.tags.includes(filterTag)==false){
          foundAll=false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }



}
