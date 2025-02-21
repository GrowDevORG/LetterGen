import ResultClient from '@/components/result-client';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { FormProvider } from '@/context/formcontext';

const Page = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <FormProvider>
      <ResultClient session={session} />
    </FormProvider>
  );
};

export default Page;
