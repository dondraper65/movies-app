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
import FormHelperText from '@material-ui/core/FormHelperText';





class BookShow extends Component {

    constructor(){
        super();
        this.state = {
            location: "",
            locationRequired: "dispNone",
            language:"",
            languageRequired: "dispNone",
            showDate:"",
            showDateRequired: "dispNone",
            showTime:"",
            showTimeRequired: "dispNone",
            tickets: 0,
            ticketsRequired: "dispNone",
            unitPrice: 500,
            availableTickets: 20

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

    ticketsChangeHandler = (e) =>{
        this.setState({tickets:e.target.value})
    }

    bookShowButtonHandler = (e) =>{
        this.state.location === ""? this.setState({locationRequired:'dispBlock'}): this.setState({locationRequired: "dispNone"})
        this.state.language === ""? this.setState({languageRequired:'dispBlock'}): this.setState({languageRequired: "dispNone"})
        this.state.showDate === ""? this.setState({showDateRequired:'dispBlock'}): this.setState({showDateRequired: "dispNone"})
        this.state.showTime === ""? this.setState({showTimeRequired:'dispBlock'}): this.setState({showTimeRequired: "dispNone"})
        this.state.tickets === 0? this.setState({ticketsRequired:'dispBlock'}): this.setState({ticketsRequired: "dispNone"})
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
                                <FormHelperText className ={this.state.locationRequired}><span className ='red'>Required</span></FormHelperText>
                            </FormControl>

                            <FormControl required className = "formControl">
                                <InputLabel htmlFor = "language"> Choose Language: </InputLabel>
                                <Select
                                    value = {this.state.language}
                                    onChange = {this.languageChangeHandler}>
                                    {language.map(lang =>(
                                        <MenuItem key = {"lang"+lang.id} value = {lang.language}>{lang.language}</MenuItem>
                                        
                                    ))} 
                                </Select>
                                <FormHelperText className ={this.state.languageRequired}><span className ='red'>Required</span></FormHelperText>
                            </FormControl>

                            <FormControl required className = "formControl">
                                <InputLabel htmlFor = "showDate"> Choose Show Date: </InputLabel>
                                <Select
                                    value = {this.state.showDate}
                                    onChange = {this.showDateChangeHandler}>
                                    {showDate.map(showdate =>(
                                        <MenuItem key = {"date"+showdate.id} value = {showdate.showDate}>{showdate.showDate}</MenuItem>
                                    ))} 
                                </Select>
                                <FormHelperText className ={this.state.showDateRequired}><span className ='red'>Required</span></FormHelperText>

                            </FormControl>

                            <FormControl required className = "formControl">
                                <InputLabel htmlFor = "showTime"> Choose Show Time: </InputLabel>
                                <Select
                                    value = {this.state.showTime}
                                    onChange = {this.showTimeChangeHandler}>
                                    {showTime.map(showtime =>(
                                        <MenuItem key = {"showtime"+showtime.id} value = {showtime.showTime}>{showtime.showTime}</MenuItem>
                                    ))} 
                                </Select>
                                <FormHelperText className ={this.state.showTimeRequired}><span className ='red'>Required</span></FormHelperText>
                            </FormControl>

                            <FormControl required className = "formControl">
                                <InputLabel htmlFor = "tickets"> Tickets: ({this.state.availableTickets} available)</InputLabel>
                                <Input id = "tickets" value = {this.state.tickets !==0 ? this.state.tickets:""} onChange = {this.ticketsChangeHandler}/>
                                <FormHelperText className ={this.state.ticketsRequired}><span className ='red'>Required</span></FormHelperText>
                            </FormControl><br/><br/>
                            <Typography>
                                Unit Price Rs. {this.state.unitPrice}
                            </Typography><br/>
                            <Typography>
                                Total Price Rs. {this.state.unitPrice * this.state.tickets}
                            </Typography><br/><br/>
                            <Button variant="contained" onClick = {this.bookShowButtonHandler} color= "primary">Book Show</Button>






                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BookShow;