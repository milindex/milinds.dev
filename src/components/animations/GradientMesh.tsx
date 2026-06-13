'use client';

function GradientMesh() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-[25%] -top-[25%] h-[150%] w-[150%] animate-gradient-drift rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(600px circle at 30% 40%, rgba(253, 87, 53, 0.12), transparent 50%)',
        }}
      />
      <div
        className="absolute -bottom-[25%] -right-[25%] h-[150%] w-[150%] animate-gradient-drift-reverse rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(400px circle at 70% 60%, rgba(253, 87, 53, 0.06), transparent 50%)',
        }}
      />
      <style>{`
        @keyframes gradient-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(5%, 5%) scale(1.1); }
          66% { transform: translate(-5%, -3%) scale(0.9); }
        }
        @keyframes gradient-drift-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-5%, -3%) scale(0.9); }
          66% { transform: translate(5%, 5%) scale(1.1); }
        }
        .animate-gradient-drift { animation: gradient-drift 25s ease-in-out infinite; }
        .animate-gradient-drift-reverse { animation: gradient-drift-reverse 25s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default GradientMesh;
