import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Media from './collections/Media';
// import Clients from './collections/Clients';
import Projects from './collections/Projects';
import Invoices from './collections/Invoices';
import Websites from './collections/Websites';
import Pages from './collections/Pages';

const serverURL = process.env.PAYLOAD_PUBLIC_SERVER_URL;

export default buildConfig({
  serverURL: (serverURL == 'https://') ? 'http://127.0.0.1:9000' : serverURL,
  admin: {
    user: Users.slug,
  },
  collections: [Users, Projects, Invoices, Websites, Pages, Media],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  },
  cors: "*",
})