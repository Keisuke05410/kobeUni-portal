"use client";
import { useSearchParams } from "next/navigation";
import { findCampusById, findBuildingByKeyword } from "./utils";
import {
    BuildingSearchForm,
    BuildingSearchResultCard,
    GoogleMapIFrame,
} from "./components";
import { Suspense } from "react";

const PageComponent = () => {
    const searchParams = useSearchParams();
    const campusId = parseInt(searchParams.get("campusId") || "3");
    const keyword = searchParams.get("keyword") || "";

    const isFirstRendering = !searchParams.has("keyword");

    const building = findBuildingByKeyword(campusId, keyword);
    const campus = findCampusById(campusId);

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${building?.lat},${building?.lng}`;

    if (!campus) {
        throw Error("campusIdが登録されていません。");
    }

    return (
        <div className="container flex flex-col max-w-3xl items-center py-6 space-y-4 px-4">
            <BuildingSearchForm campusId={campusId} keyword={keyword} />
            {!isFirstRendering && (
                <BuildingSearchResultCard
                    campusName={campus.campusName}
                    mapImageUrl={campus.mapImageUrl}
                    buildingId={building?.buildingId}
                    buildingName={building?.buildingName}
                    buildingLayoutPdfUrl={building?.buildingLayoutPdfUrl}
                    googleMapsUrl={googleMapsUrl}
                />
            )}
            <GoogleMapIFrame
                lat={building ? building.lat : campus.lat}
                lng={building ? building.lng : campus.lng}
                q={building ? undefined : campus.campusName}
            />
        </div>
    );
};

export default function Page() {
    return (
        <Suspense>
            <PageComponent />
        </Suspense>
    );
}
