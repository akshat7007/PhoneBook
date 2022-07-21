import React from "react";
import { connect } from "react-redux";
import { fetchContacts } from "../../src/Actions/contactActions";
import { Card } from "react-bootstrap";
import classes from "./contactList.css";

class ContactList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchContacts());
  }

  render() {
    const { contacts } = this.props;

    // if (error) {
    //   return <div>Error! {error.message}</div>;
    // }

    // if (loading) {
    //   return <div>Loading...</div>;
    // }
    // console.log('contacts : ', contacts);

    // const contactInfo = Object.values(contacts);
    // console.log("contactInfo", contactInfo);

    return (
      <>
        {contacts.map((item) => (
          <Card
            key={item.id}
            style={{ width: "30rem" }}
            className={classes.card}
          >
            <Card.Text >
              {item.first_name} {item.last_name}
            </Card.Text>
            {/* <Card.Text className={classes.contactEmail}>{item.email}</Card.Text> */}
            <Card.Img className={classes.contactPhoto} src={item.avatar} />
          </Card>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  // loading: state.contacts.loading,
  // error: state.contacts.error,
});

export default connect(mapStateToProps)(ContactList);
