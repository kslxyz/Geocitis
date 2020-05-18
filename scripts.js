$(document).ready(function(){
    alert("For notes on and debugging of functionality, please check the console.");

    console.log("All content on this page is available in a single vertical scroll; however, the vertical scroll is not the only way to navigate the content. The pink buttons are keyterms, and the blue underlines are key concepts. Clicking them will jump you to another section of the scroll with similar thematic elements. The links are randomized at every refresh of the page—even I couldn’t tell you whether the order in which you read will make logical sense, or whether it would support my arguments. I cede that power to you, or to a future me, to dynamically make new interpretive connections as we see fit.");

    //put random link generator function here
    setRandomValues();
    
    
    //get loop to spin on scroll
    var loop = document.getElementById("loop");
    window.addEventListener("scroll", function() {
        var YOffset = window.pageYOffset/10
        loop.style.transform = "rotate("+YOffset+"deg)";
    });

    //get loop to follow cursor
    $(document).mousemove(function(e) {
        $('#loop').offset({
            left: e.pageX-40,
            top: e.pageY
        });
    });


    var clickHistory = [];
    var scrollPos;
    //smooth scroll function, preserve clicked a history
    $(".keyterm, .concept, .start").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
        
          //get scroll position of clicked element
          scrollPos = $(this).offset().top;
          clickHistory.push(scrollPos);
          // Store hash
          var hash = this.hash;
          // Using jQuery's animate() method to add smooth page scroll
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1100, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
          });
        } // End if
      });
    
    $(".top").on('click', function(event) {
        $('html, body').animate ({
            scrollTop: $('#top').offset().top
        }, 1100);
    });

    //go to previous history a
    $(".previous").on('click', function(event) {

        // $('html, body').animate({
        //     scrollTop: $(clickHistory[clickHistory.length-1]).offset().top
        // }, 1100);
        window.scrollTo({
            top: clickHistory[clickHistory.length-1],
            behavior: "smooth"
        });

        clickHistory.splice(-1,1);
        
    });



    //set research question variables
    var question1 = "Question: How is design a cryptographic practice? How does one write code that is both sound and meant to be broken?";
    var question2= "Question: How can interactive systems provide frameworks and tools for thought that challenge a passive designer-user relationship? How can interfaces be adversarial? What emerges when the relentless drive towards ease of use is subverted?";
    var question3 = "Question: When should a system be open? Closed? Isolated? How do these decisions affect design narratives?";
    var question4 = "Question: How does one design for accessibility without oversimplification or infantilization? How can complexity invite curiosity and engagement? What does a non-binary practice look like?";
    var question5 = "Question: What is the poetic, mythic, magical, and emotional potential of computation? How do these potentialities speak to the social imaginary?";
    var question6 = "Question: Where can design operate as a virus? Where can it operate as a vaccine?";

    //function to print random research question to console
    $(function(){
        $('.writing a').click(function(){
            var content = $(this).attr('id');
            var logContent = $("#"+content).html();
            $("#console").append( '<p>' + logContent+ '</p>' )

            var questions = [question1, question2, question3, question4, question5, question6];

            console.log(questions[Math.floor(Math.random()*questions.length-1)]);

        });
    });

    //function to keep user log div scrolled to bottom with each word push
    $(function() {
        $(".keyterm, .concept").click(function() {
            updateScroll();
        });
    });


}); //end of document.ready


function updateScroll(){
    var element = document.getElementById("console");
    element.scrollTop = element.scrollHeight;
}


//get all instances of class
//make into array
//iterate over array + add ID modified with number i if it doesn't already have an ID from a different class
//push all instances of ID-starting-with-"" into array
//iterate over array to add href with ID + random(array.length) number
//set checks to make sure it doesn't link to itself or link to nonexistant id

function setRandomValues() {

    var virusArray = $(".virus").toArray();
    var negationArray = $(".negation").toArray();
    var binaryArray = $(".binary").toArray();
    var computerArray = $(".computer").toArray();
    var powerArray = $(".power").toArray();
    var adversarialArray = $(".adversarial").toArray();
    var openClosedArray = $(".open-closed").toArray();
    var desireArray = $(".desire").toArray();
    var vulnerableArray = $(".vulnerable").toArray();
    var anthroMachineArray = $(".anthropological-machine").toArray();
    var borderArray = $(".border").toArray();
    var lexiconArray = $(".lexicon").toArray();
    var nonlinearArray = $(".nonlinear").toArray();
    var mathArray = $(".math").toArray();
    var mythArray = $(".myth").toArray();
    var systemArray = $(".system").toArray();
    var hiddenArray = $(".hidden").toArray();
    var interactionArray = $(".interaction").toArray();
    var utilityArray = $(".utility").toArray();

    var virusNum = 0;
    var negationNum=0; 
    var binaryNum = 0; 
    var computerNum = 0; 
    var powerNum = 0; 
    var adversarialNum = 0; 
    var openClosedNum = 0; 
    var desireNum = 0; 
    var vulnerableNum= 0; 
    var anthromachineNum= 0; 
    var borderNum = 0; 
    var lexiconNum = 0; 
    var nonlinearNum = 0; 
    var mathNum = 0; 
    var mythNum = 0; 
    var systemNum = 0; 
    var hiddenNum = 0; 
    var interactionNum = 0; 
    var utilityNum = 0;

    //set all IDs, checking for not doubling up with ID from different class
    for(i=0; i<virusArray.length; i++) {
        if($(virusArray[i]).attr('id') === undefined) { 
            $(virusArray[i]).attr('id', `virus${virusNum}`);
            virusNum++;
        }
    }
    //find all instances where ID was successfully attached and push to array
    var $virusWithId = $('a[id^="virus"]').toArray();
    //iterate over ID array to add hrefs
    for(i=0; i<$virusWithId.length; i++) {
        if($($virusWithId[i]).attr('href') === undefined) { 
            let virusNumber = Math.floor(Math.random() *(($virusWithId).length-1));

            //making sure generated href does not equal ID of clicked element and also does not link to a nonexistant ID
            if(virusNumber !== i) {
                 $($virusWithId[i]).attr("href", `#virus${virusNumber}`);
            } else if(virusNumber == i && i<$virusWithId.length-1) {
                virusNumber = virusNumber + 1;
                $($virusWithId[i]).attr("href", `#virus${virusNumber}`);
            } else if(virusNumber == i && i>=$virusWithId.length-1) {
                 virusNumber = virusNumber - 1;
                $($virusWithId[i]).attr("href", `#virus${virusNumber}`);

        }
       }
    }
    

    for(i=0; i<negationArray.length; i++) {
    
        if($(negationArray[i]).attr('id') === undefined) { 
            $(negationArray[i]).attr('id', `negation${negationNum}`);
            negationNum++;
        }
    }
    var $negationWithId = $('a[id^="negation"]').toArray();
    for(i=0; i<$negationWithId.length; i++){
        if($($negationWithId[i]).attr('href') === undefined) { 
            let negationNumber = Math.floor(Math.random() *(($negationWithId).length-1));

            if(negationNumber !==i) {
             $($negationWithId[i]).attr("href", `#negation${negationNumber}`);
            } else if(negationNumber == i && i<$negationWithId.length-1) {
                negationNumber = negationNumber + 1;
                $($negationWithId[i]).attr("href", `#negation${negationNumber}`);
            } else if(negationNumber == i && i>=$negationWithId.length-1) {
                negationNumber = negationNumber-1;
                $($negationWithId[i]).attr("href", `#negation${negationNumber}`);
            }

        }
       }

    for(i=0; i<binaryArray.length; i++) {
        if($(binaryArray[i]).attr('id') === undefined) { 
            $(binaryArray[i]).attr('id', `binary${binaryNum}`);
            binaryNum++;
        }
    }      
    var $binaryWithId = $('a[id^="binary"]').toArray();
    for(i=0; i<$binaryWithId.length; i++) {
        if($($binaryWithId[i]).attr('href') === undefined) { 
            let binaryNumber = Math.floor(Math.random() *(($binaryWithId).length-1));
            
            if(binaryNumber !== i) {
                $($binaryWithId[i]).attr("href", `#binary${binaryNumber}`);
            } else if(binaryNumber == i && i<$binaryWithId.length-1) {
                binaryNumber = binaryNumber + 1;
                $($binaryWithId[i]).attr("href", `#binary${binaryNumber}`);
            } else if(binaryNumber == i && i>=$binaryWithId.length-1) {
                binaryNumber = binaryNumber - 1;
                $($binaryWithId[i]).attr("href", `#binary${binaryNumber}`);
            }
        }
    }
       
    for(i=0; i<computerArray.length; i++) {
        if($(computerArray[i]).attr('id') === undefined) { 
            $(computerArray[i]).attr('id', `computer${computerNum}`);
            computerNum++;
        }
    }
    var $computerWithId = $('a[id^="computer"]').toArray();
    for(i=0; i<$computerWithId.length; i++) {
        if($($computerWithId[i]).attr('href') === undefined) { 
            let computerNumber = Math.floor(Math.random() *($computerWithId.length-1));
            
            if(computerNumber !== i) {
                $($computerWithId[i]).attr("href", `#computer${computerNumber}`);
            } else if(computerNumber == i && i<$computerWithId.length-1) {
                computerNumber = computerNumber + 1;
                $($computerWithId[i]).attr("href", `#computer${computerNumber}`);
            } else if(computerNumber == i  && i>=$computerWithId.length-1) {
                computerNumber = computerNumber - 1;
                $($computerWithId[i]).attr("href", `#computer${computerNumber}`);

            }
         }
    }

    for(i=0; i<powerArray.length; i++) {
        if($(powerArray[i]).attr('id') === undefined) { 
            $(powerArray[i]).attr('id', `power${powerNum}`);
            powerNum++;
        }
    }
    var $powerWithId = $('a[id^="power"]').toArray();
    for(i=0; i<$powerWithId.length; i++) {
        if($($powerWithId[i]).attr('href') === undefined) { 
            let powerNumber = Math.floor(Math.random() *($powerWithId.length-1));

            if(powerNumber !==i) {
            $($powerWithId[i]).attr("href", `#power${powerNumber}`);
            } else if(powerNumber == i && i<$powerWithId.length-1) {
                powerNumber = powerNumber + 1;
                $($powerWithId[i]).attr("href", `#power${powerNumber}`);
            } else if(powerNumber == i && i>=$powerWithId.length-1) {
                powerNumber = powerNumber - 1;
                $($powerWithId[i]).attr("href", `#power${powerNumber}`);
            }
        }
    }

    for(i=0; i<adversarialArray.length; i++) {
        if($(adversarialArray[i]).attr('id') === undefined) { 
               $(adversarialArray[i]).attr('id', `adversarial${adversarialNum}`);
               adversarialNum++;
        }
    }
    var $adversarialWithId = $('a[id^="adversarial"]').toArray();
    for(i=0; i<$adversarialWithId.length; i++) {
        if($($adversarialWithId[i]).attr('href') === undefined) { 
            let adversarialNumber = Math.floor(Math.random() *(($adversarialWithId).length-1));
            if(adversarialNumber !== i) {
                    $($adversarialWithId[i]).attr("href", `#adversarial${adversarialNumber}`);
            } else if(adversarialNumber == i && i<$adversarialWithId.length - 1) {
                    adversarialNumber = adversarialNumber + 1;
                    $($adversarialWithId[i]).attr("href", `#adversarial${adversarialNumber}`);
            } else if(adversarialNumber == i && i >= $adversarialWithId.length - 1) {
                    adversarialNumber = adversarialNumber - 1;
                    $($adversarialWithId[i]).attr("href", `#adversarial${adversarialNumber}`);
            }
        }
    }
    
    for(i=0; i<openClosedArray.length; i++) {
        if($(openClosedArray[i]).attr('id') === undefined) { 
            $(openClosedArray[i]).attr('id', `openClosed${openClosedNum}`);
            openClosedNum++;
        }
    }
    var $openClosedWithId = $('a[id^="openClosed"]').toArray();
    for(i=0; i<$openClosedWithId.length; i++) {
        if($($openClosedWithId[i]).attr('href') === undefined) { 
            let openClosedNumber = Math.floor(Math.random() *(($openClosedWithId).length-1));
            if(openClosedNumber !== i) {
                $($openClosedWithId[i]).attr("href", `#openClosed${openClosedNumber}`);
            } else if(openClosedNumber == i && i<$openClosedWithId.length - 1) {
                openClosedNumber = openClosedNumber + 1;
                $($openClosedWithId[i]).attr("href", `#openClosed${openClosedNumber}`);
            } else if(openClosedNumber == i && i>=$openClosedWithId.length - 1) {
                openClosedNumber = openClosedNumber - 1;
                $($openClosedWithId[i]).attr("href", `#openClosed${openClosedNumber}`);
            }
        }
    }

    
    for(i=0; i<desireArray.length; i++) {
        if($(desireArray[i]).attr('id') === undefined) { 
            $(desireArray[i]).attr('id', `desire${desireNum}`);
            desireNum++;
        }
    }
    var $desireWithId = $('a[id^="desire"]').toArray();
    for(i=0; i<$desireWithId.length; i++) {
        if($($desireWithId[i]).attr('href') === undefined) { 
            let desireNumber = Math.floor(Math.random() *(($desireWithId).length-1));

            if(desireNumber !== i) {
                $($desireWithId[i]).attr("href", `#desire${desireNumber}`);
            } else if(desireNumber == i && i<$desireWithId.length-1) {
                desireNumber = desireNumber + 1;
                $($desireWithId[i]).attr("href", `#desire${desireNumber}`);
            } else if(desireNumber == i && i>=$desireWithId.length - 1) {
                desireNumber = desireNumber - 1;
                $($desireWithId[i]).attr("href", `#desire${desireNumber}`);
            }
        }
    }  
    
    for(i=0; i<vulnerableArray.length; i++) {
        if($(vulnerableArray[i]).attr('id') === undefined) { 
            $(vulnerableArray[i]).attr('id', `vulnerable${vulnerableNum}`);
            vulnerableNum++;
        }
    }

    var $vulnerableWithId = $('a[id^="vulnerable"]').toArray();
    for(i=0; i<$vulnerableWithId.length; i++) {
        if($($vulnerableWithId[i]).attr('href') === undefined) { 
            let vulnerableNumber = Math.floor(Math.random() *(($vulnerableWithId).length-1));

            if(vulnerableNumber !== i) {
                $($vulnerableWithId[i]).attr("href", `#vulnerable${vulnerableNumber}`);
            } else if(vulnerableNumber == i && i<$vulnerableWithId.length - 1) {
                vulnerableNumber = vulnerableNumber + 1;
                $($vulnerableWithId[i]).attr("href", `#vulnerable${vulnerableNumber}`);
            } else if(vulnerableNumber == i && i>=$vulnerableWithId.length - 1) {
                vulnerableNumber = vulnerableNumber - 1;
                $($vulnerableWithId[i]).attr("href", `#vulnerable${vulnerableNumber}`);
            }
        }
    } 
    
    
    for(i=0; i<anthroMachineArray.length; i++) {
        if($(anthroMachineArray[i]).attr('id') === undefined) { 
            $(anthroMachineArray[i]).attr('id', `anthromachine${anthromachineNum}`);
            anthromachineNum++;
        }
    }
    var $anthroMachineWithId = $('a[id^="anthromachine"]').toArray();
    for(i=0; i<$anthroMachineWithId.length; i++) {
        if($($anthroMachineWithId[i]).attr('href') === undefined) { 
            let aMNumber = Math.floor(Math.random() *($anthroMachineWithId.length-1));

            if(aMNumber !==i) {
                $($anthroMachineWithId[i]).attr("href", `#anthromachine${aMNumber}`);
            } else if(aMNumber == i && i<$anthroMachineWithId.length - 1) {
                aMNumber = aMNumber + 1;
                $($anthroMachineWithId[i]).attr("href", `#anthromachine${aMNumber}`);
            } else if(aMNumber == i && i>=$anthroMachineWithId.length - 1) {
                aMNumber = aMNumber - 1;
                $($anthroMachineWithId[i]).attr("href", `#anthromachine${aMNumber}`);
            }
        }
    }
            
    
    for(i=0; i<borderArray.length; i++) {
        if($(borderArray[i]).attr('id') === undefined) { 
            $(borderArray[i]).attr('id', `border${borderNum}`);
            borderNum++;
        }
    }
    var $borderWithId = $('a[id^="border"]').toArray();
    for(i=0; i<$borderWithId.length; i++) {
        if($($borderWithId[i]).attr('href') === undefined) { 
            let borderNumber = Math.floor(Math.random() *($borderWithId.length-1));
                    
            if(borderNumber !==i) {
                $($borderWithId[i]).attr("href", `#border${borderNumber}`);
            } else if(borderNumber == i && borderNumber<$borderWithId.length-1) {
                borderNumber = borderNumber + 1;
                $($borderWithId[i]).attr("href", `#border${borderNumber}`);
            } else if(borderNumber == i && borderNumber>=$borderWithId.length-1) {
                borderNumber = borderNumber - 1;
                $($borderWithId[i]).attr("href", `#border${borderNumber}`);
            }
        }
    }    

            
    for(i=0; i<lexiconArray.length; i++) {
        if($(lexiconArray[i]).attr('id') === undefined) { 
            $(lexiconArray[i]).attr('id', `lexicon${lexiconNum}`);
            lexiconNum++;
        }
    }
    var $lexiconWithId = $('a[id^="lexicon"]').toArray();
    for(i=0; i<$lexiconWithId.length; i++) {
        if($($lexiconWithId[i]).attr('href') === undefined) { 
            let lexiconNumber = Math.floor(Math.random() *($lexiconWithId.length-1));
            if(lexiconNumber !== i) {
                $($lexiconWithId[i]).attr("href", `#lexicon${lexiconNumber}`);
            } else if(lexiconNumber == i && i<$lexiconWithId.length - 1) {
                lexiconNumber = lexiconNumber + 1;
                $($lexiconWithId[i]).attr("href", `#lexicon${lexiconNumber}`);
            } else if(lexiconNumber == i && i>=$lexiconWithId.length - 1) {
                lexiconNumber = lexiconNumber - 1;
                $($lexiconWithId[i]).attr("href", `#lexicon${lexiconNumber}`);
            }
        }
    }

    for(i=0; i<nonlinearArray.length; i++) {
        if($(nonlinearArray[i]).attr('id') === undefined) { 
                    $(nonlinearArray[i]).attr('id', `nonlinear${nonlinearNum}`);
                    nonlinearNum++;
        }
    }
    var $nonlinearWithId = $('a[id^="nonlinear"]').toArray();
    for(i=0; i<$nonlinearWithId.length; i++) {
        if($($nonlinearWithId[i]).attr('href') === undefined) { 
            let nonlinearNumber = Math.floor(Math.random() *($nonlinearWithId.length-1));
            if(nonlinearNumber !==i) {
                $($nonlinearWithId[i]).attr("href", `#nonlinear${nonlinearNumber}`);
            } else if(nonlinearNumber == i && i<$nonlinearWithId.length - 1) {
                nonlinearNumber = nonlinearNumber + 1;
                $($nonlinearWithId[i]).attr("href", `#nonlinear${nonlinearNumber}`);
            } else if(nonlinearNumber == i && i>=$nonlinearWithId.length - 1) {
                nonlinearNumber = nonlinearNumber - 1;
                $($nonlinearWithId[i]).attr("href", `#nonlinear${nonlinearNumber}`);
            }
        }
    }


    for(i=0; i<mathArray.length; i++) {
        if($(mathArray[i]).attr('id') === undefined) { 
            $(mathArray[i]).attr('id', `math${mathNum}`);
            mathNum++;
        }
    }
    var $mathWithId = $('a[id^="math"]').toArray();
    for(i=0; i<$mathWithId.length; i++) {
        if($($mathWithId[i]).attr('href') === undefined) { 
            let mathNumber = Math.floor(Math.random() *($mathWithId.length-1));
            if(mathNumber !== i) {
                $($mathWithId[i]).attr("href", `#math${mathNumber}`);
            } else if(mathNumber == i && i<$mathWithId.length - 1) {
                mathNumber = mathNumber + 1;
                $($mathWithId[i]).attr("href", `#math${mathNumber}`);
            } else if(mathNumber == i && i >=$mathWithId.length - 1) {
                mathNumber = mathNumber - 1;
                $($mathWithId[i]).attr("href", `#math${mathNumber}`);
            }
        }
    }


    for(i=0; i<mythArray.length; i++) {
        if($(mythArray[i]).attr('id') === undefined) { 
            $(mythArray[i]).attr('id', `myth${mythNum}`);
            mythNum++;
        }
    }
    var $mythWithId = $('a[id^="myth"]').toArray();
    for(i=0; i<$mythWithId.length; i++) {
        if($($mythWithId[i]).attr('href') === undefined) { 
            let mythNumber = Math.floor(Math.random() *($mythWithId.length-1));
            if(mythNumber !== i) {
                $($mythWithId[i]).attr("href", `#myth${mythNumber}`);
            } else if(mythNumber == i && i<$mythWithId.length - 1) {
                mythNumber = mythNumber + 1;
                $($mythWithId[i]).attr("href", `#myth${mythNumber}`);
            } else if(mythNumber == i && i>=$mythWithId.length - 1) {
                mythNumber = mythNumber - 1;
                $($mythWithId[i]).attr("href", `#myth${mythNumber}`);
            }  
        }
    }


    for(i=0; i<systemArray.length; i++) {
        if($(systemArray[i]).attr('id') === undefined) { 
            $(systemArray[i]).attr('id', `system${systemNum}`);
            systemNum++;
        }
    }
    var $systemWithId = $('a[id^="system"]').toArray();
    for(i=0; i<$systemWithId.length; i++) {            
        if($($systemWithId[i]).attr('href') === undefined) {
            let systemNumber = Math.floor(Math.random() *($systemWithId.length-1)); 
            if (systemNumber !== i) {
                $($systemWithId[i]).attr("href", `#system${systemNumber}`);
            } else if(systemNumber == i && i<$systemWithId.length - 1) {
                systemNumber = systemNumber + 1;
                $($systemWithId[i]).attr("href", `#system${systemNumber}`);
            } else if(systemNumber == i && i>=$systemWithId.length - 1) {
                systemNumber = systemNumber - 1;
                $($systemWithId[i]).attr("href", `#system${systemNumber}`);
            }
        }
    }


    for(i=0; i<hiddenArray.length; i++) {
        if($(hiddenArray[i]).attr('id') === undefined) { 
            $(hiddenArray[i]).attr('id', `hidden${hiddenNum}`);
            hiddenNum++;
        }
    }
    var $hiddenWithId = $('a[id^="hidden"]').toArray();
    for(i=0; i<$hiddenWithId.length; i++) {    
        if($($hiddenWithId[i]).attr('href') === undefined) { 
            let hiddenNumber = Math.floor(Math.random() *($hiddenWithId.length-1));
            if(hiddenNumber !== i) {
                $($hiddenWithId[i]).attr("href", `#hidden${hiddenNumber}`);
            } else if(hiddenNumber == i && i<$hiddenWithId.length - 1) {
                hiddenNumber = hiddenNumber + 1;
                $($hiddenWithId[i]).attr("href", `#hidden${hiddenNumber}`);
            } else if(hiddenNumber == i && i>=$hiddenWithId.length - 1) {
                hiddenNumber = hiddenNumber - 1;
                $($hiddenWithId[i]).attr("href", `#hidden${hiddenNumber}`);
            }
           
        }
    }   
    
    
    for(i=0; i<interactionArray.length; i++) {
        if($(interactionArray[i]).attr('id') === undefined) { 
            $(interactionArray[i]).attr('id', `interaction${interactionNum}`);
            interactionNum++;
        }
    }
    var $interactionWithId = $('a[id^="interaction"]').toArray();
    for(i=0; i<$interactionWithId.length; i++) {
        if($($interactionWithId[i]).attr('href') === undefined) { 
            let interactionNumber = Math.floor(Math.random() *($interactionWithId.length-1));

            if(interactionNumber !== i) {
                $($interactionWithId[i]).attr("href", `#interaction${interactionNumber}`);
            } else if(interactionNumber == i && i<$interactionWithId.length - 1) {
                interactionNumber = interactionNumber + 1;
                $($interactionWithId[i]).attr("href", `#interaction${interactionNumber}`);
            } else if(interactionNumber == i && i>=$interactionWithId.length - 1) {
                interactionNumber = interactionNumber - 1;
                $($interactionWithId[i]).attr("href", `#interaction${interactionNumber}`);
            }
                    
        }
    }   
    
    
    for(i=0; i<utilityArray.length; i++) {
        if($(utilityArray[i]).attr('id') === undefined) { 
            $(utilityArray[i]).attr('id', `utility${utilityNum}`);
            utilityNum++;
        }
    }
    var $utilityWithId = $('a[id^="utility"]').toArray();
    for(i=0; i<$utilityWithId.length; i++) {
        if($($utilityWithId[i]).attr('href') === undefined) { 
            let utilityNumber = Math.floor(Math.random() *($utilityWithId.length-1));
            if(utilityNumber !== i) {
                $($utilityWithId[i]).attr("href", `#utility${utilityNumber}`);
            } else if(utilityNumber == i && i>$utilityWithId.length - 1) {
                utilityNumber = utilityNumber + 1;
                $($utilityWithId[i]).attr("href", `#utility${utilityNumber}`);
            } else if (utilityNumber == i && i>=$utilityWithId.length - 1) {
                utilityNumber = utilityNumber - 1;
                $($utilityWithId[i]).attr("href", `#utility${utilityNumber}`);
            }
                    
        }
    } 


}; //end randomValues func








 //function to scroll to random instance of that class, but you probs won't need this after you randomize the hrefs + IDs
//  $(function(){
//     $('a').click(function(){
        //get list of classes associated with clicked 'a'
            // var allClasses = this.classList;
        //get random index from the list of classes
            // var randomIndex = Math.floor(Math.random()*allClasses.length);
        //skip over index 0
            // if(randomIndex<1) {
            //     var randomIndex = 1;
            // }
        //select all instances of that random class and put in variable
            // var $ele = $("."+allClasses[randomIndex]);
        // console.log($ele);
            // var scrollID = $ele.eq(Math.floor(Math.random()*($ele.length - 1))).attr('id');
        // console.log(scrollID);
            // document.querySelector(scrollID.getAttribute('href')).scrollIntoView({
            //     behavior: 'smooth'
            // });
        
    //     })
    // })