'use client';

import { MessageCircle, BookOpen, AlertCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    q: 'How do I increase my API rate limits?',
    a: 'You can request higher rate limits by upgrading to a higher plan or contacting our support team. Email support@aianalytics.com for custom limits.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and wire transfers for enterprise plans.',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes, you can cancel your subscription anytime. You will have access until the end of your billing cycle.',
  },
  {
    q: 'How are API tokens calculated?',
    a: 'Tokens are counted per 1K tokens used. Each request is billed based on the actual tokens consumed by the model.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'We offer a 7-day money-back guarantee for new subscriptions. Please contact support for refund requests.',
  },
  {
    q: 'How do I report a bug or issue?',
    a: 'You can report bugs through the Help center or by emailing support@aianalytics.com with details about the issue.',
  },
];

const resources = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Comprehensive API documentation and integration guides',
    link: '#',
  },
  {
    icon: MessageCircle,
    title: 'Community Forum',
    description: 'Connect with other users and share solutions',
    link: '#',
  },
  {
    icon: AlertCircle,
    title: 'Status Page',
    description: 'Check API status and recent incident reports',
    link: '#',
  },
];

export function HelpPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Help & Support</h1>
        <p className="text-muted-foreground">Get answers to common questions and find resources</p>
      </div>

      {/* Quick Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="glass-card p-5 sm:p-6 glow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-semibold text-white">Email Support</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">Get help via email within 24 hours</p>
          <Button className="w-full bg-primary hover:bg-primary/90 text-background">
            support@aianalytics.com
          </Button>
        </div>

        <div className="glass-card p-5 sm:p-6 glow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-semibold text-white">Phone Support</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">Priority customers: 24/7 support available</p>
          <Button variant="outline" className="w-full border-primary/20">
            +1 (555) 123-4567
          </Button>
        </div>
      </div>

      {/* Resources */}
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-white mb-6">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <a
                key={resource.title}
                href={resource.link}
                className="glass-card p-6 glow-sm hover:border-primary/40 transition-all group"
              >
                <Icon className="w-6 h-6 text-primary mb-4 group-hover:text-primary/80" />
                <h3 className="font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </a>
            );
          })}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="glass-card p-5 sm:p-6 glow-sm cursor-pointer group"
              open={idx === 0}
            >
              <summary className="flex items-start justify-between font-semibold text-white select-none">
                <span className="text-left pr-4">{faq.q}</span>
                <span className="text-primary shrink-0 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-muted-foreground text-sm mt-4">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
