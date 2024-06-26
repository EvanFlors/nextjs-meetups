import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const URI =
  "mongodb+srv://admin:nomelase@test.ivpvtnq.mongodb.net/?retryWrites=true&w=majority&appName=Test";


function MeetupDetailsPage(props) {

    return (
        <>
            <Head>
            <title>{props.meetupData.title}</title>
            <meta 
                name="description"
                content={props.meetupData.description}
            />
            </Head>
            <MeetupDetail 
                image = {props.meetupData.image}
                title = {props.meetupData.title}
                address = {props.meetupData.address}
                description = {props.meetupData.description}
            />
        </>
    );
}

export async function getStaticPaths() {

    const client = await MongoClient.connect(URI);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(URI);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId)
    });

    console.log(selectedMeetup);

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDetailsPage;