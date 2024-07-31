import { TestBed } from '@angular/core/testing';

import { DiabetesPredictionService } from './diabetes-prediction.service';

describe('DiabetesPredictionService', () => {
  let service: DiabetesPredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiabetesPredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
