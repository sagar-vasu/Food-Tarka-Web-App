import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '../Paper/Paper'
import Button from '../Button/Button'

import { MDBBadge } from 'mdbreact'

const useStyles1 = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        color: "#c270e5"
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 700,
    },
    //   image: {
    //     width: 128,
    //     height: 128,
    //   },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '50%',
        maxHeight: '50%',
    },
}));






function DetailCard(props) {
    const classes = useStyles1();
    return (

        <div style={{ marginTop: '10px' }}>
            <h1 style={{ textAlign: 'center' }}>--{props.catogery}--</h1>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6}>
                            {/* <ButtonBase className={classes.image}> */}
                            <img className={classes.img} alt="complex" src={props.img} />
                            {/* </ButtonBase> */}
                        </Grid>
                        <Grid item xs={12} lg={6} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        <h2>{props.name}</h2>
                                    </Typography>

                                    {
                                        props.tag.map(val => {
                                            return <MDBBadge style={{ marginLeft: '10px' }} color='badge badge-success' >{val}</MDBBadge>
                                        })
                                    }

                                </Grid>
                                <Grid item>
                                    {/* <Typography variant="body2" style={{ cursor: 'pointer',float:"right" }}> */}
                                    <Button>Buy Now</Button>
                                    {/* </Typography> */}

                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">PKR &nbsp; {props.price}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>

        </div>

    )

}
export default DetailCard

