import type { Metadata } from 'next';
import PaymentContent from './PaymentContent';

export const metadata: Metadata = {
  title: 'Pay Securely — oblue AI Automation & Digital Growth',
  description: 'Securely pay for your oblue service package via PhonePe, Google Pay, or any UPI app. Fast setup begins within 24 hours of payment.',
};

export default function PaymentPage() {
  return <PaymentContent />;
}
