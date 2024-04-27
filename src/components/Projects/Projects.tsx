import { FC } from 'react';

import { Badge } from './Badge';
import { Project } from './Project';

export const Projects: FC = () => (
  <div className='relative flex flex-col w-full py-4 items-center justify-start xl:py-16 my-4'>
    <h3 className='h3 text-gray-50 font-extrabold mb-8 lg:text-3xl xl:text-5xl xl:mb-32'>
      Projects
    </h3>
    <div className='grid grid-cols-1 gap-4 justify-items-center items-center md:gap-16 xl:gap-32'>
      <Project
        title='Polygona'
        description="I'm the proud creator and maintainer of Polygona, a 3D customization tool for the web. It allows 3D artists to upload their models and create a customizable experience for the end user. Being the only developer, I've built the entire platform from scratch, including the backend, frontend, 3D viewer and cloud infrastructure."
        image='/images/polygona.png'
        alt='housecure'
        url='https://polygona.io'
        badges={
          <div className='flex flex-wrap gap-2'>
            <Badge key='typescript' name='Typescript' className='bg-blue-700' />
            <Badge key='next.js' name='Next.js' className='bg-black' />
            <Badge key='react' name='React.js' className='bg-blue-500' />
            <Badge key='three.js' name='Three.js' className='bg-blue-300' />
            <Badge key='graphql' name='GraphQL' className='bg-pink-500' />
            <Badge key='node.js' name='Node.js' className='bg-green-500' />
            <Badge key='prisma' name='Prisma' className='bg-blue-900' />
            <Badge key='postgres' name='Postgres' className='bg-blue-800' />
            <Badge key='python' name='Python' className='bg-yellow-500' />
            <Badge key='docker' name='Docker' className='bg-blue-400' />
            <Badge
              key='digitalocean'
              name='Digital Ocean'
              className='bg-blue-300'
            />
          </div>
        }
      />
      <Project
        title='Housecure'
        description="Housecure helps people during the process of buying/selling a house. I joined the team at the very beginning as a full-stack developer and helped build the platform from scratch. I've worked on the frontend, backend, and cloud infrastructure."
        image='/images/housecure-cover.png'
        alt='housecure'
        url='https://housecure.co.uk'
        reverse
        badges={
          <div className='flex flex-wrap gap-2'>
            <Badge key='typescript' name='Typescript' className='bg-blue-700' />
            <Badge key='next.js' name='Next.js' className='bg-black' />
            <Badge key='react' name='React.js' className='bg-blue-500' />
            <Badge key='graphql' name='GraphQL' className='bg-pink-500' />
            <Badge key='node.js' name='Node.js' className='bg-green-500' />
            <Badge key='prisma' name='Prisma' className='bg-blue-900' />
            <Badge key='postgres' name='Postgres' className='bg-blue-800' />
            <Badge key='docker' name='Docker' className='bg-blue-400' />
            <Badge
              key='gcp'
              name='Google Cloud Platform'
              className='bg-yellow-500'
            />
          </div>
        }
      />
      <Project
        title='Views For Change'
        description='A platform allowing brands to run impact driven campaigns that automatically donates to charities and engages with the users. I worked on this project as a full-stack developer.'
        image='/images/vfc.png'
        alt='housecure'
        url='https://www.facebook.com/viewsforchange'
        badges={
          <div className='flex flex-wrap gap-2'>
            <Badge key='typescript' name='Typescript' className='bg-blue-700' />
            <Badge key='next.js' name='Next.js' className='bg-black' />
            <Badge key='react' name='React.js' className='bg-blue-500' />
            <Badge key='graphql' name='GraphQL' className='bg-pink-500' />
            <Badge key='node.js' name='Node.js' className='bg-green-500' />
            <Badge key='typeorm' name='TypeORM' className='bg-blue-900' />
            <Badge key='postgres' name='Postgres' className='bg-blue-800' />
            <Badge key='docker' name='Docker' className='bg-blue-400' />
            <Badge
              key='gcp'
              name='Google Cloud Platform'
              className='bg-yellow-500'
            />
          </div>
        }
      />
      <Project
        title='AllPlants'
        description='Allplants is a plant-based meal delivery service. I worked on this project mainly as a frontend developer, helping to build the website and improve the user experience, specifically on the checkout flow.'
        image='/images/allplants.png'
        alt='housecure'
        url='https://allplants.com'
        reverse
        badges={
          <div className='flex flex-wrap gap-2'>
            <Badge key='typescript' name='Typescript' className='bg-blue-700' />
            <Badge key='next.js' name='Next.js' className='bg-black' />
            <Badge key='react' name='React.js' className='bg-blue-500' />
            <Badge
              key='styled-components'
              name='Styled Components'
              className='bg-pink-500'
            />
            <Badge key='graphql' name='GraphQL' className='bg-pink-500' />
          </div>
        }
      />
      <Project
        title='Doctorlink'
        description='Telemedicine application in the UK with integrations to the NHS. I mainly worked on this project as a frontend developer, helping creating a UI component library which was used across the platform along with the other platform features.'
        image='/images/doctorlink.png'
        alt='housecure'
        url='https://www.doctorlink.com'
        badges={
          <div className='flex flex-wrap gap-2'>
            <Badge key='typescript' name='Typescript' className='bg-blue-700' />
            <Badge key='react' name='React.js' className='bg-blue-500' />
            <Badge
              key='styled-components'
              name='Styled Components'
              className='bg-pink-500'
            />
            <Badge key='graphql' name='GraphQL' className='bg-pink-500' />
          </div>
        }
      />
    </div>
  </div>
);
