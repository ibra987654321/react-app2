var select = document.getElementById("select");
var time = document.getElementById("time");
var point_f2 = document.getElementById('point_f2');
var csi_f2 = document.getElementById('csi_f2');
var manag_f2 = document.getElementById('manag_f2');
var names_f2 = document.getElementById('name_f2');
var agent_Id_f2 = document.getElementById('agent_Id_f2');
var group_f2 = document.getElementById('group_f2');
var search = document.getElementById('val-button_f2')

search.addEventListener("click", function(){ search.disabled = true;setTimeout(function() { search.disabled = false;},20000000);})

var list = '';
var list2 = '';
var list3 = '';
var list4 = '';
var list5 = '';
var list6 = '';

function zapros() {
      console.log(time.value + select.value);
      fetch(time.value + select.value).then(
                        res=>{
                            res.json().then(

                                data =>{console.log(data);
                                    data.map(function(elem) {
                                        return `<td>${elem}</td>`;
                                       
                                    })
                                    // for (let i = 0; i < data.length; i++) {
                                    //     list += '<li>' + data[i][0] + '</li>' ;
                                    //     list2 += '<li>' +  data[i][1] + '</li>' ;
                                    //     list3 += '<li>' +  data[i][2] + '</li>' ;
                                    //     list4 += '<li>' +  data[i][3] + '</li>' ;
                                    //     list5 += '<li>' +  data[i][4] + '</li>' ;
                                    //     list6 += '<li>' +  data[i][5] + '</li>' ;
                                    // }
                                    // csi_f2.innerHTML +=   list ;
                                    // point_f2.innerHTML +=   list2 ;
                                    // names_f2.innerHTML +=   list3 ;
                                    // agent_Id_f2.innerHTML +=   list4 ;
                                    // group_f2.innerHTML +=   list5 ;
                                    // manag_f2.innerHTML +=   list6 ;
                                  
                                }
                            )
                        }
                    )
                    csi_f2.innerHTML +=   '' ;
                    point_f2.innerHTML +=   '' ;
                   names_f2.innerHTML +=   '' ;
                   agent_Id_f2.innerHTML +=   '' ;
                   group_f2.innerHTML +=   '' ;
                   manag_f2.innerHTML +=   '' ;
                   
                   
};

$(function() {
    $('input[name="daterange2"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log('http://172.28.141.23:8282/api/v1/'+ select.value + '/'  + start.format('YYYY-MM-DD') + '/' + end.format('YYYY-MM-DD'));
      fetch('http://172.28.141.23:8282/api/v1/'+ select.value + '/'  + start.format('YYYY-MM-DD') + '/' + end.format('YYYY-MM-DD')).then(
        res=>{
            res.json().then(
                
                data =>{console.log(data);
                    var list = '';
                    var list2 = '';
                    var list3 = '';
                    var list4 = '';
                    for (let i = 0; i < data.length; i++) {
                        list += '<li>' + data[i][0] + '</li>' ;
                        list2 += '<li>' +  data[i][1] + '</li>' ;
                        list3 += '<li>' +  data[i][2] + '</li>' ;
                        list4 += '<li>' +  data[i][3] + '</li>' ;
                        list5 += '<li>' +  data[i][4] + '</li>' ;
                        list6 += '<li>' +  data[i][5] + '</li>' ;
                    }
                    csi_f2.innerHTML +=   list ;
                    point_f2.innerHTML +=   list2 ;
                    names_f2.innerHTML +=   list3 ;
                    agent_Id_f2.innerHTML +=   list4 ;
                    group_f2.innerHTML +=   list5 ;
                    manag_f2.innerHTML +=   list6 ; 
                    
                }
            )
        }
    )
    });
  });