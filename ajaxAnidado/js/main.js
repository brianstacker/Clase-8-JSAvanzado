console.log('Ajax Anidado')


// -----------------------------------------------
// Ajax ordenado utilizando Fetch
// -----------------------------------------------
function getComentarioFetch(num, debug) {
    return fetch('https://jsonplaceholder.typicode.com/comments/' + num)
    .then(respuesta => {
        //console.log(respuesta)
        return respuesta.json()
    })
    .then(json => {
        if(debug) console.log(json)
        return Promise.resolve(json)
    })
}

function getComentariosFetch() {
    getComentarioFetch(1, true)
    .then(() => getComentarioFetch(2, true))
    .then(() => getComentarioFetch(3, true))
    .then(() => getComentarioFetch(4, true))
    .catch(console.log)
}
//getComentariosFetch()
/*
async function getComentariosFetchAsyncAwait() {
    try {
        await getComentarioFetch(1, true)
        await getComentarioFetch(2, true)
        await getComentarioFetch(3, true)
        await getComentarioFetch(4, true)
    }
    catch(error) {
        console.log(error)
    }
}
*/
/* 
//--------------------------------
//DELAY BLOQUEANTE
//--------------------------------
function delay(ms) {
    for(let i=0; i<(1e6*ms); i++);
}
delay(2000)
console.log('ok delay 1')
delay(2000)
console.log('ok delay 2')
delay(2000)
console.log('ok delay 3')
//--------------------------------
 */
/*
//-----------------------------------
//DELAY NO BLOQUEANTE (con callbacks)
//-----------------------------------
function delay(ms,cb) {
    setTimeout(cb, ms)
}
delay(2000, () => {
    console.log('ok delay 1')
    delay(2000, () => {
        console.log('ok delay 2')
        
        getComentariosFetchAsyncAwait()

        delay(2000, () => {
            console.log('ok delay 3')
        })
    })
})

delay(1000, () => {
    console.log('ok delay2 1')
    delay(2000, () => {
        console.log('ok delay2 2')
        delay(2000, () => {
            console.log('ok delay2 3')
        })
    })
})
*/
// ------------------------------------------------------
//  DELAY NO BLOQUEANTE (con PROMESAS)
// ------------------------------------------------------
const delay = (id,ms) => new Promise((resolve,reject) => setTimeout(resolve,ms,'Fin de retardo ' + id))
/*
function delayTotalPromise() {
    console.log('Inicio de Retardo')
    delay(1, 2000)
    .then(mensaje => {
        console.log(mensaje)
        return delay(2, 2000)
    })
    .then(mensaje => {
        console.log(mensaje)
        return delay(3, 2000)
    })
    .then(mensaje => {
        console.log(mensaje)
        
        getComentariosFetchAsyncAwait()
        
        return delay(4, 2000)
    })
    .then(mensaje => {
        console.log(mensaje)
        return delay(5, 2000)
    })
    .then(mensaje => {
        console.log(mensaje)
        return delay(6, 2000)
    })
    .then(mensaje => {
        console.log(mensaje)
    })
}
delayTotalPromise()
*/

/*
async function delayTotalAsyncAwait() {
    console.log('Inicio de Retardo')

    let mensaje = await delay(1, 2000)
    console.log(mensaje)
    
    mensaje = await delay(2, 2000)
    console.log(mensaje)

    mensaje = await delay(3, 2000)
    console.log(mensaje)

    getComentariosFetchAsyncAwait()

    mensaje = await delay(4, 2000)
    console.log(mensaje)

    mensaje = await delay(5, 2000)
    console.log(mensaje)

    mensaje = await delay(6, 2000)
    console.log(mensaje)
}
*/
async function delayTotalAsyncAwait() {
    console.log('Inicio de Retardo')

    for(let i=1; i<=6; i++) {
        let mensaje = await delay(i, 2000)
        console.log(mensaje)    
        if(i == 3) getComentariosFetchAsyncAwait()
    }
}
//delayTotalAsyncAwait()
// ------------------------------------------------------

async function getComentariosFetchAsyncAwait() {
    try {
        let respuesta = await getComentarioFetch(1, !true)
        console.log(respuesta)

        respuesta = await getComentarioFetch(2, !true)
        console.log(respuesta)

        //console.log(Date.now())
        let tiempoInicial = Date.now()
        let mensaje = await delay (0, 5000)
        console.log(mensaje)
        console.log('Tiempo transcurrido', Date.now()-tiempoInicial, 'mS')

        respuesta = await getComentarioFetch(3, !true)
        console.log(respuesta)

        respuesta = await getComentarioFetch(4, !true)
        console.log(respuesta)
    }
    catch(error) {
        console.log(error)
    }
}
//getComentariosFetchAsyncAwait()

// -----------------------------------------------
// Carrera de Promesas
// -----------------------------------------------
console.log('(Promise.race) Largaron...')
Promise.race([
    delay(101,8000),
    delay(102,6000),
    delay(103,5000)
]).then(console.log)

console.log('(Promise.all) Esperando el cumplimiento total...')
Promise.all([
    delay(101,8000),
    delay(102,6000),
    delay(103,5000)
]).then(console.log)









// -----------------------------------------------
// Ajax ordenado utilizando Promesas
// -----------------------------------------------
function getComentarioPromise(num, debug) {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest
        xhr.open('get', 'https://jsonplaceholder.typicode.com/comments/' + num)
        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                let respuesta = JSON.parse(xhr.response)
                //console.log(typeof respuesta)
                if (debug) console.log(respuesta)
                resolve(respuesta)
            }
            else {
                let error = {
                    title: 'Error Status Ajax',
                    body: xhr.status
                }
                reject(error)
            }
        })
        xhr.addEventListener('error', e => {
            let error = {
                title: 'Error General Ajax',
                body: e
            }
            reject(error)
        })
        xhr.send()
    })
}
// -----------------------------------------------
// Ajax ordenado utilizando Async Await
// -----------------------------------------------
/*
async function getComentariosAsyncAwait() {
    try {
        await getComentarioPromise(1, true)
        await getComentarioPromise(2, true)
        await getComentarioPromise(3, true)
        await getComentarioPromise(4, true)
        await getComentarioPromise(5, true)
        await getComentarioPromise(6, true)
        await getComentarioPromise(7, true)
        await getComentarioPromise(8, true)
        await getComentarioPromise(9, true)
        await getComentarioPromise(10, true)
        await getComentarioPromise(11, true)
        await getComentarioPromise(12, true)
        await getComentarioPromise(13, true)
        await getComentarioPromise(14, true)
        await getComentarioPromise(15, true)
    }
    catch(error) {
        console.log(error)
    }
}
*/
async function getComentariosAsyncAwait() {
    try {
        let respuesta = await getComentarioPromise(1, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(2, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(3, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(4, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(5, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(6, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(7, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(8, !true)
        console.log(respuesta)
        
        respuesta = await getComentarioPromise(9, !true)
        console.log(respuesta)

        respuesta = await getComentarioPromise(10, !true)
        console.log(respuesta)
    }
    catch(error) {
        console.log(error)
    }
}
//getComentariosAsyncAwait()


function getComentariosPromise() {
    getComentarioPromise(1, true)
    .then(() => getComentarioPromise(2, true))
    .then(() => getComentarioPromise(3, true))
    .then(() => getComentarioPromise(4, true))
    .then(() => getComentarioPromise(5, true))
    .then(() => getComentarioPromise(6, true))
    .then(() => getComentarioPromise(7, true))
    .then(() => getComentarioPromise(8, true))
    .then(() => getComentarioPromise(9, true))
    .then(() => getComentarioPromise(10, true))
    .then(() => getComentarioPromise(11, true))
    .then(() => getComentarioPromise(12, true))
    .then(() => getComentarioPromise(13, true))
    .then(() => getComentarioPromise(14, true))
    .then(() => getComentarioPromise(15, true))
    .catch(error => console.log(error))
    //.then(console.log)
    //.catch(console.log)
}
//getComentariosPromise()
/*
// -----------------------------------------------
// Ajax ordenado utilizando Callbacks
// -----------------------------------------------
function getComentarioCallback(num, debug, cb) {
    let xhr = new XMLHttpRequest
    xhr.open('get', 'https://jsonplaceholder.typicode.com/comments/' + num)
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            //console.log(typeof respuesta)
            if (debug) console.log(respuesta)
            if (cb) cb(respuesta)
        }
    })
    xhr.send()
}

getComentarioCallback(1, true, () => {
    getComentarioCallback(2, true, () => {
        getComentarioCallback(3, true, () => {
            getComentarioCallback(4, true, () => {
                getComentarioCallback(5, true, () => {
                    getComentarioCallback(6, true, () => {
                        getComentarioCallback(7, true, () => {
                            getComentarioCallback(8, true, () => {
                                getComentarioCallback(9, true, () => {
                                    getComentarioCallback(10, true, () => {
                                        getComentarioCallback(11, true, () => {
                                            getComentarioCallback(12, true, () => {
                                                getComentarioCallback(13, true, () => {
                                                    getComentarioCallback(14, true, () => {
                                                        getComentarioCallback(15, true, () => {
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
*/

// -----------------------------------------------
// Ajax ordenado por funciones anidadas
// -----------------------------------------------
// ----------------------------------------------------------
//  Comentario Parte 1
// ----------------------------------------------------------
function getComentario1() {
    let xhr = new XMLHttpRequest
    xhr.open('get', 'https://jsonplaceholder.typicode.com/comments/1')
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(typeof respuesta)
            console.log(respuesta)
            getComentario2()
        }
    })
    xhr.send()
}
// ----------------------------------------------------------
//  Comentario Parte 2
// ----------------------------------------------------------
function getComentario2() {
    let xhr = new XMLHttpRequest
    xhr.open('get', 'https://jsonplaceholder.typicode.com/comments/2')
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(typeof respuesta)
            console.log(respuesta)
            getComentario3()
        }
    })
    xhr.send()
}

// ----------------------------------------------------------
//  Comentario Parte 3
// ----------------------------------------------------------
function getComentario3() {
    let xhr = new XMLHttpRequest
    xhr.open('get', 'https://jsonplaceholder.typicode.com/comments/3')
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(typeof respuesta)
            console.log(respuesta)
        }
    })
    xhr.send()
}

//---------------------------
// Pido los datos
//---------------------------
//getComentario1()


