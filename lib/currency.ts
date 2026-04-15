// Currency utilities for INR

export const INR_EXCHANGE_RATE = 83.5; // 1 USD = 83.5 INR (approximate)

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function convertToINR(usdAmount: number): number {
  return Math.round(usdAmount * INR_EXCHANGE_RATE);
}

export function convertFromINR(inrAmount: number): number {
  return Math.round((inrAmount / INR_EXCHANGE_RATE) * 100) / 100;
}

export const PRICING_INR = {
  plans: {
    starter: {
      nameUSD: '$49',
      nameINR: '₹4,071',
      usd: 49,
      inr: convertToINR(49),
      rpm: '10,000',
      tokens: '1M',
      support: 'Community',
    },
    pro: {
      nameUSD: '$149',
      nameINR: '₹12,441',
      usd: 149,
      inr: convertToINR(149),
      rpm: '100,000',
      tokens: '10M',
      support: 'Priority Email',
    },
    enterprise: {
      nameUSD: 'Custom',
      nameINR: 'Custom',
      usd: 0,
      inr: 0,
      rpm: 'Unlimited',
      tokens: 'Unlimited',
      support: '24/7 Phone',
    },
  },
  credits: {
    costPerMillionTokens: convertToINR(0.002), // $0.002 per 1M tokens = 0.167 INR
  },
};
