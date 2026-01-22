import express from "express"


const port = 3333

const app = express();

app.get("/", (req, res) => res.send("Hello no ts yet tho"))


app.listen(port, () => {
    console.log("http://localhost:" + port)
})
