import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private settings: any;
  private voiceOptions: Array<any> = new Array();

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.getSettings();
    this.voiceOptions = this.settingsService.getVoiceOptions();
  }

  private getSettings(): void {
    this.settings = this.settingsService.getSettings();
  }

  private setSettings(settings: any) : void {
    this.settingsService.setSettings(settings);
  }
}
