import {todos} from '../../todos.js'

export default function handler(req, res) {

    const { method } = req;
   
    switch (method) {
        case "GET":
            res.status(200).json(todos);            
            break;
        case "POST":
            const {userId, id, title, completed } = req.body;
            todos.push({
                userId, 
                id: todos.length + 1,
                title, completed  
            });
            res.status(200).json(todos);
            break;    
        default:
            res.setHeader("Allow",["GET","POST"]);
            res.status(405).end(`Method ${method} not Allowed`);
            break;
    }

}