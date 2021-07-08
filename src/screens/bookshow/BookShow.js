import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "../bookshow/BookShow.css"
import Header from '../../common/header/Header';
import Home from '../home/Home';
import Typography from '@material-ui/core/Typography';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';




class BookShow extends Component {

    constructor(){
        super();
        this.state = {
            location: "",
            language:"",
            showDate:"",
            showTime:""

        }
    }

    backToDetailsHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    locationChangeHandler = (e) =>{
        this.setState({location: e.target.value})
    }

    languageChangeHandler = (e) =>{
        this.setState({language:e.target.value})
    }
    showDateChangeHandler = (e) =>{
        this.setState({showDate: e.target.value})
    }

    showTimeChangeHandler = (e) =>{
        this.setState({showTime: e.target.value})
    }


    render(){
        return(
            <div>
                <Header/>
                <div className="bookShow">
                    <Typography className="back" onClick={this.backToDetailsHandler}>
                        &#60; Back to Movie Details
                    </Typography>
                </div>
                <div>
                    <Card className = "cardStyle">
                        <CardContent>
                            <Typography variant = "headline" component = "h2">BOOK SHOW</Typography><br/>
                            <FormControl required className = "formControl">
                                <InputLabel htmlFor = "location"> Choose Location: </InputLabel>
                                <Select
                                    value = {this.state.location}
                                    onChange = {this.locationChangeHandler}>
                                    {location.map(loc =>(
                                        <MenuItem key = {"loc"+loc.id} value = {loc.location}>{loc.location}</MenuItem>
                                    ))} 
                                </Select>
                            </FormControl><br/><br/>

                            <FormControl required className = "formControl">
                                <InputLabel htmlFor = "language"> Choose Language: </InputLabel>
                                <Select
                                    value = {this.state.language}
                                    onChange = {this.languageChangeHandler}>
                                    {language.map(lang =>(
                                        <MenuItem key = {"lang"+lang.id} value = {lang.language}>{lang.language}</MenuItem>
                                    ))} 
                                </Select>
                            </FormControl><br/><br/>

                            <FormControl required className = "formControl">
                                <InputLabel htmlFor = "showDate"> Choose Show Date: </InputLabel>
                                <Select
                                    value = {this.state.showDate}
                                    onChange = {this.showDateChangeHandler}>
                                    {showDate.map(showdate =>(
                                        <MenuItem key = {"date"+showdate.id} value = {showdate.showDate}>{showdate.showDate}</MenuItem>
                                    ))} 
                                </Select>
                            </FormControl><br/><br/>

                            <FormControl required className = "formControl">
                                <InputLabel htmlFor = "showTime"> Choose Show Time: </InputLabel>
                                <Select
                                    value = {this.state.showTime}
                                    onChange = {this.showTimeChangeHandler}>
                                    {showTime.map(showtime =>(
                                        <MenuItem key = {"showtime"+showtime.id} value = {showtime.showTime}>{showtime.showTime}</MenuItem>
                                    ))} 
                                </Select>
                            </FormControl>




                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BookShow;