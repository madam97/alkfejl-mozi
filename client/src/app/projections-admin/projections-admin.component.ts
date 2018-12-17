import { Component, OnInit } from '@angular/core';
import { Projection } from '../classes/projection';
import { ProjectionService } from '../services/projection.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-projections-admin',
  templateUrl: './projections-admin.component.html',
  styleUrls: ['./projections-admin.component.css']
})
export class ProjectionsAdminComponent implements OnInit {

  private projections: Projection[];
  private displayedColumns = ['time', 'room', 'movie', 'is3d'];

  constructor(private projectionService: ProjectionService, private authService: AuthService) { }

  async ngOnInit() {
    this.projections = await this.projectionService.getProjections();
  }

  /*async deleteProjection(id: number){
    await this.projectionService.deleteProjection(id);
    this.projections = await this.projectionService.getProjections();
  }*/
}
