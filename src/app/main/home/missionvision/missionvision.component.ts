import { Component } from '@angular/core';

@Component({
  selector: 'app-missionvision',
  templateUrl: './missionvision.component.html',
  styleUrls: ['./missionvision.component.css']
})
export class MissionvisionComponent {
  ViewMissionVission: boolean = true;

  ChangeViewMissionVission(tipo:boolean){
    this.ViewMissionVission = tipo;
  }
}