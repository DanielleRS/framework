import { Component, OnInit } from '@angular/core';
import { AlbunsService } from '../services/albuns.service';
import { Observable } from 'rxjs';
import { Albuns } from '../models/albuns';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  albuns$: Observable<Albuns>;

  constructor(private albunsService: AlbunsService) { }

  ngOnInit() {
    this.albuns$ = this.albunsService.fetchAll();
  }

}
