let nowPlaying=false;
let timer;
let count=1;
let URL="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_01.jpg";
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
function play(){
  if(nowPlaying==false){
    nowPlaying=true;
    autoPlay();
  }
}
function stop(){
  clearTimeout(timer);
  nowPlaying=false;
}
function reset(){
  stop();
  thumbnailsElement.children[count-1].classList.remove('selected');
  count=1
  thumbnailsElement.children[count-1].classList.add('selected');
  URL="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_01.jpg";
  mainElement.setAttribute('src',URL);
  nowPlaying=false;
}
function autoPlay(){
  timer=setTimeout(function(){
    right();
    autoPlay();
  },1000);
}
function right(){
  thumbnailsElement.children[count-1].classList.remove('selected');
  count=count+1;
  if(count==20){
    count=1;
  }
  if(count<10){
    URL="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0"+count+".jpg";
  }else{
    URL="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_"+count+".jpg";
  }
  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src',URL);
}
function a(n){
  thumbnailsElement.children[count-1].classList.remove('selected');
  count=n;
  if(count==0){
    count=19;
  }
  if(count<10){
    URL="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0"+count+".jpg";
  }else{
    URL="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_"+count+".jpg";
  }
  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src',URL);

}
function left(){
  thumbnailsElement.children[count-1].classList.remove('selected');
  count=count-1;
  if(count==0){
    count=19;
  }
  if(count<10){
    URL="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0"+count+".jpg";
  }else{
    URL="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_"+count+".jpg";
  }
  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src',URL);
}
