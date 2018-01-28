    var typeSound = new Audio("sounds/GLITCH.ogg");
function StartTypeText(textToType, outputId){
				var preInputString = textToType.split("").join("|");
				outputText = [];
				TypeText(preInputString, 0, outputId);
		}
				var outputText = [];
function TypeText(inputString, i, id){	
				inputString = inputString.replace("|\n|","|<br/>|");
				var textYesBreak = inputString.split("|");
				var textValue = textYesBreak;
                typeSound.play();

			if(i < textValue.length){
						setTimeout(function(){
						outputText.push(textValue[i]);
						document.getElementById(id).innerHTML = "<p>" + outputText.join('') + "</p>";
                            typeSound.playbackRate = Math.random()*2.5 + .9;
                             typeSound.play();
						TypeText(inputString, ++i, id);
						}, 100);
					}
			}