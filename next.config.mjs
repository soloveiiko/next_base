import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from "dotenv";

const { NEXT_IMAGE_DOMAIN, NEXT_PUBLIC_API_URL } = dotenv.config({
  path: "./.env",
}).parsed;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [NEXT_IMAGE_DOMAIN],
  },
  env: {
    NEXT_PUBLIC_API_URL,
  },
};

export default withNextIntl(nextConfig);