import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverStatus= 'Server is offline';
  serverInput = 'TestServer';
  serveCreate= false;
  constructor() { 
    setTimeout( () => {
      this.allowNewServer = false;
    },2000)
  }
  onCreateServer () {
    this.serveCreate= true;
    this.serverStatus ='Server is online,'+ 'name of the server is:' +this.serverInput;
  }
  onUpdateServer (event: Event) {
    console.log(event);
    this.serverInput = (<HTMLInputElement>event.target).value;
  }
  ngOnInit() {
  }

}
