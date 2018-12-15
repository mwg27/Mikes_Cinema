//My Java Script
function loadSeats(){
    var mobj = localStorage.getItem("MCinema");
    var loadSeats;
    if(!mobj) {
        var st = {
            seats: [{state: 0, id: 'r11'},{state: 0, id: 'r12'},{state: 0, id: 'r13'},{state: 0, id: 'r14'},{state: 0, id: 'r15'},
                    {state: 0, id: 'r21'},{state: 0, id: 'r22'},{state: 0, id: 'r23'},{state: 0, id: 'r24'},{state: 0, id: 'r25'},{state: 0, id: 'r26'},{state: 0, id: 'r27'},
                    {state: 0, id: 'r31'},{state: 0, id: 'r32'},{state: 0, id: 'r33'},{state: 0, id: 'r34'},{state: 0, id: 'r35'},{state: 0, id: 'r36'},{state: 0, id: 'r37'},{state: 0, id: 'r38'},{state: 0, id: 'r39'},
                    {state: 0, id: 'r41'},{state: 0, id: 'r42'},{state: 0, id: 'r43'},{state: 0, id: 'r44'},{state: 0, id: 'r45'},{state: 0, id: 'r46'},{state: 0, id: 'r47'},{state: 0, id: 'r48'},{state: 0, id: 'r49'}]
        }
        localStorage.setItem("MCinema",JSON.stringify(st));
        var obj = localStorage.getItem("MCinema");
        loadSeats = JSON.parse(obj);
    } else {
        loadSeats = JSON.parse(mobj);
    }
    //set the orange to grey
    var changed = 0;
    for(var j = 0; j < 30; j++){
        if( loadSeats.seats[j].state === 2){
            loadSeats.seats[j].state = 1;
            changed = 1;
        }
    }
    if( changed === 1){
        localStorage.setItem("MCinema",JSON.stringify(loadSeats));
    }
    showSeats(loadSeats);
    localStorage.setItem("MCinemaTmp",JSON.stringify(loadSeats));
}

function showSeats(st){
    for(var j = 0; j < 30; j++){
        var e = document.getElementById(st.seats[j].id);
        if( st.seats[j].state === 0){
            e.style.backgroundColor = 'lightgreen';
            e.style.color = 'black';
        } else {
            if( st.seats[j].state === 1 ){
                e.style.backgroundColor = 'gray';
                e.style.color = 'white';
            } else {
                e.style.backgroundColor = 'orange';
                e.style.color = 'black';
            }
        }
    }
}

function reserveSeat(id){
    var mobj = localStorage.getItem("MCinemaTmp");
    var st = JSON.parse(mobj);
    var changed = 0;
    for(var j = 0; j < 30; j++){
        if( st.seats[j].id === id){
            if( st.seats[j].state === 0){
                st.seats[j].state = 2;
                changed = 1;
            } else {
                if( st.seats[j].state === 2){
                    st.seats[j].state = 0;
                    changed = 1;
                }
            }
        }
    }
    if( changed === 1){
        localStorage.setItem("MCinemaTmp",JSON.stringify(st));
        showSeats(st);
    }
}

function saveSelectedSeats(){
    var mobj = localStorage.getItem("MCinemaTmp");
    var st = JSON.parse(mobj);
    localStorage.setItem("MCinema",JSON.stringify(st));
}