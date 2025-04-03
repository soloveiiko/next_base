import path from "path";
import { fileURLToPath } from "url";

import * as dotenv from "dotenv";
import createNextIntlPlugin from "next-intl/plugin";

const { PUBLIC_API_URL } = dotenv.config({
  path: `./.env.${process.env.APP_ENV}`,
}).parsed;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    PUBLIC_API_URL,
  },
};

export default withNextIntl(nextConfig);
