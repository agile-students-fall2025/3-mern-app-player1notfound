const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
  res.json({
    name:"Lanxi Lin",
    bio: `
I’m currently pursuing a degree in Computer Science. I’ve always been fascinated by technology such as how lines of code can come together to build something people use and enjoy every day. Studying computer science has been an exciting journey of problem solving, creativity, and constant learning. Outside of my classes, I love diving into projects that challenge my logic and creativity from building small web apps to experimenting with new frameworks. I’m especially interested in how technology can make everyday life easier, more fun, or more connected.

Outside of academics, I try to live a balanced life. I’m someone who genuinely enjoys exploring new experiences, whether that means visiting a new restaurant, trying a new recipe, or going on spontaneous weekend adventures with friends. I love eating out and discovering hidden food gems. I’ll never turn down a good ramen spot or a place with amazing dessert. I’ve always been drawn to gaming as well not just for fun, but because I appreciate the creativity, storytelling, and technology that make modern games so immersive. Games have also been a big social outlet for me, a way to connect and laugh with friends after a long day of classes. When I’m not out and about, I’m often listening to EDM music. There’s something about its rhythm and intensity that helps me focus while coding or unwind after a stressful day. Whether it’s upbeat festival tracks or more chill electronic tunes, music is always part of my daily routine.
`,
    image:"https://i.imgur.com/cbJfxOn.jpeg"
  });
});

module.exports=router;
