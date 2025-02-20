import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import HeroSection from '@/pages/HeroSection';
import HowItWork from '@/pages/HowItWork';
import InfoPage from '@/pages/InfoPage';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

export default async function Home() {
  const session = await getServerSession();
  const status = session ? 'authenticated' : 'unauthenticated';

  if (session) {
    redirect('/dashboard');
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
      <ToastContainer />
    </main>
  );
}
