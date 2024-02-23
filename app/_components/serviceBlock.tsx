import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

type ServiceBlockProps = {
    disabled: boolean;
    serviceName: string;
    url: string;
    icon: React.ReactElement;
    textContent: string[]; // テキストコンテンツを配列として受け取る
};

const ServiceBlock: React.FC<ServiceBlockProps> = ({
    disabled,
    serviceName,
    url,
    icon,
    textContent,
}) => {
    return (
        <Link
            href={url}
            className={`group bg-white transition duration-300 hover:bg-bluenormal rounded-xl p-3 ${
                disabled ? "pointer-events-none" : "cursor-pointer"
            }`}
        >
            <div className="flex flex-col p-1">
                <div className="flex flex-row items-center justify-between pb-3">
                    <div className="flex flex-row items-center">
                        {React.cloneElement(icon, {
                            className:
                                "h-5 w-5 mr-2 text-bluenormal transition duration-300 group-hover:text-white",
                        })}
                        <span className="font-bold text-xl transition duration-300 group-hover:text-white">
                            {serviceName}
                        </span>{" "}
                    </div>
                    {/* 矢印 */}
                    <div className="flex flex-row items-center">
                        <ArrowRightCircleIcon className="h-5 w-5 ml-2 text-bluenormal transition duration-300 group-hover:text-white group-hover:translate-x-2" />
                    </div>
                </div>
                {textContent.map((text, index) => (
                    <span
                        key={index}
                        className="text-xs md:text-base text-slate-500 transition duration-300 group-hover:text-white"
                    >
                        {text}
                    </span> // <p>を<span>に変更してスタイルを維持
                ))}
            </div>
        </Link>
    );
};

export default ServiceBlock;