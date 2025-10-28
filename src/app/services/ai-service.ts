    // ai.service.ts
    import { Injectable } from '@angular/core';
    import { HttpClient, HttpHeaders } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { environment } from '../../enivironments/environment';
    import axios from 'axios';


    @Injectable({
      providedIn: 'root'
    })
    export class AiService {
      private apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent`;
      private apiKey = environment.geminiApiUrl;

      async generateResponse(prompt: string): Promise<string> {
        try {
          const response = await axios.post(
            `${this.apiUrl}?key=${this.apiKey}`,
            {
              contents: [{ parts: [{ text: prompt }] }]
            },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );

          return response.data.candidates[0].content.parts[0].text;
        } catch (error: any) {
          console.error('Gemini API Error:', error);
          return 'Error connecting to Gemini API';
        }
      }
    }