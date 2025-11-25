import "dragscroll";
import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { projects } from "../../data/projects";
import { HorizontalScroll } from "../../components/HorizontalScroll";
import { Technologies } from "./Technologies";
import { FullScreenImages } from "./FullScreen";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "./work.css";

export function Projects() {
  const containerRef = useRef();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);

  return (
    <section
      id="work"
      className="section border border-(--color-border-sec) bg-(--color-top) p-6 backdrop-blur-md md:container md:rounded-3xl"
    >
      <h2 className="work__title">Projects</h2>
      <div className="work__container scrollbar-hide dragscroll">
        {projects.map((project, index) => {
          return (
            <article
              className={`work__project work__project-${index + 1} container-shadow`}
              key={project.id}
            >
              <div className="work__img-wrapper">
                <img
                  className={`work__img work__img-${index + 1} mask-b-from-60% md:mask-none`}
                  loading="lazy"
                  src={project.thumbnail}
                  alt={project.name}
                />
              </div>
              <div className="work__project-details">
                <h3 className="work__project-subtitle">{project.name}</h3>
                <p
                  className="work__project-description"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <div className="work__project-dialog">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="btn-sec work__project-btn">
                        More Details
                      </button>
                    </DialogTrigger>
                    <DialogContent className="flex max-h-[95vh] flex-col gap-6 rounded-lg border-none bg-(--color-top)/70 p-3 text-(--color-text) backdrop-blur-lg sm:max-h-[90vh] sm:min-h-[90vh] md:max-h-[85vh] md:min-h-[85vh] md:max-w-[85vw] md:min-w-[85vw] lg:max-w-[60vw] lg:min-w-[60vw] 2xl:max-h-[80vh] 2xl:min-h-[80vh]">
                      <DialogHeader>
                        <DialogTitle className="text-left text-3xl text-(--color-heading)">
                          {project.name}
                        </DialogTitle>
                        <DialogDescription className="sr-only">
                          Project Details
                        </DialogDescription>
                        <Technologies technologies={project.technologies} />
                      </DialogHeader>
                      <div className="flex w-full flex-col gap-4 overflow-x-hidden overflow-y-auto scroll-smooth p-1 pb-10 text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                        <FullScreenImages
                          images={project.images}
                          name={project.name}
                          scrollRef={containerRef}
                          lightbox={(i, images) => {
                            setLightboxIndex(i);
                            setLightboxOpen(true);
                            setLightboxImages(images.map((src) => ({ src })));
                          }}
                        />
                        <p
                          dangerouslySetInnerHTML={{
                            __html: project.description,
                          }}
                        ></p>
                        <div>
                          <h3 className="text-base text-(--color-heading)">
                            Features
                          </h3>
                          <ul className="list-disc">
                            {project.features.map((feature) => {
                              return (
                                <li className="ml-4" key={feature}>
                                  {feature}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="flex flex-col">
                          <a
                            className="w-fit text-base text-blue-500 underline visited:text-[#551A8B]"
                            href={project.github}
                            target="_blank"
                          >
                            Github Repository
                          </a>
                          <a
                            className="w-fit text-base text-blue-500 underline visited:text-[#551A8B]"
                            href={project.website}
                            target="_blank"
                          >
                            {`Visit ${project.name}`}
                          </a>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </article>
          );
        })}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={lightboxImages}
          plugins={[Zoom]}
          animation={{ zoom: 0.3 }}
        />
      </div>
    </section>
  );
}
