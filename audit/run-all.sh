#!/usr/bin/env bash
set -e

echo "=========================================================="
echo "🎯 PARRAX SOLUTIONS - SUITE COMPLETA DE AUDITORÍA Y CARGA"
echo "=========================================================="

TARGET="${TARGET_URL:-http://localhost:3000}"
export TARGET_URL="$TARGET"

echo "Servidor Objetivo: $TARGET_URL"
echo ""

echo "▶️  [1/4] Ejecutando Prueba de Carga Normal (Load Test)..."
node audit/load-test.js

echo "▶️  [2/4] Ejecutando Prueba de Picos en /api/contact (Spike Test)..."
node audit/spike-test.js

echo "▶️  [3/4] Ejecutando Prueba de Estrés (Stress Test)..."
node audit/stress-test.js

echo "▶️  [4/4] Ejecutando Prueba de Resistencia (Endurance Test)..."
node audit/endurance-test.js

echo "=========================================================="
echo "✅ SUITE DE PRUEBAS FINALIZADA CON ÉXITO"
echo "=========================================================="
