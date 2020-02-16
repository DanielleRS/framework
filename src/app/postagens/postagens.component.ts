import { Component, OnInit } from '@angular/core';
import { PostagensService } from '../services/postagens.service';
import { Observable } from 'rxjs';
import { Postagens } from '../models/postagens';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  postagens$: Observable<Postagens>;

  constructor(private postagensService: PostagensService) { }

  ngOnInit() {
    this.postagens$ = this.postagensService.fetchAll();
  }

}
