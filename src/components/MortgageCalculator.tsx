'use client';

import React, { useState, useEffect } from 'react';
import Select from './Select';

interface MortgageCalculatorProps {
    defaultPrice?: number;
    compact?: boolean;
}

export default function MortgageCalculator({ defaultPrice = 500000, compact = false }: MortgageCalculatorProps) {
    const [homePrice, setHomePrice] = useState(defaultPrice);
    const [downPayment, setDownPayment] = useState(defaultPrice * 0.2);
    const [loanTerm, setLoanTerm] = useState(30);
    const [interestRate, setInterestRate] = useState(6.5);
    const [propertyTax, setPropertyTax] = useState(3000);
    const [homeInsurance, setHomeInsurance] = useState(1200);
    const [hoaFees, setHoaFees] = useState(0);
    const [pmi, setPmi] = useState(0);

    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [principalAndInterest, setPrincipalAndInterest] = useState(0);
    const [monthlyTax, setMonthlyTax] = useState(0);
    const [monthlyInsurance, setMonthlyInsurance] = useState(0);
    const [monthlyHoa, setMonthlyHoa] = useState(0);
    const [monthlyPmi, setMonthlyPmi] = useState(0);

    useEffect(() => {
        calculateMortgage();
    }, [homePrice, downPayment, loanTerm, interestRate, propertyTax, homeInsurance, hoaFees, pmi]);

    const calculateMortgage = () => {
        const principal = homePrice - downPayment;
        const monthlyRate = interestRate / 100 / 12;
        const numberOfPayments = loanTerm * 12;

        // Calculate monthly principal + interest
        let pi = 0;
        if (monthlyRate === 0) {
            pi = principal / numberOfPayments;
        } else {
            pi = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        }

        const tax = propertyTax / 12;
        const insurance = homeInsurance / 12;
        const hoa = hoaFees;
        const pmiMonthly = downPayment < homePrice * 0.2 ? pmi : 0;

        setPrincipalAndInterest(pi);
        setMonthlyTax(tax);
        setMonthlyInsurance(insurance);
        setMonthlyHoa(hoa);
        setMonthlyPmi(pmiMonthly);
        setMonthlyPayment(pi + tax + insurance + hoa + pmiMonthly);
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    const downPaymentPercent = ((downPayment / homePrice) * 100).toFixed(1);
    const loanAmount = homePrice - downPayment;

    if (compact) {
        return (
            <div className="bg-[rgb(var(--color-neutral-50))] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[rgb(var(--color-neutral-900))] mb-4">Quick Estimate</h3>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                            Home Price: {formatCurrency(homePrice)}
                        </label>
                        <input
                            type="range"
                            min="100000"
                            max="2000000"
                            step="10000"
                            value={homePrice}
                            onChange={(e) => setHomePrice(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                            Down Payment: {formatCurrency(downPayment)} ({downPaymentPercent}%)
                        </label>
                        <input
                            type="range"
                            min="0"
                            max={homePrice * 0.5}
                            step="5000"
                            value={downPayment}
                            onChange={(e) => setDownPayment(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>

                    <div className="pt-4 border-t border-[rgb(var(--color-neutral-200))]">
                        <div className="text-center">
                            <div className="text-sm text-[rgb(var(--color-neutral-600))] mb-1">Estimated Monthly Payment</div>
                            <div className="text-3xl font-bold text-[rgb(var(--color-primary-700))]" style={{ fontFamily: 'var(--font-mono)' }}>
                                {formatCurrency(monthlyPayment)}
                                <span className="text-sm font-normal text-[rgb(var(--color-neutral-600))]">/mo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[rgb(var(--color-neutral-900))] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                Mortgage Calculator
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Fields */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                            Home Price
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--color-neutral-500))]">$</span>
                            <input
                                type="number"
                                value={homePrice}
                                onChange={(e) => setHomePrice(Number(e.target.value))}
                                className="w-full pl-8 pr-4 py-3 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                            Down Payment: {formatCurrency(downPayment)} ({downPaymentPercent}%)
                        </label>
                        <input
                            type="range"
                            min="0"
                            max={homePrice * 0.5}
                            step="5000"
                            value={downPayment}
                            onChange={(e) => setDownPayment(Number(e.target.value))}
                            className="w-full h-2 bg-[rgb(var(--color-neutral-200))] rounded-lg appearance-none cursor-pointer accent-[rgb(var(--color-primary-500))]"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                Loan Term (years)
                            </label>
                            <Select
                                value={loanTerm}
                                onChange={(val) => setLoanTerm(Number(val))}
                                options={[
                                    { value: 15, label: '15 years' },
                                    { value: 20, label: '20 years' },
                                    { value: 30, label: '30 years' }
                                ]}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                Interest Rate (%)
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                            Annual Property Tax
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--color-neutral-500))]">$</span>
                            <input
                                type="number"
                                value={propertyTax}
                                onChange={(e) => setPropertyTax(Number(e.target.value))}
                                className="w-full pl-8 pr-4 py-3 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                            Annual Home Insurance
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--color-neutral-500))]">$</span>
                            <input
                                type="number"
                                value={homeInsurance}
                                onChange={(e) => setHomeInsurance(Number(e.target.value))}
                                className="w-full pl-8 pr-4 py-3 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                            Monthly HOA Fees
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--color-neutral-500))]">$</span>
                            <input
                                type="number"
                                value={hoaFees}
                                onChange={(e) => setHoaFees(Number(e.target.value))}
                                className="w-full pl-8 pr-4 py-3 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all"
                            />
                        </div>
                    </div>

                    {downPayment < homePrice * 0.2 && (
                        <div>
                            <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                Monthly PMI
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--color-neutral-500))]">$</span>
                                <input
                                    type="number"
                                    value={pmi}
                                    onChange={(e) => setPmi(Number(e.target.value))}
                                    className="w-full pl-8 pr-4 py-3 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all"
                                />
                            </div>
                            <p className="text-xs text-[rgb(var(--color-neutral-500))] mt-1">
                                PMI typically required with less than 20% down
                            </p>
                        </div>
                    )}
                </div>

                {/* Results */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-700))] rounded-2xl p-8 text-white">
                        <h3 className="text-lg font-medium mb-2 opacity-90">Monthly Payment</h3>
                        <div className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                            {formatCurrency(monthlyPayment)}
                        </div>
                        <div className="text-sm opacity-75">
                            Loan Amount: {formatCurrency(loanAmount)}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold text-[rgb(var(--color-neutral-900))]">Payment Breakdown</h4>

                        <div className="flex items-center justify-between py-3 border-b border-[rgb(var(--color-neutral-200))]">
                            <span className="text-[rgb(var(--color-neutral-700))]">Principal & Interest</span>
                            <span className="font-semibold text-[rgb(var(--color-neutral-900))]">
                                {formatCurrency(principalAndInterest)}
                            </span>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-[rgb(var(--color-neutral-200))]">
                            <span className="text-[rgb(var(--color-neutral-700))]">Property Tax</span>
                            <span className="font-semibold text-[rgb(var(--color-neutral-900))]">
                                {formatCurrency(monthlyTax)}
                            </span>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-[rgb(var(--color-neutral-200))]">
                            <span className="text-[rgb(var(--color-neutral-700))]">Home Insurance</span>
                            <span className="font-semibold text-[rgb(var(--color-neutral-900))]">
                                {formatCurrency(monthlyInsurance)}
                            </span>
                        </div>

                        {monthlyHoa > 0 && (
                            <div className="flex items-center justify-between py-3 border-b border-[rgb(var(--color-neutral-200))]">
                                <span className="text-[rgb(var(--color-neutral-700))]">HOA Fees</span>
                                <span className="font-semibold text-[rgb(var(--color-neutral-900))]">
                                    {formatCurrency(monthlyHoa)}
                                </span>
                            </div>
                        )}

                        {monthlyPmi > 0 && (
                            <div className="flex items-center justify-between py-3 border-b border-[rgb(var(--color-neutral-200))]">
                                <span className="text-[rgb(var(--color-neutral-700))]">PMI</span>
                                <span className="font-semibold text-[rgb(var(--color-neutral-900))]">
                                    {formatCurrency(monthlyPmi)}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="bg-[rgb(var(--color-neutral-50))] rounded-xl p-6">
                        <h4 className="font-semibold text-[rgb(var(--color-neutral-900))] mb-4">Loan Summary</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-[rgb(var(--color-neutral-600))]">Total Loan Amount:</span>
                                <span className="font-medium">{formatCurrency(loanAmount)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[rgb(var(--color-neutral-600))]">Down Payment:</span>
                                <span className="font-medium">{formatCurrency(downPayment)} ({downPaymentPercent}%)</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[rgb(var(--color-neutral-600))]">Total Payments:</span>
                                <span className="font-medium">{formatCurrency(monthlyPayment * loanTerm * 12)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[rgb(var(--color-neutral-600))]">Total Interest:</span>
                                <span className="font-medium">{formatCurrency((principalAndInterest * loanTerm * 12) - loanAmount)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
