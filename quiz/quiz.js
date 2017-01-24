var i=0;
var j;
var ans,marks=0;
var checkvalue=0;
var questions=[
  ["Girilal Jain was a noted figure in which of the following fields?","Social Service","Journalism","Literature","Politics","Journalism"],
  ["Who is Tania Sachdev?","chess player","cricketer","actress","dancer","chess player"],
  ["Limba Ram is associated in which fields?","sports","politics","social services","motion picture","sports"],
  ["Ms. Meera Sahib Fathima Beevi is distinguished as the first lady","PM of Bangladesh","supreme court judge","High court judge","none","supreme court judge"],
  ["Who is the creator of the Rock Garden in Chandigarh?","Pupal Jayakar","Le Corbousier","Glen","Nek Chand","Nek Chand"],
  ["Hitendra Desai was famous in the which field?","Social Service","Journalism","Politics","Literature","Politics"],
  ["Naina Devi, was associated with field of?","Social Service","Stage acting","Classical dance","Vocal music","Vocal music"],
  ["Who is known as 'Trimurthy of Carnatic Music'?","Muthuswami","Purandardasa","Swami Thirunal","None of these","Muthuswami"],
  ["Gangubai hangal is the name associated with","Literature","Music","Journalism","Environment","Music"],
  ["Who is known as the 'Lady with the Lamp'?","Florence Nightingale","Sarojini Naidu","Indira Gandhi","Joan of Arc","Florence Nightingale"]
]


// on clicking next this function will be called
function next(){
  if(!checkvalue)
  {
    alert("please select an answer");
return;
  }
  else {
    if(ans==checkvalue) {
      marks++;
    }
  }
  i++;
    if(i>questions.length - 1){
    // window.location="quiz2.html";
      document.getElementById('ans-wrapper').innerHTML = "<h1>Your Score is " + marks +" Good Work :)"+ "</h1>";
    // document.getElementById('ans-wrapper').remove();
    }
    else{

      display(i);
    }
checkvalue=null;
}

if(i==0) {
  display(i);
}

function cal(val){
  checkvalue=val;
}

function display(i){
  document.getElementById("question").innerHTML = questions[i][0];
  document.getElementById("choice0").innerHTML = questions[i][1];
  document.getElementById("choice1").innerHTML = questions[i][2];
  document.getElementById("choice2").innerHTML = questions[i][3];
  document.getElementById("choice3").innerHTML = questions[i][4];

  document.getElementById("question").innerHTML = questions[i][0];
  document.getElementById("btn0").value = questions[i][1];
  document.getElementById("btn1").value = questions[i][2];
  document.getElementById("btn2").value = questions[i][3];
  document.getElementById("btn3").value = questions[i][4];
  ans=questions[i][5];
  j=i;
  document.getElementById("progress").innerHTML="Question " +(i+1) +" of "+ questions.length;

  //alert(document.getElementById("btn1").value);
//alert(questions.length-1);
}


