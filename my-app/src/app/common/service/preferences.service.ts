import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  public couleurFondPreferee :string = 'lightgrey'; //v1 : public

  constructor() { }
}
