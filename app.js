var express = require("express"),
ejs = require ("ejs");
var app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
const conexion = require('./router');

///////////////////////////////////FUNCIONES DEL LOGIN ////////////////////////////////////////////////////////////////////////

app.get("/",function(req,res){
    res.type("text/html");
    res.render(
       "index",
       {
        pagina:1,
        bandera:15
       },
       function(err,html){
        if(err) throw err;
        res.send(html);
       }
    );
});

app.get("/olvidar",function(req,res){
    res.type("text/html");
    res.render(
       "index",
       {
        pagina:3,
        bandera:15
       },
       function(err,html){
        if(err) throw err;
        res.send(html);
       }
    );
});


app.get("/confirmar",function(req,res){
    res.type("text/html");
    res.render(
       "index",
       {
        pagina:4,
        bandera:15
       },
       function(err,html){
        if(err) throw err;
        res.send(html);
       }
    );
});

app.get("/reescribir",function(req,res){
    res.type("text/html");
    res.render(
       "index",
       {
        pagina:5,
        bandera:15
       },
       function(err,html){
        if(err) throw err;
        res.send(html);
       }
    );
});
////////////////////////////////////////////////////////////FUNCIONES INTERNAS ADMIN/////////////////////////////////////////////////////

app.get("/principal",function(req,res){
    res.type("text/html");
    res.render(
       "index",
       {
        pagina:2,
        bandera:14
       },
       function(err,html){
        if(err) throw err;
        res.send(html);
       }
    );
});

app.get("/userupdate",function(req,res){
    res.type("text/html");
    res.render(
       "index",
       {
        pagina:6,
        bandera:14
       },
       function(err,html){
        if(err) throw err;
        res.send(html);
       }
    );
});


app.get("/useredit",function(req,res){
    res.type("text/html");
    res.render(
       "index",
       {
        pagina:7,
        bandera:14
       },
       function(err,html){
        if(err) throw err;
        res.send(html);
       }
    );
});



app.get("/transacciones",function(req,res){
    res.type("text/html");
    res.render(
       "index",
       {
        pagina:8,
        bandera:14
       },
       function(err,html){
        if(err) throw err;
        res.send(html);
       }
    );
});



app.get("/listado",function(req,res){
    res.type("text/html");
    res.render(
       "index",
       {
        pagina:9,
        bandera:14
       },
       function(err,html){
        if(err) throw err;
        res.send(html);
       }
    );
});



app.get("/vistaproducto",function(req,res){
    res.type("text/html");
    res.render(
       "index",
       {
        pagina:10,
        bandera:14
       },
       function(err,html){
        if(err) throw err;
        res.send(html);
       }
    );
});



app.get("/agregarproducto",function(req,res){
    res.type("text/html");
    res.render(
       "index",
       {
        pagina:12,
        bandera:14
       },
       function(err,html){
        if(err) throw err;
        res.send(html);
       }
    );
});


app.get("/editarproducto",function(req,res){
    res.type("text/html");
    res.render(
       "index",
       {
        pagina:11,
        bandera:14
       },
       function(err,html){
        if(err) throw err;
        res.send(html);
       }
    );
});
////////////////////////////////////////////////////CONEXION CON EL SERVIDOR LOCALHOST//////////////////////////////////////////////////////
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function() {
  console.log(
    "Servidor iniciado en http://localhost:" +
      app.get("port") +
      "; presiona Ctrl-C para terminar."
  );
});