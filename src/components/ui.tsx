import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function Button({ children, onClick, className = '' }: { children: ReactNode, onClick?: () => void, className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-[#E954A2] hover:bg-[#D03B8A] text-white font-bold py-4 px-6 rounded-xl shadow-[0_4px_14px_0_rgba(233,84,162,0.39)] transform transition-all active:scale-95 text-lg uppercase tracking-wide flex justify-center items-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
}

export function OptionButton({ children, onClick, selected, key }: { children: ReactNode, onClick: () => void, selected?: boolean, key?: string | number }) {
  return (
    <button
      key={key}
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${selected ? 'border-[#E954A2] bg-pink-50' : 'border-gray-200 bg-white hover:border-pink-300'} text-gray-800 font-medium text-lg shadow-sm flex items-center gap-3`}
    >
      {children}
    </button>
  );
}

export function StepWrapper({ children, key }: { children: ReactNode, key?: string | number }) {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto flex flex-col min-h-[100dvh] bg-white shadow-2xl relative overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
}

export function ProgressBar({ current, total }: { current: number, total: number }) {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));
  return (
    <div className="w-full bg-gray-100 h-2 sticky top-0 z-50">
      <div 
        className="bg-[#E954A2] h-2 transition-all duration-500 ease-out" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export function Header() {
  return (
    <div className="py-4 text-center border-b border-gray-100">
      <h1 className="text-[#E954A2] font-black text-2xl tracking-tighter flex items-center justify-center gap-2">
        <span className="text-black">BUMBUM</span> SEXY
      </h1>
    </div>
  );
}
