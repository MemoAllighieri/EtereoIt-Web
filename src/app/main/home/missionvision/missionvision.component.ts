import { Component } from '@angular/core';
import { Constants } from '../../../../utils/constants';

@Component({
  selector: 'app-missionvision',
  templateUrl: './missionvision.component.html',
  styleUrls: ['./missionvision.component.css']
})
export class MissionvisionComponent {
  ViewMissionVission: boolean = true;
  mission : string = Constants.mission;
  vision : string = Constants.vision;  

  ChangeViewMissionVission(tipo:boolean){
    this.ViewMissionVission = tipo;
  }
}