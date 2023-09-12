const primerPromesa = new Promise((resolve, reject) =>{
    const num = Math.random();
    console.log(num);
    if(num < 0.5){
        return resolve();
    }
    return reject();
})

primerPromesa.then(()=>{
    console.log('True');
}).catch(()=>{
    console.log('False');
})
