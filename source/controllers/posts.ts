/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import { generateHash } from '../helpers/hashes'
import { saveData } from '../helpers/saveLogFile';

interface Post {
    prev_hash: string;
    message: string;
    nonce: Number;
}

const initial_prev_hash: string = '0000000000000000000000000000000000000000000000000000000000000000';

let hashed_post : Post = {
    prev_hash: initial_prev_hash,
    message: '',
    nonce: 0
}

// adding a post hashed message
const addPost = async (req: Request, res: Response, next: NextFunction) => {
    
    // get the data from req.body
    let body: string = req.body.body;

    hashed_post.message = body

    let generated_message = generateHash(hashed_post.prev_hash,hashed_post.message)

    saveData(`${generated_message.prevhash},${generated_message.message},${generated_message.nonce} \r\n`)
  
    hashed_post.prev_hash = generated_message.newHash;
    hashed_post.nonce = generated_message.nonce;

    return res.status(200).json({
        generated_message
    });
};

export default { addPost };