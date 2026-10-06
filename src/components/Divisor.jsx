import React from 'react';

// Divisor visual entre as seções: linha, disco de vinil e linha
export default function Divisor() {
  return (
    <div className="divisor" aria-hidden="true">
      <span className="divisor-disco"></span>
    </div>
  );
}