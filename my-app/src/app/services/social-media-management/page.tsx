import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Grid3X3,
  Instagram,
  TrendingUp,
  UserSquare2,
  UsersRound,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { BreadcrumbListSchema, ServiceSchema } from '@/components/JsonLd';

type SocialTile = {
  image?: string;
  alt?: string;
  label?: string;
  className?: string;
};

type InstagramProfile = {
  username: string;
  avatar: string;
  avatarClassName: string;
  posts: string;
  followers: string;
  following: string;
  category: string;
  url: string;
  tiles: SocialTile[];
};

const lucentInstagramUrl =
  'https://www.instagram.com/lucent_garb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

const lucentTiles: SocialTile[] = [
  { image: '/social/lucent-1.webp', alt: 'Lucent Wear black graphic t-shirt campaign post' },
  { image: '/social/lucent-2.webp', alt: 'Lucent Wear white t-shirt campaign post' },
  { image: '/social/lucent-3.webp', alt: 'Lucent Wear brand logo post' },
  { image: '/social/lucent-4.webp', alt: 'Lucent Wear red backdrop lifestyle post' },
  { image: '/social/lucent-5.webp', alt: 'Lucent Wear carousel reel post' },
  { image: '/social/lucent-6.webp', alt: 'Lucent Wear black t-shirt product post' },
  { image: '/social/lucent-2.webp', alt: 'Lucent Wear attitude campaign post' },
  { image: '/social/lucent-1.webp', alt: 'Lucent Wear streetwear model post' },
  { image: '/social/lucent-4.webp', alt: 'Lucent Wear lifestyle apparel post' },
];

const restaurantTiles: SocialTile[] = [
  { label: 'Weekend\nMenu', className: 'bg-[#382a20] text-[#f9e6c8]' },
  { label: 'Chef\nPlating', className: 'bg-gradient-to-br from-[#0f3027] via-[#2f5b48] to-[#dfad74] text-white' },
  { label: 'Table\nStory', className: 'bg-[#ead6bd] text-[#573723]' },
  { label: 'Reserve\nToday', className: 'bg-[#673d2b] text-[#ffe9c9]' },
  { label: 'Fresh\nLaunch', className: 'bg-gradient-to-br from-[#ffe0b7] to-[#f47b57] text-[#552b1d]' },
  { label: 'Taste\nReel', className: 'bg-[#201713] text-[#f4d5a8]' },
  { label: 'Dessert\nDrop', className: 'bg-[#7b2f38] text-white' },
  { label: 'Private\nDining', className: 'bg-[#e9c69f] text-[#2d1d18]' },
  { label: 'Guest\nMoments', className: 'bg-[#27392d] text-[#f7e9c9]' },
];

const realtyTiles: SocialTile[] = [
  { label: 'Which Roof\nAre You\nChoosing?', className: 'bg-[#26384a] text-[#ffe88a]' },
  { label: 'Home\nThat Reflects\nYour Lifestyle', className: 'bg-gradient-to-br from-[#516d81] to-[#a9c2cf] text-white' },
  { label: 'Luxury\nListing', className: 'bg-[#d5c4ae] text-[#26384a]' },
  { label: 'Building More\nThan Just\nStructures', className: 'bg-[#152435] text-white' },
  { label: 'Modern\nElevation', className: 'bg-[#a4b4bd] text-[#182435]' },
  { label: 'Crafting Spaces\nCreating\nLegacies', className: 'bg-[#233243] text-[#f4efe8]' },
  { label: 'Site\nUpdate', className: 'bg-[#c7d5d9] text-[#1b2d38]' },
  { label: 'Villa\nTour', className: 'bg-[#d6c9ba] text-[#26384a]' },
  { label: 'Evening\nFacade', className: 'bg-[#172334] text-[#f5d7a6]' },
];

const profiles: InstagramProfile[] = [
  {
    username: 'lucent_garb',
    avatar: 'LUCENT',
    avatarClassName: 'bg-black text-white',
    posts: '18',
    followers: 'New',
    following: '4',
    category: 'Streetwear | Apparel | Brand Content',
    url: lucentInstagramUrl,
    tiles: lucentTiles,
  },
  {
    username: 'visitalora',
    avatar: 'ALORA',
    avatarClassName: 'bg-[#06391e] text-[#f7ead5]',
    posts: '712',
    followers: '34.6K',
    following: '120',
    category: 'Restaurant | Culinary Experience',
    url: 'https://www.instagram.com/',
    tiles: restaurantTiles,
  },
  {
    username: 'alliance.group',
    avatar: 'ALLIANCE',
    avatarClassName: 'bg-[#162c61] text-white',
    posts: '389',
    followers: '17.3K',
    following: '76',
    category: 'Real Estate | Architecture | Lifestyle',
    url: 'https://www.instagram.com/',
    tiles: realtyTiles,
  },
];

const features = [
  'Strategic Content Planning',
  'Premium Visual Design',
  'Reel & Carousel Creation',
  'Community Management',
  'Growth Analytics',
  'Lead Generation Campaigns',
];

const brandLogos = [
  'LUCENT WEAR',
  'CYAZA',
  'ALORA',
  'ALLIANCE GROUP',
  'RIVIERA REALTY',
  'THE HOUSE OF RARE',
];

export const metadata: Metadata = {
  title: 'Social Media Management Services | IgniteX',
  description:
    'Social media management services for brands that need premium Instagram content, reels, carousels, community management, and growth-focused campaigns.',
  keywords: [
    'social media management',
    'instagram marketing agency',
    'social media marketing Jamshedpur',
    'instagram content creation',
    'reel creation services',
    'brand social media strategy',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/services/social-media-management',
  },
  openGraph: {
    title: 'Social Media Management Services | IgniteX',
    description:
      'Premium social media strategy, Instagram content, reels, carousels, and growth campaigns for ambitious brands.',
    url: 'https://www.ignitexsolution.com/services/social-media-management',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IgniteX Social Media Management Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management Services | IgniteX',
    description:
      'Premium Instagram content, reels, carousels, community management, and growth campaigns.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

function InstagramProfileCard({
  profile,
  className,
  priority = false,
}: {
  profile: InstagramProfile;
  className: string;
  priority?: boolean;
}) {
  return (
    <a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${profile.username} on Instagram`}
      className={`group/profile relative block overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_34px_90px_rgba(15,23,42,0.2)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-500/25 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-5 top-5 z-20 flex justify-end opacity-0 transition-opacity duration-300 group-hover/profile:opacity-100 group-focus-visible/profile:opacity-100">
        <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-red-600/25">
          Visit Instagram
          <ExternalLink className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="p-6 pb-4">
        <div className="flex items-center gap-5">
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-[11px] font-bold tracking-wide ${profile.avatarClassName}`}
          >
            {profile.avatar}
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="truncate text-[13px] font-extrabold text-slate-950">
                {profile.username}
              </span>
              <BadgeCheck className="h-4 w-4 fill-sky-500 text-white" />
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <ProfileStat value={profile.posts} label="Posts" />
              <ProfileStat value={profile.followers} label="Followers" />
              <ProfileStat value={profile.following} label="Following" />
            </div>
          </div>
        </div>
        <p className="mt-4 truncate text-xs font-medium text-slate-500">
          {profile.category}
        </p>
      </div>

      <div className="grid grid-cols-3 border-y border-slate-100 px-8 py-3 text-slate-400">
        <Grid3X3 className="mx-auto h-4 w-4 text-slate-950" />
        <Instagram className="mx-auto h-4 w-4" />
        <UserSquare2 className="mx-auto h-4 w-4" />
      </div>

      <div className="grid grid-cols-3 gap-px bg-white p-2 pt-2">
        {profile.tiles.map((tile, index) => (
          <div
            key={`${profile.username}-${index}`}
            className={`relative aspect-square overflow-hidden bg-slate-100 ${tile.className ?? ''}`}
          >
            {tile.image ? (
              <Image
                src={tile.image}
                alt={tile.alt ?? `${profile.username} social media post`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 29vw, 132px"
                priority={priority && index < 3}
              />
            ) : (
              <div className="flex h-full w-full items-end p-3">
                <span className="whitespace-pre-line text-[10px] font-black uppercase leading-tight tracking-wide drop-shadow-sm">
                  {tile.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </a>
  );
}

function ProfileStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-[13px] font-extrabold leading-none text-slate-950">{value}</div>
      <div className="mt-1 text-[9px] font-medium leading-none text-slate-500">{label}</div>
    </div>
  );
}

export default function SocialMediaManagementPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Services', url: 'https://www.ignitexsolution.com/services' },
          {
            name: 'Social Media Management',
            url: 'https://www.ignitexsolution.com/services/social-media-management',
          },
        ]}
      />
      <ServiceSchema
        name="Social Media Management Services"
        description="Premium social media management services for Instagram-first brands, including content planning, reels, carousels, community management, analytics, and growth campaigns."
        url="https://www.ignitexsolution.com/services/social-media-management"
      />

      <main className="min-h-screen bg-[#f8fafc] text-slate-950">
        <Navbar />

        <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-0 lg:pt-32">
          <div className="absolute inset-x-0 top-20 h-px bg-slate-200/80" />
          <div className="mx-auto grid max-w-[1380px] items-start gap-12 lg:grid-cols-[0.72fr_1.58fr]">
            <div className="relative z-10 lg:pt-2">
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.28em] text-red-600">
                Digital Marketing
              </p>
              <h1
                className="max-w-[430px] text-4xl font-black leading-[1.12] tracking-normal text-slate-950 sm:text-[46px]"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Social Media That Builds Brands
              </h1>
              <p className="mt-7 max-w-lg text-lg font-medium leading-8 text-slate-600">
                We craft visually stunning content and data-driven strategies that grow your
                audience, build trust, and drive real business results.
              </p>

              <Link
                href="#instagram-profiles"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-500/25"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-10 space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-base font-semibold text-slate-800">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-red-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid max-w-md grid-cols-3 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.1)]">
                <Metric icon={<BarChart3 className="h-5 w-5" />} value="150M+" label="Reach Generated" />
                <Metric icon={<UsersRound className="h-5 w-5" />} value="50+" label="Brands Managed" />
                <Metric icon={<TrendingUp className="h-5 w-5" />} value="4.8x" label="Avg. Engagement Growth" />
              </div>
            </div>

            <div id="instagram-profiles" className="relative mx-auto min-h-[1060px] w-full max-w-[860px] scroll-mt-28 sm:min-h-[1180px] lg:min-h-[720px]">
              <div className="absolute left-[6%] top-[46%] hidden h-48 w-80 rounded-[50%] border border-dashed border-red-200 lg:block" />
              <InstagramProfileCard
                profile={profiles[0]}
                className="relative z-20 mx-auto w-full max-w-[370px] lg:absolute lg:left-0 lg:top-0"
                priority
              />
              <InstagramProfileCard
                profile={profiles[1]}
                className="relative z-30 mx-auto mt-7 w-full max-w-[340px] lg:absolute lg:left-[300px] lg:top-[132px] lg:mt-0"
              />
              <InstagramProfileCard
                profile={profiles[2]}
                className="relative z-40 mx-auto mt-7 w-full max-w-[340px] lg:absolute lg:right-0 lg:top-[265px] lg:mt-0"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/80 bg-white px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm font-semibold text-slate-500">
              Trusted by ambitious brands across industries
            </p>
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 text-slate-400 sm:grid-cols-3 lg:grid-cols-6">
              {brandLogos.map((brand) => (
                <div key={brand} className="text-center text-sm font-bold uppercase tracking-[0.18em]">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <h2
              className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Ready to turn your Instagram into a growth channel?
            </h2>
            <p className="max-w-2xl text-base font-medium leading-7 text-slate-600">
              Share your brand goals with us and we will map the content system, posting
              calendar, and campaign plan your audience needs to see.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-slate-950 px-7 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function Metric({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="border-r border-slate-100 p-5 last:border-r-0">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600">
        {icon}
      </div>
      <div className="text-3xl font-black leading-none text-red-600">{value}</div>
      <div className="mt-2 text-xs font-semibold leading-snug text-slate-600">{label}</div>
    </div>
  );
}
