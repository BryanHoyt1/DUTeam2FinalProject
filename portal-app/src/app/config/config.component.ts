import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor/built/config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})

export class ConfigComponent implements OnInit {
  configService: any;
  config: { portalUrl: any; textfile: any; };

  constructor() { }

  ngOnInit() {
  }
showConfig() {
  this.configService.getConfig()
    .subscribe((data: Config) => this.config = {
        portalUrl: data['portalUrl'],
        textfile:  data['textfile']
    });
}

}
