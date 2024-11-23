#!/bin/sh

if [ ! -d node_modules ]; then
    echo "Instalando dependências do projeto..."
    npm install
fi

exec npm run dev -- --host
