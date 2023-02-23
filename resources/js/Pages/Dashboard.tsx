import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import '../../.././resources/css/authnticated.css';


export default function Dashboard(props: any) {
    return (
        <Authenticated
            auth={props.auth}
            header={
          null
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-gray-100 border-grey-200 text-title">
                            ホーム
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                            ホーム
                            
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
