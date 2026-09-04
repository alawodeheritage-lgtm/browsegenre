'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import MovieRow from './components/MovieRow';
import { moviesByCategory } from './data/movies';

const plans = [
  {
    name: 'Mobile',
    quality: '480p',
    qualityDescription: 'Fair video quality',
    devices: 'For your phone or tablet',
    price: '₦2,500',
  },
  {
    name: 'Basic',
    quality: '720p',
    qualityDescription: 'Good video quality',
    devices: 'For your phone, tablet, laptop and TV',
    price: '₦4,000',
  },
  {
    name: 'Standard',
    quality: '1080p',
    qualityDescription: 'Great video quality',
    devices: 'For your phone, tablet, laptop and TV',
    price: '₦6,500',
  },
  {
    name: 'Premium',
    quality: '4K + HDR',
    qualityDescription: 'Best video quality',
    devices: 'For your phone, tablet, laptop and TV',
    price: '₦8,500',
    audio: 'Immersive sound (spatial audio)',
    popular: true,
  },
];

const footerLinks = [
  'FAQ',
  'Help Center',
  'Account',
  'Media Center',
  'Investor Relations',
  'Jobs',
  'Ways to Watch',
  'Terms of Use',
  'Privacy',
  'Cookie Preferences',
  'Corporate Information',
  'Contact Us',
  'Speed Test',
  'Legal Notices',
  'Only on Netflix',
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [showFloatingTrial, setShowFloatingTrial] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateTrialVisibility = () => {
      const scrollingUp = window.scrollY < lastScrollY;
      const heroVisible = heroRef.current
        ? heroRef.current.getBoundingClientRect().bottom > 0
        : false;

      setShowFloatingTrial(scrollingUp && !heroVisible);
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', updateTrialVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateTrialVisibility);
  }, []);

  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <Navbar />

      <section ref={heroRef} className="relative mx-2 overflow-hidden rounded-t-[24px] rounded-b-[28px] border-x border-t border-white/10 bg-black shadow-[0_30px_60px_rgba(0,0,0,0.6)] md:mx-4">
        <div
          className="absolute inset-x-0 -top-8 bottom-[-26px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.38) 30%, rgba(0,0,0,0.72) 100%), url('/NG-en-20260825-TRIFECTA-perspective_3948f314-bccf-4d0d-8737-b81fbac276e3_large.jpg')",
            backgroundPosition: 'center 18%',
            backgroundSize: 'cover',
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-[-8%] bottom-[-40px] h-[76px] rounded-[50%_50%_0_0/100%_100%_0_0] bg-[#141414] md:bottom-[-42px] md:h-[92px]"
        />

        <div className="relative z-10 flex min-h-[760px] items-end justify-center px-4 pb-24 pt-40 md:px-8">
          <div className="hero-copy w-full max-w-5xl translate-y-16 text-center md:translate-y-20">
            <h1 className="mb-4 text-2xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
              Movies
            </h1>

            <p className="mx-auto mb-6 max-w-3xl text-[18px] text-gray-200">
              Movies move us like nothing else can, whether they're scary, funny,
              dramatic, romantic or anywhere in-between. So many titles, so much to
              experience.
            </p>

            <div className="mb-4 text-1xl font-bold text-white md:text-5xl">
              Endless entertainment starting at ₦2,500
            </div>

            <div className="mb-8 text-sm text-gray-200 md:text-base">
              New members only. Terms below.
            </div>

            <form className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:items-stretch">
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="h-10 w-full max-w-[300px] rounded-full border border-white/20 bg-black/30 px-5 text-base text-white placeholder:text-gray-300 outline-none ring-0 backdrop-blur-sm focus:border-white/40 sm:flex-1 [&:-webkit-autofill]:!bg-transparent [&:-webkit-autofill]:!text-white [&:-webkit-autofill]:!shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0.3)]"
              />
              <button
                type="submit"
                className="h-12 w-full max-w-[220px] rounded-full bg-red-600 px-5 text-base font-semibold text-white transition hover:bg-red-500 sm:w-auto"
              >
                Try 7 days for free
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="relative z-20 mt-16 pb-20">
        <MovieRow title="Your Next Watch" movies={moviesByCategory.trending} />
        <MovieRow title="Hollywood Movies" movies={moviesByCategory.action} />
        <MovieRow title="New on Netflix" movies={moviesByCategory.trending} />
        <MovieRow title="Family Comedy Movies" movies={moviesByCategory.comedy} />
        <MovieRow title="Fantasy Movies" movies={moviesByCategory.trending} />
        <MovieRow title="Comedy Movies" movies={moviesByCategory.comedy} />
        <MovieRow title="Horror Movies" movies={moviesByCategory.drama} />
        <MovieRow title="Action Thriller Movies" movies={moviesByCategory.action} />
        <MovieRow title="Suspenseful Movies" movies={moviesByCategory.drama} />
        <MovieRow title="Action Movies" movies={moviesByCategory.action} />
        <MovieRow title="Action & Adventure Movies" movies={moviesByCategory.action} />
        <MovieRow title="Family Movies" movies={moviesByCategory.comedy} />
        <MovieRow title="Crime Movies" movies={moviesByCategory.action} />
        <MovieRow title="Adventure Movies" movies={moviesByCategory.trending} />
        <MovieRow title="Bollywood Movies" movies={moviesByCategory.drama} />
      </div>

      <section id="plans" className="border-t border-white/10 bg-[#0d0d0d] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-bold text-white md:text-5xl">
            A Plan To Suit Your Needs
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gray-400">
            Choose the plan that works best for your screen, your home, and your
            next great watch.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex min-h-[80px] flex-col rounded-2xl border p-4 ${plan.name === 'Standard' || plan.name === 'Premium'
                  ? 'border-violet-300/60 bg-violet-900/80'
                  : 'border-blue-900/60 bg-slate-800'
                  }`}
              >
                {plan.popular && (
                  <span className="absolute right-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="mb-6 text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-lg font-semibold text-white">{plan.quality}</p>
                <p className="mb-4 text-sm text-gray-400">{plan.qualityDescription}</p>
                {plan.audio && <p className="mb-4 text-sm text-gray-300">{plan.audio}</p>}
                <p className="mt-auto text-sm leading-6 text-gray-300">{plan.devices}</p>
                <p className="mt-5 text-lg font-bold text-white">
                  ₦0 for 7 days
                  <span className="block text-sm font-normal text-gray-400">
                    then {plan.price}/mo
                  </span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#141414] px-4 py-14 text-center md:px-8 md:py-20">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-5xl">
          Discover your next favorites
        </h2>
        <p className="mx-auto mb-4 max-w-2xl text-gray-300">
          Discover your next favorites, plus new releases every week
        </p>
        <p className="text-gray-400">
          Read about Netflix TV shows and movies and watch bonus videos on{' '}
          <a href="https://www.netflix.com/tudum" className="text-white underline hover:text-red-500">
            Tudum.com
          </a>
          .
        </p>
        <a
          href="#plans"
          className="mx-auto mt-8 inline-flex rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-red-500 md:px-8 md:py-4 md:text-base"
        >
          Try 7 Days for ₦0
        </a>
      </section>

      <footer className="border-t border-white/10 bg-black px-4 py-12 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 max-w-2xl text-sm leading-6 text-gray-400">
            This offer is only valid for new members. This offer is non-transferrable.
            You agree that Netflix will charge the membership fee at the end of the
            free trial to your payment method and will automatically continue your
            membership until you cancel. Some methods of payment may not be eligible
            to redeem this offer.
          </p>
          <p className="mb-6 text-sm text-gray-300">Questions? Contact us.</p>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-400 sm:grid-cols-3 md:grid-cols-4">
            {footerLinks.map((link) => (
              <a key={link} href="#" className="underline-offset-4 hover:text-white hover:underline">
                {link}
              </a>
            ))}
          </nav>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <button type="button" className="rounded border border-gray-600 px-3 py-2 text-white hover:border-white">
              English
            </button>
          </div>
        </div>
      </footer>

      <a
        href="#plans"
        aria-hidden={!showFloatingTrial}
        tabIndex={showFloatingTrial ? 0 : -1}
        className={`trial-float fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-red-600 px-5 py-3 text-center text-sm font-bold text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-red-500 md:bottom-8 md:px-6 md:py-4 md:text-base ${showFloatingTrial ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
      >
        Try 7 Days for ₦0
      </a>
    </main>
  );
}