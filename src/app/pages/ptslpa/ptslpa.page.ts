import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { PtslpaService } from 'src/app/services/ptslpa.service';

@Component({
  selector: 'app-ptslpa',
  templateUrl: './ptslpa.page.html',
  styleUrls: ['./ptslpa.page.scss'],
})
export class PtslpaPage implements OnInit {

  noticias: Article[] = []

  constructor(private ptslpaService: PtslpaService) { }

  ngOnInit() {
    this.ptslpaService.getTopHeadLines().subscribe(resp => {
      console.log('noticias', resp);
      this.noticias.push(...resp.articles);
    });
  }

}
