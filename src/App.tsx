/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  Check, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Home, 
  Star, 
  Percent, 
  Gift, 
  DollarSign, 
  CreditCard, 
  Smartphone, 
  Building2,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const subtotal = 277000;
  
  // State
  const [gstPercent, setGstPercent] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [amountPaid, setAmountPaid] = useState<number>(0);
  const [paymentMode, setPaymentMode] = useState<string>('Cash');
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Derived values
  const gstAmount = subtotal * (gstPercent / 100);
  const afterGST = subtotal + gstAmount;
  const totalDue = Math.max(0, afterGST - discount);
  const balance = Math.max(0, totalDue - amountPaid);

  const formatCurrency = (n: number) => {
    return '₹' + Math.round(n).toLocaleString('en-IN');
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    setTimeout(() => setIsConfirmed(false), 2500);
  };

  return (
    <div className="flex justify-center items-start min-h-screen py-6 sm:py-12 px-4 selection:bg-rose-muted selection:text-rose">
      <div id="phone-container" className="w-full max-w-[390px] bg-surface-2 rounded-3xl shadow-2xl overflow-hidden flex flex-col relative h-[844px]">
        
        {/* Step Header */}
        <header className="bg-surface px-5 pt-4 pb-0 border-b border-border-custom z-20">
          <div className="flex items-center mb-4">
            <button className="flex items-center gap-1 text-[13px] font-medium text-ink-muted hover:text-ink transition-colors cursor-pointer mr-3">
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
            <h1 className="font-serif text-[17px] font-semibold text-ink">Add New Booking</h1>
          </div>

          <div className="flex items-center pb-4 gap-0">
            <div className="flex flex-col items-center flex-1 relative gap-1.5 group">
              <div className="absolute top-[14px] left-1/2 w-full h-[2px] bg-rose-muted z-0"></div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold relative z-10 bg-rose-muted text-rose">
                <Check className="w-[13px] h-[13px]" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-medium text-ink-soft tracking-tight">Event</span>
            </div>
            
            <div className="flex flex-col items-center flex-1 relative gap-1.5 group">
              <div className="absolute top-[14px] left-1/2 w-full h-[2px] bg-rose-muted z-0"></div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold relative z-10 bg-rose-muted text-rose">
                <Check className="w-[13px] h-[13px]" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-medium text-ink-soft tracking-tight">Venue</span>
            </div>

            <div className="flex flex-col items-center flex-1 relative gap-1.5 group">
              <div className="absolute top-[14px] left-1/2 w-full h-[2px] bg-border-custom z-0"></div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold relative z-10 bg-rose-muted text-rose">
                <Check className="w-[13px] h-[13px]" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-medium text-ink-soft tracking-tight">Date & Time</span>
            </div>

            <div className="flex flex-col items-center flex-1 relative gap-1.5 group">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold relative z-10 bg-rose text-white shadow-[0_4px_12px_rgba(232,54,93,0.35)]">
                4
              </div>
              <span className="text-[10px] font-semibold text-rose tracking-tight">Confirm</span>
            </div>
          </div>
        </header>

        {/* Scrollable Body */}
        <main className="overflow-y-auto flex-1 no-scrollbar pb-[120px]">
          
          {/* Hero Summary Card */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="m-4 bg-rose rounded-2xl p-5 relative overflow-hidden"
          >
            {/* Decals */}
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-white/5"></div>

            <div className="flex items-start justify-between mb-3.5 relative z-10">
              <div>
                <p className="text-[10px] font-semibold tracking-[1.2px] uppercase text-white/70 mb-0.5">Booking confirmation</p>
                <h2 className="font-serif text-[22px] font-semibold text-white leading-tight">DGB Convention</h2>
              </div>
              <span className="bg-white/20 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold text-white tracking-widest whitespace-nowrap">
                NX-260412Z9U8
              </span>
            </div>

            <div className="flex gap-2 flex-wrap mb-4 relative z-10">
              <div className="flex items-center gap-1.5 bg-white/15 rounded-lg py-1.5 px-2.5 text-[12px] text-white/90 font-medium">
                <Calendar className="w-3 h-3 text-white/70" />
                12 April 2026
              </div>
              <div className="flex items-center gap-1.5 bg-white/15 rounded-lg py-1.5 px-2.5 text-[12px] text-white/90 font-medium">
                <Clock className="w-3 h-3 text-white/70" />
                3:00 AM – 8:00 PM
              </div>
              <div className="flex items-center gap-1.5 bg-white/15 rounded-lg py-1.5 px-2.5 text-[12px] text-white/90 font-medium">
                <MapPin className="w-3 h-3 text-white/70" />
                Kakinada
              </div>
            </div>

            <div className="h-px bg-white/15 my-3.5 relative z-10"></div>

            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-[10px] text-white/60 font-semibold tracking-wider uppercase mb-0.5">Client</p>
                <p className="text-[15px] font-semibold text-white">Ty</p>
              </div>
              <div className="text-[13px] text-white/75 flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-white/60" />
                335
              </div>
            </div>
          </motion.div>

          {/* Cost Breakdown */}
          <p className="text-[10px] font-semibold tracking-widest uppercase text-ink-muted px-5 pt-4 pb-2">Payment breakdown</p>
          
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-4 bg-surface rounded-xl border border-border-custom overflow-hidden shadow-sm"
          >
            <div className="flex items-center justify-between p-3.5 px-4.5 border-b border-border-soft">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-light flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4 text-blue" />
                </div>
                <div>
                  <p className="text-[13px] text-ink-soft font-medium">Venue cost</p>
                  <p className="text-[11px] text-ink-muted">DGB Convention Hall</p>
                </div>
              </div>
              <span className="text-[14px] font-semibold text-ink">₹2,25,000</span>
            </div>

            <div className="flex items-center justify-between p-3.5 px-4.5 border-b border-border-soft">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-green" />
                </div>
                <div>
                  <p className="text-[13px] text-ink-soft font-medium">Services cost</p>
                  <p className="text-[11px] text-ink-muted">Add-ons & extras</p>
                </div>
              </div>
              <span className="text-[14px] font-semibold text-ink">₹52,000</span>
            </div>

            <div className="bg-surface-2 p-3.5 px-4.5 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-ink">Subtotal</span>
              <span className="font-serif text-[20px] font-semibold text-ink">{formatCurrency(subtotal)}</span>
            </div>
          </motion.div>

          {/* Adjustment Fields */}
          <p className="text-[10px] font-semibold tracking-widest uppercase text-ink-muted px-5 pt-4 pb-2">Adjustments</p>

          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mx-4 bg-surface rounded-xl border border-border-custom overflow-hidden shadow-sm"
          >
            {/* GST Input */}
            <div className="flex items-center justify-between p-3.5 px-4.5 border-b border-border-soft gap-3">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 rounded-lg bg-amber-light flex items-center justify-center shrink-0">
                  <Percent className="w-4 h-4 text-amber" />
                </div>
                <div>
                  <p className="text-[13px] text-ink-soft font-medium">GST</p>
                  <p className="text-[11px] text-ink-muted">
                    {gstPercent > 0 ? `${formatCurrency(gstAmount)} (${gstPercent}% on ${formatCurrency(subtotal)})` : `₹0 on ${formatCurrency(subtotal)}`}
                  </p>
                </div>
              </div>
              <div className="relative">
                <input 
                  type="number"
                  value={gstPercent || ''}
                  onChange={(e) => setGstPercent(Math.max(0, parseInt(e.target.value) || 0))}
                  placeholder="%"
                  className="w-20 h-9.5 border-[1.5px] border-border-custom rounded-lg bg-surface-2 font-sans text-[14px] font-semibold text-ink text-right px-3 focus:border-rose focus:bg-rose-light outline-none transition-all"
                />
              </div>
            </div>

            {/* Discount Input */}
            <div className="flex items-center justify-between p-3.5 px-4.5 border-b border-border-soft gap-3">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 rounded-lg bg-rose-light flex items-center justify-center shrink-0">
                  <Gift className="w-4 h-4 text-rose" />
                </div>
                <div>
                  <p className="text-[13px] text-ink-soft font-medium">Discount</p>
                  <p className="text-[11px] text-ink-muted">
                    {discount > 0 
                      ? `${formatCurrency(discount)} off — saving ${((discount / afterGST) * 100).toFixed(1)}%` 
                      : 'No discount applied'}
                  </p>
                </div>
              </div>
              <input 
                type="number"
                value={discount || ''}
                onChange={(e) => setDiscount(Math.max(0, parseInt(e.target.value) || 0))}
                placeholder="₹"
                className="w-28 h-9.5 border-[1.5px] border-border-custom rounded-lg bg-surface-2 font-sans text-[14px] font-semibold text-ink text-right px-3 focus:border-rose focus:bg-rose-light outline-none transition-all"
              />
            </div>

            {/* Paid Input */}
            <div className="flex items-center justify-between p-3.5 px-4.5 border-b border-border-soft gap-3">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center shrink-0">
                  <DollarSign className="w-4 h-4 text-green" />
                </div>
                <div>
                  <p className="text-[13px] text-ink-soft font-medium">Amount paid</p>
                  <p className="text-[11px] text-ink-muted">Balance: {formatCurrency(totalDue - amountPaid)}</p>
                </div>
              </div>
              <input 
                type="number"
                value={amountPaid || ''}
                onChange={(e) => setAmountPaid(Math.max(0, parseInt(e.target.value) || 0))}
                placeholder="₹"
                className="w-28 h-9.5 border-[1.5px] border-border-custom rounded-lg bg-surface-2 font-sans text-[14px] font-semibold text-ink text-right px-3 focus:border-rose focus:bg-rose-light outline-none transition-all"
              />
            </div>

            {/* Payment Mode */}
            <div className="p-3.5 px-4.5 flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-light flex items-center justify-center shrink-0">
                  <CreditCard className="w-4 h-4 text-blue" />
                </div>
                <p className="text-[13px] text-ink-soft font-medium">Payment mode</p>
              </div>
              <div className="flex gap-1.5">
                {[
                  { id: 'Cash', icon: <DollarSign className="w-3.5 h-3.5" /> },
                  { id: 'Card', icon: <CreditCard className="w-3.5 h-3.5" /> },
                  { id: 'UPI', icon: <Smartphone className="w-3.5 h-3.5" /> },
                  { id: 'Bank', icon: <Building2 className="w-3.5 h-3.5" /> }
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setPaymentMode(mode.id)}
                    className={`flex-1 h-9 flex items-center justify-center gap-1 rounded-lg border-[1.5px] text-[12px] transition-all cursor-pointer ${
                      paymentMode === mode.id 
                        ? 'bg-rose-light border-rose-muted text-rose font-semibold' 
                        : 'bg-surface-2 border-border-custom text-ink-muted font-medium'
                    }`}
                  >
                    {mode.icon}
                    {mode.id}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Total Due Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="m-4 bg-ink rounded-xl p-4.5 flex items-center justify-between shadow-xl"
          >
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-1">Total due</p>
              <h3 className="font-serif text-[28px] font-semibold text-white leading-none">
                {formatCurrency(totalDue)}
              </h3>
              <p className={`text-[11px] mt-1 font-medium ${balance === 0 ? 'text-green' : 'text-white/45'}`}>
                {balance === 0 ? 'Fully paid ✓' : (amountPaid > 0 ? `${formatCurrency(amountPaid)} received · ${formatCurrency(balance)} pending` : 'Full amount pending')}
              </p>
            </div>
            <div className="bg-rose/20 border border-rose/30 rounded-xl p-2 px-3.5 text-center">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-rose-muted mb-0.5">Balance</p>
              <p className="text-[15px] font-semibold text-[#ff8fa8] leading-tight">{formatCurrency(balance)}</p>
            </div>
          </motion.div>

        </main>

        {/* Sticky Action Footer */}
        <div className="absolute bottom-0 left-0 w-full p-5 pb-8 bg-gradient-to-t from-surface-2 via-surface-2 to-transparent z-40">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={handleConfirm}
            className={`w-full h-14 rounded-2xl flex items-center justify-center gap-2 text-white font-semibold text-[16px] tracking-wide shadow-lg transition-all transform duration-300 ${
              isConfirmed ? 'bg-green shadow-green/40' : 'bg-rose shadow-rose/40 hover:-translate-y-0.5'
            }`}
          >
            <AnimatePresence mode="wait">
              {isConfirmed ? (
                <motion.div
                  key="confirmed"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Booking Confirmed!
                </motion.div>
              ) : (
                <motion.div
                  key="book"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Confirm & Book
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

      </div>
    </div>
  );
}
