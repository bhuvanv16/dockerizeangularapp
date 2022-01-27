import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { HtmlService } from '../html.service';

@Component({
selector: 'app-html',
templateUrl: './html.component.html',
styleUrls: ['./html.component.css']
})

export class HtmlComponent implements OnInit {

public name: string ="";
public questionList : any=[];
public currentQuestion : number=0;
public points : number=0;
counter=60;
correctAnswer : number=0;
inCorrectAnswer : number=0;
interval$: any;
progress : string="0";
isTestCompleted : boolean=false;
constructor(private questionService : HtmlService) { }



ngOnInit(): void {
this.name = localStorage.getItem("name")!;
this.getAllQuestions();
this.startCounter();
}
getAllQuestions(){
this.questionService.getQuestionJson()
.subscribe(res=>{
this.questionList =res.html;
})



}



nextQuestion(){
this.currentQuestion++;



}
previousQuestion(){
this.currentQuestion--;



}
answer(currentQno:number,option:any){
if(currentQno===this.questionList.length){
this.isTestCompleted=true;
this.stopCounter();
}
if (option.correct){
this.points += 10;
this.correctAnswer++;
setTimeout(()=>{
this.currentQuestion++;
this.resetCounter();
this.getProgressPercent();
},1000);

}
else{
setTimeout(()=>{
this.currentQuestion++;
this.inCorrectAnswer++;
this.resetCounter();
this.getProgressPercent();
},1000);
this.points-=10;
}

}
startCounter(){
this.interval$ = interval(1000)
.subscribe(val=>{
this.counter--;
if (this.counter===0){
this.currentQuestion++;
this.counter=60;
this.points-=10;
}
});
setTimeout(()=>{
this.interval$.unsubscribe();
},600000)
}
stopCounter(){
this.interval$.unsubscribe();
this.counter=0;




}
resetCounter(){
this.stopCounter();
this.counter=60;
this.startCounter();



}
resetTest(){
this.resetCounter();
this.getAllQuestions();
this.points=0;
this.counter=60;
this.currentQuestion=0;
this.progress="0";



}
getProgressPercent(){
this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
return this.progress;




}
}