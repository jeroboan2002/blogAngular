import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CATEGORIES } from '../db/categories.db';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private arrCategories: Category[] = CATEGORIES

  constructor() { 
    this.arrCategories = CATEGORIES
  }

  getAllCategories(): Category[]{
    return this.arrCategories;
  }  
}
