import React from "react"
import Layout from "../components/layout.js"
import { Button,Card,CardContent,Typography,
  CardActions,CardMedia } 
  from "@material-ui/core"

export default function Project() {
  return  (
    <Layout>
      <Typography variant="h3" gutterBottom>
        Hello I am some text!
      </Typography>
      <Typography gutterBottom>
        I'm trying my best!
      </Typography>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Hello world!
          </Typography>
          <Typography variant="h5">
            Material UI!
          </Typography>
        </CardContent>
        <CardMedia 
          component="img"
          alt="project"
          height="250"
          src={require("./japan.jpg")}
        />
        <CardActions>
          <Button>Project</Button>
        </CardActions>
      </Card>
    </Layout>
  )
}
