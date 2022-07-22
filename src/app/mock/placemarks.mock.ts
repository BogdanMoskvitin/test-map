import { IPlacemark } from "../models/placemark.model";

export const mockPlacemarks: IPlacemark[] = [
  {
    "type": "Feature", 
    "id": 0, 
    "geometry": {
      "type": "Point", 
      "coordinates": [55.831903, 37.411961]
    }, 
    "properties": {
      "balloonContentHeader": "<p>It`s first placemark</p>", 
      "balloonContentBody": "<p>Body</p>", 
      "balloonContentFooter": "<p>Footer</p>", 
      "hintContent": "<span>1-placemark</span>"
    },
    "options": {
      "preset": 'islands#redDotIcon',
    }
  },
  {
    "type": "Feature", 
    "id": 1, 
    "geometry": {
      "type": "Point", 
      "coordinates": [55.841903, 37.421961]
    }, 
    "properties": {
      "balloonContentHeader": "<p>It`s second placemark</p>", 
      "balloonContentBody": "<p>Body</p>", 
      "balloonContentFooter": "<p>Footer</p>", 
      "hintContent": "<span>2-placemark</span>"
    },
    "options": {
      "preset": 'islands#blueDotIcon',
    }
  },
  {
    "type": "Feature", 
    "id": 2, 
    "geometry": {
      "type": "Point", 
      "coordinates": [55.851903, 37.431961]
    }, 
    "properties": {
      "balloonContentHeader": "<p>It`s third placemark</p>", 
      "balloonContentBody": "<p>Body</p>", 
      "balloonContentFooter": "<p>Footer</p>", 
      "hintContent": "<span>3-placemark</span>"
    },
    "options": {
      "preset": 'islands#greenDotIcon',
    }
  },
]
