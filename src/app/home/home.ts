import { Component , OnInit} from '@angular/core';
import { AiService } from '../services/ai-service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  aiResponse: any;
  userInput:any;

  constructor(private aiService: AiService) { }

  ngOnInit(): void {
    this.aiResponse = null;
    this.userInput = '';
  }

  submitPrompt(prompt: string) {
    this.aiResponse =  this.aiService.generateResponse(this.userInput);
    // Call the AI service to get a response

    // this.aiService.callAi(prompt).subscribe(response => {
    //   this.aiResponse = response;
    // });
  }
}
