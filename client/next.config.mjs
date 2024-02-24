
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Add the file-loader rule
      config.module.rules.push({
        test: /\.(mp3|wav|ogg)$/, // Include other audio formats if needed
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 10240, // Adjust limit as needed (in bytes)
            name: '[name].[ext]',
            outputPath: 'static/audio', // Customize output path
          },
        },
      });
    }

    return config;
  },
};

export default nextConfig;