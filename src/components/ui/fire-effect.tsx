import { cn } from "@/lib/utils";

interface FireEffectProps {
  className?: string;
}

export function FireEffect({ className }: FireEffectProps) {
  return (
    <div className={cn("fire-effect", className)}>
      <div className="fire-container">
        <div className="fire-center">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-particles">
          <div className="particle1"></div>
          <div className="particle2"></div>
          <div className="particle3"></div>
        </div>
      </div>
      <style jsx>{`
        .fire-effect {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: 0.8;
          pointer-events: none;
        }

        .fire-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .fire-center {
          position: absolute;
          top: 40%;
          left: 60%;
          transform: translate(-50%, -50%);
        }

        .main-fire {
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle at center, #ff6b00, transparent 70%);
          border-radius: 50%;
          animation: flicker 3s infinite;
        }

        .particle-fire {
          position: absolute;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle at center, #ff4400, transparent 70%);
          border-radius: 50%;
          animation: flicker 2s infinite;
        }

        .fire-particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle1, .particle2, .particle3 {
          position: absolute;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle at center, #ff8800, transparent 70%);
          border-radius: 50%;
        }

        .particle1 {
          top: 20%;
          left: 20%;
          animation: float 4s infinite;
        }

        .particle2 {
          top: 60%;
          left: 70%;
          animation: float 3s infinite;
        }

        .particle3 {
          top: 40%;
          left: 40%;
          animation: float 5s infinite;
        }

        @keyframes flicker {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
} 