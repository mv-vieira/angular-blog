import { dataFake } from './../../data/dataFake';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => (this.id = data.get('id')));
    this.setValueToComponent(this.id);
  }

  setValueToComponent(id: string | null) {
    const result = dataFake.filter((value) => value.id == id)[0];
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
