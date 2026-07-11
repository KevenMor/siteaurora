#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/hostinger-public"
HTACCESS="$ROOT/deploy/.htaccess"

build_for_hostinger() {
  local name="$1"
  local project_dir="$2"

  echo ""
  echo "→ Build ${name}..."
  cd "$project_dir"
  VITE_BASE_PATH="/" npm run build

  rm -rf "$OUT/$name"
  mkdir -p "$OUT/$name"
  cp -R dist/. "$OUT/$name/"
  cp "$HTACCESS" "$OUT/$name/.htaccess"
}

cd "$ROOT"
rm -rf "$OUT"
mkdir -p "$OUT"

build_for_hostinger "editorial" "$ROOT"
build_for_hostinger "classica" "$ROOT/classica"

echo ""
echo "Pronto: $OUT/"
echo "  editorial/  → envie o conteúdo para public_html/ do subdomínio editorial"
echo "  classica/   → envie o conteúdo para public_html/ do subdomínio clássico"
echo ""
echo "Cada pasta deve conter: index.html + assets/ + .htaccess"
