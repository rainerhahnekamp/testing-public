import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingService } from '../../shared/loading.service';

@Component({
  selector: 'eternal-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [MatProgressBarModule, AsyncPipe, NgIf]
})
export class LoaderComponent {
  constructor(public loadingService: LoadingService) {}
}
