import { Component, OnInit } from '@angular/core';
import { DocuementType } from '../data/models/document-type.models';
import { LanguageType } from '../data/models/language-type.models';
import { DocumentBody } from '../data/models/document-body.models';
import { MULTIMEDIA_TYPES } from '../data/constants/multimedia-types.constants';
import { LANGUAGE_TYPES } from '../data/constants/language-types.constants';
import { HomeService } from '../data/services/home.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public promp: string = '';
  public selectMultimedia: number = DocuementType.PDF;
  public selectLanguage: number = LanguageType.SPANISH;
  public selectFormat: number = 0;
  public multimedia = MULTIMEDIA_TYPES;
  public languages = LANGUAGE_TYPES;
  public format = [
    { id: 0, name: 'Estudiantil' },
    { id: 1, name: 'Profesional' },
  ];
  constructor(private homeService: HomeService) {}

  ngOnInit() {}

  public multemediaSelected() {
    console.log(this.selectMultimedia);
  }

  public generateDocument() {
    const documentBody: DocumentBody = {
      prompt: this.promp,
      documentType: this.selectMultimedia,
      languageType: this.selectLanguage,
      modelType: this.selectFormat,
    };
    this.homeService.getDocument().subscribe({
      next(blob) {
        const file = new Blob([blob], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      },
      complete() {},
    });
  }
}
