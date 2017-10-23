'use strict';

var wszystkieZgody = document.getElementById('wszystkie-zgody');

var zgodaMarketingowa1 = document.getElementById('zgoda-marketingowa-1');

var zgodaMarketingowa2 = document.getElementById('zgoda-marketingowa-2');

var inputImie = document.getElementById('name');

var inputEmail = document.getElementById('email');

var wiadomosc = document.getElementById('wiadomosc');


function walidacjaCheckboxa() {
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;
    
    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;
       
    }



function walidacjaForm(event) {
    
    wiadomosc.innerHTML = "<ul id='wiadomosc'></ul>";
    
    if(inputImie.value.trim() == "") {
        var msgImie = document.createElement('li');
        msgImie.innerHTML = "Wpisz imię!";
        wiadomosc.appendChild(msgImie);
        
        event.preventDefault();
        
    }
    
    if(inputEmail.value.trim() == "") {
        var msgEmail = document.createElement('li');
        msgEmail.innerHTML = "Wpisz e-mail!";
        wiadomosc.appendChild(msgEmail);
        
        event.preventDefault();
        
    }
    
    if(!zgodaMarketingowa1.checked) {
        var msgZgoda1 = document.createElement('li');
        msgZgoda1.innerHTML = "Nie wyraziłeś zgody 1";
        wiadomosc.appendChild(msgZgoda1);
        
        event.preventDefault();
        
    }

}

document.getElementById('wyslij').addEventListener('click', walidacjaForm);

wszystkieZgody.addEventListener("change", walidacjaCheckboxa);



