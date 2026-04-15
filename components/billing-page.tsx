'use client';

import { CreditCard, TrendingUp, Download, Plus, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatINR, convertToINR } from '@/lib/currency';

const billingHistory = [
  { id: '1', date: '2025-04-01', description: 'Monthly API usage', amountUSD: 145.00, amountINR: convertToINR(145.00), status: 'Paid' },
  { id: '2', date: '2025-03-01', description: 'Monthly API usage', amountUSD: 128.50, amountINR: convertToINR(128.50), status: 'Paid' },
  { id: '3', date: '2025-02-01', description: 'Monthly API usage', amountUSD: 156.75, amountINR: convertToINR(156.75), status: 'Paid' },
  { id: '4', date: '2025-01-01', description: 'Monthly API usage + overage', amountUSD: 189.20, amountINR: convertToINR(189.20), status: 'Paid' },
  { id: '5', date: '2024-12-01', description: 'Monthly API usage', amountUSD: 134.00, amountINR: convertToINR(134.00), status: 'Paid' },
];

const pricingPlans = [
  { name: 'Starter', priceUSD: '$49', priceINR: formatINR(convertToINR(49)), rpm: '10,000', tokens: '1M', support: 'Community' },
  { name: 'Pro', priceUSD: '$149', priceINR: formatINR(convertToINR(149)), rpm: '100,000', tokens: '10M', support: 'Priority Email', current: true },
  { name: 'Enterprise', priceUSD: 'Custom', priceINR: 'Custom', rpm: 'Unlimited', tokens: 'Unlimited', support: '24/7 Phone' },
];

export function BillingPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Billing & Plans</h1>
        <p className="text-muted-foreground text-sm sm:text-base">Manage your subscription and payment methods</p>
      </div>

      {/* Current Plan */}
      <div className="glass-card p-4 sm:p-6 glow-sm space-y-4">
        <div className="flex items-start sm:items-center justify-between gap-3">
          <div>
            <p className="text-muted-foreground text-sm">Current Plan</p>
            <h2 className="text-2xl font-bold text-primary">Pro Plan</h2>
          </div>
          <CreditCard className="w-10 h-10 text-primary opacity-30" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-muted-foreground text-xs">Rate Limit</p>
            <p className="text-lg font-semibold text-white">100K RPM</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs">Tokens/Month</p>
            <p className="text-lg font-semibold text-white">10M</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs">Renewal Date</p>
            <p className="text-lg font-semibold text-white">May 1</p>
          </div>
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 text-background">Upgrade Plan</Button>
      </div>

      {/* Pricing Plans */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Available Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card p-6 glow-sm border-2 transition-all ${
                plan.current ? 'border-primary bg-primary/5' : 'border-primary/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                {plan.current && <CheckCircle className="w-5 h-5 text-primary" />}
              </div>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-1">{plan.priceUSD} / {plan.priceINR}</p>
                <span className="text-3xl font-bold text-primary">{plan.priceINR}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                <p>RPM: {plan.rpm}</p>
                <p>Tokens: {plan.tokens}</p>
                <p>Support: {plan.support}</p>
              </div>
              <Button variant={plan.current ? 'default' : 'outline'} className="w-full">
                {plan.current ? 'Current Plan' : 'Upgrade'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="glass-card p-4 sm:p-6 glow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <h3 className="text-xl font-bold text-white">Billing History</h3>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-muted-foreground border-b border-primary/20">
              <tr>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Description</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((item) => (
                <tr key={item.id} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                  <td className="text-white py-3 px-4">{item.date}</td>
                  <td className="text-muted-foreground py-3 px-4">{item.description}</td>
                  <td className="text-primary font-semibold py-3 px-4">
                    <span className="text-sm text-muted-foreground">${item.amountUSD.toFixed(2)}</span>
                    <br />
                    {formatINR(item.amountINR)}
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
                      <CheckCircle className="w-3 h-3" />
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
