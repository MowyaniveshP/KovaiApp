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
  
  ngOnInit(): void {
    this.checkDatataExists();
  }

  onRefreshClick() {
    this.refreshClick = true;
    this.checkDatataExists();
  }

  onCollectClick() {
    this.collectClick = true;
    this.collectDisplayService.saveEventsFromURL();
    this.checkDatataExists();
  }
  checkDatataExists() {
    this.collectDisplayService.getEvents();
    this.events = this.collectDisplayService.events;
    if (this.events.length > 0) {
      this.dataExists = true;
    }
  }
  
}
