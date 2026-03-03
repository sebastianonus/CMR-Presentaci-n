import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export function Slide09Calculator() {
  const [volume, setVolume] = useState(25000); // Toneladas
  const [value, setValue] = useState(45000000); // Euros

  // Cálculos basados en los inputs
  const mermaReduction = (value * 0.01).toFixed(0); // 1% del valor
  const claimsReduction = (value * 0.003).toFixed(0); // 0.3% del valor
  const otifImprovement = (value * 0.005).toFixed(0); // 0.5% del valor

  const totalImpact = (
    parseFloat(mermaReduction) +
    parseFloat(claimsReduction) +
    parseFloat(otifImprovement)
  ).toFixed(0);

  const formatCurrency = (num: number | string) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(typeof num === 'string' ? parseFloat(num) : num);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('es-ES').format(num);
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Impacto Económico Personalizado CMR Group
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        {/* Panel de Inputs */}
        <div className="bg-gradient-to-br from-[rgb(var(--onus-dark-blue-rgb))]/5 to-transparent p-8 rounded-2xl border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-[rgb(var(--onus-dark-blue-rgb))]" />
            <h2 className="text-2xl text-[rgb(var(--onus-dark-blue-rgb))] font-semibold">Datos de tu Operación</h2>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium mb-3">
                Volumen Anual (Toneladas)
              </label>
              <input
                type="range"
                min="5000"
                max="100000"
                step="1000"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-[rgb(var(--onus-turquoise-rgb))]"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-muted-foreground">5,000</span>
                <span className="text-2xl font-bold text-[rgb(var(--onus-turquoise-rgb))]">
                  {formatNumber(volume)} Tn
                </span>
                <span className="text-sm text-muted-foreground">100,000</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">
                Valor Total de Mercancía (€)
              </label>
              <input
                type="range"
                min="1000000"
                max="200000000"
                step="1000000"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-[rgb(var(--onus-turquoise-rgb))]"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-muted-foreground">1M</span>
                <span className="text-2xl font-bold text-[rgb(var(--onus-turquoise-rgb))]">
                  {formatCurrency(value)}
                </span>
                <span className="text-sm text-muted-foreground">200M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Panel de Resultados */}
        <div className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/10 to-transparent p-8 rounded-2xl border-2 border-[rgb(var(--onus-turquoise-rgb))]/30">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
            <h2 className="text-2xl text-[rgb(var(--onus-turquoise-rgb))] font-semibold">Ahorros Proyectados</h2>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-white/50 dark:bg-black/20 p-5 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Reducción de Merma (1%)</span>
                <span className="text-xl font-bold text-[rgb(var(--onus-turquoise-rgb))]">
                  {formatCurrency(mermaReduction)}
                </span>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-black/20 p-5 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Menos Reclamaciones (0.3%)</span>
                <span className="text-xl font-bold text-[rgb(var(--onus-turquoise-rgb))]">
                  {formatCurrency(claimsReduction)}
                </span>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-black/20 p-5 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Mejora OTIF y Costes (0.5%)</span>
                <span className="text-xl font-bold text-[rgb(var(--onus-turquoise-rgb))]">
                  {formatCurrency(otifImprovement)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[rgb(var(--onus-dark-blue-rgb))] p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
              <h3 className="text-white text-xl font-semibold">Impacto Total Anual</h3>
            </div>
            <p className="text-[rgb(var(--onus-turquoise-rgb))] text-5xl font-bold text-center">
              {formatCurrency(totalImpact)}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        * Cálculos basados en porcentajes conservadores aplicados a tus datos
      </div>
    </div>
  );
}
