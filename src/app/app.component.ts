import { Component, ViewChild, OnInit } from '@angular/core';
import { Employee } from './component/models/emp.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DataService } from './component/service/dataservice';
import { Subscription } from 'rxjs';


declare var SockJS: any;
declare var Stomp: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  contactList: any = [];
  events: any[];
  username : string;
  
  sub: Subscription;
  ngModelChange(event:any){
    
    this.username = event;
    console.log('AppComponent ',event);
  }
  ngOnInit() {
   
    let stompClient: any;
    const socket = new SockJS('http://localhost:8080/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {

      console.log('Connected: ' + frame);
      stompClient.subscribe('/topic/messages', function (messageOutput) {
        console.log(messageOutput.body);
      });
    });
  }
  constructor(private dataService: DataService) {
    // this.sub = this.dataService.getQuotes()
    //     .subscribe(quote => {
    //       console.log(quote);
    //     });

    this.calendarDate = new Date(1551697131284);
    this.events = [
      {
        "title": "Kubernetes Workshop",
        "start": "2019-02-25T11:00:00",
        "end": "2019-03-02T14:00:00"
      },
      {
        "title": "Microservice Workshop",
        "start": "2019-02-25T03:00:00",
        "end": "2019-03-03T06:00:00"
      },
      {
        "title": "Docker Workshop",
        "start": "2019-03-07",
        "end": "2019-03-09"
      },
      {
        "title": "Kubernetes Workshop",
        "start": "2019-03-11",
        "end": "2019-03-12"
      },
      {
        "title": "Microservice Workshop",
        "start": "2019-03-13",
        "end": "2019-03-14"
      },
      {
        "title": "Docker Workshop",
        "start": "2019-03-17",
        "end": "2019-03-18"
      },
      {
        "title": "Amexio Meetup",
        "start": "2019-03-25T18:00:00",
        "end": "2019-03-25T20:00:00"
      },
      {
        "title": "Angular Event",
        "start": "2019-03-27T11:25:00",
        "end": "2019-03-27T12:25:00"
      },
      {
        "title": "Amexio Meetup",
        "start": "2019-03-16T11:00:00",
        "end": "2019-03-16T12:30:00"
      },
      {
        "title": "Amexio Meetup ",
        "start": "2019-02-22T18:25:00",
        "end": "2019-02-22T21:25:00"
      },
      {
        "title": "121 Conference",
        "start": "2019-04-12",
        "end": "2019-04-13"
      },
      {
        "title": "122 Conference",
        "start": "2019-05-22",
        "end": "2019-05-24"
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-02-28T10:15:00",
        "end": "2019-02-28T10:30:00"
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-04-30T10:15:00",
        "end": "2019-04-30T10:30:00"
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-05-31T10:15:00",
        "end": "2019-05-31T10:30:00"
      },
      {
        "title": "Technology Conference",
        "start": "2019-03-05"
      },
      {
        "title": "All Hands Meeting",
        "start": "2019-03-22T10:15:00",
        "end": "2019-03-22T12:30:00"
      }
    ];
    // this.events = [

    // {
    //   "title": "Kubernetes Batch 1",
    //   "start": "2019-02-22T10:00:00",
    //   "end": "2019-02-25T13:00:00"
    // },
    // {
    //   "title": "Microservice Batch 1",
    //   "start": "2019-02-21T15:00:00",
    //   "end": "2019-02-23T18:00:00"
    // }
    // ];
    this.contactList = [
      {
        'name': 'Ketan Gote',
        'description': 'UI/UX, Microservice, Kubernetes, Docker ',
        'imagepath': 'https://i.ibb.co/zxvy25m/ketan.jpg',
        'bgcolor': 'linear-gradient(40deg,#12c2e9, #ec38bc)'
      },
      {
        'name': 'Sagar Jadhav',
        'description': 'Angular, Java, Microservices',
        'imagepath': 'https://media.licdn.com/dms/image/C5103AQF3EDkCcxqsnQ/profile-displayphoto-shrink_100_100/0?e=1554336000&v=beta&t=RhxgAziI4yMWqftaeq6WPvMlSKJgWSzZH5c6H5zT6Yc',
        'bgcolor': 'linear-gradient(40deg,#141E30,#243B55)'
      },
      {
        'name': 'Dattaram Gawas',
        'description': 'UI / UX Desinger',
        'imagepath': 'https://i.ibb.co/J7QyC3g/dats.jpg',
        'bgcolor': 'linear-gradient(40deg,#a8ff78, #78ffd6)'
      },
      {
        'name': 'Rashmi Thakker',
        'description': 'UI Developer',
        'imagepath': 'https://i.ibb.co/cJSjBtd/rashmi.jpg',
        'bgcolor': 'linear-gradient(40deg,#457fca, #5691c8)'
      },
      {
        'name': 'Ashwini Agre',
        'description': 'UI Developer',
        'imagepath': 'https://i.ibb.co/th1kSKq/ashwini.jpg',
        'bgcolor': 'linear-gradient(40deg,#bc4e9c, #f80759)'
      },
      {
        'name': 'Deepali Arvind',
        'description': 'Security Analyst',
        'imagepath': 'https://i.ibb.co/3CTVNq8/dipali.jpg',
        'bgcolor': 'linear-gradient(40deg,#40E0D0, #FF0080)'
      }
    ];
  }



  calendarDate = new Date();
  onEventClicked(event: any) {
    console.log(event);
  }

  setCalendarDate() {
    debugger;
    this.calendarDate = new Date(this.calendarDate.setMonth(this.calendarDate.getMonth() + 1));
  }
}

