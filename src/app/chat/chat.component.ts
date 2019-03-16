import { Component, OnInit } from '@angular/core';
import { AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

import { SettingsService } from '../settings.service';
import { TtsService } from '../tts.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('cardContent') private cardContent: ElementRef;
  private settings: any;
  private messages: Array<any> = new Array<any>();
  private message: string;

  constructor(private settingsService: SettingsService, private ttsService : TtsService) { }

  ngOnInit() {
    this.getSettings();
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom() {
    try { this.cardContent.nativeElement.scrollTop = this.cardContent.nativeElement.scrollHeight; }
    catch (e) { }
  }

  private getSettings(): void {
    this.settings = this.settingsService.getSettings();
  }

  private sendMessage() {
    if (!this.message) { return; }
    let newMessage = { ts: new Date(), message: this.message, name: 'Me' };
    this.messages.push(newMessage);
    this.message = '';
    // and announce it
    this.tts(newMessage);
  }

  private tts(message: any) {
    if (!message || !message.message) { return; }
    if (this.ttsService.isPlaying()) { return; }
    this.ttsService.speak(message.message, this.settings.voice.name, this.settings);
  }
}
