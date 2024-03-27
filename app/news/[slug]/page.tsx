"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { ToolbarProps } from "@react-pdf-viewer/default-layout";
import { ReactElement } from "react";
import { ToolbarSlot } from "@react-pdf-viewer/toolbar";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const renderToolbar = (Toolbar: (props: ToolbarProps) => ReactElement) => (
    <Toolbar>
        {(slots: ToolbarSlot) => {
            const {
                CurrentPageInput,
                Download,
                EnterFullScreen,
                GoToNextPage,
                GoToPreviousPage,
                NumberOfPages,
                Print,
                ShowSearchPopover,
                Zoom,
                ZoomIn,
                ZoomOut,
            } = slots;
            return (
                <div
                    style={{
                        alignItems: "center",
                        display: "flex",
                        width: "100%",
                    }}
                >
                    <div style={{ padding: "0px 2px" }}>
                        <ShowSearchPopover />
                    </div>
                    <div style={{ padding: "0px 2px" }}>
                        <ZoomOut />
                    </div>
                    <div style={{ padding: "0px 2px" }}>
                        <Zoom />
                    </div>
                    <div style={{ padding: "0px 2px" }}>
                        <ZoomIn />
                    </div>
                    <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
                        <EnterFullScreen />
                    </div>
                </div>
            );
        }}
    </Toolbar>
);

export default function Page(props: any) {
    const qs = props.searchParams;

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        renderToolbar,
    });

    return (
        <div className="container p-10">
            <div className="pb-5">
                <div className="border-b-2 pb-5">
                    <h1 className="text-3xl">{qs.title}</h1>
                    <h2 className="text-gray-500">{qs.date}</h2>
                </div>
            </div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
                <Viewer
                    fileUrl={`/news/pdfs/${qs.pdf}.pdf`}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </div>
    );
}
