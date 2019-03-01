import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import * as socketIo from 'socket.io-client';
import { Observer, Observable } from 'rxjs';
import { Socket } from './socker';

declare var io : {
  connect(url: string): Socket;
};

@Injectable()
export class DataService {

  socket: Socket;
  observer: Observer<number>;

  getQuotes() : Observable<number> {
    this.socket = socketIo('http://localhost:8080/chat');

    this.socket.on('data', (res) => {
      this.observer.next(res.data);
    });

    return this.createObservable();
  }

  createObservable() : Observable<number> {
      return new Observable<number>(observer => {
        this.observer = observer;
      });
  }

  private handleError(error) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        let errMessage = error.error.message;
        return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Socket.io server error');
  }

}