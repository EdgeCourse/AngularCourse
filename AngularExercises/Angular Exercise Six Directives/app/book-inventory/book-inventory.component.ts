import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication'

@Component({
  selector: 'app-book-inventory',
  templateUrl: './book-inventory.component.html',
  styleUrls: ['./book-inventory.component.css']
})
export class BookInventoryComponent implements OnInit {

  inventory: Publication[] = [
{
ISBN: "1234",
year: 2012, 
author: "Bob Vance",
topic: "Hit all Angles with Angular",
price: 900.00, 
featured: true, 
photos: ["/assets/","/assets/","/assets/"]
},
{
ISBN: "1454",
year: 2013, 
author: "Bob Loblaw",
topic: "Reactive Code With React",
price: 500.00, 
featured: false, 
photos: ["/assets/","/assets/","/assets/"]
},
{
ISBN: "1334",
year: 2010, 
author: "Meredith Arthur",
topic: "Scripting with TypeScript",
price: 590.00, 
featured: false, 
photos: ["/assets/","/assets/","/assets/"]
}]

  trackByISBN(index:number, book:Publication) : string {
    return book.ISBN
  }

  deletePublication(book:Publication) {
    this.inventory = this.inventory.filter(b => b.ISBN != book.ISBN)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
