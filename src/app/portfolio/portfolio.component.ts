import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Project} from "../_models/Project";
import {Tag} from "../_models/Tag";
import {ProjectsService} from "../_services/projects.service";
import {flip} from "ngx-bootstrap/positioning/modifiers";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  isCollapse: boolean = true;
  filtering=false;

  angular=false;
  unity=false;
  javafx=false;

  csharp = false;
  cplus =false;
  java=false;
  typescript=false;



  constructor(private titleService: Title, private  projectService: ProjectsService) {
    this.titleService.setTitle('Alexis Young - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  ResetFilters(){
    this.cplus=false;
    this.java=false;
    this.csharp=false;
    this.typescript=false;

    this.javafx=false;
    this.angular=false;
    this.unity=false;

    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags : Tag[]= [];

    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }
    if(this.cplus){
      filterTags.push(Tag.CPLUS);
    }
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.javafx){
      filterTags.push(Tag.JAVAFX);
    }
    if(this.unity){
      filterTags.push(Tag.UNITY);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if(this.cplus|| this.java || this.csharp || this.javafx || this.angular || this.unity || this.typescript){
      this.filtering = true;
    }
    else {
      this.filtering=false;
    }

    this.projects=this.projectService.GetProjectByFilter(filterTags);
  }
}
