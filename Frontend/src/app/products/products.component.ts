import { Component } from '@angular/core';
import { ProductService } from '../productservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'pm-products',
  templateUrl:'./products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  Title: string = 'Library';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;

  products=[{
    productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private productService: ProductService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
  }
 
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['update']);

  }
  deleteProduct(product:any)
  {
    this.productService.deleteProduct(product._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
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

  