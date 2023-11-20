echo "Installing rustup..."
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

echo "Setup rustup..."
echo "$HOME"

source "$HOME/.cargo/env"

echo "Installing wasm-pack..."
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh -s -- -y

echo "Run ls -l /vercel/.cargo/bin"
ls -l /vercel/.cargo/bin

echo "Run ls -l /root/.cargo/bin"
ls -l /root/.cargo/bin