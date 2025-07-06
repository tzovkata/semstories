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
      
      {/* Debug test - this should show red background */}
      <div style={{backgroundColor: 'red', color: 'white', padding: '20px', textAlign: 'center'}}>
        <h1>DEBUG: If you see this red box, React is working</h1>
      </div>
      
      {/* Tailwind test */}
      <div className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">TAILWIND TEST: This should be blue background</h1>
      </div>
      
      <DigitalPhotographyConference />
    </>
  );
}