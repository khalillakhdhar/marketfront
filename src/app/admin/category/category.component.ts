import { Component } from '@angular/core';
import { Category } from '../../shared/interfaces/category';

@Component({
  selector: 'app-category',
  standalone: false,

  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  category={} as Category;
  categories: Category[] = [];
save()
{
  console.log(this.category);
}
delete(id:number)
{
  console.log(id);
}
}
