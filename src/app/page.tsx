'use client';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import HeroSection from '@/pages/HeroSection';
import HowItWork from '@/pages/HowItWork';
import InfoPage from '@/pages/InfoPage';
import { useSession, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <main className="flex flex-col bg-gray-100">
      {/* Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button> */}
      <HeroSection session={session!} status={status} />
      <HowItWork />
      <Divider />
      <InfoPage />
      <Divider />
      <Footer />
    </main>
  );
}
