import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MDBCard, MDBCardBody, MDBCardUp, MDBRow, MDBCol, MDBIcon, MDBBadge } from 'mdbreact'
import Chip from '../Chip/Chip'
const useStyles = makeStyles({
    card: {
        display: 'inline-block',
        maxWidth: 380,
        marginLeft: '30px',
        marginTop: '10px'
    },
    media: {
        height: 210,

    },
});
function MediaCard(props) {
    const classes = useStyles();

    return (

        <Card className={classes.card} onClick={props.click} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.img}
                    title="Contemplative Reptile"
                    maxWidth='1000px'
                    style={{ width: '300px' }}
                />

        

                    {
                        props.tag.map(val=>{
                            return   <MDBBadge style={{marginLeft:'10px'}} color='badge badge-success' >{val}</MDBBadge>  
                        }) 
                    }

          

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {
                            props.name
                        }
                    </Typography>



                </CardContent>
            </CardActionArea>
        </Card>
    );
}





const AccountCard = (props) => {
    return (
        <MDBRow center>
            <MDBCol md='4'>
                <MDBCard testimonial>
                    <img
                        src={props.certificate}
                        alt=''
                        style={{ maxWidth: '400px', maxHeight: '300px' }}
                    />

                    <MDBCardBody>
                        Name: <span className='card-title' style={{ textAlign: 'right', marginLeft: '33px' }}>{props.name}</span> <br />
                        City: <span className='card-title' style={{ textAlign: 'right', marginLeft: '50px' }}>{props.city}</span>
                        <hr />
                        Email : <span style={{ textAlign: 'right' }}>
                            {props.email}
                        </span>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        </MDBRow>
    )
}

export {
    MediaCard,
    AccountCard
};

