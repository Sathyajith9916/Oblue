import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About oblue — AI Automation & Digital Growth Agency',
  description: 'Meet the team behind oblue. We are AI integration experts and digital marketers dedicated to transforming businesses through automation and intelligent growth systems.',
};

export default function AboutPage() {
  return <AboutContent />;
}
