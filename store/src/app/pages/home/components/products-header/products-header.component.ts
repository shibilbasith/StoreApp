import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TileStyler } from '@angular/material/grid-list/tile-styler';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  // creating variable
  sort = 'desc';
  itemsShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  // assign clicked value to sort - new method
  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  //method to show item
  onItemsUpdated(count: number): void{
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  //click update column of products
  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

}
