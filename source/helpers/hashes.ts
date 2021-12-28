import crypto from 'crypto';

const generateHashSimple = (prev_hash: string) => {
    const newHash = crypto
    .createHash('sha256')
        .update(prev_hash,'utf-8')
    .digest('hex')
    .toString()

    return newHash
}

const generateHash = (prevhash: string , message: string) => {
    let nonce : number = 0;
    let dobleCero : boolean = false;
    let newHash : string = '';

    while(!dobleCero){
        newHash = crypto
        .createHash('sha256')
            .update(`${prevhash},${message},${nonce}`,'utf-8')
        .digest('hex')
        .toString()

       if(!doubleCeroCheck(newHash)){
           nonce++
       }else{
           dobleCero = true
       }
    }
    return {newHash,prevhash,message,nonce}
}

const doubleCeroCheck = (text: string) => {
    let pattern = /^00.*/
    let result = pattern.test(text)

    return result
}

export {generateHash , doubleCeroCheck };