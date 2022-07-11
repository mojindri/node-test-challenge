import express from 'express';
import ping from './ping.js';
import zip from './zip.js';



const router = express.Router();
/* Route the requests as outlined in requirements*/

router.route(/*your endpoint name*/"/identity").get(function (req,res) { //implement: an identity function endpoint  f(x) => x
    res.end(/*your code here */);
});

router.route('/calc').get(function (req,res) {   //implement: (x + y)/2  (x and y are your query params) ?x=...&y=..
    res.end(/*your code here*/);
});

//NICE To have: implement a zip endpoint that compresses input string and sends it as response back
//Recommended work-flow (1.implementing endpoint body, 2. implementing zip-based algorithm :))


export default router;
