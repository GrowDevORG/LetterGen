import DashboardPage from '@/components/dashboard-page';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Dashboard',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    redirect('/auth');
  }

  return <DashboardPage session={session} />;
}
