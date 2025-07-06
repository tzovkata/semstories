import DigitalPhotographyConference from '../src/components/DigitalPhotographyConference';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Photography Conference 2017 | Cincinnati, Ohio</title>
        <meta name="description" content="Join us for the premier Digital Photography Conference featuring top international speakers, workshops, and sessions in Cincinnati, Ohio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <DigitalPhotographyConference />
    </>
  );
}