import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true, 
  },
  images: {
    domains: ['i.scdn.co'],
  },
};

export default withMDX(nextConfig);
