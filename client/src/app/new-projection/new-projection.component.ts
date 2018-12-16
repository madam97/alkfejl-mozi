import { Component, OnInit } from '@angular/core';
import { ProjectionService } from '../services/projection.service';
import { Projection } from '../classes/projection';

@Component({
  selector: 'app-new-projection',
  templateUrl: './new-projection.component.html',
  styleUrls: ['./new-projection.component.css']
})
export class NewProjectionComponent implements OnInit {

  constructor(
    private projectionService : ProjectionService
  ) { }

  ngOnInit() {}

  private onSave(projection: Projection){
    this.projectionService.addProjection(projection);
    alert("The new projection has been added.");
  }

}
