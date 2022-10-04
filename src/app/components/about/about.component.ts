import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skillsSection:boolean = true;
  expSection:boolean = false;
  eduSection:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showSkillsDiv(){
    this.skillsSection = true;
    this.expSection = false;
    this.eduSection = false;
  }
  showExpDiv(){
    this.skillsSection = false;
    this.expSection = true;
    this.eduSection = false;
  }
  showEduDiv(){
    this.skillsSection = false;
    this.expSection = false;
    this.eduSection = true;
  }

}
