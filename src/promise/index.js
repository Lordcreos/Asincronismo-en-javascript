// forma 1
const somethingHappen =( ) =>{
    return new Promise ((resolve,reject )=>{
        if (true){
            resolve ('HEY!');
        }else{
            reject('Ups');
        }
    }); 
    
} ;

somethingHappen()
.then(response => console.log(response))
.catch(err => console.error(err));

//forma 2

const somethingHappen2 =( ) =>{
    return new Promise ((resolve,reject )=>{
        if (true){
            setTimeout(() =>{
                resolve('True');
            },2000)
        }else {
            const error =new Error ('Whoops')
            reject (error);
        }
    }); 
    
} ;


somethingHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

// encadenar varias promesas 


Promise.all ([somethingHappen(),somethingHappen2()])
.then(response =>{
    console.log ('Array of results', response);
})

.catch(err=> {
    console.error ('Array of errors ' , err);
})