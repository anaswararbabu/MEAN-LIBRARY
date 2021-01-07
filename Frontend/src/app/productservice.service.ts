import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  item= {
    title :'',
    author:'',
    genre:'',
    image:''
    }
    
  constructor( private http:HttpClient) { }
  getProduct(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getAuthor(id:any){
    return this.http.get("http://localhost:3000/author/"+id);
  }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  newProduct(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  newAuthor(item:any)
  {   
    return this.http.post("http://localhost:3000/author/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteProduct(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  deleteAuthor(id:any)
  {

    return this.http.delete("http://localhost:3000/author/remove/"+id)

  }
  editProduct(product:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",product)
    .subscribe(data =>{console.log(data)})
  }
  editAuthor(product:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/author/update",product)
    .subscribe(data =>{console.log(data)})
  }
}
