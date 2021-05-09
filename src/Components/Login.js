import React ,{useState,useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {fetchToken} from "../Actions"
import {useHistory} from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const classes = useStyles();
    const [usernameState , setUsernameState] =useState('')
    const [passwordState , setPasswordState] =useState('')
    // const [apiFetchState , setApiFetchState] =useState(false)

    const token = useSelector(state => state.loginApi.token)
    const isLoginRedux = useSelector(state => state.loginApi.isLogin)

    const dispatch = useDispatch()

    const history = useHistory()


    useEffect(() => {
        console.log("Login , isLoginRedux is :" , isLoginRedux)
        if (isLoginRedux){
            history.push('/')
        }
    } ,[isLoginRedux])


    useEffect(() => {
        console.log("Login , token is :" , token)
        if (token){
            history.push('/')
        }
    } ,[token])



    // const handleInputChange = (event) => {
    //
    //     if (event.target.type ==="submit" ){
    //         event.preventDefault()
    //         if (usernameState != '' & passwordState != ''){
    //
    //
    //             dispatch(fetchToken(usernameState, passwordState))
    //
    //
    //         }
    //         console.log("Event type is Submit Button")
    //
    //     }
    //     else
    //     {
    //         console.log("Event type is text input ")
    //         if (event.target.name === "username"){
    //             setUsernameState(event.target.value)
    //         }
    //         else if (event.target.name === "password")
    //         {
    //             setPasswordState(event.target.value)
    //         }
    //     }
    //
    //
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (usernameState != '' & passwordState != ''){

            dispatch(fetchToken(usernameState, passwordState))


        }
        console.log("Event type is Submit Button")
    }

    const handleInputChange = (event) => {
        console.log("Event type is text input ")
        if (event.target.name === "username"){
            setUsernameState(event.target.value)
        }
        else if (event.target.name === "password")
        {
            setPasswordState(event.target.value)
        }
    }



    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>


                <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleInputChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        // onClick={handleInputChange}
                    >
                        Login
                    </Button>
                    {/*<Grid container>*/}
                    {/*    <Grid item xs>*/}
                    {/*        <Link href="#" variant="body2">*/}
                    {/*            Forgot password?*/}
                    {/*        </Link>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item>*/}
                    {/*        <Link href="#" variant="body2">*/}
                    {/*            {"Don't have an account? Sign Up"}*/}
                    {/*        </Link>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}