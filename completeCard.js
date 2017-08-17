var displayCard = function (front, back){
  this.front  = front;
  this.back = back;
}

var fullCard = function (text, cloze){
  this.full = text;
  this.cloze = cloze;
  this.partial = text.replace(cloze, "....");
}

module.exports= displayCard;
module.exports= fullCard;
