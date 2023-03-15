import { Component } from '@angular/core';
import { Constants } from '../../../../utils/constants';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  angular : string = Constants.angular;
  azure : string = Constants.azure;
  figma : string = Constants.figma;
  flutter : string = Constants.flutter;
  mongodb : string = Constants.mongodb;
  mysql : string = Constants.mysql;
  puntonet : string = Constants.puntonet;
  redis : string = Constants.redis;
  sqlServe : string = Constants.sqlServe;
  telerik : string = Constants.telerik;
  typescript : string = Constants.typescript;
  vuejs : string = Constants.vuejs;
}
