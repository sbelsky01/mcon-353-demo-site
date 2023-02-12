import React from "react";
import "./App.css";
import {
  Button,
  Card,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  styled,
  Collapse,
  IconButton,
  List,
  ListItemText,
  Paper,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import CartoonPic from "./Images/cartoon-pic.jpg";
import PrintableKosherRecipes from "./Images/printable-kosher-recipes.jpg";
import ChocolateCake from "./Images/chocolate-cake.JPG";
import RoyalIcing from "./Images/royal-icing.jpeg";
import PillowPic from "./Images/C2C-pillow.jpeg";
import ScrubbiesPic from "./Images/scrubbies.jpeg";
import BorderPic from "./Images/candy-cane-border.jpeg";

const SplashScreen = () => {
  return <div class="splash-screen"></div>;
};

const AboutMe = () => {
  return (
    <Paper className="about-me-container" elevation="14">
      <Grid container className="about-me" spacing={6}>
        <Grid item xs={12} sm={6} md={5} lg={3}>
          <Card variant="outlined">
            <CardMedia sx={{ height: 300 }} image={CartoonPic} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={7} lg={9}>
          <Typography variant="h4">Hello!</Typography>
          <Typography paragraph>
            My name is Sarah Belsky. I am a student at Touro College, currently
            working towards a BS in Computer Science. I enjoy problem solving
            and I love that feeling of satisfaction when I finally figure out
            how to get a program to work after hours of debugging. In addition
            to coding, I also enjoy being creative, and some of my hobbies
            include music, baking, and crochet.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const BakingSection = () => {
  return (
    <>
      <Typography variant="h3" className="section-heading">
        My favorite recipes
      </Typography>
      <Grid container spacing={7}>
        <Grid item xs={12} md={12} lg={4}>
          <WebsiteLinkCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ChocolateCakeCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RoyalIcingCard />
        </Grid>
      </Grid>
    </>
  );
};

const WebsiteLinkCard = () => {
  return (
    <Card variant="outlined">
      <CardMedia sx={{ height: 200 }} image={PrintableKosherRecipes} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Printable Kosher Recipes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Do you often find yourself frustrated by online recipes that are
          impossible to read because there's a huge photo or ad between every
          two lines? When my mother got tired of reading and rereading recipes
          to make sure she didn't miss anything in all the chaos, she decided it
          was time to put together a collection of easily printable recipes.
          Once she had a few typed up and formatted nicely, she created this
          website so other people could benefit from them as well.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Visit the website to learn more and to find lots of great recipes to
          print and enjoy!
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href="http://www.printablekosherrecipes.com"
          target="new"
        >
          Visit
        </Button>
      </CardActions>
    </Card>
  );
};

const ExpandMoreWrapper = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ChocolateCakeCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined">
      <CardMedia sx={{ height: 200 }} image={ChocolateCake} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Oma's Chocolate Cake
        </Typography>
        <Typography variant="body2" color="text.secondary">
          There are probably thousands of chocolate cake recipes out there, but
          this one, from my grandmother, has always been my favorite. It comes
          out both moist and fluffy, which, in my opinion, is the perfect
          consistency for delicious chocolate cake.
        </Typography>
      </CardContent>
      <CardActions>
        <ExpandMoreWrapper
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </ExpandMoreWrapper>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>
            <List disablePadding dense>
              <ListItemText inset>2 cups hot water</ListItemText>
              <ListItemText inset>1 cup cocoa + 1 tsp coffee</ListItemText>
              <ListItemText inset>1 cup oil</ListItemText>
              <ListItemText inset>2&frac12; cups sugar</ListItemText>
              <ListItemText inset>3 cups flour</ListItemText>
              <ListItemText inset>2 tsp baking powder</ListItemText>
              <ListItemText inset>1 tsp baking soda</ListItemText>
              <ListItemText inset>4 eggs</ListItemText>
              <ListItemText inset>2 tsp vanilla</ListItemText>
            </List>
          </Typography>
          <Typography paragraph>Preheat the oven to 350&deg;F</Typography>
          <Typography paragraph>
            Sift together the flour, baking powder, and baking soda. Combine
            remaining ingredients in a large bowl. Add the dry ingredients and
            mix well.
          </Typography>
          <Typography paragraph>
            For cake: Pour into a 9x13 pan. Bake for about 50 minutes, or until
            a toothpick inserted comes out clean.
          </Typography>
          <Typography paragraph>
            For cupcakes: Makes 3-3&frac12; dozen cupcakes. Pour into cupcake
            holders and bake for 20 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const RoyalIcingCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined">
      <CardMedia sx={{ height: 200 }} image={RoyalIcing} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Royal Icing
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Royal icing is a great way to dress up plain sugar cookies. You can
          make royal icing cookies for a simcha, a birthday party, or just for
          fun. With a piping bag and some food coloring, the possibilities are
          endless. You might need to leave yourself a few days to give the icing
          time to dry, but the results are definitely worth it!
        </Typography>
      </CardContent>
      <CardActions>
        <ExpandMoreWrapper
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </ExpandMoreWrapper>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Base:</Typography>
          <Typography paragraph>
            Make a batch of your favorite sugar cookies in the shape that you
            want to decorate.
          </Typography>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>
            <List disablePadding dense>
              <ListItemText inset>1 egg white</ListItemText>
              <ListItemText inset>1&#8531; cups powdered sugar</ListItemText>
            </List>
          </Typography>
          <Typography paragraph>
            Place the egg white and sugar in a mixing bowl fitted with the
            paddle attachment. Start the mixer on a low speed until the sugar
            looks wet. Then move the mixer to high and mix until it's stiff and
            heavy.
          </Typography>
          <Typography paragraph>
            Start by filling a piping bag with a small portion of the mixture.
            Use the piping bag to draw an outline around the edge of the
            cookies.
          </Typography>
          <Typography paragraph>
            Once the outlines are dry, you're ready to cover the rest of the
            cookies. Prepare an egg white and add a little at a time to the
            icing until it spreads easily but is not too runny. Use a spoon or a
            piping bag to fill in the outlines. The icing should spread out to
            cover the cookies and stop when it reaches the outlines that you
            made. Now comes the hardest part. Once all the cookies are covered,
            you'll need to leave them alone until the icing is dry. This can
            take from a few hours to a few days depending on how runny the icing
            was.
          </Typography>
          <Typography paragraph>Once the icing is completely dry:</Typography>
          <Typography paragraph>
            If you just want plain white cookies, you're done! To decorate, make
            more of the icing and use food coloring to mix the colors you want.
            Use a piping bag to draw patterns or designs. It should take just a
            short time to dry, and then you can show off your beautiful,
            professional looking cookies!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const CrochetSection = () => {
  return (
    <>
      <Typography variant="h3" className="section-heading">
        Recent Crochet Projects
      </Typography>
      <Grid container spacing={7}>
        <Grid item xs={12} md={12} lg={4}>
          <C2CPillow />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Scrubbies />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Border />
        </Grid>
      </Grid>
    </>
  );
};

const C2CPillow = () => {
  return (
    <Card variant="outlined">
      <CardMedia sx={{ height: 200 }} image={PillowPic} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          C2C Crochet Pillow
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I've recently learned a new crochet technique called C2C, or corner to
          corner crochet. This was my first C2C crochet project, which I chose
          because it's quicker than the typical C2C afghan or blanket. I used
          green yarn to match our couch blankets, and I'm sure it'll look really
          cute in the living room once I actually get around to sewing the back
          and front together!
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href="https://makeanddocrew.com/corner-to-corner-crochet-pillow-free-pattern/"
          target="new"
        >
          Check it out!
        </Button>
      </CardActions>
    </Card>
  );
};

const Scrubbies = () => {
  return (
    <Card variant="outlined">
      <CardMedia sx={{ height: 200 }} image={ScrubbiesPic} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kitchen Scrubbies
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The minute I saw this yarn, I knew I had to make something with it.
          Unlike most yarns, which are soft, this one is actually scratchy and
          is meant for making kitchen scrubbies. I found a cute pattern for
          flower scrubbies and made 3 colored ones for the kitchen (for milchig,
          fleishig and parve of course). They add a colorful touch to our
          kitchen sinks and they work great for cleaning counters!
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href="https://www.michaels.com/product/red-heart-scrubby-yarn-prints-10472947?michaelsStore=1276&inv=2"
          target="new"
        >
          Yarn
        </Button>
        <Button
          size="small"
          href="https://www.yarnspirations.com/red-heart-fancy-flower-scrubber/RHC0512-018285M.html"
          target="new"
        >
          Pattern
        </Button>
      </CardActions>
    </Card>
  );
};

const Border = () => {
  return (
    <Card variant="outlined">
      <CardMedia sx={{ height: 200 }} image={BorderPic} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Candy Cane Border
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I haven't yet used this edging in a project, but I discovered it a
          while ago and had a lot of fun playing around with it. It's easy to
          add to any straight edge and you can switch up the colors and stitch
          length to create your own unique variation.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href="https://www.nickishomemadecrafts.com/crochet-candy-cane-border/"
          target="new"
        >
          Tutorial
        </Button>
      </CardActions>
    </Card>
  );
};

export default function App() {
  return (
    <div className="App">
      <SplashScreen />
      <div class="page-content">
        <AboutMe />
        <BakingSection />
        <CrochetSection />
      </div>
    </div>
  );
}
