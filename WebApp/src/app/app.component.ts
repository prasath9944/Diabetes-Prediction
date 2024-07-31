import { Component } from '@angular/core';
import { DiabetesPredictionService } from './diabetes-prediction.service';
import { Diagnostic } from './diabetes';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'diabetes-prediction';
  message: string | undefined;
  Pregnancies: string = '';
  diabetes: Diagnostic=new Diagnostic()
  onClick(): void {
    console.log('diabetic', this.diabetes);

    this.dataService.submitForm(this.diabetes).subscribe(
      (response) => {
        this.responseMessage = response.receivedData;
        console.log("Server Output:",this.responseMessage);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  constructor(private dataService: DiabetesPredictionService) {}

  formData = {
    name: '',
    email: '',
  };
  responseMessage: string ='';

  onSubmit(): void {
    console.log('Form Date=', this.formData);
    this.dataService.submitForm(this.formData).subscribe(
      (response) => {
        this.responseMessage = response.receivedData;
        console.log(this.responseMessage);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
