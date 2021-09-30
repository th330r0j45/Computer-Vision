import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MsServiceService {
  constructor(private http: HttpClient) {}

  public computerVisionService(imageURL: string) {
    const API =
      'https://image-rec-angular.cognitiveservices.azure.com//vision/v2.0/analyze?visualFeatures=Categories,Description,Tags,Color,Brands,Faces,ImageType';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': 'c62fd9b9d64646d9b5784ceee85bcd08',
    });
    return this.http.post(API, { url: imageURL }, { headers: headers });
  }
}
