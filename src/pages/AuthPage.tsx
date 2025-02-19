'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { Github, Loader } from 'lucide-react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isloading, setIsloading] = useState<boolean>(false);

  const router = useRouter();

  async function handleLogin() {
    setError('');
    try {
      setIsloading(true);
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError(res.error);
      } else {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#001324] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -rotate-12 bg-blue-600 w-64 h-64 -top-20 -right-16 rounded-3xl" />
        <div className="absolute rotate-12 bg-blue-600 w-96 h-96 -bottom-20 -right-20 rounded-3xl" />
        <div className="absolute bg-blue-600/20 w-64 h-64 bottom-40 left-20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Welcome to{' '}
              <span className="text-blue-600 block md:mt-2">LetterGen</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl hidden md:block">
              We&apos;re excited to see you again! Log in to your account and
              pick up right where you left off. Let our AI tools help you create
              outstanding cover letters and unlock new career opportunities. If
              you&apos;re new here,{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Sign up now
              </a>{' '}
              to get started on your journey toward success!
            </p>
            <p className="text-gray-400 hidden md:block">
              At AI Cover Letter Generator, your privacy is our priority. Rest
              assured that your information is secure and will only be used to
              help you achieve your career goals.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>End to end encryption</span>
              <span className="text-yellow-500">🔒</span>
            </div>
          </div>

          {/* Right Column */}
          <Card className="w-full max-w-md bg-gray-100 mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-black">
                Sign Up
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="email"
                  className="h-12 text-black"
                />
                <Input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="password"
                  className="h-12 text-black"
                />
                <span className="flex justify-center text-red-500">
                  {error}
                </span>
                <Button
                  disabled={isloading}
                  onClick={handleLogin}
                  className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700"
                >
                  {!isloading ? 'Sign up for free' : <Loader />}
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-100 text-muted-foreground">
                    or
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  disabled={isloading}
                  onClick={() => signIn('google')}
                  variant="outline"
                  className="w-full h-12 text-base font-normal text-black bg-gray-100 hover:bg-gray-200 hover:text-black"
                >
                  <Image
                    src="/image/google-logo.png"
                    alt="Google"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Sign In with Google
                </Button>
                <Button
                  disabled={isloading}
                  onClick={() => signIn('github')}
                  variant="outline"
                  className="w-full h-12 text-base font-normal"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Sign In with Github
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
