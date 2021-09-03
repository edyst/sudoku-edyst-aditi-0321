const inputsAll=document.querySelectorAll('input');


function easy(){
    document.getElementById('easy').disabled=true;
    inputsAll.forEach(input => {
        input.value='';
        input.disabled=false;
    });
    easySetup();

    document.getElementById('medium').disabled=false;
    document.getElementById('hard').disabled=false;
}
function easySetup(){
    document.getElementById('col-00').value=9;
    document.getElementById('col-00').disabled=true;
    document.getElementById('col-06').value=8;
    document.getElementById('col-06').disabled=true;
    document.getElementById('col-16').value=9;
    document.getElementById('col-16').disabled=true;
    document.getElementById('col-17').value=4;
    document.getElementById('col-17').disabled=true;
    document.getElementById('col-25').value=9;
    document.getElementById('col-25').disabled=true;
    document.getElementById('col-26').value=3;
    document.getElementById('col-26').disabled=true;
    document.getElementById('col-27').value=6;
    document.getElementById('col-27').disabled=true;
    document.getElementById('col-28').value=7;
    document.getElementById('col-28').disabled=true;
    document.getElementById('col-30').value=7;
    document.getElementById('col-30').disabled=true;
    document.getElementById('col-31').value=1;
    document.getElementById('col-31').disabled=true;
    document.getElementById('col-32').value=2;
    document.getElementById('col-32').disabled=true;
    document.getElementById('col-34').value=9;
    document.getElementById('col-34').disabled=true;
    document.getElementById('col-36').value=4;
    document.getElementById('col-36').disabled=true;
    document.getElementById('col-37').value=3;
    document.getElementById('col-37').disabled=true;
    document.getElementById('col-38').value=6;
    document.getElementById('col-38').disabled=true;
    document.getElementById('col-43').value=2;
    document.getElementById('col-43').disabled=true;
    document.getElementById('col-45').value=7;
    document.getElementById('col-45').disabled=true;
    document.getElementById('col-47').value=1;
    document.getElementById('col-47').disabled=true;
    document.getElementById('col-50').value=6;
    document.getElementById('col-50').disabled=true;
    document.getElementById('col-51').value=5;
    document.getElementById('col-51').disabled=true;
    document.getElementById('col-52').value=9;
    document.getElementById('col-52').disabled=true;
    document.getElementById('col-53').value=3;
    document.getElementById('col-53').disabled=true;
    document.getElementById('col-54').value=4;
    document.getElementById('col-54').disabled=true;
    document.getElementById('col-55').value=1;
    document.getElementById('col-55').disabled=true;
    document.getElementById('col-56').value=2;
    document.getElementById('col-56').disabled=true;
    document.getElementById('col-58').value=8;
    document.getElementById('col-58').disabled=true;
    document.getElementById('col-60').value=2;
    document.getElementById('col-60').disabled=true;
    document.getElementById('col-61').value=6;
    document.getElementById('col-61').disabled=true;
    document.getElementById('col-62').value=5;
    document.getElementById('col-62').disabled=true;
    document.getElementById('col-63').value=1;
    document.getElementById('col-63').disabled=true;
    document.getElementById('col-65').value=4;
    document.getElementById('col-65').disabled=true;
    document.getElementById('col-66').value=7;
    document.getElementById('col-66').disabled=true;
    document.getElementById('col-67').value=9;
    document.getElementById('col-67').disabled=true;
    document.getElementById('col-68').value=3;
    document.getElementById('col-68').disabled=true;
    document.getElementById('col-83').value=9;
    document.getElementById('col-83').disabled=true;

}


function medium(){
    document.getElementById('medium').disabled=true;

    inputsAll.forEach(input => {
        input.value='';
        input.disabled=false;
    });
    mediumSetup();

    document.getElementById('easy').disabled=false;
    document.getElementById('hard').disabled=false;
}
function mediumSetup(){
    document.getElementById('col-03').value=3;
    document.getElementById('col-03').disabled=true;
    document.getElementById('col-04').value=4;
    document.getElementById('col-04').disabled=true;
    document.getElementById('col-07').value=9;
    document.getElementById('col-07').disabled=true;
    document.getElementById('col-12').value=5;
    document.getElementById('col-12').disabled=true;
    document.getElementById('col-17').value=4;
    document.getElementById('col-17').disabled=true;
    document.getElementById('col-18').value=6;
    document.getElementById('col-18').disabled=true;
    document.getElementById('col-20').value=8;
    document.getElementById('col-20').disabled=true;
    document.getElementById('col-22').value=4;
    document.getElementById('col-22').disabled=true;
    document.getElementById('col-23').value=5;
    document.getElementById('col-23').disabled=true;
    document.getElementById('col-25').value=9;
    document.getElementById('col-25').disabled=true;
    document.getElementById('col-31').value=5;
    document.getElementById('col-31').disabled=true;
    document.getElementById('col-33').value=4;
    document.getElementById('col-33').disabled=true;
    document.getElementById('col-36').value=6;
    document.getElementById('col-36').disabled=true;
    document.getElementById('col-41').value=4;
    document.getElementById('col-41').disabled=true;
    document.getElementById('col-47').value=5;
    document.getElementById('col-47').disabled=true;
    document.getElementById('col-55').value=5;
    document.getElementById('col-55').disabled=true;
    document.getElementById('col-56').value=4;
    document.getElementById('col-56').disabled=true;
    document.getElementById('col-60').value=4;
    document.getElementById('col-60').disabled=true;
    document.getElementById('col-61').value=2;
    document.getElementById('col-61').disabled=true;
    document.getElementById('col-64').value=5;
    document.getElementById('col-64').disabled=true;
    document.getElementById('col-66').value=9;
    document.getElementById('col-66').disabled=true;
    document.getElementById('col-70').value=5;
    document.getElementById('col-70').disabled=true;
    document.getElementById('col-78').value=4;
    document.getElementById('col-78').disabled=true;
    document.getElementById('col-81').value=1;
    document.getElementById('col-81').disabled=true;
    document.getElementById('col-84').value=3;
    document.getElementById('col-84').disabled=true;
    document.getElementById('col-85').value=4;
    document.getElementById('col-85').disabled=true;
}


function hard(){
    document.getElementById('hard').disabled=true;

    inputsAll.forEach(input => {
        input.value='';
        input.disabled=false;
    });
    hardSetup();

    document.getElementById('easy').disabled=false;
    document.getElementById('medium').disabled=false;
}
function hardSetup(){
    document.getElementById('col-02').value=4;
    document.getElementById('col-02').disabled=true;
    document.getElementById('col-05').value=7;
    document.getElementById('col-05').disabled=true;
    document.getElementById('col-10').value=2;
    document.getElementById('col-10').disabled=true;
    document.getElementById('col-15').value=5;
    document.getElementById('col-15').disabled=true;
    document.getElementById('col-22').value=8;
    document.getElementById('col-22').disabled=true;
    document.getElementById('col-25').value=2;
    document.getElementById('col-25').disabled=true;
    document.getElementById('col-33').value=2;
    document.getElementById('col-33').disabled=true;
    document.getElementById('col-34').value=7;
    document.getElementById('col-34').disabled=true;
    document.getElementById('col-47').value=6;
    document.getElementById('col-47').disabled=true;
    document.getElementById('col-48').value=2;
    document.getElementById('col-48').disabled=true;
    document.getElementById('col-51').value=2;
    document.getElementById('col-51').disabled=true;
    document.getElementById('col-52').value=9;
    document.getElementById('col-52').disabled=true;
    document.getElementById('col-54').value=8;
    document.getElementById('col-54').disabled=true;
    document.getElementById('col-68').value=7;
    document.getElementById('col-68').disabled=true;
    document.getElementById('col-74').value=2;
    document.getElementById('col-74').disabled=true;
    document.getElementById('col-85').value=3;
    document.getElementById('col-85').disabled=true;
    document.getElementById('col-86').value=6;
    document.getElementById('col-86').disabled=true;
}


inputsAll.forEach(input => input.oninput=validate );
function validate(e){
    const classes=e.target.classList;
    const value=e.target.value;
    const rowElements=document.querySelectorAll('.'+CSS.escape(classes[0]));
    const colElements=document.querySelectorAll('.'+CSS.escape(classes[1]));
    const boxElements=document.querySelectorAll('.'+CSS.escape(classes[2]));
    if(value>0 && value<10){
        rowElements.forEach(ele => {
            if(ele.value==value && ele!=e.target){
                e.target.value='';
                alert(`Value already present in ${classes[0]}`);
            }
        });
        colElements.forEach(ele => {
            if(ele.value==value && ele!=e.target){
                e.target.value='';
                alert(`Value already present in ${classes[1]}`);
            }
        });
        boxElements.forEach(ele => {
            if(ele.value==value && ele!=e.target){
                e.target.value='';
                alert(`Value already present in ${classes[2]}`);
            }
        });
    }
    else if(value==''){}
    else{
        e.target.value='';
        alert("Enter a Number between 1 and 9 only!");
    }
}

function validateAll()
{
     alert(`Game State is valid :)`); 
}


inputsAll.forEach(input => input.onfocus=highlight ); 
function highlight(e){
    const classes=e.target.classList;
    const rowElements=document.querySelectorAll('.'+CSS.escape(classes[0]));
    const colElements=document.querySelectorAll('.'+CSS.escape(classes[1]));
    const boxElements=document.querySelectorAll('.'+CSS.escape(classes[2]));
    rowElements.forEach(ele => {
        if(ele.disabled==false){ 
            ele.style.backgroundColor='#a2c523';
            ele.style.color='#fff';
        }
    });
    colElements.forEach(ele => {
        if(ele.disabled==false){ 
            ele.style.backgroundColor='#a2c523';
            ele.style.color='#fff';
        }
    });
    boxElements.forEach(ele => {
        if(ele.disabled==false) {
            ele.style.backgroundColor='#486b00';
            ele.style.color='#fff';
        }
    });
    if(e.target.disabled==false){
        e.target.style.backgroundColor='#2e4600';
        e.target.style.color='#fff';
    }
}


inputsAll.forEach( input => input.onblur=antihighlight ); 
function antihighlight(e){
    const classes=e.target.classList;
    const rowElements=document.querySelectorAll('.'+CSS.escape(classes[0]));
    const colElements=document.querySelectorAll('.'+CSS.escape(classes[1]));
    const boxElements=document.querySelectorAll('.'+CSS.escape(classes[2]));
    rowElements.forEach(ele => {
        if(ele.disabled==false) {
            ele.style.backgroundColor='initial';
            ele.style.color='initial';
        }
    });
    colElements.forEach(ele => {
        if(ele.disabled==false) {
            ele.style.backgroundColor='initial';
            ele.style.color='initial';
        }
    });
    boxElements.forEach(ele => {
        if(ele.disabled==false) {
            ele.style.backgroundColor='initial';
            ele.style.color='initial';
        }
    });
    if(e.target.disabled==false) {
        e.target.style.backgroundColor='initial';
        e.target.style.color='initial';
    }
}

window.onload=easy();