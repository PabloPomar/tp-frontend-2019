import {Component, Input, OnInit} from '@angular/core';
import {ApiConnectionService} from "../api-connection.service";
import {pokeModelBase} from "../pokemonBaseModel";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-post-test',
  templateUrl: './post-test.component.html',
  styleUrls: ['./post-test.component.less']
})
export class PostTestComponent implements OnInit {

  pokeModel: FormGroup;


  constructor(
    protected apiConnection : ApiConnectionService , private fb: FormBuilder
  ) {
  }


  ngOnInit() {this.pokeModel = this.fb.group({
      id: new FormControl(''),
      description: new FormControl('')
  }) }


  updateDescrptiption() {
    this.apiConnection.postDescription(this.pokeModel.value).subscribe();
  }

}


