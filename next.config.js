/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
      ignoreBuildErrors:true,
    },
  
    experimental: {
      //serverActions: true,
      //taint: true,
      serverActions:{
         bodySizeLimit:"4MB",
        serverComponentsExternalPackages: ["mongoose"],
      }
    
      
    },
     
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
  images:{
      remotePatterns:[
        {
          protocol: 'https',
          hostname: "file:///",
         
        },
        {
          protocol: 'https',
          hostname: 'utfs.io',
         
        },
          {
              protocol: "https",
              hostname: "img.clerk.com",
            },
            {
              protocol: "https",
              hostname: "images.clerk.dev",
            },
            {
              protocol: "https",
              hostname: "uploadthing.com",
            },
            {
              protocol: "https",
              hostname: "placehold.co",
            },
            {
              protocol:"https", 
              hostname:"firebasestorage.googleapis.com"
            }
      ]
  }

  
}

module.exports = nextConfig
