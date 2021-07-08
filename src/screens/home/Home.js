import React, {Component} from 'react';
import "./Home.css";
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/movieData';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    imageListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    imageListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     },
     title: {
        color: theme.palette.primary.light,
     }

 });
 

class Home extends Component {

    constructor(){
        super();
        this.state = {
            movieName: "",

        }
    }

    movieNameChangeHandler = (event) =>{
        this.setState({movieName:event.target.value});
        
        
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <Header />
                <div className = {classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                <ImageList cols={5} className = {classes.imageListUpcomingMovies}>
                    {moviesData.map(movie => (
                        <ImageListItem key = {movie.id}>
                            <img className = "movie-poster" src= {movie.poster_url} alt = {movie.title}/>
                            <ImageListItemBar title = {movie.title}/>
                        </ImageListItem>
                    ))}
                </ImageList>

                <div className="flex-container">
                    <div className="left">
                        <ImageList rowHeight={350} cols={4} className={classes.imageListMain}>
                            {moviesData.map(movie => (
                                <ImageListItem className="released-movie-imagelist-item" key={"grid" + movie.id}>
                                    <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                                    <ImageListItemBar
                                        title={movie.title}
                                        subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className = {classes.formControl}>
                                    <Typography className = {classes.title} coloe= "textSecondary">
                                        FIND MOVIES BY:
                                    </Typography>
                                </FormControl>
                                <FormControl className = {classes.formControl}>
                                    <InputLabel htmlFor="movieName" > Movie Name </InputLabel>
                                    <Input id = "movieName" onChange = {this.movieNameChangeHandler} />
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}


export default withStyles(styles) (Home);