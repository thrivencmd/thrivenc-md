// Proxy server to run Next.js
import { execSync } from 'child_process';

console.log('Starting Next.js development server on port 5000...');

try {
  // Run Next.js with the required host configuration and port
  execSync('npx next dev --port 5000 --hostname 0.0.0.0', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
} catch (error) {
  console.error('Error starting Next.js server:', error);
  process.exit(1);
}