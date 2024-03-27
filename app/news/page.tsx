import fs from "fs";
import path from "path";

import news_info from "../../public/news/news_info.json";
import Link from "next/link";

export default async function Page() {
    const data = news_info.data;

    return (
        <div className="container">
            <div className="flex flex-col items-center">
                <div>
                    <p className="text-3xl p-5">お知らせ詳細</p>
                </div>
                <div className="w-full sm:w-2/3">
                    {data.map((doc, index) => (
                        <Link
                            key={index}
                            href={{
                                pathname: `/news/${doc.pdf}`,
                                query: {
                                    title: doc.title,
                                    date: doc.date,
                                    pdf: doc.pdf,
                                },
                            }}
                        >
                            <div key={doc.pdf} className="p-5 border-y">
                                <p className="text-gray-500">{doc.date}</p>
                                <div className="flex items-center justify-center">
                                    <h1 className="text-2xl font-bold text-bluenormal">
                                        {doc.title}
                                    </h1>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
