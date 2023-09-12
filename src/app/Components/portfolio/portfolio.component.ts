import { Component,ElementRef,HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor(private titleService :Title,private eRef: ElementRef){
    titleService.setTitle('Portfolio')
  }
  value:any=null ;
  show(event:any){
    this.value = event.target.firstElementChild.src as HTMLInputElement;
  }

  //miss understand
  clickimg(event:any){
    if(event.target.firstElementChild){      
        this.value=null;     
    } 
   
    
  }
  
}
