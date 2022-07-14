import { Injectable } from '@angular/core';
import { CATEGORIES } from '../db/categories.db';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private arrCategories: Category[] = CATEGORIES

  constructor() { 
  }

  getAllCategories(): Category[]{
    return this.arrCategories;
  }  
}
