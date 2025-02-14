'use client';
import HeroSection from '@/pages/HeroSection';
import HowItWork from '@/pages/HowItWork';
import { useSession, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <main className="flex flex-col py-2 bg-gray-100">
      {/* Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button> */}
      <HeroSection />
      <HowItWork />
    </main>
  );
}
