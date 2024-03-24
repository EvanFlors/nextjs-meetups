import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const URI =
  "mongodb+srv://admin:nomelase@test.ivpvtnq.mongodb.net/?retryWrites=true&w=majority&appName=Test";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "My First MeetUp",
//     image: "https://dhavalilama.com/wp-content/uploads/2019/02/IMG_0511.jpg",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second MeetUp",
//     image:
//       "https://cdn.shopify.com/s/files/1/0343/5246/3917/files/GINAYEOLANDSCAPE-4-768x512.jpg",
//     address: "Some address 5, 12345 Some City",
//     description: "Another meetup!",
//   },
//   {
//     id: "m3",
//     title: "My Last MeetUp",
//     image:
//       "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
//     address: "Some address 5, 12345 Some City",
//     description: "Last meetup!",
//   },
// ];


function HomePage(props) {
    return(
      <>
        <Head>
          <title>React Meetups</title>
          <meta 
            name="description"
            content="Browse a huge list of highly active React meetups!"
          />
        </Head>
        <MeetupList meetups={props.meetups} />
      </>
    );
}

// export async function getServerSideProps(context) {

//     const req = context.req;
//     const res = context.res;

//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {

  const client = await MongoClient.connect(URI);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close()
  
  return {
      props: {
          meetups: meetups.map(meetup => ({
            title: meetup.title,
            address: meetup.address,
            image: meetup.image,
            id: meetup._id.toString()
          }))
      },
      revalidate: 1
  };
}

export default HomePage;