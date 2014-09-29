console.log("bonjour");

function Person(fn, ln, sex) {
    this.firstName = fn;
    this.lastName = ln;
    this.sex = sex;
}

function showAlert() {
    window.alert("hello");
}

var showPersons = true;

function showPersonsList() {
    if (showPersons) {
        $("#list-person").hide();
        showPersons = false;
    } else {
        $("#list-person").show();
        showPersons = true;
    }
}

Person.prototype.show = function () {

    if (window.event.shiftKey) {
        $("#person").removeAttr("id");
        $("#list-person").append('<li class="list-group-item list-group-item-info" id="person"></li>');
    }

    $("#person").html("Hello " + this.firstName + " " + this.lastName + " (" + this.sex + ") !");

    $("#person").removeClass();

    if (this.sex === "Male") {
        $("#person").addClass("alert alert-info");
    } else {
        $("#person").addClass("alert alert-danger");
    };
}

// Shorthand for $( document ).ready()
$(function () {
    console.log("jquery is ready!");
    setInterval(function () {
        $("#clock").html(new Date());
    }, 1000);

    setInterval(function () {
        $(document).mousemove(function (event) {
            var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
            $("#mouse").html(pageCoords), 20
        });
    });

    $(document).mousemove(function (event) {
        var sex = chance.gender();
        var p = new Person(chance.first({
            gender: sex
        }), chance.last(), sex);

        p.show();

    });
    $.getJSON("rooms.json", function (data) {
        var rooms = data.rooms;
        $.each(rooms, function (i, item) {
            $("#rooms").append("<div>Room: " + rooms[i].name + ", " + rooms[i].capacity + "<br></div>");
        });
    });

});