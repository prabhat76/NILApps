import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CanvasJSAngularChartsModule, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  courseDetails = {
    code: "BA3103",
    name: "Quantitative techniques",
    type: "Program Elective",
    period: "Semester - I",
    credits: {
      lecture: 3,
      tutorial: 0,
      practical: 1,
      project: 0
    },
    outcomes: ["CO2", "CO4", "CO5", "CO7", "CO13", "CO14"],
    mappedPOs: ["PO7", "PO8", "PO10", "PO12"]
  };

  // Assessment Progress Chart Data
  assessmentOptions = {
    animationEnabled: true,
    axisY: {
      title: "Completion Percentage",
      suffix: "%",
      maximum: 100
    },
    axisX: {
      title: "Assessment Type"
    },
    data: [
      {
        type: "column",
        showInLegend: true,
        name: "Pending",
        color:"#697fcf",
        dataPoints: [
          { label: "Assignment", y: 25 },
          { label: "Quiz", y: 50 },
          { label: "Presentation", y: 60 },
          { label: "Lab", y: 80 },
          { label: "Viva", y: 90 }
        ]
      },
      {
        type: "column",
        showInLegend: true,
        name: "Completed",
        color:"#3b7d56",
        dataPointWidth: 20,
        dataPoints: [
          { label: "Assignment", y: 75 },
          { label: "Quiz", y: 50 },
          { label: "Presentation", y: 40 },
          { label: "Lab", y: 20 },
          { label: "Viva", y: 10 }
        ]
      }
    ]
  };

  attendanceOptions = {
    animationEnabled: true,
    axisX: {
      title: "Weeks",
      interval: 1,
      gridThickness: 1,
      gridDashType: "solid"
    },
    axisY: {
      title: "Attendance (%)",
      suffix: "%",
      gridDashType: "dash"
    },
    data: [{
      type: "line",
      markerSize: 12,
      dataPoints: [
        { x: new Date(2024, 6, 1), y: 50 },
        { x: new Date(2024, 6, 8), y: 60 },
        { x: new Date(2024, 6, 15), y: 80 },
        { x: new Date(2024, 6, 22), y: 75 },
        { x: new Date(2024, 6, 29), y: 90 },
        { x: new Date(2024, 7, 5), y: 85 },
        { x: new Date(2024, 7, 12), y: 95 },
        { x: new Date(2024, 7, 19), y: 85 },
        { x: new Date(2024, 7, 26), y: 75 },
        { x: new Date(2024, 8, 2), y: 80 }
      ]
    }]
  };


}
