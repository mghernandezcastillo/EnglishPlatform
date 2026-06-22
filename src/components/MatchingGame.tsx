import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

interface MatchingGameProps {
  pairs: MatchingPair[];
  onComplete?: () => void;
}

export function MatchingGame({ pairs, onComplete }: MatchingGameProps) {
  const [leftItems, setLeftItems] = useState<{id: string, text: string}[]>([]);
  const [rightItems, setRightItems] = useState<{id: string, text: string}[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]); // array of pair ids

  // Shuffle arrays on mount
  useEffect(() => {
    const l = pairs.map(p => ({ id: p.id, text: p.left }));
    const r = pairs.map(p => ({ id: p.id, text: p.right }));
    
    // Sort randomly
    setLeftItems(l.sort(() => Math.random() - 0.5));
    setRightItems(r.sort(() => Math.random() - 0.5));
  }, [pairs]);

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      // Check match
      if (selectedLeft === selectedRight) {
        setMatchedPairs(prev => [...prev, selectedLeft]);
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
        audio.play().catch(() => {});
      } else {
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3');
        audio.play().catch(() => {});
      }
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 500);
    }
  }, [selectedLeft, selectedRight]);

  useEffect(() => {
    if (matchedPairs.length === pairs.length && pairs.length > 0) {
      if (onComplete) {
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }
  }, [matchedPairs, pairs.length, onComplete]);

  return (
    <div className="flex w-full justify-between items-center bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-4xl mx-auto gap-12">
      {/* Left Column */}
      <div className="flex flex-col space-y-4 w-1/2">
        {leftItems.map((item) => {
          const isMatched = matchedPairs.includes(item.id);
          const isSelected = selectedLeft === item.id;
          return (
            <motion.button
              key={`target-${item.id}`}
              onClick={() => !isMatched && setSelectedLeft(item.id)}
              disabled={isMatched}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: isSelected ? 1.05 : 1, 
                opacity: 1,
                backgroundColor: isMatched ? '#22c55e' : isSelected ? '#a855f7' : '#ffffff',
                color: isMatched || isSelected ? '#ffffff' : '#1e293b'
              }}
              whileHover={!isMatched ? { scale: 1.05 } : {}}
              className="py-4 px-6 rounded-2xl shadow-lg border-4 border-transparent flex items-center justify-center text-3xl font-black cursor-pointer disabled:cursor-default"
            >
              {item.text}
            </motion.button>
          )
        })}
      </div>

      {/* Right Column */}
      <div className="flex flex-col space-y-4 w-1/2">
        {rightItems.map((item) => {
          const isMatched = matchedPairs.includes(item.id);
          const isSelected = selectedRight === item.id;
          return (
            <motion.button
              key={`match-${item.id}`}
              onClick={() => !isMatched && setSelectedRight(item.id)}
              disabled={isMatched}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: isSelected ? 1.05 : 1, 
                opacity: 1,
                backgroundColor: isMatched ? '#22c55e' : isSelected ? '#a855f7' : '#ffffff',
                color: isMatched || isSelected ? '#ffffff' : '#1e293b'
              }}
              whileHover={!isMatched ? { scale: 1.05 } : {}}
              className="py-4 px-6 rounded-2xl shadow-lg border-4 border-transparent flex items-center justify-center text-3xl font-black cursor-pointer disabled:cursor-default"
            >
              {item.text}
            </motion.button>
          )
        })}
      </div>
    </div>
  );
}
