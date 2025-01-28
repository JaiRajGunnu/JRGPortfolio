"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
    titleComponent,
    children,
}: {
    titleComponent: string | React.ReactNode;
    children: React.ReactNode;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 20]); // Rotate X on scroll
    const rotateY = useTransform(scrollYProgress, [0, 1], [0, 0]); // Rotate Y on scroll start
    const scale = useTransform(scrollYProgress, [0, 1], [1.05, isMobile ? 0.8 : 0.9]);
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="flex items-center justify-center relative" ref={containerRef}>
            <div className="md:pt-20 w-[800px] relative"
                style={{
                    perspective: "1000px",
                    marginTop: -50,
                    marginBottom: 30,
                }}
            >
                <Card rotateX={rotateX} rotateY={rotateY} translate={translate} scale={scale}>
                    {children}
                </Card>
            </div>
        </div>
    );
};

export const Card = ({
    rotateX,
    rotateY,
    scale,
    translate,
    children,
}: {
    rotateX: MotionValue<number>;
    rotateY: MotionValue<number>;
    scale: MotionValue<number>;
    translate: MotionValue<number>;
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotateX,
                rotateY: rotateY,
                scale,
                translateY: translate,
                transformStyle: "preserve-3d",
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className=""
        >
            <div className="">
                {children}
            </div>
        </motion.div>
    );
};