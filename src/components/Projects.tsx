import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedButton } from './AnimatedButton';
import { ScrollFade } from './ScrollFade';

const projects = [
  {
    id: 1,
    title: 'Kitchen Remodeling Landing Page',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1682888818589-404faaa4dbc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVtb2RlbGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NjMyNzQwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Bathroom Remodeling Website',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1625578324458-a106197ff141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2MzE3NTI2NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Gym Brand Landing Page',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1632077804406-188472f1a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzE4Nzc3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Ecommerce Dashboard',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1629963918958-1b62cfe3fe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMjcxMTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Laundry App UX/UI',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1750587289608-dbaeba3ea64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwYXBwJTIwbW9iaWxlfGVufDF8fHx8MTc2MzI3NDA3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    title: 'SaaS Analytics Dashboard',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzI3NDA3NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Projects() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFade direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Projects That Inspire</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A selection of recent work across various industries and design disciplines.
            </p>
          </div>
        </ScrollFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ScrollFade key={project.id} direction="up" delay={index * 0.1}>
              <Link
                to={`/projects/${project.id}`}
                className="group relative bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-lime-500 hover:shadow-xl transition-all h-full flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-700">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-lime-500 mb-2">{project.category}</div>
                  <h3 className="text-xl text-white mb-2 group-hover:text-lime-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                    <span className="text-sm">View Project</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-500 animate-icon-pulse" />
                  </div>
                </div>
              </Link>
            </ScrollFade>
          ))}
        </div>

        <ScrollFade direction="up" delay={0.3}>
          <div className="text-center">
            <AnimatedButton 
              text1="View All Projects" 
              text2="See Portfolio" 
              to="/projects"
              icon1={ArrowRight}
              icon2={Briefcase}
            />
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
