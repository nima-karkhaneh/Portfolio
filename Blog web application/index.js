import express from "express";


const app = express();
const port = process.env.port || 3000


app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


const posts= [];

// GET routes

app.get("/", (req,res)=>{
    res.render("home.ejs");
})
app.get("/new-posts", (req,res)=>{
    res.render("new-posts.ejs")
})
app.get("/posts", (req,res) =>{
    res.render("posts.ejs", {
        posts: posts
    })
})

// Submitting a new post

app.post("/submit", (req,res) =>{
    const post = {
        id: posts.length+1,
        author: req.body.author,
        title: req.body.title,
        text: req.body.text,
        date: new Date(),
    }
    posts.push(post);
    res.redirect("/posts")
})

// Getting a specific post

app.get("/edit/:postID", (req,res)=>{
    const foundPost = posts.find((p) => p.id === parseInt(req.params.postID));
    console.log(foundPost)
    res.render("edit-posts.ejs",{
        foundPost: foundPost
    });
})

// Editing/Updating a specific post

app.post("/edit/:postID", (req,res)=>{
    const foundPost = posts.find((p) => p.id === parseInt(req.params.postID));
    const foundIndex = posts.findIndex((p) => p.id === parseInt(req.params.postID));
    const updatedPost = {
        id: foundIndex+1,
        author: req.body.author || foundPost.author,
        title: req.body.title || foundPost.title,
        text: req.body.text || foundPost.text,
        date: new Date()
    }
    posts[foundIndex] = updatedPost;
    res.redirect("/posts")
})

// Deleting a specific post

app.get("/posts/delete/:postID", (req,res)=> {
    const foundIndex = posts.findIndex((p) => p.id === parseInt(req.params.postID));
    posts.splice(foundIndex, 1);
    res.redirect("/posts")
})


app.listen(port, () => {
    console.log(`server is listening on http://localhost:3000/`);
})