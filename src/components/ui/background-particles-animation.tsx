import React from "react";

export function BackgroundParticlesAnimation() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,200,0.8)_0%,rgba(0,255,200,0)_50%)] mix-blend-soft-light animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.8)_0%,rgba(0,150,255,0)_50%)] mix-blend-soft-light animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,150,0.8)_0%,rgba(0,200,150,0)_50%)] mix-blend-soft-light animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="absolute w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl animate-float" style={{ top: '10%', left: '10%', animationDuration: '15s' }}></div>
      <div className="absolute w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl animate-float" style={{ top: '60%', right: '10%', animationDuration: '20s', animationDelay: '2s' }}></div>
      <div className="absolute w-40 h-40 rounded-full bg-teal-500/20 blur-3xl animate-float" style={{ bottom: '10%', left: '30%', animationDuration: '12s', animationDelay: '4s' }}></div>
      
      <div className="absolute w-24 h-24 rounded-full bg-emerald-300/40 blur-2xl animate-float-particle" style={{ top: '20%', left: '20%', animationDuration: '8s' }}></div>
      <div className="absolute w-32 h-32 rounded-full bg-cyan-300/40 blur-2xl animate-float-particle" style={{ top: '40%', right: '30%', animationDuration: '10s', animationDelay: '1s' }}></div>
      <div className="absolute w-20 h-20 rounded-full bg-teal-300/40 blur-2xl animate-float-particle" style={{ bottom: '30%', left: '40%', animationDuration: '9s', animationDelay: '2s' }}></div>
      <div className="absolute w-28 h-28 rounded-full bg-emerald-300/40 blur-2xl animate-float-particle" style={{ top: '60%', right: '20%', animationDuration: '11s', animationDelay: '3s' }}></div>
      <div className="absolute w-36 h-36 rounded-full bg-cyan-300/40 blur-2xl animate-float-particle" style={{ bottom: '20%', left: '60%', animationDuration: '7s', animationDelay: '4s' }}></div>
      
      <div className="absolute w-40 h-40 rounded-full bg-emerald-200/30 blur-3xl animate-float-particle" style={{ top: '30%', left: '50%', animationDuration: '13s', animationDelay: '1.5s' }}></div>
      <div className="absolute w-48 h-48 rounded-full bg-cyan-200/30 blur-3xl animate-float-particle" style={{ bottom: '40%', right: '40%', animationDuration: '16s', animationDelay: '2.5s' }}></div>
      
      <div className="absolute w-8 h-8 rounded-full bg-emerald-300/60 blur-xl animate-float-particle" style={{ top: '25%', left: '35%', animationDuration: '6s', animationDelay: '0.5s' }}></div>
      <div className="absolute w-6 h-6 rounded-full bg-cyan-300/60 blur-xl animate-float-particle" style={{ top: '45%', right: '25%', animationDuration: '5s', animationDelay: '1.5s' }}></div>
      <div className="absolute w-10 h-10 rounded-full bg-teal-300/60 blur-xl animate-float-particle" style={{ bottom: '35%', left: '45%', animationDuration: '7s', animationDelay: '2.5s' }}></div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, 15px) rotate(5deg);
          }
          50% {
            transform: translate(5px, -10px) rotate(-5deg);
          }
          75% {
            transform: translate(-10px, 5px) rotate(3deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        
        @keyframes float-particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translate(15px, -20px) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translate(5px, 15px) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translate(-20px, -5px) scale(1.05);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
        
        .animate-float-particle {
          animation: float-particle infinite ease-in-out;
        }
      `}</style>
    </>
  );
} 