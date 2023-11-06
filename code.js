var score = 0;
onEvent("imgCookie", "click", function( ) {
  score = score+1;
  setProperty("lblScore", "text", "Score: " + score);
  playSound("assets/category_animals/snake.mp3", false);
});
onEvent("btnReset", "click", function( ) {
  score = 0;
   setProperty("lblScore", "text", "Score: " + score);
});
onEvent("imgNextscreen", "click", function( ) {
  setScreen("screen3");
});
onEvent("imagePrevscreen", "click", function( ) {
  setScreen("screen1");
});
var score = 0;
onEvent("imgCookie2", "click", function( ) {
  score = score+1;
  setProperty("lblScore2", "text", "Score: " + score);
  playSound("assets/category_tap/level_select_1.mp3", false);
});
onEvent("imgNextscreen2", "click", function( ) {
  setScreen("screen2");
});
onEvent("imgPrevscreen3", "click", function( ) {
  setScreen("screen3");
});
onEvent("Linkimg", "click", function( ) {
  startWebRequest("https://cobrakaistore.com/", function(status, type, content) {
    
  });
});