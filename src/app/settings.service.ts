import { Injectable } from '@angular/core';

import { TtsService } from './tts.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settings: any;

  constructor(private ttsService : TtsService) {
    this.settings = {};
    this.settings.voice = { name: 'Chinese Female' };
    this.settings.pitch = 1.1; // 0 - 2
    this.settings.rate = 1.1; // 0 - 1.5
    this.settings.volume = 0.9; // 0 - 1
  }
  public getSettings() : any { return this.settings; }
  public setSettings(settings: any) { this.settings = settings; }
  public getVoiceOptions() : Array<any> {
    return this.ttsService.getVoices();
  }
}
