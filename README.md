# Auto Parts Store Project

This is a [Next.js](https://nextjs.org/) project for an auto parts store. The project allows users to browse, search, and manage auto parts, as well as handle user authentication and parts management.

## Getting Started

### Cloning the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/KQuiggins/NextJS_AutoOutlet.git
cd NextJS_AutoOutlet
```

### Installing Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### Setting Up Environment Variables

Create a `.env.local` file in the root directory of the project and add the following environment variables:

```env
MONGODB_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Replace the placeholder values with your actual environment variable values.

### Running the Development Server

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
