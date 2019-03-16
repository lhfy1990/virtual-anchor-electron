import { Injectable } from '@angular/core';

declare var responsiveVoice: any;

@Injectable({
  providedIn: 'root'
})
export class TtsService {

  constructor() { }
  
  public getVoices = responsiveVoice.getVoices;
  
  public speak = responsiveVoice.speak;
  
  public isPlaying = responsiveVoice.isPlaying;
  
  public voiceSupport = responsiveVoice.voiceSupport;
}
