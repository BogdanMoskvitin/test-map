import { Component } from '@angular/core';
import { mockPlacemarks } from '../mock/placemarks.mock';
import { IPlacemark } from '../models/placemark.model';
import { YaEvent, YaReadyEvent } from 'angular8-yandex-maps';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  placemarks: IPlacemark[]
  coordinates: number[][] = []
  placemarkForm : FormGroup
  coords = []
  isForm = false

  constructor() {
    this.placemarkForm = new FormGroup({   
      "header": new FormControl("", [Validators.required]),
      "body": new FormControl("", [Validators.required]),
      "footer": new FormControl("", [Validators.required]),
      "placeholder": new FormControl("", [Validators.required]),
    })

    let locStor = localStorage.getItem('placemarks') 
    if (locStor == null) {
      this.placemarks = mockPlacemarks
      localStorage.setItem('placemarks', JSON.stringify(this.placemarks))
    } else {
      this.placemarks = JSON.parse(locStor)
    }
  }

  onMapReady(event: YaReadyEvent<ymaps.Map>): void {
    const map = event.target

    this.placemarks.forEach(pm => {
      this.coordinates.push(pm.geometry.coordinates)
    })

    map.setBounds(ymaps.util.bounds.fromPoints(this.coordinates), {
        checkZoomRange: true,
        zoomMargin: [20]
    })
  }

  deletePlacemark(placemark: IPlacemark) {
    this.placemarks.forEach((pm, index) => {
      if(pm.id == placemark.id) {
        this.placemarks.splice(index, 1)
      }
    })
    localStorage.removeItem('placemarks')
    localStorage.setItem('placemarks', JSON.stringify(this.placemarks))
  }

  addPlacemark() {
    let newPlacemark: IPlacemark =   {
      type: "Feature", 
      id: this.placemarks.length, 
      geometry: {
        type: "Point", 
        coordinates: this.coords
      }, 
      properties: {
        balloonContentHeader: `<p>${this.placemarkForm.value.header}</p>`, 
        balloonContentBody: `<p>${this.placemarkForm.value.body}</p>`, 
        balloonContentFooter: `<p>${this.placemarkForm.value.footer}</p>`, 
        hintContent: `<p>${this.placemarkForm.value.placeholder}</p>`, 
      },
      options: {
        preset: 'islands#yellowDotIcon',
      }
    }
    this.placemarks.push(newPlacemark)
    this.isForm = false
    localStorage.removeItem('placemarks')
    localStorage.setItem('placemarks', JSON.stringify(this.placemarks))
  }

  showCoordinates(e: YaEvent<ymaps.Map>): void {
    this.coords = e.event.get('coords')
    this.isForm = true
  }
}
