import DashboardPage from '@/components/dashboard-page';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    redirect('/auth');
  }

  return <DashboardPage session={session} />;
}
