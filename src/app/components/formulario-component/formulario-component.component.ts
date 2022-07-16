import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent implements OnInit {

  formulario: FormGroup
  arrCategorias: Category[] = []

  constructor(
    private categoriesService: CategoriesService,
    private postService: PostsService
    ) { 
      this.formulario = new FormGroup({
        author: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        image: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(https):\/\/[^ "]+$/)
        ]),
        date: new FormControl('', [
          Validators.required
        ]),
        category: new FormControl('', [
          Validators.required
        ]),
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        text: new FormControl('', [
          Validators.required
        ])
      })
    }

  ngOnInit(): void {
    this.arrCategorias = this.categoriesService.getAllCategories()
  }

  getDataForm(formulario: any){
    console.log(formulario.value)
    this.postService.agregarPost(this.formulario.value)
    this.formulario.reset({})
    alert('Tu Post ha sido correctamente creado')
  }

  checkControl(controlName: string, errorName: string): boolean{
    if(this.formulario.get(controlName)?.hasError(errorName) && this.formulario.get(controlName)?.touched){
      return true;
    }else{
      return false;
    }
  }

  
}
