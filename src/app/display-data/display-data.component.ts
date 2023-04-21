import { Component, OnInit } from '@angular/core';
import { CollectDisplayService } from '../services/collect-display.service';
import { EventModel } from '../models/eventModel.model';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor(public collectDisplayService: CollectDisplayService) {
  }
  refreshClick: boolean = false;
  collectClick: boolean = false;
  dataExists!: boolean;
  events: EventModel[] = [];
  errorCode: number = 0;
  dataCollected: boolean = false;

  ngOnInit(): void {
    this.checkDatataExists();
    this.errorCode = 0;
  }

  onRefreshClick() {
    this.refreshClick = true;
    this.checkDatataExists();
  }

  onCollectClick() {
    this.collectClick = true;
    this.collectDisplayService.saveEventsFromURL();
    this.dataCollected = this.collectDisplayService.dataCollected;
    this.checkDatataExists();
  }
  checkDatataExists() {
    this.collectDisplayService.getEvents();
    this.events = this.collectDisplayService.events;
    if (this.events.length > 0) {
      this.dataExists = true;
    }
    if (this.collectDisplayService.errorCode) {
      this.errorCode = this.collectDisplayService.errorCode;
    }
  }
}
