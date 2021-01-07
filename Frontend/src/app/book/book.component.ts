
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import { ProductService } from '../productservice.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  Title: string = 'Book';
  productItem= {
    title :'',
    author:'',
    genre:'',
    image:''
    }
 
  constructor(private router:Router,private productService:ProductService,public _auth:AuthService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.productService.getProduct(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })
  }
  logoutUser()
  {
    localStorage.removeItem('token')
    this.router.navigate(['/products'])
  }
  loggedUser()
  {
  this.router.navigate(['/add'])
  }
  }
  


