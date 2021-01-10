import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gestprod',
  templateUrl: './gestprod.component.html',
  styleUrls: ['./gestprod.component.css']
})
export class GestprodComponent implements OnInit {
  productAddForm!: FormGroup;
  constructor(private fb: FormBuilder) { } 

  ngOnInit(): void {
    this. productAddForm = this.fb.group ({
      nameControl: ['firas']
      }); 
  }

  onAjouter(){
    alert(JSON.stringify(this.productAddForm.value))
  }

}
