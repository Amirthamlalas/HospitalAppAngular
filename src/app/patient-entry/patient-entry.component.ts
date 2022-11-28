import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {

  name=""
  id=""
  address=""
  contact=""
  doa=""
  image=""
  docname=""

  entry=()=>{
    let data:any={
      "name":this.name,
      "id":this.id,
      "address":this.address,
      "contact":this.contact,
      "doa":this.doa,
      "image":this.image,
      "docname":this.docname
    }
    console.log(data)
  }

}
