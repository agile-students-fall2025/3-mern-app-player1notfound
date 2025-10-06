const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
  res.json({
    name:"Lanxi Lin",
    bio:"I’m currently pursuing a degree in Computer Science. I’ve always been fascinated by technology such as how lines of code can come together to build something people use and enjoy every day. Studying computer science has been an exciting journey of problem solving, creativity, and constant learning. Outside of my classes, I love diving into projects that challenge my logic and creativity from building small web apps to experimenting with new frameworks. I’m especially interested in how technology can make everyday life easier, more fun, or more connected. When I’m not coding, you’ll probably find me playing video games, exploring new restaurants, or hanging out with friends over good food. I also have a big love for EDM music. The energy and rhythm really motivate me, especially when I’m working or studying.",
    image:"https://i.imgur.com/cbJfxOn.jpeg"
  });
});

module.exports=router;
