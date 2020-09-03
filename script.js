function madeBig() {
  //låter texten i rutans värde sparas till en variabel som sedan ändras till upperCase
  let Input = document.getElementById("textInput").value;
  let textSvar = Input.toUpperCase();

  //ändrar textInput från DOM till textOutputten som vi skapade
  document.getElementById("textInput").value = textSvar;
}
