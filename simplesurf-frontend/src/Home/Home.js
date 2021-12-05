import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';



const mainFeaturedPost = {
  title: 'Simple Surf',
  description:
    "The ultimate water experience",
  image: 'https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  imageText: 'Simple Surf',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Title1',
    date: 'Todo',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://images.unsplash.com/photo-1513569143478-b38b2c0ef97f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    imageLabel: 'Image Text',
  },
  {
    title: 'Title2',
    date: 'Todo',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://images.unsplash.com/photo-1506797220058-533e019ac7fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    imageLabel: 'Image Text',
  },
];



export default function Home() {
  return (
      <div align="center">
        <Container disableGutters maxWidth="md" component="main" sx={{ pt: 2, pb: 2 }} >
            <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
            </main>
      </Container>
      </div>
      
  );
}