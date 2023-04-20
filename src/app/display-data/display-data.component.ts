import { Component, OnInit } from '@angular/core';
import { CollectDisplayService } from '../services/collect-display.service';
import { EventModel } from '../models/eventModel.model';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent {

  constructor(public collectDisplayService: CollectDisplayService) {
    collectDisplayService.getEvents();
    this.events = this.collectDisplayService.events;
    if (this.events.length > 0) {
      this.dataExists = true;
    }
  }

  // eventById!: EventModel;
  refreshClick: boolean = false;
  collectClick: boolean = false;
  dataExists!: boolean;
  events: EventModel[] = [];

  onRefreshClick() {
    this.collectDisplayService.getEvents();
    this.events = this.collectDisplayService.events;
    console.log(this.events);
    this.refreshClick = true;
    if (this.events.length > 0) {
      this.dataExists = true;
    }
  }

  onCollectClick() {
    this.collectDisplayService.saveEventsFromURL();
    this.collectClick = true;
    this.collectDisplayService.getEvents();
    this.events = this.collectDisplayService.events;
    if (this.events.length > 0) {
      this.dataExists = true;
    }
  }
}
