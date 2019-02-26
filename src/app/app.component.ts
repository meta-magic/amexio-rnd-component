import { Component, ViewChild } from '@angular/core';
import { Employee } from './component/models/emp.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contactList: any = [];
  events: any[];

  constructor() {
    this.events = [
      {
        "title": "All Day Event",
        "start": "2019-02-25"
      },
      {
        "title": "Microservice Workshop",
        "start": "2019-02-07",
        "end": "2019-02-09"
      },
      {
        "title": "Amexio Meetup",
        "start": "2019-02-28T04:00:00",
        "end": "2019-02-28T05:00:00"
      },
      {
        "title": "Amexio Meetup 2.1",
        "start": "2019-02-27T11:25:00",
        "end": "2019-02-27T12:25:00"
      },
      {
        "title": "Amexio Meetup 2.0",
        "start": "2019-02-26T17:00:00",
        "end": "2019-02-26T19:25:00"
      },
      {
        "title": "Amexio Meetup 3",
        "start": "2019-02-22T18:25:00",
        "end": "2019-02-22T21:25:00"
      },
      {
        "title": "121 Conference",
        "start": "2019-02-12",
        "end": "2019-02-13"
      },
      {
        "title": "122 Conference",
        "start": "2019-02-22",
        "end": "2019-02-24"
      }
    ];
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
}

