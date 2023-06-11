import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { LivrableComponent } from './livrable/livrable.component';

@Component({
  selector: 'app-livraisondetails',
  templateUrl: './livraisondetails.component.html',
  styleUrls: ['./livraisondetails.component.css']
})
export class LivraisondetailsComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  livrables: LivrableComponent[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  inputs: string[] = [];
  allLivrable: string[] = [];
  ajouterInputs() {
    this.inputs.push('');
  }

  showAlert() {
    alert('Array: ' + JSON.stringify(this.allLivrable));
    console.log(this.allLivrable);
  }

  ajouterLivrable() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LivrableComponent);
    const componentRef = this.container.createComponent(componentFactory);
    const livrableComponent = componentRef.instance as LivrableComponent;
    this.livrables.push(livrableComponent);
  }
  @Input() livraison: any;
}

