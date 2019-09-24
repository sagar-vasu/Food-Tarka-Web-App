import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const ButtonPage = (props) => {
  return (
    <Fragment>
      {/* <MDBBtn color="elegant">Elegant</MDBBtn>
      <MDBBtn color="pink">Pink</MDBBtn>
      <MDBBtn color="purple">Purple</MDBBtn>
      <MDBBtn color="deep-purple">Deep-purple</MDBBtn>
      <MDBBtn color="indigo">Indigo</MDBBtn>
      <MDBBtn color="light-blue">Light blue</MDBBtn>
      <MDBBtn color="cyan">Cyan</MDBBtn>
      <MDBBtn color="dark-green">Dark-green</MDBBtn>
      <MDBBtn color="light-green">Light-green</MDBBtn>
      <MDBBtn color="yellow">Yellow</MDBBtn>
      <MDBBtn color="amber">Amber</MDBBtn>
      <MDBBtn color="deep-orange">Deep-orange</MDBBtn>
      <MDBBtn color="brown">Brown</MDBBtn>
    <MDBBtn color="blue-grey">Blue-grey</MDBBtn> */}
      {/* <MDBBtn color="mdb-color">MDB</MDBBtn> */}

      {/* unique */}

    <MDBBtn disabled={props.disabled} onClick={()=>props.click()} size={props.size} className={props.className} color={props.color}>{props.children}</MDBBtn>
    
    </Fragment>
  );
}

export default ButtonPage;