console.log('Objetos JS')

if(false) {

    //-----------------------------------------------------
    //DECLARACION DE UN OBJETO EN FORMA LITERAL
    //-----------------------------------------------------
    let a = {
        nombre: 'Juan'
    }
    console.log(a)
    console.log("a.hasOwnProperty('nombre')", a.hasOwnProperty('nombre'))
    console.log("a.hasOwnProperty('edad')", a.hasOwnProperty('nombre'))
    console.log('--------------------')
    //-----------------------------------------------------
    // DECLARACION DE UN OBJETO UTILIZANDO EL METODO CREATE
    //-----------------------------------------------------

    let prototipo1 = {
        saludo: function() {
            console.log('Hola')
        }
    }

    let prototipo2 = {
        saludo: function() {
            console.log('Hola 2')
        }
    }

    let prototipoSinHerencia = Object.create({},{
        saludo: {
            value:function() {
                console.log('Hola')
            },
            writable: false,
            configurable: false,
            enumerable: false,
        }
    })

    //prototipo1.saludo()

    //let b = Object.create(prototipo1)
    let b = Object.create(prototipoSinHerencia)
    console.log(b)
    console.log('prototipo1.isPrototypeOf(b)', prototipo1.isPrototypeOf(b))
    console.log('prototipo2.isPrototypeOf(b)', prototipo2.isPrototypeOf(b))


    //let c = {x:1}

    //-----------------------------------------------------
    // Configuracion avanzada de las propiedades de un objeto
    //-----------------------------------------------------
    let c = Object.create(null,{
        x: {
            value: 1,
            writable: !false,
            configurable: !false,
            enumerable: !false,
        },
        y: {
                value: 2,
                writable: false,
                configurable: false,
                enumerable: false,
        }
    })

    console.log(c)
    c.x=33
    console.log(c.x)
    //delete c.x
    for (let key in c) {
        console.log(key)
    }
    delete c.x
    console.log(c)




    function foo() {
        console.log('Hola soy un foo')
    }

    foo.x = true
    console.dir(foo.x)

    console.dir(foo)
    foo() 


//-----------------------------------------------------
// FUNCIONES ambito, scope, contexto, closure
//-----------------------------------------------------

//AMBITO o SCOPE DE UNA FUNCION
    var a1 = 2
    function foo2 () {
        var b1 = 10
        console.log(a1)
        console.log(b1)
        console.log(c1)
    }
    foo2(50)
    console.log(a1)
    //console.log(b1)
    console.log(c1)


//FUNCIONES JS VARIÁDICAS
    
    function sumar(a,b) {
        return ((typeof a != 'undefined')?a:0) + ((typeof b != 'undefined')?b:0) 
    }
    console.log(sumar(5,6,7))

} //Fin comentario if

//CLOSURE
function externa(x) {
    return x
    //console.log(x)
}

var resultado = externa(50)

//externa(50)
//console.log(x)











