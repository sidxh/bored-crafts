"use client"

import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Confetti from 'react-confetti';
import { FaPaste, FaCopy, FaUndo } from 'react-icons/fa';
import useSound from 'use-sound';

interface CouponRedemptionProps {
  expirationTime?: Date;
}

const couponCodes = ['SUMMER2024', 'FALL2024', 'WINTER2024', 'SPRING2025'];

const CouponRedemption: React.FC<CouponRedemptionProps> = ({ expirationTime }) => {
  const [scratchedPercentage, setScratchedPercentage] = useState(0);
  const [revealedCode, setRevealedCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [couponCode, setCouponCode] = useState('');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scratchCardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const [playSuccessSound] = useSound('/success.mp3');
  const [playFailureSound] = useSound('/failure.mp3');

  useEffect(() => {
    setCouponCode(couponCodes[Math.floor(Math.random() * couponCodes.length)]);
  }, []);

  useEffect(() => {
    if (expirationTime) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = expirationTime.getTime() - now;
        setTimeLeft(Math.max(0, Math.floor(distance / 1000)));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [expirationTime]);

  useEffect(() => {
    if (canvasRef.current && scratchCardRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const scratchCard = scratchCardRef.current;

      canvas.width = scratchCard.offsetWidth;
      canvas.height = scratchCard.offsetHeight;

      if (ctx) {
        ctx.fillStyle = '#C0C0C0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  const handleScratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const rect = canvas.getBoundingClientRect();
      const x = (e as React.MouseEvent).clientX - rect.left;
      const y = (e as React.MouseEvent).clientY - rect.top;

      if (ctx) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
      }

      updateScratchPercentage();
    }
  };

  const updateScratchPercentage = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixelData = imageData.data;
        let transparentPixels = 0;
        for (let i = 3; i < pixelData.length; i += 4) {
          if (pixelData[i] === 0) transparentPixels++;
        }
        const percentage = (transparentPixels / (canvas.width * canvas.height)) * 100;
        setScratchedPercentage(Math.min(100, Math.round(percentage)));
        setRevealedCode(couponCode.slice(0, Math.floor((couponCode.length * percentage) / 100)));
      }
    }
  };

  const handleRevealAll = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setScratchedPercentage(100);
        setRevealedCode(couponCode);
      }
    }
  };

  const handleUndo = () => {
    if (canvasRef.current && scratchCardRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const scratchCard = scratchCardRef.current;

      if (ctx) {
        ctx.fillStyle = '#C0C0C0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setScratchedPercentage(0);
        setRevealedCode('');
      }
    }
  };

  const handleApplyCoupon = async () => {
    setIsValidating(true);
    setValidationMessage('');

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (inputCode === couponCode) {
        setValidationMessage('Coupon applied successfully!');
        setIsSuccess(true);
        controls.start({
          scale: [1, 1.2, 1],
          transition: { duration: 0.3 }
        });
        playSuccessSound();
      } else {
        setValidationMessage('Invalid coupon code. Please try again.');
        setIsSuccess(false);
        playFailureSound();
      }
    } catch (error) {
      setValidationMessage('An error occurred. Please try again later.');
      playFailureSound();
    } finally {
      setIsValidating(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(revealedCode);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-purple-100 to-indigo-200 rounded-lg shadow-2xl overflow-hidden max-w-4xl mx-auto">
      {/* Left Half - Coupon Scratchcard */}
      <motion.div 
        className="w-full md:w-1/2 p-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-indigo-800">Scratch to Reveal Your Code</h2>
        <motion.div 
          className="relative" 
          ref={scratchCardRef}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-indigo-600">
            {revealedCode}
          </div>
          <canvas
            ref={canvasRef}
            className="w-full h-64 cursor-pointer rounded-lg shadow-md"
            onMouseMove={handleScratch}
            onTouchMove={handleScratch}
          />
        </motion.div>
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm font-medium text-indigo-700">{scratchedPercentage}% Scratched</div>
          <div className="space-x-2">
            <motion.button
              className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition"
              onClick={handleRevealAll}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reveal All
            </motion.button>
            <motion.button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition"
              onClick={handleUndo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUndo className="inline mr-1" /> Undo
            </motion.button>
          </div>
        </div>
        {revealedCode && (
          <motion.button
            className="mt-4 flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full hover:bg-indigo-200 transition"
            onClick={handleCopyCode}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCopy className="mr-2" /> Copy Code
          </motion.button>
        )}
        {timeLeft !== null && (
          <div className="mt-4 text-sm text-indigo-600 font-medium">
            Time left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
        )}
      </motion.div>

      {/* Right Half - Apply Coupon Code */}
      <motion.div 
        className="w-full md:w-1/2 p-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-indigo-800">Apply Your Coupon Code</h2>
        <div className="relative">
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            className="w-full px-4 py-3 pr-10 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter coupon code"
          />
          <FaPaste className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-400 cursor-pointer" />
        </div>
        <motion.button
          className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition"
          onClick={handleApplyCoupon}
          disabled={isValidating}
          animate={controls}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isValidating ? 'Validating...' : 'Apply Coupon'}
        </motion.button>
        {validationMessage && (
          <motion.div
            className={`mt-4 p-4 rounded-lg ${
              isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {validationMessage}
          </motion.div>
        )}
      </motion.div>

      {isSuccess && <Confetti />}
    </div>
  );
};

export default CouponRedemption;
