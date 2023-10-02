/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    +config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/pdf/", // Specify the output directory for PDF files
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
