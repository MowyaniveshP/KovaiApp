import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventModel } from '../models/eventModel.model';
import { Addresses } from '../models/addresses.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectDisplayService {

  constructor(private http: HttpClient) { }
  address: Addresses = new Addresses;
  baseUrl: string = this.address.localHostURL;
  events: EventModel[] = [];
  // event: EventModel = new EventModel;

  getEvents() {
    this.http.get(this.baseUrl).subscribe(res => this.events = res as EventModel[]);    
  }

  // getEvent(id:number) {
  //   this.http.get(this.baseUrl + id).subscribe(res => this.event = res as EventModel);    
  // }

  saveEventsFromURL() {
    this.http.post(this.baseUrl, "").subscribe();    
  }
}
