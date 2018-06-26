import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  public localVariable = 'local Variable';
  public newFav;
  public userRating = 3;

  @Input()
  set isMyFav(isMyFav: string) {
    this.newFav = isMyFav + ' : Will win WC';
  }

  @Input()
  set winner(winner: string) {
    this.newFav = this.newFav + winner;
  }

  public edited = this.localVariable + ' + editied Content';


  constructor() {
  }

  ngOnInit() {
  }

}
