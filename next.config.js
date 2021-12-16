module.exports = {
  async rewrites() {
    return [
      /**
       * All paths redirect back to root.
       */
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
  swcLoader: true,
  swcMinify: true,
};
