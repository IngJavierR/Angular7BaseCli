import { Component, OnInit } from '@angular/core';
import { ConsumeService } from '../services/consume.service';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  joke: String = "";
  constructor(private _consumeService: ConsumeService,
              private _data: DataService) { }

  ngOnInit() { }

  consulta(){
    this._data.setIsLoadingEvent(true);
    this._consumeService
        .getJoke()
        .subscribe((response) => {
            console.log(response);
            this.joke = response.value.joke;
            this._data.setIsLoadingEvent(false);
        },
        (err) => {
            console.error(err);
            this._data.setIsLoadingEvent(false);
        })
    }

    raiseNotification() {
        this._data.setGeneralNotificationMessage('Notificación de prueba');
    }

}
