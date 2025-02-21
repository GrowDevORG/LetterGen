import ResultClient from '@/components/result-client';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Page = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect('/login');
  }

  return <ResultClient session={session} />;
};

export default Page;
