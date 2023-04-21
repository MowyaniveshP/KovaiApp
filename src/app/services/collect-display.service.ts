import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
  errorCode: number = 0;
  dataCollected: boolean = false;

  getEvents() {
    this.http.get<EventModel[]>(this.baseUrl).subscribe(
      (res) => this.events = res as EventModel[],
      (error: HttpErrorResponse) => {
        this.errorCode = error.status;
      });
  }

  saveEventsFromURL() {
    this.http.post(this.baseUrl, "").subscribe(
      () => { this.dataCollected = true; },
      (error: HttpErrorResponse) => {
        this.errorCode = error.status;
      }
    );
  }
}
