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

			if(i < textValue.length){
						setTimeout(function(){
						outputText.push(textValue[i]);
						document.getElementById(id).innerHTML = "<p>" + outputText.join('') + "</p>";
                           // document.write("Fucking work");
						TypeText(inputString, ++i, id);
						}, 100);
					}
			}