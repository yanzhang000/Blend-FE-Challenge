import {Color} from './Color';

export class Note {
  title: string;
  notes: string;
  color: Color;
  id: string;

  constructor (title, notes, color) {
    this.title = title;
    this.notes = notes;
    this.color = color;
  }

}
