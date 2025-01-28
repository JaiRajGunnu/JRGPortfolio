import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import MagicButton from "./MagicButton";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Aws } from '@lobehub/icons';
import GoogleCloudSvg from "../public/svgs/GoogleCloudSvg.svg";
import JavaSvg from "../public/svgs/JavaSvg.svg";
import ReactDOM from 'react-dom';

const Certifications = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-blue">endorsements</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Amazon Web Services"
          icon={<Aws.Color size={110} />}
          certificateUrl="/docs/Aws.pdf"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600   rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Google Cloud Services"
          icon={
            <Image
              src={GoogleCloudSvg}
              alt="Google Cloud Logo"
              width={100}
              height={100}
            />
          }
          certificateUrl="/docs/GCloud.pdf"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900  rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Java Full Stack Training"
          icon={
            <Image src={JavaSvg} alt="Java Logo" width={100} height={100} />
          }
          certificateUrl="/docs/Java.pdf"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName=" bg-emerald-800 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2} />
        </Card>
      </div>
    </section>
  );
};

export default Certifications;

// Define the ModalProps interface
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string;
  modalWidth?: string;
}

// Modal Component
const Modal = ({ isOpen, onClose, certificateUrl, modalWidth = 'max-w-2xl' }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
      <div className={`relative w-11/12 rounded-lg bg-white dark:bg-gray-900 p-8 md:p-8 overflow-y-auto max-h-[90vh] ${modalWidth}`}>
        {/* Close button with z-index to ensure it is on top */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none z-20">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-[15px]">
          <iframe
            src={certificateUrl}
            title="Certificate"
            className="w-full h-[70vh] border-none"
          />
        </div>

      </div>
    </div>,
    document.body
  );
};

const Card = ({
  title,
  icon,
  children,
  certificateUrl,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  certificateUrl: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[32rem] rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        position: "relative",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />
      {hovered && (
        <div
          className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-3xl"
          style={{
            zIndex: 10,
          }}
        />
      )}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
            style={{
              zIndex: 20,
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col z-20 px-[50%]">
        <div className="flex justify-center items-center h-full">{icon}</div>
        <h2
          className="dark:text-white text-center text-3xl
         relative z-30 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <div
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-30 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          <MagicButton
            title="View Certificate"
            icon={<FaExternalLinkAlt className="w-3 h-4 " />}
            position="right"
            handleClick={handleOpenModal}
          />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} certificateUrl={certificateUrl} modalWidth="max-w-4xl" />
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};