  $(document).ready(function() {
    $.ajax({
        url: 'https://swapi.co/api/films/1/',
        type: 'GET',
        success: function(respuesta) {
            $("#film1").val(respuesta.title);
            $("#opening1").val(respuesta.opening_crawl);
            $("#director1").val(respuesta.director);
            $("#date1").val(respuesta.release_date);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });

});
  $.ajax({
        url: 'https://swapi.co/api/films/2/',
        type: 'GET',
        success: function(respuesta) {
            $("#film2").val(respuesta.title);
            $("#opening2").val(respuesta.opening_crawl);
            $("#director2").val(respuesta.director);
            $("#date2").val(respuesta.release_date);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
  $.ajax({
        url: 'https://swapi.co/api/films/3/',
        type: 'GET',
        success: function(respuesta) {
            $("#film3").val(respuesta.title);
            $("#opening3").val(respuesta.opening_crawl);
            $("#director3").val(respuesta.director);
            $("#date3").val(respuesta.release_date);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
  $.ajax({
        url: 'https://swapi.co/api/films/4/',
        type: 'GET',
        success: function(respuesta) {
            $("#film4").val(respuesta.title);
            $("#opening4").val(respuesta.opening_crawl);
            $("#director4").val(respuesta.director);
            $("#date4").val(respuesta.release_date);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
  $.ajax({
        url: 'https://swapi.co/api/films/5/',
        type: 'GET',
        success: function(respuesta) {
            $("#film5").val(respuesta.title);
            $("#opening5").val(respuesta.opening_crawl);
            $("#director5").val(respuesta.director);
            $("#date5").val(respuesta.release_date);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
   $.ajax({
        url: 'https://swapi.co/api/films/6/',
        type: 'GET',
        success: function(respuesta) {
            $("#film6").val(respuesta.title);
            $("#opening6").val(respuesta.opening_crawl);
            $("#director6").val(respuesta.director);
            $("#date6").val(respuesta.release_date);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
  $.ajax({
        url: 'https://swapi.co/api/films/7/',
        type: 'GET',
        success: function(respuesta) {
            $("#film7").val(respuesta.title);
            $("#opening7").val(respuesta.opening_crawl);
            $("#director7").val(respuesta.director);
            $("#date7").val(respuesta.release_date);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/2/',
        type: 'GET',
        success: function(respuesta) {
            $("#name2").val(respuesta.name);
            $("#model2").val(respuesta.model);
            $("#manufacturer2").val(respuesta.manufacturer);
            $("#cost2").val(respuesta.cost_in_credits);
            $("#speed2").val(respuesta.max_atmosphering_speed);
            $("#passengers2").val(respuesta.passengers);
            $("#capacity2").val(respuesta.cargo_capacity);
            $("#class2").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/3/',
        type: 'GET',
        success: function(respuesta) {

            $("#name3").val(respuesta.name);
            $("#model3").val(respuesta.model);
            $("#manufacturer3").val(respuesta.manufacturer);
            $("#cost3").val(respuesta.cost_in_credits);
            $("#speed3").val(respuesta.max_atmosphering_speed);
            $("#passengers3").val(respuesta.passengers);
            $("#capacity3").val(respuesta.cargo_capacity);
            $("#class3").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/5/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name5").val(respuesta.name);
            $("#mode5").val(respuesta.model);
            $("#manufacturer5").val(respuesta.manufacturer);
            $("#cost5").val(respuesta.cost_in_credits);
            $("#speed5").val(respuesta.max_atmosphering_speed);
            $("#passengers5").val(respuesta.passengers);
            $("#capacity5").val(respuesta.cargo_capacity);
            $("#class5").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/9/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name9").val(respuesta.name);
            $("#modeñ9").val(respuesta.model);
            $("#manufacturer9").val(respuesta.manufacturer);
            $("#cost9").val(respuesta.cost_in_credits);
            $("#speed9").val(respuesta.max_atmosphering_speed);
            $("#passengers9").val(respuesta.passengers);
            $("#capacity9").val(respuesta.cargo_capacity);
            $("#class9").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/10/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name10").val(respuesta.name);
            $("#model10").val(respuesta.model);
            $("#manufacturer10").val(respuesta.manufacturer);
            $("#cost10").val(respuesta.cost_in_credits);
            $("#speed10").val(respuesta.max_atmosphering_speed);
            $("#passengers10").val(respuesta.passengers);
            $("#capacity10").val(respuesta.cargo_capacity);
            $("#class10").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/11/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name11").val(respuesta.name);
            $("#model11").val(respuesta.model);
            $("#manufacturer11").val(respuesta.manufacturer);
            $("#cost11").val(respuesta.cost_in_credits);
            $("#speed11").val(respuesta.max_atmosphering_speed);
            $("#passengers11").val(respuesta.passengers);
            $("#capacity11").val(respuesta.cargo_capacity);
            $("#class11").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/12/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name12").val(respuesta.name);
            $("#model12").val(respuesta.model);
            $("#manufacturer12").val(respuesta.manufacturer);
            $("#cost12").val(respuesta.cost_in_credits);
            $("#speed12").val(respuesta.max_atmosphering_speed);
            $("#passengers12").val(respuesta.passengers);
            $("#capacity12").val(respuesta.cargo_capacity);
            $("#class12").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/13/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name13").val(respuesta.name);
            $("#model13").val(respuesta.model);
            $("#manufacturer13").val(respuesta.manufacturer);
            $("#cost13").val(respuesta.cost_in_credits);
            $("#speed13").val(respuesta.max_atmosphering_speed);
            $("#passengers13").val(respuesta.passengers);
            $("#capacity13").val(respuesta.cargo_capacity);
            $("#class13").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/15/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name15").val(respuesta.name);
            $("#model15").val(respuesta.model);
            $("#manufacturer15").val(respuesta.manufacturer);
            $("#cost15").val(respuesta.cost_in_credits);
            $("#speed15").val(respuesta.max_atmosphering_speed);
            $("#passengers15").val(respuesta.passengers);
            $("#capacity15").val(respuesta.cargo_capacity);
            $("#class15").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/17/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name17").val(respuesta.name);
            $("#model17").val(respuesta.model);
            $("#manufacturer17").val(respuesta.manufacturer);
            $("#cost17").val(respuesta.cost_in_credits);
            $("#speed17").val(respuesta.max_atmosphering_speed);
            $("#passengers17").val(respuesta.passengers);
            $("#capacity17").val(respuesta.cargo_capacity);
            $("#class17").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/21/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name21").val(respuesta.name);
            $("#model21").val(respuesta.model);
            $("#manufacturer21").val(respuesta.manufacturer);
            $("#cost21").val(respuesta.cost_in_credits);
            $("#speed21").val(respuesta.max_atmosphering_speed);
            $("#passengers21").val(respuesta.passengers);
            $("#capacity21").val(respuesta.cargo_capacity);
            $("#class21").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/22/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name22").val(respuesta.name);
            $("#model22").val(respuesta.model);
            $("#manufacturer22").val(respuesta.manufacturer);
            $("#cost22").val(respuesta.cost_in_credits);
            $("#speed22").val(respuesta.max_atmosphering_speed);
            $("#passengers22").val(respuesta.passengers);
            $("#capacity22").val(respuesta.cargo_capacity);
            $("#class22").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/23/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name23").val(respuesta.name);
            $("#model23").val(respuesta.model);
            $("#manufacturer23").val(respuesta.manufacturer);
            $("#cost23").val(respuesta.cost_in_credits);
            $("#speed23").val(respuesta.max_atmosphering_speed);
            $("#passengers23").val(respuesta.passengers);
            $("#capacity23").val(respuesta.cargo_capacity);
            $("#class23").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/27/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name27").val(respuesta.name);
            $("#model27").val(respuesta.model);
            $("#manufacturer27").val(respuesta.manufacturer);
            $("#cost27").val(respuesta.cost_in_credits);
            $("#speed27").val(respuesta.max_atmosphering_speed);
            $("#passengers27").val(respuesta.passengers);
            $("#capacity27").val(respuesta.cargo_capacity);
            $("#class27").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/28/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name28").val(respuesta.name);
            $("#model28").val(respuesta.model);
            $("#manufacturer28").val(respuesta.manufacturer);
            $("#cost28").val(respuesta.cost_in_credits);
            $("#speed28").val(respuesta.max_atmosphering_speed);
            $("#passengers28").val(respuesta.passengers);
            $("#capacity28").val(respuesta.cargo_capacity);
            $("#class28").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/29/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name29").val(respuesta.name);
            $("#model29").val(respuesta.model);
            $("#manufacturer29").val(respuesta.manufacturer);
            $("#cost29").val(respuesta.cost_in_credits);
            $("#speed29").val(respuesta.max_atmosphering_speed);
            $("#passengers29").val(respuesta.passengers);
            $("#capacity29").val(respuesta.cargo_capacity);
            $("#class29").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/31/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name31").val(respuesta.name);
            $("#model31").val(respuesta.model);
            $("#manufacturer31").val(respuesta.manufacturer);
            $("#cost31").val(respuesta.cost_in_credits);
            $("#speed31").val(respuesta.max_atmosphering_speed);
            $("#passengers31").val(respuesta.passengers);
            $("#capacity31").val(respuesta.cargo_capacity);
            $("#class31").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/32/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name32").val(respuesta.name);
            $("#model32").val(respuesta.model);
            $("#manufacturer32").val(respuesta.manufacturer);
            $("#cost32").val(respuesta.cost_in_credits);
            $("#speed32").val(respuesta.max_atmosphering_speed);
            $("#passengers32").val(respuesta.passengers);
            $("#capacity32").val(respuesta.cargo_capacity);
            $("#class32").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/39/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name39").val(respuesta.name);
            $("#model39").val(respuesta.model);
            $("#manufacturer39").val(respuesta.manufacturer);
            $("#cost39").val(respuesta.cost_in_credits);
            $("#speed39").val(respuesta.max_atmosphering_speed);
            $("#passengers39").val(respuesta.passengers);
            $("#capacity39").val(respuesta.cargo_capacity);
            $("#class39").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/40/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name40").val(respuesta.name);
            $("#model40").val(respuesta.model);
            $("#manufacturer40").val(respuesta.manufacturer);
            $("#cost40").val(respuesta.cost_in_credits);
            $("#speed40").val(respuesta.max_atmosphering_speed);
            $("#passengers40").val(respuesta.passengers);
            $("#capacity40").val(respuesta.cargo_capacity);
            $("#class40").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/41/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name41").val(respuesta.name);
            $("#model41").val(respuesta.model);
            $("#manufacturer41").val(respuesta.manufacturer);
            $("#cost41").val(respuesta.cost_in_credits);
            $("#speed41").val(respuesta.max_atmosphering_speed);
            $("#passengers41").val(respuesta.passengers);
            $("#capacity41").val(respuesta.cargo_capacity);
            $("#class41").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/43/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name43").val(respuesta.name);
            $("#model43").val(respuesta.model);
            $("#manufacturer43").val(respuesta.manufacturer);
            $("#cost43").val(respuesta.cost_in_credits);
            $("#speed43").val(respuesta.max_atmosphering_speed);
            $("#passengers43").val(respuesta.passengers);
            $("#capacity43").val(respuesta.cargo_capacity);
            $("#class43").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/47/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name47").val(respuesta.name);
            $("#model47").val(respuesta.model);
            $("#manufacturer47").val(respuesta.manufacturer);
            $("#cost47").val(respuesta.cost_in_credits);
            $("#speed47").val(respuesta.max_atmosphering_speed);
            $("#passengers47").val(respuesta.passengers);
            $("#capacity47").val(respuesta.cargo_capacity);
            $("#class47").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/48/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name48").val(respuesta.name);
            $("#model48").val(respuesta.model);
            $("#manufacturer48").val(respuesta.manufacturer);
            $("#cost48").val(respuesta.cost_in_credits);
            $("#speed48").val(respuesta.max_atmosphering_speed);
            $("#passengers48").val(respuesta.passengers);
            $("#capacity48").val(respuesta.cargo_capacity);
            $("#class48").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/49/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name49").val(respuesta.name);
            $("#model49").val(respuesta.model);
            $("#manufacturer49").val(respuesta.manufacturer);
            $("#cost49").val(respuesta.cost_in_credits);
            $("#speed49").val(respuesta.max_atmosphering_speed);
            $("#passengers49").val(respuesta.passengers);
            $("#capacity49").val(respuesta.cargo_capacity);
            $("#class49").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/52/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name52").val(respuesta.name);
            $("#model52").val(respuesta.model);
            $("#manufacturer52").val(respuesta.manufacturer);
            $("#cost52").val(respuesta.cost_in_credits);
            $("#speed52").val(respuesta.max_atmosphering_speed);
            $("#passengers52").val(respuesta.passengers);
            $("#capacity52").val(respuesta.cargo_capacity);
            $("#class52").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/58/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name58").val(respuesta.name);
            $("#model58").val(respuesta.model);
            $("#manufacturer58").val(respuesta.manufacturer);
            $("#cost58").val(respuesta.cost_in_credits);
            $("#speed58").val(respuesta.max_atmosphering_speed);
            $("#passengers58").val(respuesta.passengers);
            $("#capacity58").val(respuesta.cargo_capacity);
            $("#class58").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/59/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name59").val(respuesta.name);
            $("#model59").val(respuesta.model);
            $("#manufacturer59").val(respuesta.manufacturer);
            $("#cost59").val(respuesta.cost_in_credits);
            $("#speed59").val(respuesta.max_atmosphering_speed);
            $("#passengers59").val(respuesta.passengers);
            $("#capacity59").val(respuesta.cargo_capacity);
            $("#class59").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/61/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name61").val(respuesta.name);
            $("#model61").val(respuesta.model);
            $("#manufacturer61").val(respuesta.manufacturer);
            $("#cost61").val(respuesta.cost_in_credits);
            $("#speed61").val(respuesta.max_atmosphering_speed);
            $("#passengers61").val(respuesta.passengers);
            $("#capacity61").val(respuesta.cargo_capacity);
            $("#class61").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/63/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name63").val(respuesta.name);
            $("#model63").val(respuesta.model);
            $("#manufacturer63").val(respuesta.manufacturer);
            $("#cost63").val(respuesta.cost_in_credits);
            $("#speed63").val(respuesta.max_atmosphering_speed);
            $("#passengers63").val(respuesta.passengers);
            $("#capacity63").val(respuesta.cargo_capacity);
            $("#class63").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/64/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name64").val(respuesta.name);
            $("#model64").val(respuesta.model);
            $("#manufacturer64").val(respuesta.manufacturer);
            $("#cost64").val(respuesta.cost_in_credits);
            $("#speed64").val(respuesta.max_atmosphering_speed);
            $("#passengers64").val(respuesta.passengers);
            $("#capacity64").val(respuesta.cargo_capacity);
            $("#class64").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/65/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name65").val(respuesta.name);
            $("#model65").val(respuesta.model);
            $("#manufacturer65").val(respuesta.manufacturer);
            $("#cost65").val(respuesta.cost_in_credits);
            $("#speed65").val(respuesta.max_atmosphering_speed);
            $("#passengers65").val(respuesta.passengers);
            $("#capacity65").val(respuesta.cargo_capacity);
            $("#class65").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/66/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name66").val(respuesta.name);
            $("#model66").val(respuesta.model);
            $("#manufacturer66").val(respuesta.manufacturer);
            $("#cost66").val(respuesta.cost_in_credits);
            $("#speed66").val(respuesta.max_atmosphering_speed);
            $("#passengers66").val(respuesta.passengers);
            $("#capacity66").val(respuesta.cargo_capacity);
            $("#class66").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/68/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name68").val(respuesta.name);
            $("#model68").val(respuesta.model);
            $("#manufacturer68").val(respuesta.manufacturer);
            $("#cost68").val(respuesta.cost_in_credits);
            $("#speed68").val(respuesta.max_atmosphering_speed);
            $("#passengers68").val(respuesta.passengers);
            $("#capacity68").val(respuesta.cargo_capacity);
            $("#class68").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/74/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name74").val(respuesta.name);
            $("#model74").val(respuesta.model);
            $("#manufacturer74").val(respuesta.manufacturer);
            $("#cost74").val(respuesta.cost_in_credits);
            $("#speed74").val(respuesta.max_atmosphering_speed);
            $("#passengers74").val(respuesta.passengers);
            $("#capacity74").val(respuesta.cargo_capacity);
            $("#class74").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/75/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name75").val(respuesta.name);
            $("#model75").val(respuesta.model);
            $("#manufacturer75").val(respuesta.manufacturer);
            $("#cost75").val(respuesta.cost_in_credits);
            $("#speed75").val(respuesta.max_atmosphering_speed);
            $("#passengers75").val(respuesta.passengers);
            $("#capacity75").val(respuesta.cargo_capacity);
            $("#class75").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
$.ajax({
        url: 'https://swapi.co/api/starships/77/',
        type: 'GET',
        success: function(respuesta) {
            
            $("#name77").val(respuesta.name);
            $("#model77").val(respuesta.model);
            $("#manufacturer77").val(respuesta.manufacturer);
            $("#cost77").val(respuesta.cost_in_credits);
            $("#speed77").val(respuesta.max_atmosphering_speed);
            $("#passengers77").val(respuesta.passengers);
            $("#capacity77").val(respuesta.cargo_capacity);
            $("#class77").val(respuesta.starship_class);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });