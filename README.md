## Next Base

## Overview

| Item            | Name                                                     |
| --------------- | -------------------------------------------------------- |
| Package Manager | npm: npm install -> npm build -> npm start - recommended |
| Framework       | NextJS                                                   |
| State Manager   | Redux                                                    |
| Styling         | Tailwind                                                 |
| Localization    | next-intl                                                |

## ENV

| Env                              | Description                                                                         |
| -------------------------------- | ----------------------------------------------------------------------------------- |
| DOCKER_APP_NAME                  | Docker application name                                                             |
| APP_ENV                          | Current environment (development, staging, production, etc.)                        |
| HOST_PORT                        | External port used when running the app via Docker                                  |
| HOST_PORT                        | Internal port on which the app runs (either locally or inside the Docker container) |
| NEXT_PUBLIC_BACKEND_URL          | Base URL of the backend API used by the frontend                                    |
| NEXT_PUBLIC_BACKEND_IMAGE_DOMAIN | Domain where images are hosted, allowed for Next.js optimization                    |
| NEXT_PUBLIC_MICROSOFT_CLARITY    | Microsoft Clarity tracking ID (used for user behavior analytics)                    |
