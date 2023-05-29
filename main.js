function Hide(Reason){
  let reason2 = document.querySelector(`#${Reason}`);

  if(reason2.classList.contains("visto")){
    reason2.classList.remove("visto");
  }else{
    reason2?.classList.add("visto");
  }
}