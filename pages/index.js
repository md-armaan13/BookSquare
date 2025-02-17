import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


export default function Home() {
  return (
    <div>
      <Head>
        <title>BookSqre</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='BookSqre'
      
      message='A platform where you can buy any book with the security of blockchain.' />
      <Slider slides={SliderData} />
      <Instagram />
      
    </div>
  );
}
// 'BookSqre'
