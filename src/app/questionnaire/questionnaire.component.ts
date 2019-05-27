import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormGroup } from '@angular/forms';
import { CommonService } from '../services/common/common.service';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../services/storage/storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  private question: any;
  public loadQuestion: boolean = true;
  public showQuestion: boolean = false;
  public showsubQuestion: boolean = false;
  public showsubQuestion2: boolean = false;
  public question1: any;
  public answer1: any;
  public question2: any;
  public answer2: any;
  public question3: any;
  public answer3: any;
  public stop: any;
  constructor(private localStorage: StorageService,private toastr: ToastrService, private router: ActivatedRoute, private Router: Router, public common: CommonService

  ) {

  }

  ngOnInit() {
    // alert('1')
  }

  onClick1() {
    this.showQuestion = true;
    this.loadQuestion = false;
    this.question = [
      // {'question': 'Is Your name is usman', 'Answer': ['Yes', 'No'],'sub_question':[{'question':'Are you Web Developer','Answer':['Yes','No']}]},
      {
        'question': 'Are Your Hungry',
        'Answer': ['Yes', 'No'],
        'sub_question': [
          {
            'question': 'What Would you like to eat?',
            'Answer': ['Pizza', 'Chicken'],
            'sub_question2': [
              {
                'question': 'Would you like to pizza with mashroom?',
                'Answer': ['Yes', 'No'],
                'stop': 'OK,I will order for you.'
              }
            ],
            'stop': 'Nice,I will order for you.'
          }],
        'stop': 'OK Call me, When you are hungry.'
      }
    ];
  }
  onClick2(ans,ques,stop) {
    this.question1=ques
    this.answer1=ans
    this.stop=stop
    if (ans == 'Yes') {
      this.showsubQuestion = true;
    } else {
      this.showsubQuestion = false;
    }
  }
  onClick3(ans,ques,stop) {
    this.question2=ques
    this.answer2=ans
    this.stop=stop;
    if (ans == 'Pizza') {
      this.showsubQuestion2 = true;
    } else {
      this.showsubQuestion2 = false;
    }
  }
  onClick4(ans,ques,stop) {
    this.question3=ques
    this.answer3=ans
    this.stop=stop
  }

  onSubmit(){
    console.log('-->'+this.question1+'-->'+this.answer1)
    if(this.answer1=='Yes'){
      console.log('-->'+this.question2+'-->'+this.answer2)
      if(this.answer2=='Pizza'){
        console.log('-->'+this.question3+'-->'+this.answer3)
      }
    }
    console.log('-->'+this.stop)
  }

}
