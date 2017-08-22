exports.displayCard = function (front, back){
  this.front  = front;
  this.back = back;
}

exports.fullCard = function (text, cloze){
  this.full = text;
  this.cloze = cloze;
  this.partial = text.replace(cloze, "....");
}
