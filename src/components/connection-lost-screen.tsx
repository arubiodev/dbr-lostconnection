import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Spinner, Avatar, Card } from "@heroui/react";
import avatarImage from "./2.png";

export const ConnectionLostScreen: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(40 * 60); // 40 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <AnimatedBackground />
      </div>
      
      {/* Subtle flight animation */}
      <SubtleFlightAnimation />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Top section with DBR branding and avatar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-8"
        >
          {/* DBR text */}
          <motion.h1 
            className="text-7xl font-bold tracking-wider text-red-500"
            animate={{ 
              textShadow: [
                "0 0 8px rgba(239, 68, 68, 0.7)",
                "0 0 12px rgba(239, 68, 68, 0.9)",
                "0 0 8px rgba(239, 68, 68, 0.7)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            DBR
          </motion.h1>
          
          {/* Avatar container */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 0 3px rgba(239, 68, 68, 0.3)",
                  "0 0 0 4px rgba(239, 68, 68, 0.5)",
                  "0 0 0 3px rgba(239, 68, 68, 0.3)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <Card 
                className="bg-black/50 backdrop-blur-sm border-2 border-red-500/40 p-2"
                radius="lg"
                shadow="none"
              >
                <Avatar 
                  src={avatarImage}
                  className="w-28 h-28 md:w-32 md:h-32"
                  radius="lg"
                />
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Middle section with connection lost message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center mb-8"
        >
          {/* Alert icon and connection lost text combined */}
          <div className="flex flex-col items-center">
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="text-red-500 mb-4"
            >
              <Icon icon="lucide:wifi-off" width={70} height={70} />
            </motion.div>
            
            <motion.h2
              className="text-5xl font-bold tracking-tight text-white"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              CONNECTION LOST
            </motion.h2>
          </div>
        </motion.div>

        {/* Flight Status Section - Integrated into existing design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="text-center">
            {/* Flight route info in red theme */}
            <div className="flex items-center justify-center gap-4 mb-4 text-gray-300">
              <div className="text-center">
                <div className="text-xs text-gray-500 uppercase tracking-wider">From</div>
                <div className="font-bold text-white">Brisbane</div>
              </div>
              
              <motion.div
                animate={{ 
                  y: [0, -3, 0],
                  x: [0, 2, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-red-500"
              >
                <Icon icon="lucide:plane" width={20} height={20} />
              </motion.div>
              
              <div className="text-center">
                <div className="text-xs text-gray-500 uppercase tracking-wider">To</div>
                <div className="font-bold text-white">Sydney</div>
              </div>
            </div>
            
            {/* Arrival countdown matching existing style */}
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">DBR arrives in</div>
              <motion.div 
                className="text-4xl font-bold text-red-500"
                animate={{ 
                  textShadow: [
                    "0 0 8px rgba(239, 68, 68, 0.7)",
                    "0 0 12px rgba(239, 68, 68, 0.9)",
                    "0 0 8px rgba(239, 68, 68, 0.7)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              >
                {formatTime(timeRemaining)}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom section with reconnect message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {/* Attempting to reconnect message */}
          <div className="flex items-center gap-3 text-gray-400">
            <Spinner size="sm" color="danger" />
            <p className="text-lg">Attempting to reconnect...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Animated background component with multiple moving elements
const AnimatedBackground: React.FC = () => {
  // Generate random positions for the grid elements
  const gridElements = React.useMemo(() => {
    return Array.from({ length: 40 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
      duration: Math.random() * 20 + 30,
      delay: Math.random() * 10
    }));
  }, []);

  return (
    <>
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-red-900 to-black"
        animate={{ 
          background: [
            "linear-gradient(to bottom right, #7f1d1d, #000000)",
            "linear-gradient(to bottom right, #991b1b, #000000)",
            "linear-gradient(to bottom right, #7f1d1d, #000000)"
          ]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
      />
      
      {/* Animated noise pattern */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        {gridElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Animated lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={`line-${index}`}
            className="absolute h-px bg-red-500/20"
            style={{
              top: `${10 + index * 10}%`,
              left: 0,
              right: 0
            }}
            animate={{
              scaleX: [1, 1.05, 0.95, 1],
              opacity: [0.2, 0.3, 0.2],
              x: [0, 10, -10, 0]
            }}
            transition={{
              duration: 8,
              delay: index * 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Digital glitch effect */}
      <GlitchEffect />
    </>
  );
};

// Subtle Flight Animation Component - matches existing design
const SubtleFlightAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-5 opacity-30">
      {/* Subtle animated plane icons scattered in background */}
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={`plane-${index}`}
          className="absolute text-red-500/20"
          style={{
            left: `${20 + index * 300}px`,
            top: `${150 + index * 100}px`
          }}
          animate={{
            y: [0, -8, 0],
            x: [0, 6, 0],
            opacity: [0.1, 0.25, 0.1],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 6 + index * 1.5,
            repeat: Infinity,
            delay: index * 2,
            ease: "easeInOut"
          }}
        >
          <Icon icon="lucide:plane" width={24} height={24} />
        </motion.div>
      ))}
      
      {/* Subtle dotted lines suggesting flight paths */}
      {Array.from({ length: 2 }).map((_, index) => (
        <motion.div
          key={`path-${index}`}
          className="absolute h-px bg-red-500/10"
          style={{
            top: `${200 + index * 150}px`,
            left: '10%',
            right: '10%'
          }}
          animate={{
            scaleX: [0.8, 1.1, 0.8],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 6,
            delay: index * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Digital glitch effect component
const GlitchEffect: React.FC = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={`glitch-${index}`}
          className="absolute inset-0 bg-red-600 mix-blend-overlay"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.05, 0],
            x: [0, Math.random() * 10 - 5, 0],
            scaleX: [1, Math.random() * 0.1 + 1.01, 1]
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Horizontal glitch lines */}
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={`h-glitch-${index}`}
          className="absolute h-[1px] bg-white/30 left-0 right-0"
          style={{
            top: `${Math.random() * 100}%`
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            scaleX: [0, 1, 0],
            x: [0, Math.random() * 100 - 50, 0]
          }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatDelay: Math.random() * 8 + 5
          }}
        />
      ))}
    </>
  );
};