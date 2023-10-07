import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import BeforeLogin from './components/BeforeLogin';
import BeforeDashboard from './components/BeforeDashboard';
import AfterDashboard from './components/AfterDashboard';
import Projects from './collections/Projects';
import Websites from './collections/Websites';
import Posts from './collections/Posts';
import Pages from './collections/Pages';
import Media from './collections/Media';
import Themes from './collections/Themes';
import Categories from './collections/Categories';
import Dashboard from './components/Dashboard';
import { visualEditor } from 'payload-visual-editor';
import 'payload-visual-editor/dist/styles.scss';
import React from 'react';

const serverURL = process.env.PAYLOAD_PUBLIC_SERVER_URL;

export default buildConfig({
  serverURL: (serverURL == 'https://') ? 'http://127.0.0.1:9000' : serverURL,
  admin: {
    user: Users.slug,
    components: {
      views: {
        Dashboard,
      },
      beforeDashboard: [BeforeDashboard],
      afterDashboard: [AfterDashboard],
    },
  },
  collections: [Users, Categories, Projects, Themes, Websites, Posts, Pages, Media],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  },
  plugins: [
    visualEditor({
      previewUrl: () => `http://localhost:3001/pages/preview`,
      collections: {
        posts: {
          previewUrl: () => `http://www.google.com`
        },
      },
    }),
  ],
  cors: "*",
})