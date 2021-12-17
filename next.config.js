module.exports = {
  async rewrites() {
    return {
      /**
       * Map /home page to /.
       */
      beforeFiles: [
        {
          source: "/home",
          destination: "/",
        },
      ],
    };
  },
  devServer: {
    writeToDisk: true,
  },
  swcLoader: true,
  swcMinify: true,
};
